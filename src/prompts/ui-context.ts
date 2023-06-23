import { Channel } from '../core/channels';
import { PlatformConfig } from '../core';
import { createContext } from 'preact';

export interface UIContextState {
    platformConfig: PlatformConfig;
    channelList: Channel[];
}

export const UIContext = createContext<UIContextState | undefined>(undefined);
