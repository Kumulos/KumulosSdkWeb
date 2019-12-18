import { FilterValue, KumulosEvent, PromptConfig, PropFilter } from "../core";

import { escapeRegExp } from "../core/utils";

function propIn(values:FilterValue, propValue:any):boolean {
    if (!Array.isArray(values)) {
        return false;
    }

    if (typeof propValue === 'string') {
        const tests = values.map(v => new RegExp(escapeRegExp(v).replace('\\*', '.*'), 'g'));
        const filterMatched = tests.reduce((matched, matcher) => matched || matcher.test(String(propValue)), false);

        return filterMatched;
    } else if (typeof propValue === 'number') {
        return values.indexOf(propValue as any) > -1;
    }

    return false;
}

export function  triggerMatched(prompt: PromptConfig, event: KumulosEvent): boolean {
    const trigger = prompt.trigger;

    if (trigger.event !== event.type) {
        return false;
    }

    if (!trigger.filters?.length) {
        // TODO handle declined/ask again after (need to merge some persistent state into memory)
        return true;
    }

    if (!event.data) {
        return false;
    }

    let allPropFiltersMatch = true;
    for (let i = 0; i < trigger.filters.length; ++i) {
        const [prop, op, values] = trigger.filters[i] as PropFilter;

        const propValue = event.data[prop];

        let filterMatched = false;

        switch (op) {
            case 'in':
                filterMatched = propIn(values, propValue);
                break;
            default:
                console.warn(`Unknown filter operator: ${op}`);
        }

        allPropFiltersMatch = allPropFiltersMatch && filterMatched;
    }

    if (!allPropFiltersMatch) {
        // TODO handle declined/ask again after (need to merge some persistent state into memory)
        return false;
    }

    // TODO handle declined/ask again after (need to merge some persistent state into memory)

    return true;
}