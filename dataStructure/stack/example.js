const Stack = require('./Stack');

const stack = new Stack();

stack.push(1);
stack.push(2);
console.log(stack.getTopElement()); // 2

console.log(stack.pop()); // 2

console.log(stack.getTopElement()); // 1
stack.pop();
stack.pop();
console.log(stack.size);
stack.push('aaaa');
stack.push('123');
console.log(stack.values());
console.log(stack.getTopElement()) // 'aaaa'
