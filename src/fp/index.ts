import { DDL_BASE_URL, Context, getInstallId } from "../core";
import { authedFetch } from "../core/utils";
import { FingerprintComponents } from "./types";

export async function sendClickRequest(ctx: Context, bannerUid: string, fingerprint: FingerprintComponents): Promise<Response> {
    const url = `${DDL_BASE_URL}/v1/banners/${bannerUid}/taps`;
    const webInstallId = await getInstallId();

    return await authedFetch(ctx, url, {
        method: 'POST',
        body: JSON.stringify({
            webInstallId,
            fingerprint
        })
    });
}
