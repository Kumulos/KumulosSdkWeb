import { PlatformConfig } from '../core';
export interface UIContextState {
    platformConfig: PlatformConfig;
}
export declare const UIContext: import("preact").Context<UIContextState | undefined>;
