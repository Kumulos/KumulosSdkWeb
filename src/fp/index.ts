import { Context, Service, getInstallId } from '../core';

import { FingerprintComponents } from './types';
import { performFetch } from '../core/utils';

export async function sendClickRequest(
    ctx: Context,
    bannerUid: string,
    fingerprint: FingerprintComponents
): Promise<Response> {
    const url = `${ctx.urlForService(
        Service.DDL
    )}/v1/banners/${bannerUid}/taps`;
    const webInstallId = await getInstallId();

    return performFetch(url, ctx.authHeader, {
        method: 'POST',
        body: JSON.stringify({
            webInstallId,
            fingerprint
        })
    });
}
