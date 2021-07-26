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
  //check if the set is a subset of a different set
  isSubset(otherSet) {
    return this.values().every(value => otherSet.has(value));
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
    const intersectionSet = new MySet();
    
    for (const valueFromFirstSet of this.values()) {
      if (otherSet.has(valueFromFirstSet)) {
        intersectionSet.add(valueFromFirstSet);
      }
    }

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new MySet();

    for (const valueFromFirstSet of this.values()) {
      if (!otherSet.has(valueFromFirstSet)) {
        differenceSet.add(valueFromFirstSet);
      }
    }

    return differenceSet;
  }

  symmetricDifference(otherSet) {
    const symmetricDifferenceSet = new MySet();

    for (const valueFromFirstSet of this.values()) {
      if (!otherSet.has(valueFromFirstSet)) {
        symmetricDifferenceSet.add(valueFromFirstSet);
      }
    }

    for (const valueFromSecondSet of otherSet.values()) {
      if (!this.has(valueFromSecondSet)) {
        symmetricDifferenceSet.add(valueFromSecondSet);
      }
    }

    return symmetricDifferenceSet;
  }
}