module.exports.applyPrototype = applyPrototype;
module.exports.mmap = FUNCTION_APPLY(mmap);
module.exports.mfilter = FUNCTION_APPLY(mfilter);

function applyPrototype (obj) {
  obj = obj || Array;

  obj.prototype.mmap = mmap;
  obj.prototype.mfilter = mfilter;
}

function mmap (callback, thisArg) {
  var array = this;
  var length = array.length;

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  for (var i = 0; i < length; i++) {
    if (i in array) {
      //replace the current element with the value returned
      array[i] = callback.call(thisArg, array[i], i, array);
    }
  }

  return array;
}

function mfilter (callback, thisArg) {
  var array = this;
  var length = array.length;
  var result;

  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  for (var i = 0; i < length; i++) {
    if (i in array) {
      result = callback.call(thisArg, array[i], i, array);

      if (result !== true) {
        //remove the element from the array
        array.splice(i, 1);

        //set the index back one
        i -= 1;

        //reduce the length of the array
        length -= 1;
      }
    }
  }

  return array;
}

function FUNCTION_APPLY (fn) {
  return function (array) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    fn.apply(array, args)
  }
}
