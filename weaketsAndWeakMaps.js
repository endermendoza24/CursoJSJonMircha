const ws = new WeakSet();
let valor1 = {"valor1":1};
let valor2 = {"valor2":2};
let valor3 = {"valor3":3};

ws.add(valor1)
ws.add(valor2);
console.log(ws);

console.log(ws.has(valor1));