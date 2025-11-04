class StackNode<T> {
  data: T;
  next: StackNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class Stack<T> {
  private top: StackNode<T> | null = null;

  // Добавление элемента (вверх стека)
  push(data: T): void {
    const newNode = new StackNode(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  // Извлечение элемента
  pop(): T | null {
    if (!this.top) return null;
    const value = this.top.data;
    this.top = this.top.next;
    return value;
  }

  // Просмотр верхнего элемента
  peek(): T | null {
    return this.top ? this.top.data : null;
  }

  // Проверка, пуст ли стек
  isEmpty(): boolean {
    return this.top === null;
  }
}