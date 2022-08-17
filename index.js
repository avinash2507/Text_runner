const textComp = document.querySelector(".text-container");
const career = [
  "Youtuber",
  "Engineer",
  "Coder",
  "Developer",
  "Learner",
  "Thinker",
  
];
let textIndex = 0;
let careerIndex = 0;

updateText();
function updateText() {
  textIndex++;
  textComp.innerHTML = `<h1>I Am ${
    career[careerIndex].slice(0, 1) === "E" ? "An" : "A"
  }  ${career[careerIndex].slice(0, textIndex + 1)}</h1>`;
  if (textIndex === career[careerIndex].length) {
    careerIndex++;
    textIndex = 0;
  }
  if (careerIndex === career.length) {
    careerIndex = 0;
}
setTimeout(updateText, 200);
// console.log("index",careerIndex);
}

// console.log("ajihaaan");