"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
//const magician: string[] = ["ali", "taha", "naveed"];
//show_magicians(magician)
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the great";
    }
}
const magicians2 = ["ali", "taha", "naveed"];
//make_great(magicians2)
//show_magicians(magicians2)
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the Great");
    }
    return greatMagicians;
}
const magicians3 = ["Ali", "Taha", "Naveed"];
const greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
