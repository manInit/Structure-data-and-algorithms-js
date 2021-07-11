const PriorityQueue = require('./PriorityQueue');

const q1 = new PriorityQueue();
q1.enqueue([1, 'b'])
q1.enqueue([3, 'hello'])
q1.enqueue([0, 'a'])


console.log(q1.values());