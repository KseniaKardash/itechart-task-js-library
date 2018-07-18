
// Library Class

 class Library {

  constructor(array) {
    this.array = array.filter(function(number) {
      return typeof number === typeof array[0] ;
    });
  }

isArrayOf(type){
  return [ typeof this.array[0], this.array[0] instanceof type]
}

   take(number) {
     if (arguments.length != 1) {
       throw 'This function expects only one parameter(number).';
     } else {
       this.array.splice(number, this.array.length);
       return this;
     }
   }

   skip(number) {
     if (arguments.length != 1) {
       throw 'This function expects only one parameter(number).';
     } else {
       this.array.splice(0, number);
       return this;
     }
   }
   ejectArray() {
     if (arguments.length != 0) {
       throw 'This function does not expect any parameter.';
     } else {
       return this.array;
     }
   }

   first() {
     if (arguments.length != 0) {
       throw 'This function does not expect any parameter.';
     } else {
       return this.array[0];
     }
   }

   last() {
     if (arguments.length != 0) {
       throw 'This function does not expect any parameter.';
     } else {
       return this.array[this.array.length - 1];
     }
   }
}

// Obj Class

class Obj {
  constructor(obj) {
    this.obj = obj;
  }

  isBoolean() {
    if (typeof this.obj === 'boolean') {
      return true
    } else
      return false;
    }

  isNumber() {
    if (typeof this.obj === 'number') {
      return true
    } else
      return false;
    }

  isString() {
    if (typeof this.obj === 'string') {
      return true
    } else
      return false;
    }

  isUndefined() {
    if (typeof this.obj === 'undefined') {
      return true
    } else
      return false;
    }

  isFunction() {
    if (typeof this.obj === 'function') {
      return true
    } else
      return false;
    }

  isNull() {
    if (this.obj == null && this.obj !== undefined) {
      return true
    } else
      return false;
    }

  isDate() {
    if (this.obj instanceof Date) {
      return true
    } else return false;
  }

  isArray() {
    if (this.obj instanceof Array) {
      return true
    } else
      return false;
    }
  }
