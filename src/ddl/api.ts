import {
    Context,
    PromptPosition,
    SDKFeature,
    PromptTypeName,
    ReminderTimeUnit,
    UiActionType,
    DDLPromptConfig
} from '../core';
import { DDLBannerPromptConfig } from '../core';

export async function fetchDDLConfig(ctx: Context): Promise<DDLPromptConfig[]> {
    const config: DDLPromptConfig = {
        uuid: 'link1',
        type: PromptTypeName.BANNER_DL,
        labels: {
            bannerdl: {
                heading: 'Creek Cycles App',
                body: '20% off all purchases with code 20Appy',
                declineAction: '',
                acceptAction: '20% off'
            }
        },
        colors: {
            bannerdl: {
                bg: 'rgba(255,255,0,1)',
                fg: 'rgba(0,0,0,1)',
                declineActionFg: '',
                declineActionBg: '',
                acceptActionFg: 'rgba(255,255,255,1)',
                acceptActionBg: 'rgba(0,0,0,1)'
            }
        },
        position: PromptPosition.TOP,
        storeUrl:
            'https://play.google.com/store/apps/details?id=com.kumulos.companion',
        canonicalLinkUrl: 'https://reactnative.lnk.click/deep-1',
        imageUrl: '',
        trigger: {
            event: 'k.pageViewed'
        },
        uiActions: {
            decline: {
                type: UiActionType.REMIND,
                delay: {
                    duration: 1,
                    timeUnit: ReminderTimeUnit.DAYS
                }
            }
        }
    };

    return Promise.resolve([config]);
}
