import { Context, DdlPromptConfig, PlatformConfig } from '.';
export declare function loadPlatformConfig(ctx: Context): Promise<PlatformConfig>;
export declare function loadDdlConfig(ctx: Context): Promise<DdlPromptConfig[] | undefined>;
export declare function deleteDdlBannerConfigFromCache(bannerUuid: string): Promise<void>;
