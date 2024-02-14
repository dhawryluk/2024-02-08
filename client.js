//Number Modification

const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");

secondNumber.textContent = firstNumber.textContent;

function changeNumber() {
  let currentValue = parseInt(secondNumber.textContent);
  currentValue++;
  secondNumber.textContent = currentValue;
}

// String Modification - Length

const firstString = document.querySelector("#firstString");
const secondString = document.querySelector("#secondString");

secondString.textContent = firstString.textContent;

function changeLength() {
  let newValue = secondString.textContent.length;
  secondString.textContent = newValue;
}

console.log();

// String Modification - Replace

const firstString1 = document.querySelector("#firstString1");
const secondString2 = document.querySelector("#secondString2");

secondString2.textContent = firstString1.textContent;

function changeWord() {
  let result = secondString2.textContent.replace("Modification", "Hack");
  secondString2.textContent = result;
}

// Array Modification - Concat

let firstArray = ["Jeep", "Mustang"];
let secondArray = ["Camaro", "Ferrari"];
let thirdArray = firstArray.concat(secondArray);

function changeArray() {
  document.getElementById("thirdArray").innerText = thirdArray;
}

// Array Modification - Push

const carsBefore = ["Jeep", "Mustang"];
carsBefore.push("Camaro", "Ferrari");

function carsResult() {
  document.getElementById("cars-after").innerHTML = carsBefore;
}

// Object Modification - Values

const zombieCamo = {
  a: "Golden Enigma",
  b: " Zircon Scale",
  c: " Serpentinite",
  d: " Borealis",
};

function zombie() {
  document.getElementById("camo-after").innerHTML = Object.values(zombieCamo);
}

// Object Modification - Entries

const favLoadout = {
  a: "AMR9",
  b: " XRK Stalker",
  c: {
    smg: "WSP9",
    assaultRifle: "RAM7",
  },
};

function loadout() {
  document.getElementById("guns-after").innerHTML =
    favLoadout.c.smg + ", " + favLoadout.c.assaultRifle;
}
