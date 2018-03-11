/* SystemJs Module definition */
declare var Module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery {
  niceScroll(options?: {
    cursorcolor: string,
    cursorwidth: number,
    cursorborder: string
  }):any;
}