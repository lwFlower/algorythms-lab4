"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("../Classes/Stack");
// === Тест сборщика мусора ===
var stackGC = new Stack_1.Stack();
function print(label) {
    var used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log("".concat(label, ": ").concat(used.toFixed(2), " MB"));
}
print("До добавления (GC test)");
for (var i = 0; i < 100; i++) {
    stackGC.push(new Array(100000).fill(i));
}
print("После добавления 100 больших элементов");
while (!stackGC.isEmpty())
    stackGC.pop();
print("После удаления, до GC");
// Принудительно вызываем сборщик мусора (если разрешён)
if (global.gc) {
    global.gc();
    print("После вызова GC вручную");
}
else {
    console.log("Запусти с флагом --expose-gc, чтобы протестировать принудительный GC");
}
// tsc Lab4/Tests/GarbageCollectorTest.ts
// node --expose-gc Lab4/Tests/GarbageCollectorTest.js
