
var theSonnet = document.getElementById("sonnet").innerHTML;

console.log("The starting position of the word 'orphans' is " + theSonnet.indexOf("orphans"));
console.log("The sonnet has " + theSonnet.length + " characters in it");




theSonnet = theSonnet.replace("winter", "yuletide");
theSonnet = theSonnet.replace(/ the /gi, " a large ");

// theSonnet = theSonnet.split(" the ").join(" a large ");

document.getElementById("sonnet").innerHTML = theSonnet;
