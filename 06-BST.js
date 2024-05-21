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
      this.insertNode(this.root, newNode);
    }
  }
  // 基于递归判断大小插入节点
  insertNode(node, newNode) {
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

  // 中序遍历
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

  // 先序遍历
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

  // 后序遍历
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
}
