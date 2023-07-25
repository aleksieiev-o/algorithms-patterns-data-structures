interface IStackNode {
  node: any;
  previousHead: any;
}

interface IStack {
  head: any;
  size: number;
  isStackEmpty: boolean;
  stackSize: number;
  push: <T>(node: T) => void;
  pop: () => IStackNode | null;
  peek: () => IStackNode | null;
}

class StackNode implements IStackNode {
  node: any;
  previousHead: any;

  constructor(node) {
    this.node = node;
    this.previousHead = null;
  }
}

class Stack implements IStack {
  head: any;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  push<T>(node: T): void {
    const currentHead = this.head;
    this.head = new StackNode(node);
    this.head.previousHead = currentHead;
    this.size++;
  }

  pop(): IStackNode | null {
    if (this.isStackEmpty) return null;

    const currentHead = this.head;
    this.head = currentHead.previousHead;
    this.size--;
    return currentHead.node;
  }

  peek(): IStackNode | null {
    return this.head;
  }

  get isStackEmpty(): boolean {
    return this.size === 0;
  }

  get stackSize(): number {
    return this.size;
  }
}

/* ------------------------------------- */
const stack: IStack = new Stack();

console.log(1, stack, stack.peek(), stack.isStackEmpty, stack.stackSize)

stack.push(10);
stack.push(12);
stack.push('20');
stack.push('asd');
stack.push(true);
stack.push({ a: 10, b: 'asd' });
stack.push([1, 4, 6, 9, '123', true]);

console.log(2, stack, stack.peek(), stack.isStackEmpty, stack.stackSize)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(3, stack, stack.peek(), stack.isStackEmpty, stack.stackSize)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(4, stack, stack.peek(), stack.isStackEmpty, stack.stackSize)
