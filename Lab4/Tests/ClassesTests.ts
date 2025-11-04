import { DoublyLinkedList } from "../Classes/DoublyLinkedList";
import { Queue } from "../Classes/Queue";
import { Stack } from "../Classes/Stack";
import { printMemoryUsage } from "../Utils";

/**
 * Тест очереди
 */
console.log('тест очереди');

const q = new Queue<string>();
q.enqueue('first');
q.enqueue('second');

console.log("Первый элемент:", q.peek());
console.log("Удаляем:", q.dequeue());
console.log("Теперь первый:", q.peek());
console.log("Пуста ли очередь?", q.isEmpty());

/**
 * Тест стэка
 */
console.log('тест стэка');

const stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.pop());
console.log(stack.peek());

/**
 * Тест двусвязанного списка
 */
console.log('Тест двусвязанного списка');

const list = new DoublyLinkedList<number>();
list.addFirst(10);
list.addLast(20);
list.addLast(30);
list.addFirst(20);
list.printForward();
list.remove(20);
list.printForward();

const found = list.find(30);
if (found) {
  console.log("Найден элемент:", found.data);
  console.log("Следующий:", found.next?.data ?? "нет");
  console.log("Предыдущий:", found.prev?.data ?? "нет");
} else {
  console.log("Элемент не найден");
}

// Проверим поиск несуществующего
const notFound = list.find(99);
console.log("Результат поиска 99:", notFound);