import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  public static Serialize(func: Function): string {
    return func.toString();
  }

  public static Deserialize(funStr: string): Function {
    let func = new Function('return ' + funStr)();
    return func;
  }

}
