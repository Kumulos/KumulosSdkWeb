import { Context, DdlPromptConfig, PlatformConfigAndKeys } from '.';
export declare function loadPlatformConfig(ctx: Context): Promise<PlatformConfigAndKeys>;
export declare function loadDdlConfig(ctx: Context): Promise<DdlPromptConfig[] | undefined>;
export declare function deleteDdlBannerConfigFromCache(bannerUuid: string): Promise<void>;
