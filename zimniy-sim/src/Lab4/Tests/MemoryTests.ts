import { Stack } from "../Classes/Stack";
import { printMemoryUsage } from "../../Utils";

// === тест ===
const stackSmall = new Stack<number>();
printMemoryUsage("До добавления элементов (малых)");

for (let i = 0; i < 100000; i++) {
  stackSmall.push(i);
}

printMemoryUsage("После добавления 100000 маленьких элементов");

// Освободим стек
while (!stackSmall.isEmpty()) stackSmall.pop();
printMemoryUsage("После очистки стека (малые)");


// ====== Тест с большими объектами ======
const stackBig = new Stack<number[]>();
printMemoryUsage("\nДо добавления больших элементов");

for (let i = 0; i < 100; i++) {
  // каждый элемент — массив из 100 000 чисел
  const bigArray = new Array(100000).fill(0);
  stackBig.push(bigArray);
}

printMemoryUsage("После добавления 100 больших элементов");