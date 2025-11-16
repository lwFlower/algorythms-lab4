import { Queue } from "./zimniy-sim/src/Lab4/Classes/Queue";

/**
 * Тест очереди
 */
const q = new Queue<string>();
q.enqueue('first');
q.enqueue('second');
q.enqueue('third');

console.log('первый элемент: ', q.peek());