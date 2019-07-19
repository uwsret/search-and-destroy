'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    if (linkedlist.head === null) return false;
    // debugger
    let fast = linkedlist.head.next
    let slow = linkedlist.head
    while (slow !== null && fast !== null) {
        if (slow.value === fast.value) {
            return true;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop