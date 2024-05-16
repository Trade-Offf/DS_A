class QueueSimple {
  #items = [];
  // 出队
  delQueue() {
    return this.#items.shift(); // 性能很差，每次出队都要把数组每一项前移
  }
  // 入队
  addQueue(item) {
    this.#items.push(item);
  }
  // 查看队首元素
  peek() {
    return this.#items.at(0); // ES2021 Array.prototype.at()，返回索引处的元素
    // return this.#items[0]; // 作用同上
  }
  // 判断队列是否为空
  isEmpty() {
    return this.#items.length === 0;
  }
  // 清空队列
  clear() {
    this.#items = [];
  }
  // 获取队列的大小
  size() {
    return this.#items.length;
  }
}
