"use strict";
let Guest_list = ['ahmed', 'baba', 'amir',];
//for(let i=0; i<Guest_list.length; i++){
//console.log('Dear mr. ' + Guest_list[i] + ' , \n\nit is our pleasure to invite you in our party.  \n\nthank You!\n\n  ')
//}
let absent_guest = 'ahmed';
let new_guest = 'ali';
Guest_list[0] = new_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear mr. ' + Guest_list[i] + ' , \n\nit is our pleasure to invite you in our party.  \n\nthank You!\n\n  ');
}
console.log(` mr.  ${absent_guest} is not coming to the party. `);
console.log('good news! we find big table so we are inviting 3 more guest.');
Guest_list.unshift('sir zia khan');
Guest_list.splice(2, 0, 'akbar');
Guest_list.push('sain');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear mr. ' + Guest_list[i] + ' , \n\nit is our pleasure to invite you in our party.  \n\nthank You!\n\n  ');
}
