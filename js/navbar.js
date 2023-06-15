const links = document.getElementById("links");
const navbar = document.getElementById("navbar");
function openmenu() {
    links.style.right = "0";
  }
  function closemenu() {
    links.style.right = "-200px";
  }

document.onclick = function (event) {
    if (!navbar.contains(event.target)) {
        closemenu();
    }
  }


