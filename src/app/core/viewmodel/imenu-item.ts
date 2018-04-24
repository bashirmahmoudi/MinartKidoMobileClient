export interface IMenuItem {
    id?: string;
    display?: string;
    icon?: string;
    state: 'active' | 'inactive';
    glyphIcon?: string;
    type: 'node' | 'header' | 'seperator' | 'main';
    link?: string;
    isLinkAbsolute?: boolean;
    routePrameters?: string;
    cssClass?: string;
    childs?: Array<IMenuItem>;
}
