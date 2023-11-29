import {
    Context,
    FilterValue,
    KumulosEvent,
    PromptConfig,
    PromptConfigs,
    PropFilter,
    SdkEvent
} from '../core';

import { escapeRegExp } from '../core/utils';
import { isPromptSuppressed } from './prompt-reminder';

function propIn(filterValue: FilterValue, propValue: any): boolean {
    if (!Array.isArray(filterValue)) {
        return false;
    }

    if (typeof propValue === 'string') {
        const tests = filterValue.map(v => {
            const pattern = `^${escapeRegExp(v).replace(/\\\*/g, '.*')}$`;
            return new RegExp(pattern, 'g');
        });
        const filterMatched = tests.reduce(
            (matched, matcher) => matched || matcher.test(String(propValue)),
            false
        );

        return filterMatched;
    } else if (typeof propValue === 'number') {
        return filterValue.indexOf(propValue as any) > -1;
    }

    return false;
}

function propEq(filterValue: FilterValue, propValue: any): boolean {
    return filterValue == propValue;
}

function propGt(filterValue: FilterValue, propValue: any): boolean {
    return propValue > filterValue;
}

function propGte(filterValue: FilterValue, propValue: any): boolean {
    return propValue >= filterValue;
}

function propLt(filterValue: FilterValue, propValue: any): boolean {
    return propValue < filterValue;
}

function propLte(filterValue: FilterValue, propValue: any): boolean {
    return propValue <= filterValue;
}

export function triggerMatched(
    prompt: PromptConfig,
    event: KumulosEvent
): boolean {
    const trigger = prompt.trigger;

    if (trigger.event !== event.type) {
        return false;
    }

    if (!trigger.filters?.length) {
        return true;
    }

    if (!event.data) {
        return false;
    }

    let allPropFiltersMatch = true;
    for (let i = 0; i < trigger.filters.length; ++i) {
        const [prop, op, filterTestValue] = trigger.filters[i] as PropFilter;

        const propValue = event.data[prop];

        let filterMatched = false;

        switch (op) {
            case 'in':
            case 'IN':
                filterMatched = propIn(filterTestValue, propValue);
                break;
            case '=':
                filterMatched = propEq(filterTestValue, propValue);
                break;
            case '>':
                filterMatched = propGt(filterTestValue, propValue);
                break;
            case '>=':
                filterMatched = propGte(filterTestValue, propValue);
                break;
            case '<':
                filterMatched = propLt(filterTestValue, propValue);
                break;
            case '<=':
                filterMatched = propLte(filterTestValue, propValue);
                break;
            default:
                console.warn(`Unknown filter operator: ${op}`);
        }

        allPropFiltersMatch = allPropFiltersMatch && filterMatched;
    }

    return allPropFiltersMatch;
}

export class PromptTriggerEventFilter<T extends PromptConfig> {
    private eventQueue: KumulosEvent[] = [];
    private eventReceivedCallback?: (e: SdkEvent) => void;

    constructor(ctx: Context, eventReceivedCallback?: (e: SdkEvent) => void) {
        this.eventReceivedCallback = eventReceivedCallback;
        ctx.subscribe('eventTracked', this.handleSdkEvent);
    }

    async filterPrompts(
        prompts: PromptConfigs<T>,
        filter: (prompt: T) => boolean = (_: T) => true
    ): Promise<T[]> {
        console.info('Evaluating prompt triggers');

        const matchedPrompts = [];
        for (let id in prompts) {
            const prompt = prompts[id];
            for (let i = 0; i < this.eventQueue.length; ++i) {
                const event = this.eventQueue[i];
                const promptSuppressed = await isPromptSuppressed(prompt);

                if (
                    !promptSuppressed &&
                    triggerMatched(prompt, event) &&
                    filter(prompt)
                ) {
                    matchedPrompts.push(prompt);
                }
            }
        }

        this.eventQueue = [];

        // Cast necessary to narrow the type from the constraint.
        // Seems the TS compiler isn't quite smart enough when handling
        // the 'T extends PromptConfig' constraint.
        return matchedPrompts as T[];
    }

    private handleSdkEvent = (e: SdkEvent) => {
        this.eventQueue.push(e.event);

        this.eventReceivedCallback?.(e);
    };
}
