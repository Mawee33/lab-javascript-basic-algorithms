// Iteration 1: Names and Input
console.log(".............iteration 1................")
var hacker1 = "Camille";
console.log(`The driver's name is ${hacker1}.`);

var hacker2 = "Marie";
console.log(`The navigator's name is ${hacker2}.`);

console.log(".............iteration 2................")

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker2.length == hacker1.length) {
  console.log(
    `Wow, you both got equally long names, ${hacker2.length} characters!`
  );
}

console.log(".............iteration 3................")

//Iteration 3: Loops
// 3.1
var hacker1Caps = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Caps = hacker1Caps + hacker1[i] + " ";
}

console.log(hacker1Caps.toUpperCase());

// 1er tour ==> i = 0 , hackerCaps = "" + "c "
// 2e tour ==> i = 1 , hackerCaps = "c " + "a "
// ...
// 8e tour ==> i = 7, hacker1Caps = "c " + "a " + "m ".... "e "
// C A M I L L E

//3.2
var hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse = hacker2Reverse + hacker2[i];
}

console.log(hacker2Reverse);

//1er tour ==> i = 5 , hacker2Reverse = "" + hacker2[5] = "" + e
//2 tour ==> i = 4 , hacker2Reverse = e + hacker2[4] = e + i
//
// tour ==> i = 4 , hacker2Reverse = e + hacker2[4] = e + i

//3.3
if (hacker1 < hacker2) {
  console.log("The driver's name come first");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 == hacker2) {
  console.log("What?! You both got the same name?");
}

console.log(".............Bonus................")

// BONUS
var text1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
var text2 =
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
var text3 =
  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

let words = 1;

function howManyWords(text) {
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    if (letter == " ") {
      words = words + 1;
    }
  }
  return words;
}

console.log(howManyWords(text1));

var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var wordsInparagraph = paragraph.split(" ");

for (i=0; i<wordsInparagraph.length; i++) {
  if(wordsInparagraph[i] === "et") {
  console.log(wordsInparagraph[i])
  }
  }
