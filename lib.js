let first = function(originalArray) {
  if (arguments.length != 1) {
    throw 'This function expects one parameter(original array).';
  } else {
    return originalArray[0];
  }
}

let last = function(originalArray) {
  if (arguments.length != 1) {
    throw 'This function expects one parameter(original array).';
  } else {
    return originalArray[originalArray.length - 1];
  }
}

let take = function(originalArray, number) {
  var newArray = [];

  if (arguments.length != 2) {
    throw 'This function expects two parameters. The original array and a number.';
  } else {
    for (var i = 0; i < number; i++) {
      newArray.push(originalArray[i]);
    }
    return newArray;
  }
}

let skip = function(originalArray, number) {
  var newArray = [];

  if (arguments.length != 2) {
    throw 'This function expects two parameters. The original array and a number.';
  } else {
    for (var i = number; i < originalArray.length; i++) {
      newArray.push(originalArray[i]);
    }
    return newArray;
  }
}

let chain = function(array) {
  this.value = array;

  this.skip = function(n) {
    return new chain(skip(this.value, n));
  }

  this.take = function(n) {
    return new chain(take(this.value, n));
  }

  this.first = function() {
    return new chain(first(this.value));
  }

  this.last = function() {
    return new chain(last(this.value));
  }

  return this;
}

let isBoolean = function(obj) {
  if (typeof obj === 'boolean') {
    return true
  } else
    return false;
  }

let isNumber = function(obj) {
  if (typeof obj === 'number') {
    return true
  } else
    return false;
  }

let isString = function(obj) {
  if (typeof obj === 'string') {
    return true
  } else
    return false;
  }

let isUndefined = function(obj) {
  if (typeof obj === 'undefined') {
    return true
  } else
    return false;
  }

let isFunction = function(obj) {
  if (typeof obj === 'function') {
    return true
  } else
    return false;
  }

let isNull = function(obj) {
  if (obj == null && obj !== undefined) {
    return true
  } else
    return false;
  }

let isDate = function(obj) {
  if (obj instanceof Date) {
    return true
  } else
    return false;
  }

let isArray = function(obj) {
  if (obj instanceof Array) {
    return true
  } else
    return false;
  }
