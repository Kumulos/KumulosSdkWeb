import { Context, PlatformConfig, DDLPromptConfig } from '.';
export declare function loadPlatformConfig(ctx: Context): Promise<PlatformConfig>;
export declare function loadDDLConfig(ctx: Context): Promise<DDLPromptConfig[] | undefined>;
export declare function loadDDLConfigTest(ctx: Context): Promise<DDLPromptConfig[]>;
