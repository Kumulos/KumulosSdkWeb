import { PromptConfig, PromptReminderDelayConfig } from '../core';
export declare function maybePersistReminder(prompt: PromptConfig): void | Promise<import("../core").PromptReminder>;
export declare function isPromptSuppressed(prompt: PromptConfig): Promise<boolean>;
export declare function hasPromptReminderElapsed(declinedOnMillis: number, delayConfig: PromptReminderDelayConfig): boolean;
