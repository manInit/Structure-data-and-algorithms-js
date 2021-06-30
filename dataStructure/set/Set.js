class MySet {
  _collection = [];

  has(elem) {
    return this._collection.includes(elem);
  }

  values() {
    return this._collection;
  }

  get size() {
    return this._collection.length;
  }

  add(elem) {
    if (this.has(elem)) return false;
   
    this._collection.push(elem);
    return true;
  }

  remove(elem) {
    if (!this.has(elem)) return false;

    let indexElem = this._collection.indexOf(elem);
    this._collection.splice(indexElem, 1);
    return true;
  }

  union(otherSet) {
    const unionSet = new MySet();

    for (const value of this.values()) {
      unionSet.add(value);
    }

    for (const value of otherSet.values()) {
      unionSet.add(value);
    }

    return unionSet;
  }

  intersection(otherSet) {
    const intersectionUnion = new MySet();
    
    for (const valueFromFirstSet of this.values()) {
      if (otherSet.has(valueFromFirstSet)) {
        intersectionUnion.add(valueFromFirstSet);
      }
    }

    return intersectionUnion;
  }
}

module.exports = MySet;