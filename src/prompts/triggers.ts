import { KumulosEvent, PromptConfig } from "../core";

import { escapeRegExp } from "../core/utils";

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
        const [prop, values] = trigger.filters[i];

        const eventProp = event.data[prop];

        const tests = values.map(v => new RegExp(escapeRegExp(v).replace('\\*', '.*'), 'g'));
        const filterMatched = tests.reduce((matched, matcher) => matched || matcher.test(String(eventProp)), false);

        allPropFiltersMatch = allPropFiltersMatch && filterMatched;
    }

    if (!allPropFiltersMatch) {
        // TODO handle declined/ask again after (need to merge some persistent state into memory)
        return false;
    }

    // TODO handle declined/ask again after (need to merge some persistent state into memory)

    return true;
}