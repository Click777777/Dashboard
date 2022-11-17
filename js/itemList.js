// to max the view
toMax.addEventListener("click", () => {
  formCtrl.classList.toggle("max");
  iconCont.style.display = "none";
  iconExp.style.display = "block";
});
exxpand.addEventListener("click", () => {
  formCtrl.classList.toggle("max");
  iconCont.style.display = "block";
  iconExp.style.display = "none";
});
