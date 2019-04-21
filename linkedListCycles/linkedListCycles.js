/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 *
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

//node constructor that gives the node both a value and a next
var Node = function(value) {
  return { value: value, next: null };
};

//the hair moves at twice the speed of the turtle
  //if the hair and turtle reach the same point the linked list has a cylce.
var hasCycle = function(turtle, hair = turtle.next) {
    hair = hair.next;
    //checks if the list has an end insight
    if(!hair || !hair.next) { return false; }
    //checks to see if any point the hair and the turtle are at equal places
    if(turtle.value === hair.value) { return true; }
    //returns the function and keeps going until one of the base cases is met
    return hasCycle(turtle.next, hair.next);
  };
