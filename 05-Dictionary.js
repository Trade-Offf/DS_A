class Dictionary {
  items = {};

  // 对象做key值会导致隐式转换，所以需要将key转换为字符串
  toStrFn(key) {
    if (key === null) {
      return "NULL";
    } else if (key === undefined) {
      return "UNDEFINED";
    } else if (typeof key === "string" || key instanceof String) {
      return `${key}`;
    } else {
      return JSON.stringify(key);
    }
  }

  hasKey(key) {
    return (
      this.items[this.toStrFn(key)] !== null ||
      this.items[this.toStrFn(key)] !== undefined
    );
  }

  set(key, value) {
    if (key != null && value != null) {
      this.items[this.toStrFn(key)] = new ValuePair(key, value);
    }
  }

  get(key) {
    const valuePair = this.items[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.items[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }

  // 额外的一些辅助方法：返回key、返回value、返回键值对
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  keyValues() {
    return Object.values(this.items);
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
