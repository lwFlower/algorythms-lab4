class DoublyNode<T> {
  data: T;
  next: DoublyNode<T> | null = null;
  prev: DoublyNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class DoublyLinkedList<T> {
  private head: DoublyNode<T> | null = null;
  private tail: DoublyNode<T> | null = null;

  // Добавить элемент в начало
  addFirst(data: T): void {
    const newNode = new DoublyNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // Добавить элемент в конец
  addLast(data: T): void {
    const newNode = new DoublyNode(data);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Удалить элемент по значению
  remove(data: T): boolean {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next; // удаляемый — первый

        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev; // удаляемый — последний
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Найти элемент по значению
  find(data: T): DoublyNode<T> | null {
    let current = this.head;
    while (current) {
      if (current.data === data) return current;
      current = current.next;
    }
    return null;
  }

  // Печать всех элементов
  printForward(): void {
    let current = this.head;
    const values: string[] = [];
    while (current) {
      values.push(String(current.data));
    current = current.next;
    }
    console.log(values.join(", "));
  }
}