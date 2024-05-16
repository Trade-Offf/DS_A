class Stack {
  #items = []; // ES2020 private class fields，私有属性
  // 出栈
  pop() {
    return this.#items.pop();
  }
  // 入栈
  push(item) {
    this.#items.push(item);
  }
  // 查看栈顶元素
  peek() {
    return this.#items[this.#items.length - 1];
  }
  // 判断栈是否为空
  isEmpty() {
    return this.#items.length === 0;
  }
  // 清空栈
  clear() {
    this.#items = [];
  }
  //   获取栈的大小
  size() {
    return this.#items.length;
  }
}

/**
 * 用栈实现进制转换
 * @param {number} decNumber - 基数
 * @param {number} base - 进制
 * @returns {string} - 转换后的字符串
 */
function convert(decNumber, base) {
  let remstack = new Stack();
  let number = decNumber;
  let string = "";
  let baseString = "0123456789ABCDEF";

  while (number > 0) {
    remstack.push(number % base);
    number = Math.floor(number / base);
  }

  while (!remstack.isEmpty()) {
    string += baseString[remstack.pop()];
  }
  return string;
}

console.log(convert(100345, 16));
