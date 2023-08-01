interface IQueueNode {
  node: any;
  nextNode: any;
}

interface IQueue {
  firstNode: QueueNode;
  lastNode: QueueNode;
  isQueueEmpty: boolean;
  size: number;
  queueSize: number;
  enqueue: <T>(node: T) => void;
  dequeue: () => IQueueNode | null;
}

class QueueNode implements IQueueNode {
  nextNode: any;
  node: any;

  constructor(node) {
    this.node = node;
    this.nextNode = null;
  }
}

class Queue implements IQueue {
  firstNode: QueueNode;
  lastNode: QueueNode;
  size: number;

  constructor() {
    this.firstNode = null;
    this.lastNode = null;
    this.size = 0;
  }

  enqueue<T>(node: T): void {
    const currentLastNode = this.lastNode;
    this.lastNode = new QueueNode(node);

    if (this.isQueueEmpty) {
      this.firstNode = this.lastNode;
    } else {
      currentLastNode.nextNode = this.lastNode;
    }

    this.size++;
  }

  dequeue(): IQueueNode | null {
    if (this.isQueueEmpty) return null;

    const dequeuedNode = this.firstNode.node;
    this.firstNode = this.firstNode.nextNode;
    this.size--;

    if (this.isQueueEmpty) {
      this.lastNode = null;
    }

    return dequeuedNode;
  }

  get isQueueEmpty(): boolean {
    return this.size === 0;
  }

  get queueSize(): number {
    return this.size;
  }
}

const queue: IQueue = new Queue();

queue.enqueue('qwe');
queue.enqueue(10);
queue.enqueue(12);
queue.enqueue('asd');
queue.enqueue(true);
queue.enqueue({ a: '1' });
queue.enqueue([4, 7, 10, 'asd']);

// eslint-disable-next-line no-console
console.log(111, queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
