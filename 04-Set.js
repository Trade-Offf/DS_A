export class Set {
  items = {};

  //   将item的key和value都设置为item
  add(item) {
    if (!this.has(item)) {
      this.items[item] = item;
      return true;
    }
    return false;
  }
  delete(item) {
    if (this.has(item)) {
      delete this.items[item];
      return true;
    }
    return false;
  }
  has(item) {
    return this.items.hasOwnProperty(item); // 判断是否有这个属性
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.values(this.items);
  }
}
