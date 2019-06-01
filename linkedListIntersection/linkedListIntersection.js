/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

function linkedListIntersection(list1, list2) {
  const hash = {}
  while(list1.next || list2.next){
    if(list1 && hash.hasOwnProperty(list1.value)) {
      return list1
    } else {
      hash[list1.value] = list1.value;
    }
    if(list2 && hash.hasOwnProperty(list2.value)) {
      return list2
    } else {
      hash[list2.value] = list2.value;
    }
    list1 = list1.next;
    list2 = list2.next;
  }
  return null
}

// Test

  // const nodeA = Node('A');
  // const nodeB = Node('B');
  // const nodeC = Node('C');
  // const nodeD = Node('D');

  // nodeA.next = nodeB;
  // nodeB.next = nodeC;
  // nodeC.next =  nodeD

  // const nodeX = Node('X');
  // const nodeY = Node('Y');

  // nodeX.next = nodeY;
  // nodeY.next = nodeC;

  // console.log(linkedListIntersection(nodeA, nodeX));
