/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery {
  niceScroll(options?: {
    cursorcolor: string,
    cursorwidth: number,
    cursorborder: string
  }): any;
}
