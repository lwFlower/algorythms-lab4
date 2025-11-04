class QueueNode<T> {
  data: T;
  next: QueueNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class Queue<T> {
  private front: QueueNode<T> | null = null; // первый элемент
  private end: QueueNode<T> | null = null;  // последний элемент

  // Добавление элемента в конец очереди
  enqueue(data: T): void {
    const newNode = new QueueNode(data);
    if (!this.end) {
      // очередь пуста
      this.front = this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
  }

  // Удаление элемента из начала очереди
  dequeue(): T | null {
    if (!this.front) return null; // очередь пуста
    const value = this.front.data;
    this.front = this.front.next;
    if (!this.front) this.end = null; // если очередь опустела
    return value;
  }

  // Просмотр первого элемента
  peek(): T | null {
    return this.front ? this.front.data : null;
  }

  // Проверка на пустоту
  isEmpty(): boolean {
    return this.front === null;
  }
}