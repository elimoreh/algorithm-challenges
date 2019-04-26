/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  class Stack {

    constructor(){
      this.arr = [];
      this.minArr = [];
    }

      push(value) {
        this.arr.push(value);
        if  (this.minArr.length === 0) { this.minArr.push(value); }
        if (this.min() >= value) { this.minArr.push(value); }
      }

      pop() {
        var value  = this.arr.pop();
        if(value === this.min()) { this.minArr.pop(); }
      }

      size() {
        return this.arr.length;
      }

      min() {
        return this.minArr[this.minArr.length - 1];
      }

  }



  // add an item to the top of the stack


  // remove an item from the top of the stack


  // return the number of items in the stack
