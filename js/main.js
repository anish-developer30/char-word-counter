let char = document.getElementById("char");
let word = document.getElementById("word");
let box = document.getElementById("box");

//  converter
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const capital = document.getElementById("capital");

// alignment
const center = document.getElementById("center");
const right = document.getElementById("right");
const left = document.getElementById("left");
const justify = document.getElementById("justify");

// theme
const theme = document.getElementById("theme");

theme.onclick = () => {
  document.body.classList.toggle("dark");
};

box.addEventListener("input", function (val) {
  let text = box.value;
  let len = text.length;
  char.innerHTML = len;
  text = text.trim();
  let words = text.split(" ");
  let wordlen = words.filter((value) => {
    return value != "";
  });
  word.innerHTML = wordlen.length;
  capital.onclick = () => {
    let cap = capitalize(words);
    box.value = cap;
  };
  upper.onclick = () => {
    box.value = text.toUpperCase();
  };
  lower.onclick = () => {
    box.value = text.toLowerCase();
  };
  center.onclick = () => {
    box.style.textAlign = "center";
  };
  right.onclick = () => {
    box.style.textAlign = "right";
  };
  left.onclick = () => {
    box.style.textAlign = "left";
  };
  justify.onclick = () => {
    box.style.textAlign = "justify";
  };
});

function capitalize(str) {
  let capital = str.map((wordchar) => {
    return wordchar.charAt(0).toUpperCase() + wordchar.slice(1);
  });
  return capital.join(" ");
}
