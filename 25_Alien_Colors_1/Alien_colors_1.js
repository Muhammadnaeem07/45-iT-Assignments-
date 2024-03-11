"use strict";
//create a variable called alien_color
let alien_color = 'green';
//write an if statement to test whether the alien's color is green. if it is, print a message that the player just earned 5 points.
if (alien_color === 'green') {
    console.log("Player just earned 5 points !");
}
//write one version of this program that passes the if test and another that fails.
alien_color = 'Yellow';
//(the version that fails will have no output.)
if (alien_color === 'green') {
    console.log("Player just earned 5 points !");
}
