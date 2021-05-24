import { Context, PromptPosition } from '../core';
import { DDLConfig } from './config';

export async function fetchDDLConfig(ctx: Context): Promise<DDLConfig[]> {
    return Promise.resolve([
        {
            uuid: 'link1',
            labels: {
                heading: 'Creek Cycles App',
                body: '20% off all purchases with code 20Appy',
                action: '20% off'
            },
            colors: {
                bg: 'rgba(255,255,0,1)',
                fg: 'rgba(0,0,0,1)',
                actionBg: 'rgba(0,0,0,1)',
                actionFg: 'rgba(255,255,255,1)'
            },
            position: PromptPosition.TOP,
            canonicalLinkUrl: 'http://my.domain.lnk.click/myslug',
            imageUrl: '',
            data: {}
        }
    ]);
}
