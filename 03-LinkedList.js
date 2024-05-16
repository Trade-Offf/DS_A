class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor(value) {
    // head 是链表的第一个节点
    this.head = {
      value: value,
      next: null,
    };
  }

  // 尾部添加节点
  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // 如果链表为空，说明是第一个节点，将新节点赋值给 head 即可
      this.head = newNode;
    } else {
      let current = this.head;
      // 如果不为空，则需要遍历链表，找到最后一个节点
      while (current.next !== null) {
        current = current.next;
      }
      // 将最后一个节点的 next 指向新节点
      current.next = newNode;
    }
  }

  // 基于节点值删除节点
  delNode(data) {
    let current = this.head; // 从头节点开始查找
    let previous = null; // 用于记录当前节点的前一个节点

    while (current !== null) {
      if (current.value === data) {
        if (previous === null) {
          // 如果删除的是头节点,将头节点指向下一个节点
          this.head = current.next;
        } else {
          previous.next = current.next; // 将前一个节点的 next 设置为下一个节点
        }
        return current.value;
      }

      previous = current;
      current = current.next;
    }
    return null;
  }

  // 任意位置插入节点
  // 有点像拆链子，拿掉要换的那节，然后把前后两节连起来
  insertNode(data, index) {
    let newNode = new Node(data);
    let current = this.head;
    let previous = null;
    let i = 0;

    if (index === 0) {
      newNode.next = current; // 将新节点的 next 指向当前节点
      this.head = newNode; // 更新头节点指向新节点
    } else {
      while (i++ < index) {
        // 遍历链表，找到要插入位置的节点
        previous = current;
        current = current.next;
      }
      previous.next = newNode;
      newNode.next = current;
    }
  }

  // 打印链表
  printList() {
    let current = this.head;
    let str = "";
    while (current !== null) {
      str += current.value + " -> ";
      current = current.next;
    }
    str += "null";
    console.log(str);
  }

  // 反转链表
  reverseList() {
    let current = this.head;
    let previous = null;
    let next = null;

    while (current !== null) {
      next = current.next; // 保存当前节点的下一个节点
      current.next = previous; // 将当前节点的 next 指向前一个节点
      previous = current; // previous 指向当前节点
      current = next; // current 指向下一个节点
    }
    this.head = previous; // 更新头节点
  }
}
