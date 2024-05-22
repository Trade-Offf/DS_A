class MinHeap {
  heap = []; // 存储堆数据

  insert(value) {
    this.heap.push(value);
    this.#shiftUp();
  }
  // 与父节点逐级对比，若小于则交换位置
  #shiftUp() {
    let index = this.heap.length - 1; // 当前节点索引，数组长度减一
    let parentIndex = Math.floor((index - 1) / 2); // 父节点索引，向下取整
    // 当前节点值小于父节点值时，交换位置，直到根节点
    while (this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.#shiftDown();
    return removedValue;
  }
  #shiftDown() {
    let index = 0;
    let left = 2 * index + 1;
    while (left < this.heap.length) {
      let right = 2 * index + 2;
      let smallerIndex =
        right < this.heap.length && this.heap[right] < this.heap[left]
          ? right
          : left;
      if (this.heap[index] < this.heap[smallerIndex]) {
        break;
      }
      [this.heap[index], this.heap[smallerIndex]] = [
        this.heap[smallerIndex],
        this.heap[index],
      ];
      index = smallerIndex;
      left = 2 * index + 1;
    }
  }

  // 查找某个值的索引
  findTaeget(value) {
    return this.#findTaegetNode(this.heap, value);
  }
  #findTaegetNode(heap, value) {
    for (let i = 0; i < heap.length; i++) {
      if (heap[i] === value) {
        return i;
      }
    }
    return -1;
  }
}
