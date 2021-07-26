class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(elem) {
    if (this.root === null) {
      this.root = new Node(elem);
      return;
    }

    return this._searchTree(elem, this.root);
  }

  _searchTree(data, node) {
    if (data < node.data) {
      if (node.left === null) node.left = new Node(data);
      else this._searchTree(data, node.left);
    } else if (data > node.data) {
      if (node.right === null) node.right = new Node(data);
      else this._searchTree(data, node.right);
    } else {
      return false;
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) return current;
      current = current.data > data ? current.right : current.left;
    }

    return false;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) return true;
      current = current.data > data ? current.right : current.left;
    }

    return false;
  }

  _removeNode(data, node) {
    if (node === null) return null;
    if (data === node.data) {
      if (node.left === null && node.right === null) return null;
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let tempNode = node.right
      while (tempNode.left !== null) tempNode= tempNode.left;

      node.data = tempNode.data;
      node.right = this._removeNode(tempNode.data, node.right);
      return node;
    } else if (data < data.node) {
      node.left = this._removeNode(data, node.left);
      return node;
    } else {
      node.right = this._removeNode(data, node.right);
      return node;
    }
  }

  remove(data) {
    this.root = this._removeNode(data, this.root);
  }

}

module.exports = BST;