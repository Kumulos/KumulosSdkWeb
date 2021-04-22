import { createContext } from 'preact';
import { PlatformConfig } from '../core';

export const PlatformConfigContext = createContext<PlatformConfig | undefined>(
    undefined
);
