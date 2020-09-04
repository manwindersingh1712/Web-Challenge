const imgContainer = document.getElementById("imgContainer");
const myNav = document.getElementById("myNav");
const homepage = document.getElementById("homepage");
const laptopImg = document.getElementById("laptop");

window.onload = () => {
  window.scroll(0, 0);
};

function closeCurtain() {
  myNav.style.height = "0%";
  imgContainer.style.display = "block";
  setTimeout(() => {
    scaleDown();
  }, 1000);
}

function scaleDown() {
  laptopImg.style.transform = "translateY(100px)";
  homepage.classList.add("scaledDiv");
  window.scroll(0, 0);
}
