window.onload = function () {
  function onClick() {
    document.querySelector(".sidenav").style.display = "block";
    document.querySelector(".black_bg").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".store__categ").style.visibility = "hidden";
  }
  function offClick() {
    document.querySelector(".sidenav").style.display = "none";
    document.querySelector(".black_bg").style.display = "none";
    document.querySelector("body").style.removeProperty("overflow");
    document.querySelector(".store__categ").style.removeProprty("visibility");
  }
  document
    .querySelector(".navbar__toggleBtn")
    .addEventListener("click", onClick);
  document.querySelector(".cancel").addEventListener("click", offClick);
};

// window.onload = function () {
//   function onClick() {
//     document.querySelector(".answer").style.display = "block";
//   }
//   function offClick() {
//     document.querySelector(".answer").style.display = "none";
//   }
//   document.querySelector(".question").addEventListener("click", onClick);
//   document.querySelector(".question").addEventListener("click", offClick);
// };
