"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var StackNode = /** @class */ (function () {
    function StackNode(data) {
        this.next = null;
        this.data = data;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
    }
    // Добавление элемента (вверх стека)
    Stack.prototype.push = function (data) {
        var newNode = new StackNode(data);
        newNode.next = this.top;
        this.top = newNode;
    };
    // Извлечение элемента
    Stack.prototype.pop = function () {
        if (!this.top)
            return null;
        var value = this.top.data;
        this.top = this.top.next;
        return value;
    };
    // Просмотр верхнего элемента
    Stack.prototype.peek = function () {
        return this.top ? this.top.data : null;
    };
    // Проверка, пуст ли стек
    Stack.prototype.isEmpty = function () {
        return this.top === null;
    };
    return Stack;
}());
exports.Stack = Stack;
