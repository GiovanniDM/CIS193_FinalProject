"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 3

   Clock Face
   Author: Giovanni Munoz
   Date:   March 13, 2021


*/

moveHands;
setInterval(moveHands, 1000);

function moveHands() {
   var nowTime = new Date();
   var nowSeconds = nowTime.getSeconds();
   var nowMinutes = nowTime.getMinutes();
   var nowHours = nowTime.getHours();

   var secondsAngle = nowSeconds*6;
   var minutesAngle = (nowMinutes + nowSeconds/60)*6;
   var hoursAngle = (nowHours + nowSeconds/3600 + nowMinutes/60)*30;

   rotateHand(secondsAngle, "seconds");
   rotateHand(minutesAngle, "minutes");
   rotateHand(hoursAngle, "hours");

}

/* ------------------------------------------------

   The rotateHand() using the transform style to rotate the hand
   image by a specified angle
*/

function rotateHand(angle, hand) {
   document.getElementById(hand).style.transform = "rotate(" + angle + "deg)";
}
