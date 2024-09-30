const themeButton = document.querySelector(".light-mode");
const bentoBoxes = document.querySelector(".bento-grid").children;
const board = document.querySelector(".board");
const boardIcon = document.querySelector(".board-icon");
const body = document.getElementsByTagName("BODY")[0];
const p = document.getElementsByTagName("p");
const ul = document.getElementsByTagName("ul");
const li = document.getElementsByTagName("il");
const ionIcon = document.getElementsByTagName("ion-icon");
const projectBoxes = document.querySelectorAll(".project");
const profileButton = document.querySelectorAll(".profile-button");

themeButton.addEventListener("click", changeTheme);

function changeTheme() {
  body.classList.toggle("dark-mode");
  board.classList.toggle("dark-mode");
  boardIcon.classList.toggle("dark-mode");
  for (let i = 0; i < bentoBoxes.length; i++) {
    bentoBoxes[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < p.length; i++) {
    p[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < ul.length; i++) {
    ul[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < li.length; i++) {
    li[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < ionIcon.length; i++) {
    ionIcon[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < projectBoxes.length; i++) {
    projectBoxes[i].classList.toggle("dark-mode");
  }
  for (let i = 0; i < profileButton.length; i++) {
    profileButton[i].classList.toggle("dark-mode");
  }
}