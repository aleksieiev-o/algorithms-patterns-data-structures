var QueueNode = /** @class */ (function () {
    function QueueNode(node) {
        this.node = node;
        this.nextNode = null;
    }
    return QueueNode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.firstNode = null;
        this.lastNode = null;
        this.size = 0;
    }
    Queue.prototype.enqueue = function (node) {
        var currentLastNode = this.lastNode;
        this.lastNode = new QueueNode(node);
        if (this.isQueueEmpty) {
            this.firstNode = this.lastNode;
        }
        else {
            currentLastNode.nextNode = this.lastNode;
        }
        this.size++;
    };
    Queue.prototype.dequeue = function () {
        if (this.isQueueEmpty)
            return null;
        var dequeuedNode = this.firstNode.node;
        this.firstNode = this.firstNode.nextNode;
        this.size--;
        if (this.isQueueEmpty) {
            this.lastNode = null;
        }
        return dequeuedNode;
    };
    Object.defineProperty(Queue.prototype, "isQueueEmpty", {
        get: function () {
            return this.size === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "queueSize", {
        get: function () {
            return this.size;
        },
        enumerable: false,
        configurable: true
    });
    return Queue;
}());
var queue = new Queue();
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
