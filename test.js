var test = require('tape');
var ma = require('./');

test('mmap', function (t) {
  var a = [1,2,3,4];

  ma.mmap(a, function (val, i, array) {
    //add one to every element
    return val + 1;
  });

  t.deepEqual(a, [2,3,4,5]);

  t.end();
});

test('mfilter', function (t) {
  var a = [1,2,3,4,5,6,7,8,9,10];

  ma.mfilter(a, function (val, i, array) {
    //remove odds
    return val % 2 === 0;
  });

  t.deepEqual(a, [2,4,6,8,10]);

  t.end();
});

test('applyPrototype', function (t) {
  ma.applyPrototype();

  var a = [1,2,3,4,5,6,7,8,9,10];

  a.mfilter(function (val, i, array) {
    //remove odds
    return val % 2 === 0;
  });

  t.deepEqual(a, [2,4,6,8,10]);

  t.end();
});
