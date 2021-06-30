const Queue = require('./Queue');

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.values());
q.dequeue();
q.enqueue(4);
console.log(q.values());
