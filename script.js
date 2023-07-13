// let myFunction = () => {
//     let x = document.getElementById("myLinks");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
let burgerMenu = document.getElementById('hamburger');

let overlay = document.getElementById('myLinks');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
