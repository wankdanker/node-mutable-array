mutable-array
-------------

Functions to modify an array in-place instead of making a copy.

example
-------

```js
var mmap = require('mutable-array').mmap;
var a = [1,2,3,4,5];

mmap(a, function (val) {
	return val + 1;
});

console.log(a);

//[2,3,4,5,6];
```

api
---

### mmap([array,] callback, thisArg)

Standard Array.map functionality, but values that are returned from callback
replace the original element in the array.

### mfilter([array,] callback, thisArg)

Standard Array.filter functionality, but removes (using splice) values from
the array if value returned from callback does not equal true.

### applyPrototype()

Add all functions to the Array prototype.


license
-------

MIT
