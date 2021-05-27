import { persistPromptReminder, getPromptReminder } from '../core/storage';

import {
    PromptUiActions,
    UiActionType,
    PromptConfig,
    PromptReminderDelayConfig,
    ReminderTimeUnit
} from '../core';

const REMINDER_TIME_UNIT_TO_MILLIS = {
    [ReminderTimeUnit.HOURS]: 1000 * 60 * 60,
    [ReminderTimeUnit.DAYS]: 1000 * 60 * 60 * 24
};

export function maybePersistReminder(prompt: PromptConfig) {
    const { uiActions } = prompt as PromptUiActions;
    console.log(uiActions);

    if (!uiActions) {
        return;
    }

    const { type } = uiActions.decline;

    switch (type) {
        case UiActionType.REMIND:
            return persistPromptReminder(prompt.uuid, {
                declinedOn: Date.now()
            });
        case UiActionType.DECLINE:
            return persistPromptReminder(prompt.uuid, 'suppressed');
        default:
            return console.warn(
                `Unsupported decline action type ${type} supported for prompt ${prompt.uuid}, fall back to always show this prompt when declined`
            );
    }
}

export async function isPromptSuppressed(
    prompt: PromptConfig
): Promise<boolean> {
    const reminder = await getPromptReminder(prompt.uuid);

    console.log(prompt.uuid, reminder);

    if (!reminder) {
        return false;
    }

    if ('suppressed' === reminder) {
        return true;
    }

    const { uiActions } = prompt as PromptUiActions;

    if (uiActions.decline.type !== UiActionType.REMIND) {
        return false;
    }

    return !hasPromptReminderElapsed(
        reminder.declinedOn,
        uiActions.decline.delay
    );
}

export function hasPromptReminderElapsed(
    declinedOnMillis: number,
    delayConfig: PromptReminderDelayConfig
): boolean {
    return (
        Date.now() - declinedOnMillis >
        REMINDER_TIME_UNIT_TO_MILLIS[delayConfig.timeUnit] *
            delayConfig.duration
    );
}
