export class Utility {
    public static FunctionSerialize(func: Function): string {
        return func.toString();
    }

    public static FunctionDeserialize(funStr: string): Function {
        const func = new Function('return ' + funStr)();
        return func;
    }
}
