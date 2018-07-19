
// Library Class

class Library {

  constructor(array) {
    this.array = array.filter(function(item) {
      return typeof item === typeof array[0]
    });
  }

  isArrayOf(type) {
    return typeof this.array[0] === type || (type instanceof Object && this.array[0] instanceof type)
  }

  take(index) {
    if (arguments.length != 1) {
      throw 'This function expects only one parameter(index).';
    } else {
      return new Library(this.array.slice(0, index));
    }
  }

  skip(index) {
    if (arguments.length != 1) {
      throw 'This function expects only one parameter(index).';
    } else {
      return new Library(this.array.slice(index, this.array.length));
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
    return (typeof this.obj === 'boolean')
  }

  isNumber() {
    return (typeof this.obj === 'number')
  }

  isString() {
    return (typeof this.obj === 'string')
  }

  isUndefined() {
    return (typeof this.obj === 'undefined')
  }

  isFunction() {
    return (typeof this.obj === 'function')
  }

  isNull() {
    return (this.obj == null && this.obj !== undefined)
  }

  isDate() {
    return (this.obj instanceof Date)
  }

  isArray() {
    return (this.obj instanceof Array)
  }
}
