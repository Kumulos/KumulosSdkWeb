import { set, get } from '../core/storage';
import { DDLConfig } from './config';

export function persistDDLConfig(config: DDLConfig): Promise<DDLConfig> {
    return set<DDLConfig>('ddlconfig', config);
}

export function getDDLConfig(config: DDLConfig): Promise<DDLConfig> {
    return get<DDLConfig>('ddlconfig');
}
