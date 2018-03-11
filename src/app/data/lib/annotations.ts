import 'reflect-metadata';
import { DbEntryState, IDbEntry } from './interfaces';

let metadatakeys = {
  Entry: 'EntryMetaDataKey',
  Key: 'KeyMetaDataKey',
  Required: 'RequiredMetaDataKey',
  MinLength: 'MinLengthMetaDataKey',
  MaxLength: 'MaxLengthMetaDataKey',
  Table: 'TableMetaDataKey',
  Column: 'ColumnMetaDataKey',
  NotMapped: 'NotMappedMetaDataKey',
  InnerColumn: 'InnerColumnMetaDataKey',
  DatabaseGenerated: 'DatabaseGeneratedMetaDataKey',
  ForeignKey: 'ForeignKeyMetaDataKey'
};

interface ITableMetaData {
  name: string;
  schema?: string;
}

interface IColumnMetaData {
  name: string;
  hasChanged: boolean;
  oldValue: any;
}

let EntityDecoratorFactory = function(... args: any[]) {
  return function(target: any) {
    // save a reference to the original constructor
    let original = target;

    // a utility function to generate instances of a class
    function construct(constructor: any, sargs: any) {
      const c: any = function() {
        return constructor.apply(this, sargs);
      };

      c.prototype = constructor.prototype;

      return new c();
    }

    // the new constructor behaviour
    let f: any = function(... sargs: any[]) {
      // Do Stuff
      return construct(original, sargs);
    };

    // copy prototype so instanceof operator still works
    f.prototype = original.prototype;

    let entry: IDbEntry;
    f.__Entry = entry;
    f.__changed = function(name: string, oldValue: any) {
      f.__Entry.state = DbEntryState.Modified;
      let keys: IColumnMetaData[] = Reflect.getOwnMetadata(metadatakeys.Column, target) || [];
      keys.forEach(key => {
        if (key.name === name) {
          key.hasChanged = true;
          key.oldValue = oldValue;
        }
      });
    };

    let metadataKey = metadatakeys.Entry;

    Reflect.defineMetadata(metadataKey, true, f);

    // return new constructor (will override original)
    return f;
  };
};


let KeyDecoratorFactory = function (Order?: number) {

  let applyMetaKeys = function (target: any, key: string) {
    let keys: any[] = Reflect.getOwnMetadata(metadatakeys.Key, target) || [];
    if (Order) {
      if (keys[Order]) {
        throw new Error('Order already exists!');
      }
      keys[Order] = key;
    }
    keys.push(key);
    target.__Id__ = keys;
    Reflect.defineMetadata(metadatakeys.Key, keys, target);
  };

  return function (target: any, key: string) {
    applyMetaKeys(target, key);

    // property Value
    let _val = this[key];

    // property getter
    let getter = function () {
      // Do staff
      return _val;
    };

    // property setter
    let setter = function (newValue: any) {
      // Do staff
      _val = newValue;
    };

    // Delete PropertyDescriptor
    if (delete this[key]) {
      // Create new property with getter and setter
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

let RequiredDecoratorFactory = function () {
  let applyMetaKeys = function (target: any, key: string) {
    Reflect.defineMetadata(metadatakeys.Required, true, target, key);
    // Reflect.ownKeys
  };
  return function (target: any, key: string) {
    applyMetaKeys(target, key);
    // property Value
    let _val = this[key];

    // property getter
    let getter = function () {
      // Do staff
      return _val;
    };

    // property setter
    let setter = function (newValue: any) {
      // Do staff
      if (!newValue) {
        throw new Error('Value can not be null!.');
      }
      _val = newValue;
    };

    // Delete PropertyDescriptor
    if (delete this[key]) {
      // Create new property with getter and setter
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

let MinLengthDecoratorFactory = function (length: number) {
  let applyMetaKeys = function (target: any, key: string) {
    Reflect.defineMetadata(metadatakeys.MinLength, true, target, key);
  };
  return function (target: any, key: string) {
    applyMetaKeys(target, key);

    let t = Reflect.getMetadata('design:type', target, key);
    let isStringOrArray = t.name === 'String' || t.name === 'Array';

    // property Value
    let _val = this[key];

    // property getter
    let getter = function () {
      // Do staff
      return _val;
    };

    // property setter
    let setter = function (newValue: any) {
      // Do staff
      if (isStringOrArray && newValue.length < length) {
        throw new Error('Minimum Length not accuired.');
      }
      _val = newValue;
    };

    // Delete PropertyDescriptor
    if (delete this[key]) {
      // Create new property with getter and setter
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

let MaxLengthDecoratorFactory = function (length: number) {

  let applyMetaKeys = function (target: any, key: string) {
    Reflect.defineMetadata(metadatakeys.MaxLength, true, target, key);
  };

  return function (target: any, key: string) {
    applyMetaKeys(target, key);

    let t = Reflect.getMetadata('design:type', target, key);
    let isStringOrArray = t.name === 'String' || t.name === 'Array';

    // property Value
    let _val = this[key];

    // property getter
    let getter = function () {
      // Do staff
      return _val;
    };

    // property setter
    let setter = function (newValue: any) {
      // Do staff
      if (isStringOrArray && newValue.length > length) {
        throw new Error('Maximum Length exceeds.');
      }
      _val = newValue;
    };

    // Delete PropertyDescriptor
    if (delete this[key]) {
      // Create new property with getter and setter
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

let TableDecoratorFactory = function (name: string, schema?: string) {

  let applyMetaKeys = function (target: any) {
    let tableMeta: ITableMetaData = {
      name: name,
      schema: schema ? schema : ''
    };

    Reflect.defineMetadata(metadatakeys.Table, tableMeta, target);
    // Reflect.ownKeys
  };

  return function (target: any) {
    // save a reference to the original constructor
    let original = target;

    // a utility function to generate instances of a class
    function construct(constructor: any , args: any[]) {
      let c: any = function () {
        return constructor.apply(this, args);
      };

      c.prototype = constructor.prototype;
      return new c();
    }

    // the new constructor behaviour
    let f: any = function (...args: any[]) {
      // Do Stuff
      return construct(original, args);
    };

    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;

    applyMetaKeys(f);

    // return new constructor (will override original)
    return f;
  };
};

let ColumnDecoratorFactory = function (name?: string, order?: number) {
  function hasNotMapped(target: any, key: string): boolean {
    if (!Reflect.hasOwnMetadata(metadatakeys.NotMapped, target, key)) {
      return false;
    }
    let notMapped: boolean = Reflect.getMetadata(metadatakeys.NotMapped, target, key);
    return notMapped;
  }
  let applyMetaKeys = function (target: any, key: string) {
    if (hasNotMapped(target, key)) {
      throw new Error('Can not be Combined with "@NotMappd"');
    }
    let keys: IColumnMetaData[] = Reflect.getOwnMetadata(metadatakeys.Column, target) || [];
    let col: IColumnMetaData = {
      name: key,
      hasChanged: false,
      oldValue: null
    };
    if (order) {
      if (keys[order]) {
        throw new Error('Order already exists!');
      }
      keys[order] = col;
    }
    keys.push(col);
    Reflect.defineMetadata(metadatakeys.Key, keys, target);
    Reflect.defineMetadata(metadatakeys.InnerColumn, true, target, key);
  };

  return function (target: any, key: string) {
    if (!name) {
      name = key;
    }

    applyMetaKeys(target, key);

    // property Value
    let _val = this[key];

    // property getter
    let getter = function () {
      // Do staff
      return _val;
    };

    // property setter
    let setter = function (newValue: any) {
      // Do staff
      if (_val !== newValue && target.__changed) {
        target.__changed(name, _val);
      }
      _val = newValue;
    };

    // Delete PropertyDescriptor
    if (delete this[key]) {
      // Create new property with getter and setter
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

let NotMappedDecoratorFactory = function () {
  function hasColumn(target: any, key: string): boolean {
    if (!Reflect.hasOwnMetadata(metadatakeys.InnerColumn, target, key)) {
      return false;
    }
    let notMapped: boolean = Reflect.getMetadata(metadatakeys.InnerColumn, target, key);
    return notMapped;
  }

  let applyMetaKeys = function (target: any, key: string) {
    if (hasColumn(target, key)) {
      throw new Error('Can not be Combined with "@Column"');
    }
    Reflect.defineMetadata(metadatakeys.NotMapped, true, target, key);
    // Reflect.ownKeys
  };
  return function (target: any, key: string) {

    applyMetaKeys(target, key);

    // property Value
    let _val = this[key];

    // property getter
    let getter = function () {
      // Do staff
      return _val;
    };

    // property setter
    let setter = function (newValue: any) {
      // Do staff
      _val = newValue;
    };

    // Delete PropertyDescriptor
    if (delete this[key]) {
      // Create new property with getter and setter
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

let DatabaseGeneratedDecoratorFactory = function (databaseGeneratedOption?: DatabaseGeneratedOption) {
  let applyMetaKeys = function (target: any, key: string) {
    Reflect.defineMetadata(metadatakeys.NotMapped, '__dbgen__' + key, target, key);
    // Reflect.ownKeys
  };

  return function (target: any, key: string) {
    applyMetaKeys(target, key);
    // property Value
    if (!this['__dbgen__' + key]) {
      this['__dbgen__' + key] = this[key];
    }

    // property getter
    let getter = function () {
      // Do staff
      return this['__dbgen__' + key];
    };

    // property setter
    let setter = function (newValue: any) {
      // Do staff
      // _val = newValue;
    };

    // Delete PropertyDescriptor
    if (delete this[key]) {
      // Create new property with getter and setter
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

let InversePropertyDecoratorFactory = function (name: string) {
  // TODO: added later
  return function (target: any, key: string) {
    // property Value
    let _val = this[key];

    // property getter
    let getter = function () {
      // Do staff
      return _val;
    };

    // property setter
    let setter = function (newValue: any) {
      // Do staff
      _val = newValue;
    };

    // Delete PropertyDescriptor
    if (delete this[key]) {
      // Create new property with getter and setter
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

let ForeignKeyDecoratorFactory = function (name: string | string[]) {
  function isEntity(target: any): boolean {
    let isEnt = Reflect.getOwnMetadata(metadatakeys.Entry, target) || false;
    return isEnt;
  }

  function NumberofKeys(target: any): number {
    if (!target.__Id__) {
      return 0;
    }

    let s: string[] = target.__Id__;
    return s.length;
  }

  let applyMetaKeys = function (target: any, key: string) {
    let tp = Reflect.getMetadata('design:type', target, key);
    let obj = Reflect.construct(tp, null);
    if (!obj) {
      // TODO: check next
      throw new Error('Unknown Type');
    }

    if (!isEntity(obj)) {
      throw new Error('Target is not Entity');
    }
    let names = typeof name === 'string' ? [name] : name;
    names.forEach(element => {
      if (!target[element]) {
        throw new Error('${name} property is unknown');
      }
    });
    if (NumberofKeys(obj) !== name.length) {
      throw new Error('Foreign table key count error!');
    }
    Reflect.defineMetadata(metadatakeys.ForeignKey, names, target, key);
  };
  return function (target: any, key: string) {
    applyMetaKeys(target, key);
    // property Value
    let _val = this[key];

    // property getter
    let getter = function () {
      // Do staff
      return _val;
    };

    // property setter
    let setter = function (newValue: any) {
      // Do staff
      _val = newValue;
    };

    // Delete PropertyDescriptor
    if (delete this[key]) {
      // Create new property with getter and setter
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

let IndexDecoratorFactory = function (name?: string, isClustered?: boolean, isUnique?: true) {
  return function (target: any, key: string) {
    // property Value
    let _val = this[key];

    // property getter
    let getter = function () {
      // Do staff
      return _val;
    };

    // property setter
    let setter = function (newValue: any) {
      // Do staff
      _val = newValue;
    };

    // Delete PropertyDescriptor
    if (delete this[key]) {
      // Create new property with getter and setter
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
};

enum DatabaseGeneratedOption {
  Computed,
  Identity,
  None
}

let isEntity = function(target: any): boolean {
  let isEnt = Reflect.getOwnMetadata(metadatakeys.Entry, target) || false;
  return isEnt;
};

export {
  EntityDecoratorFactory as Entity,
  KeyDecoratorFactory as Id,
  RequiredDecoratorFactory as Required,
  MinLengthDecoratorFactory as MinLength,
  MaxLengthDecoratorFactory as MaxLength,
  TableDecoratorFactory as Table,
  ColumnDecoratorFactory as Column,
  NotMappedDecoratorFactory as NotMapped,
  DatabaseGeneratedDecoratorFactory as DatabaseGenerated,
  InversePropertyDecoratorFactory as InverseProperty,
  ForeignKeyDecoratorFactory as ForeignKey,
  IndexDecoratorFactory as Index,
  DatabaseGeneratedOption,
  metadatakeys,
  ITableMetaData,
  isEntity as IsEntity
};
