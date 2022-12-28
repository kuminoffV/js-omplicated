"use strict";

const man = document.getElementById("man");
const air = document.getElementById("air");
const btnFly = document.getElementById("animation");
const btnDump = document.getElementById("animation_1");
const btnReset = document.getElementById("reset");
let countFly = 0;
let countDump = 0;
let activeFly = false;
let activeDump = false;
let flyTime;
let flyDumpTime;

air.style.left = 0;
man.style.top = 0;

const flyAir = () => {
  countFly++;
  flyTime = requestAnimationFrame(flyAir);
  countFly < 400
    ? (air.style.left = countFly * 4 + "px")
    : cancelAnimationFrame(flyTime);
};

btnFly.addEventListener("click", () => {
  if (activeFly) {
    cancelAnimationFrame(flyTime);
    activeFly = !activeFly;
  } else {
    flyTime = requestAnimationFrame(flyAir);
    activeFly = !activeFly;
  }
});

const flyDump = () => {
  countDump++;
  flyDumpTime = requestAnimationFrame(flyDump);
  countDump < 450
    ? (man.style.top = countDump * 2 + "px")
    : cancelAnimationFrame(flyDumpTime);
};

btnDump.addEventListener("click", () => {
  if (activeDump) {
    cancelAnimationFrame(flyDumpTime);
    activeDump = !activeDump;
  } else {
    flyDumpTime = requestAnimationFrame(flyDump);
    activeDump = !activeDump;
  }
});

btnReset.addEventListener("click", () => {
  cancelAnimationFrame(flyTime);
  cancelAnimationFrame(flyDumpTime);
  countFly = 0;
  countDump = 0;
  activeFly = false;
  activeDump = false;
  air.style.left = 0;
  man.style.top = 0;
});
