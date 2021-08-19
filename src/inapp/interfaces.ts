import { InAppTemplate } from './structs';

export type TemplateId = number;
export type DynamicContentTag = string;

export interface MessageButton {
    id: string;
    text: string;
}

export enum ListType {
    SENT = 1,
    SCHEDULED = 2,
    RECENT = 3,
    RECURRENCE = 4,
    DRAFT = 5,
    DRAFT_APPROVED = 6,
    DRAFT_CHANGES_REQUESTED = 7
}

export enum SourceType {
    UI = 1,
    API = 2
}

export enum TemplateType {
    Push = 'push',
    InApp = 'in-app'
}

export interface Template {
    id: TemplateId;
    appId: number;
    type: TemplateType;
    name: string;
    uid: string;
    dynamicContentTags: DynamicContentTag[];
}

export interface PushTemplate extends Template {
    title: string | null;
    message: string | null;
    data: object | null;
    isBackgroundData: boolean;
    url: string | null;
    iosConfig: {
        media?: {
            pictureUrl?: string;
        };
        category?: string;
    } | null;
    androidConfig: {
        pictureUrl?: string;
        highPriority?: boolean;
    } | null;
    webConfig: {
        media?: {
            pictureUrl?: string;
            iconUrl?: string;
        };
    } | null;
    buttonConfig: MessageButton[] | null;
    badge: {
        hasBadge: true;
        badgeType: number;
        badgeCount: string;
    } | null;
    // soundConfig: any; TODO - not currently setable via UI - ignored.
    // collapseId: string | null; TODO - not currently setable via UI - ignored.
}

export const PushTemplateKeysWithTags = [
    'title',
    'message',
    'url',
    'buttonConfig',
    'data'
];

export function isInAppTemplate(template: Template): template is InAppTemplate {
    return template.type === TemplateType.InApp;
}

export function isPushTemplate(template: Template): template is PushTemplate {
    return template.type === TemplateType.Push;
}

export function isSystemTemplate(template: Template): boolean {
    if (template.type !== TemplateType.InApp) {
        return false;
    }

    return (template as InAppTemplate).systemTemplateId !== null;
}
