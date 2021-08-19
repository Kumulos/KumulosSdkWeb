import { Template, TemplateId } from './interfaces';
import { MessageType } from '../core/push';

export interface FrameDimensions {
    width: number;
    height: number;
}

export interface Rgba {
    r: number;
    g: number;
    b: number;
    a: number;
}

export type BaseFontSizeMultiplier = number;

export interface PaddingAttrs {
    top: BaseFontSizeMultiplier;
    right: BaseFontSizeMultiplier;
    bottom: BaseFontSizeMultiplier;
    left: BaseFontSizeMultiplier;
}

export interface LayoutAttrs {
    padding: PaddingAttrs;
}

export interface MediaAttrs {
    source: {
        url: string;
    };
    width: number;
    height: number;
    aspect: number;
}

export interface ImageAttrs extends MediaAttrs {}

export interface VideoAttrs extends MediaAttrs {
    source: MediaAttrs['source'] & {
        thumbnailUrl: string;
    };
    autoplay: boolean;
    loop: boolean;
}

export enum LayerTypes {
    Color = 'color',
    Gradient = 'gradient',
    Image = 'image',
    Video = 'video'
}
export type LayerType = 'color' | 'gradient' | 'image' | 'video';

export interface ColorLayer {
    type: LayerTypes.Color;
    attrs: {
        value: Rgba;
    };
}

interface ImageLayer {
    type: LayerTypes.Image;
    attrs: ImageAttrs;
}

interface VideoLayer {
    type: LayerTypes.Video;
    attrs: VideoAttrs;
}

export interface GradientStop {
    color: Rgba;
    stopPct: number;
}

export interface GradientLayer {
    type: LayerTypes.Gradient;
    attrs: {
        type: 'linear';
        angleDeg: number;
        stops: GradientStop[];
    };
}

export type Layer = ColorLayer | ImageLayer | GradientLayer | VideoLayer;

export enum FrameTypes {
    Fullscreen = 'fullscreen',
    Inset = 'inset',
    Alert = 'alert'
}

export type FrameType = 'fullscreen' | 'inset' | 'alert';
export type FrameStackingGravity = 'centered' | 'top-down' | 'bottom-up';
export type FrameCloseButtonType = 'top-left' | 'top-right' | 'none';

interface Frame {
    type: FrameType;
    nodes: ContentNode[];
    backgroundLayers: Layer[];
    stackingGravity: FrameStackingGravity;
    closeButton: FrameCloseButtonType;
}

export enum ContentNodeType {
    Heading = 'heading',
    Subheading = 'subheading',
    Text = 'text',
    Image = 'image',
    Video = 'video',
    Button = 'button'
}

export type FontFace = string;
export type FontStack = FontFace[];
export type Font = {
    stack: FontStack;
    baseSizeMultiplier: BaseFontSizeMultiplier;
};

export type TextAlignment = 'left' | 'center' | 'right';
interface TextAttrs {
    alignment: TextAlignment;
    color: Rgba;
    font: Font;
}

export type TextMark = 'bold' | 'italic' | 'underline';
export type TextSpan = string | [string, TextMark[]];
export type TextValue = TextSpan[];

export interface HeadingNode {
    id: string;
    type: ContentNodeType.Heading;
    layout: LayoutAttrs;
    attrs: TextAttrs;
    text: TextValue;
}

export interface SubheadingNode {
    id: string;
    type: ContentNodeType.Subheading;
    layout: LayoutAttrs;
    attrs: TextAttrs;
    text: TextValue;
}

export interface TextNode {
    id: string;
    type: ContentNodeType.Text;
    layout: LayoutAttrs;
    attrs: TextAttrs;
    text: TextValue;
}

export interface ImageNode {
    id: string;
    type: ContentNodeType.Image;
    layout: LayoutAttrs;
    attrs: ImageAttrs;
}

export interface VideoNode {
    id: string;
    type: ContentNodeType.Video;
    layout: LayoutAttrs;
    attrs: VideoAttrs;
}

export type ContentNode =
    | HeadingNode
    | SubheadingNode
    | TextNode
    | ImageNode
    | VideoNode
    | ButtonNode;
export type TextContentNode = HeadingNode | SubheadingNode | TextNode;
export type TextContentNodeType = 'heading' | 'subheading' | 'text';

export interface InAppMessageContent {
    ver: 1;
    frame: Frame;
    defaults: {
        fontColor: Rgba;
        fonts: {
            heading: Font;
            subheading: Font;
            text: Font;
        };
    };
}

export interface InAppTemplate extends Template {
    systemTemplateId: TemplateId | null;
    content: InAppMessageContent;
    previewPath: string | null;
}

export interface ButtonNode {
    id: string;
    type: ContentNodeType.Button;
    layout: LayoutAttrs;
    attrs: ButtonAttrs;
    child: TextNode;
}

export enum ButtonAction {
    CloseMessage = 'closeMessage',
    TrackConversionEvent = 'trackConversionEvent',
    PromptPushPermission = 'promptPushPermission',
    SubscribeToChannel = 'subscribeToChannel',
    OpenUrl = 'openUrl',
    DeepLink = 'deepLink',
    RequestAppStoreRating = 'requestAppStoreRating'
}

export type ButtonActionType =
    | {
          type: ButtonAction;
          data: { [key: string]: any };
      }
    | {
          type:
              | ButtonAction.CloseMessage
              | ButtonAction.RequestAppStoreRating
              | ButtonAction.PromptPushPermission;
      };

export enum ButtonShape {
    Pill = 'pill',
    Square = 'square',
    Rounded = 'rounded'
}
export type ButtonShapeType = 'pill' | 'square' | 'rounded';

export enum ButtonElevation {
    Flat = 'flat',
    Raised = 'raised'
}
export type ButtonElevationType = 'flat' | 'raised';

export type ButtonWidthType = 'auto' | 'fullwidth';
export enum ButtonWidth {
    Auto = 'auto',
    Fullwidth = 'fullwidth'
}

export interface ButtonAttrs {
    style: {
        shape: ButtonShapeType;
        alignment: TextAlignment;
        widthType: ButtonWidthType;
        elevation: ButtonElevationType;
        backgroundLayer?: ColorLayer | GradientLayer;
        border?: {
            color: ColorLayer; // | GradientLayer;
            weight: BaseFontSizeMultiplier;
        };
    };
    actions: ButtonActionType[];
}

export interface InAppMessageContent {
    ver: 1;
    frame: Frame;
    defaults: {
        fontColor: Rgba;
        fonts: {
            heading: Font;
            subheading: Font;
            text: Font;
        };
    };
}

export interface InAppMessagePartForPreview {
    type: MessageType.INAPP;
    data: InAppMessageContent;
}
