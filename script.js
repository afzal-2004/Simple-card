let Button = document.getElementById("modulbtn");
let mdl = document.querySelector(".modal");

// mdl.addEventListener("click", function () {
//   console.log("Khan");
// });
Button.addEventListener("click", function () {
  console.log("Afzal Rizvi");
  mdl.style.visibility = "visible";
});

let crs = document.getElementById("cross");
crs.addEventListener("click", function () {
  console.log("afzal");
  mdl.style.visibility = "hidden";
  // document.getElementById("modaal").style.backgroundColor = "red";
});
