import { PlatformConfig } from '../core';
import { Channel } from '../core/channels';
export interface UIContextState {
    platformConfig: PlatformConfig;
    channelList: Channel[];
}
export declare const UIContext: import("preact").Context<UIContextState | undefined>;
