var StackNode = /** @class */ (function () {
    function StackNode(node) {
        this.node = node;
        this.previousHead = null;
    }
    return StackNode;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = null;
        this.size = 0;
    }
    Stack.prototype.push = function (node) {
        var currentHead = this.head;
        this.head = new StackNode(node);
        this.head.previousHead = currentHead;
        this.size++;
    };
    Stack.prototype.pop = function () {
        if (this.isStackEmpty)
            return null;
        var currentHead = this.head;
        this.head = currentHead.previousHead;
        this.size--;
        return currentHead.node;
    };
    Stack.prototype.peek = function () {
        return this.head;
    };
    Object.defineProperty(Stack.prototype, "isStackEmpty", {
        get: function () {
            return this.size === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "stackSize", {
        get: function () {
            return this.size;
        },
        enumerable: false,
        configurable: true
    });
    return Stack;
}());
/* ------------------------------------- */
var stack = new Stack();
console.log(1, stack, stack.peek(), stack.isStackEmpty, stack.stackSize);
stack.push(10);
stack.push(12);
stack.push('20');
stack.push('asd');
stack.push(true);
stack.push({ a: 10, b: 'asd' });
stack.push([1, 4, 6, 9, '123', true]);
console.log(2, stack, stack.peek(), stack.isStackEmpty, stack.stackSize);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(3, stack, stack.peek(), stack.isStackEmpty, stack.stackSize);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(4, stack, stack.peek(), stack.isStackEmpty, stack.stackSize);
