import { createContext } from 'preact';
import { PlatformConfig } from '../core';

export interface UIContextState {
    platformConfig: PlatformConfig;
}

export const UIContext = createContext<UIContextState | undefined>(undefined);
