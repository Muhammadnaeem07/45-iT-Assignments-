"use strict";
//store the location in a array. make sure the array in not in alphabetical order. 
let places = ['Italy', 'dubai', 'agra', 'japan', 'Germany'];
//print your array in its original order.
console.log('Org ' + places);
//print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
//show that your array is still in its original order by printing it.
console.log('Org ' + places);
//print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log('Org ' + places);
//Reverse the order of your list. print the array to show that its order has changed.
console.log('Org ' + places.reverse());
//Revers the order of your list again. print the list to show its back to its original order.
console.log('Org ' + places.reverse());
//sort your array its stored in alphabetical order. print the array to show that its order has been changed.
console.log('Org ' + places.sort());
// sort to change your array so its stored in revers alphabetical order. print the list to show that its order has changed.
console.log('Org ' + places.sort().reverse());
