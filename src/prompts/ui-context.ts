import { PlatformConfig } from '../core';
import { createContext } from 'preact';

export interface UIContextState {
    platformConfig: PlatformConfig;
}

export const UIContext = createContext<UIContextState | undefined>(undefined);
