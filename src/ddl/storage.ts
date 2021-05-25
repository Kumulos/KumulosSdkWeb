import { set, get } from '../core/storage';
import { DDLBannerPromptConfig } from '../core';

export function persistDDLConfig(
    config: DDLBannerPromptConfig
): Promise<DDLBannerPromptConfig> {
    return set<DDLBannerPromptConfig>('ddlconfig', config);
}

export function getDDLConfig(
    config: DDLBannerPromptConfig
): Promise<DDLBannerPromptConfig> {
    return get<DDLBannerPromptConfig>('ddlconfig');
}
