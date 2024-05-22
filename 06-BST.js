class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 二叉搜索树
export class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }
  // 基于递归判断大小插入节点
  #insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode; // 任何右子节点的值都大于或等于该节点的值
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 先序遍历: 根节点 -> 左子树 -> 右子树
  preOrderTraverse(callback) {
    this.#preOrderTraverseNode(this.root, callback);
  }
  #preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.#preOrderTraverseNode(node.left, callback);
      this.#preOrderTraverseNode(node.right, callback);
    }
  }

  // 中序遍历: 左子树 -> 根节点 -> 右子树
  inOrderTraverse(callback) {
    this.#inOrderTraverseNode(this.root, callback);
  }
  #inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.#inOrderTraverseNode(node.left, callback);
      callback(node.value);
      this.#inOrderTraverseNode(node.right, callback);
    }
  }

  // 后序遍历: 左子树 -> 右子树 -> 根节点
  postOrderTraverse(callback) {
    this.#postOrderTraverseNode(this.root, callback);
  }
  #postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.#postOrderTraverseNode(node.left, callback);
      this.#postOrderTraverseNode(node.right, callback);
      callback(node.value);
    }
  }

  min() {
    return this.#minNode(this.root);
  }
  #minNode(node) {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
  max() {
    return this.#maxNode(this.root);
  }
  #maxNode(node) {
    let current = node;
    while (current !== null && current.right !== null) {
      current = current.right;
    }
    return current.value;
  }
  // 搜索树中是否存在某个值
  search(value) {
    return this.#searchNode(this.root, value);
  }
  #searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this.#searchNode(node.left, value);
    } else if (value > node.value) {
      return this.#searchNode(node.right, value);
    } else {
      return true;
    }
  }

  remove(value) {
    this.root = this.#removeNode(this.root, value);
  }
  #removeNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this.#removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.#removeNode(node.right, value);
      return node;
    } else {
      // 没有子节点，直接移除
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // 只有一个子节点的节点，将其子节点提升为当前节点的位置
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // 移除有两个子节点的节点，找到右子树中的最小节点，将其替换为当前节点
      const aux = this.#findMinNode(node.right);
      node.value = aux.value;
      node.right = this.#removeNode(node.right, aux.value);
      return node;
    }
  }
  #findMinNode(node) {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }
}
