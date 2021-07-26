class Queue {
  _values = []

  get size() {
    return this._values.length;
  }

  values() {
    return this._values;
  }

  dequeue() {
    return this._values.shift();
  }

  enqueue(elem) {
    this._values.push(elem);
  }

  getFront() {
    return this._values[0];
  }

  isEmpty() {
    return this._values.length === 0;
  }
}
