/*Create the output: You have written X characters, you have X characters remaining
And maximum 140*/
//SOLUTION
/* let text = prompt("Type your tweet");
However https://runjs.app/play does NOT support alert()*/
let text = "Whatever text is here";
let used = text.length;
const maximum = "140";
let remaining = maximum - text.length;
used;
remaining;
/* alert("You have written " + text.length + " characters" + ", you have " + remaining + " characters remaining");
However https://runjs.app/play does NOT support alert()*/
console.log("You have written " + text.length + " characters" + ", you have " + remaining + " characters remaining");


