import { PromptConfig } from '../core';

export function deferPromptActivation(
    prompt: PromptConfig,
    activateFn: (prompt: PromptConfig) => void
) {
    if (
        prompt.trigger.afterSeconds === undefined ||
        prompt.trigger.afterSeconds < 0
    ) {
        return false;
    }

    console.info(
        'Deferring prompt activation by ' + prompt.trigger.afterSeconds
    );

    setTimeout(activateFn, prompt.trigger.afterSeconds * 1000, prompt);

    return true;
}
