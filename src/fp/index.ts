import { DDL_BASE_URL, Context, getInstallId } from "../core";
import { authedFetch } from "../core/utils";

export async function sendClickRequest(ctx: Context, bannerUid: string, fingerprint: any[]): Promise<Response> {
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
