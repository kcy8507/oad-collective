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

function openClose() {
  function onClick() {
    document.querySelector(".toc-content").style.display = block;
    document.querySelector(".toc-toggle").style.display = block;
  }
  function offClick() {
    document.querySelector(".toc-toggle").style.display = none;
  }
  document.querySelector(".toc-content").addEventListener("click", onClick);
  document.querySelector(".toc-content").addEventListener("click", offClick);
}
// function openClose() {
//   if (document.querySelector(".toc-content").style.display === "block") {
//     document.querySelector(".toc-toggle").style.display = "none";
//   } else {
//     document.querySelector(".toc-content").style.display = "block";
//     document.querySelector(".toc-toggle").style.display = "none";
//   }
// }
