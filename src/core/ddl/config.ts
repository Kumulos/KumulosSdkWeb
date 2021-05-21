export interface DDLColorConfig {
    bg: string;
    fg: string;
    actionBg: string;
    actionFg: string;
}

export interface DDLLabelConfig {
    heading: string;
    body: string;
    action: string;
}

export interface DDLConfig {
    labels: DDLLabelConfig;
    colors: DDLColorConfig;
    position: 'top' | 'bottom';
    imageUrl: string;
    storeUrl: string;
    data: any;
}
