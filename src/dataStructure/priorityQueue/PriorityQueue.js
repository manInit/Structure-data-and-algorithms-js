class PriorityQueue {
  //[[priority, elem], ... ]
  _values = []

  get size() {
    return this._values.length;
  }

  values() {
    return this._values.map(elem => elem[1]);
  }

  dequeue() {
    return this._values.shift()[1];
  }

  enqueue(newElem) {
    if (this.isEmpty()) {
      this._values.push(newElem);
    } else {
      let isAdded = false;
      for (let i = 0; i < this._values.length; i++) {
        //check priority
        if (this._values[i][0] < newElem[0]) {
          this._values.splice(i, 0, newElem);
          isAdded = true;
          break;
        }
      }
      
      if (!isAdded) {
        this._values.push(newElem);
      }

    }
  }

  getFront() {
    return this._values[0][1];
  }

  isEmpty() {
    return this._values.length === 0;
  }
}

module.exports = PriorityQueue;