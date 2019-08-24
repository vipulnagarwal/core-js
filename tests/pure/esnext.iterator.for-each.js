import Iterator from 'core-js-pure/features/iterator';

import { createIterator } from '../helpers/helpers';

QUnit.test('Iterator#forEach', assert => {
  const { forEach } = Iterator.prototype;

  assert.isFunction(forEach);
  assert.arity(forEach, 1);
  assert.nonEnumerable(Iterator.prototype, 'forEach');

  const array = [];

  forEach.call(createIterator([1, 2, 3]), it => array.push(it));

  assert.arrayEqual(array, [1, 2, 3], 'basic functionality');

  assert.throws(() => forEach.call(undefined, () => { /* empty */ }), TypeError);
  assert.throws(() => forEach.call(null, () => { /* empty */ }), TypeError);
  assert.throws(() => forEach.call({}, () => { /* empty */ }), TypeError);
  assert.throws(() => forEach.call([], () => { /* empty */ }), TypeError);
});
