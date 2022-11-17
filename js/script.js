let menu = document.querySelectorAll(".menu")[0];
let left = document.querySelectorAll(".left")[0];
let cancle = document.querySelectorAll(".cancle")[0];
let sub = document.querySelectorAll("#sub")[0];
let main = document.querySelectorAll("#main")[0];
let formCtrl = document.querySelectorAll(".formCtrl")[0];
let toMax = document.querySelectorAll(".toMax")[0];
let iconCont = document.querySelectorAll(".iconCont")[0];
let iconExp = document.querySelectorAll(".iconExp")[0];
let exxpand = document.querySelectorAll(".exxpand")[0];
// menu bar animation code
menu.addEventListener("click", () => {
  left.classList.add("menuIcon", "animate__animated", "animate__slideInLeft");
  left.classList.remove("animate__slideOutLeft");
});
cancle.addEventListener("click", () => {
  left.classList.add("animate__slideOutLeft");
  left.classList.remove("animate__slideInLeft");
});
