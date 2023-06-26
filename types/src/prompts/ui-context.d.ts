import { Channel } from '../core/channels';
import { PlatformConfig } from '../core';
export interface UIContextState {
    platformConfig: PlatformConfig;
    channelList: Channel[];
}
export declare const UIContext: import("preact").Context<UIContextState | undefined>;
