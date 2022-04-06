window.addEventListener("load", init);
var allapot = false;

function $(elem) {
  return document.querySelector(elem);
}
function init() {
  var auto = '<div class="auto"><img src="kepek/auto3.png"/></div>';
  $(".forgalom").innerHTML += auto;
  var autoElem = document.querySelectorAll(".auto")[0];

  var piros = $(".piros");
  var sarga = $(".sarga");
  var zold = $(".zold");
  sarga.style.opacity = "20%";
  zold.style.opacity = "20%";
  setInterval(() => {
    if (!allapot) {
      sarga.style.opacity = "100%";
    }
  }, 1000);

  setInterval(() => {
    if (allapot) {
      piros.style.opacity = "100%";
      zold.style.opacity = "20%";
      console.log(piros.style.opacity);
    } else {
      piros.style.opacity = "20%";
      sarga.style.opacity = "20%";
      zold.style.opacity = "100%";
      autoElem.classList.add("balroljobbra");
    }
    allapot = !allapot;
  }, 2000);
}
