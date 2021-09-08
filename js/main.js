document
  .querySelector(".navbar__toggleBtn")
  .addEventListener("click", navClickOn);
document.querySelector(".cancel").addEventListener("click", navClickOff);
// document.querySelector(".question").addEventListener("click", guideClickOn);
// document.querySelector(".question").addEventListener("click", guideClickOff);

function navClickOn() {
  document.querySelector(".sidenav").style.display = "block";
  document.querySelector(".black_bg").style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector(".store__categ").style.visibility = "hidden";
}
function navClickOff() {
  document.querySelector(".sidenav").style.display = "none";
  document.querySelector(".black_bg").style.display = "none";
  document.querySelector("body").style.removeProperty("overflow");
  document.querySelector(".store__categ").style.removeProprty("visibility");
}
// function guideClickOn() {
//   document.querySelector(".answer").style.display = "block";
// }
// function guideClickOff() {
//   document.querySelector(".answer").style.display = "none";
// }

var questionArray = document.querySelectorAll(".question");
var answerArray = document.querySelectorAll(".answer");
console.log(answerArray);
document.querySelectorAll(".question").forEach(function (i) {
  i.addEventListener("click", function (e) {
    console.log(e.target);
    const clickedQuestion = [...questionArray].indexOf(e.target);
    answerArray[clickedQuestion].classList.toggle("hidden");
  });
});
