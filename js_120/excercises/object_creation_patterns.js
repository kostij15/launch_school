//1. Ancestors

// let foo = {
//   name: 'foo',

//   ancestors() {
//     let ancestorsArr = [];
//     let currentObj = this;

//     while (currentObj) {
//       currentObj = Object.getPrototypeOf(currentObj);

//       if (currentObj) {
//         ancestorsArr.push(currentObj.name || 'Object.prototype');
//       }
//     }

//     return ancestorsArr;
//   }
// };

// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// console.log(foo.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

//3. Circular Queue

class CircularQueue {
  constructor(queue) {
    this.queue = queue;
    this.arr = [];
  }

  enqueue(element) {
    this.arr.unshift(element);

    if (this.arr.length > this.queue) {
      this.arr.pop();
    }
  }

  dequeue() {
    if (this.arr.length === 0) return null;
    return this.arr.pop();
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.arr)
console.log(queue.dequeue());
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);