import { InAppTemplate } from './structs';
export declare type TemplateId = number;
export declare type DynamicContentTag = string;
export interface MessageButton {
    id: string;
    text: string;
}
export declare enum ListType {
    SENT = 1,
    SCHEDULED = 2,
    RECENT = 3,
    RECURRENCE = 4,
    DRAFT = 5,
    DRAFT_APPROVED = 6,
    DRAFT_CHANGES_REQUESTED = 7
}
export declare enum SourceType {
    UI = 1,
    API = 2
}
export declare enum TemplateType {
    Push = "push",
    InApp = "in-app"
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
}
export declare const PushTemplateKeysWithTags: string[];
export declare function isInAppTemplate(template: Template): template is InAppTemplate;
export declare function isPushTemplate(template: Template): template is PushTemplate;
export declare function isSystemTemplate(template: Template): boolean;
