class Graph {
  constructor() {
    this.vertices = []; // 用于存储图中的顶点
    this.adjList = new Map(); // 用于存储图中的边
  }

  // 添加顶点
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []); // 初始化邻接表
  }

  // 添加边
  addEdge(v, w) {
    this.adjList.get(v).push(w); // 添加边
    this.adjList.get(w).push(v); // 对于无向图，需要添加两条边
  }

  // 输出图
  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + " -> ";
      let neighbors = this.adjList.get(this.vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  }
}
