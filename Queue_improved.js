export class QueueImproved {
  #items = {};
  #lowCount = 0;
  #count = 0;

  // 出队
  delqueue() {
    if (this.isEmpty() === 0) {
      return undefined;
    }
    let res = this.#items[this.#lowCount];
    delete this.#items[this.#lowCount];
    this.#lowCount++;
    return res;
  }

  // 入队
  addqueue(data) {
    this.#items[this.#count] = data;
    this.#count++;
  }

  // 查看队首元素
  peek() {
    return this.#items[this.#lowCount];
  }

  // 判断队列是否为空
  isEmpty() {
    return this.size() === 0;
  }

  // 清空队列
  clear() {
    this.#items = {};
    this.#count = 0;
    this.#lowCount = 0;
  }

  // 获取队列的大小
  size() {
    return this.#count - this.#lowCount;
  }
}
