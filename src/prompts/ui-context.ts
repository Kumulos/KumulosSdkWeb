import { createContext } from 'preact';
import { PlatformConfig } from '../core';
import { Channel } from '../core/channels';

export interface UIContextState {
    platformConfig: PlatformConfig;
    channelList: Channel[];
}

export const UndefinedStateUIContext = createContext<{} | undefined>(undefined);

export const UIContext = createContext<UIContextState | undefined>(undefined);
