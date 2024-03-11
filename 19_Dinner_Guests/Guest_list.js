"use strict";
let Guest_list = ['ahmed', 'baba', 'amir',];
//for(let i=0; i<Guest_list.length; i++){
//console.log('Dear mr. ' + Guest_list[i] + ' , \n\nit is our pleasure to invite you in our party.  \n\nthank You!\n\n  ')
//}
let absent_guest = 'ahmed';
let new_guest = 'ali';
Guest_list[0] = new_guest;
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear mr. ' + Guest_list[i] + ' , \n\nit is our pleasure to invite you in our party.  \n\nthank You!\n\n  ')
//     }
// console.log(` mr.  ${absent_guest} is not coming to the party. `);
// console.log('good news! we find big table so we are inviting 3 more guest.')
Guest_list.unshift('sir zia khan');
Guest_list.splice(2, 0, 'akbar');
Guest_list.push('sain');
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear mr. ' + Guest_list[i] + ' , \n\nit is our pleasure to invite you in our party.  \n\nthank You!\n\n  ')
//     }
// console.log('\nsorry can not arrange big table, only tow people will be invited.');
while (Guest_list.length > 2) {
    let remove_guest = Guest_list.pop();
    // console.log(`sorry mr. ${remove_guest}, you are not invited for dinner.`);
}
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear mr. ' + Guest_list[i] + ' , \n\nyou are still invited.  \n\nthank You!\n\n  ')
//     }
Guest_list.splice(0, 2);
console.log(Guest_list);
//Exercise 19
console.log(`Total number of Guest are: 0 ${Guest_list}`);
