
class MappingUtility {
    static getMapping<TEntity>(entity: TEntity): {[jsonkey: string]: string} {
        // TODO: 
        return null;
    }
 
    static  getTableName<TEntity>(entity: TEntity): string {
        // TODO:
        return null;
    }
 
    static getKeys<TEntity>(type: {new (): TEntity} | string): Array<string> {
        // TODO:
        return null;
    }
 }
 
 export { MappingUtility } ;