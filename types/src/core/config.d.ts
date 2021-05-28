import { Context, PlatformConfig, DdlPromptConfig } from '.';
export declare function loadPlatformConfig(ctx: Context): Promise<PlatformConfig>;
export declare function loadDdlConfig(ctx: Context): Promise<DdlPromptConfig[] | undefined>;
export declare function loadDdlConfigTest(ctx: Context): Promise<DdlPromptConfig[]>;
