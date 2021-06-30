const MySet = require('./Set');

const set = new MySet();
set.add('1');
set.add('2');

set.remove(2);
set.remove('2');

const set2 = new MySet();
set2.add('3');

const set3 = new MySet();
set3.add('1');
set3.add('3');
console.log(set2.union(set).values()); // [3,1]
console.log(set2.intersection(set).values()); // []
console.log(set3.intersection(set).values()); // [1]