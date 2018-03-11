export interface IMenuItem {
  childs?: Array<IMenuItem>;
  id: string;
  display?: string;
  icon?: string;
  state: 'active' | 'inactive';
  glyphIcon?: string;
  type: 'node'|'header'|'seperator' | 'main';
  link?: string;
  isLinkAbsolute?: boolean;
  routeParameters?: string;
  cssClass?: string;
}

