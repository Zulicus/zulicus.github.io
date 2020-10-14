//Checks if mouse is over a balloon
document.addEventListener("mouseover", (event) => {
  const unPopped = event.target.classList.contains("balloon");
  const popped = event.target.classList.contains("pop");

  //Makes Sure the balloon isn't popped already
  if (unPopped && !popped) {
    event.target.classList.add("pop");
    const balloonCount = document.querySelectorAll(".balloon");
    const popCount = document.querySelectorAll(".balloon.pop");

    //Checks if all balloons are popped
    if (popCount.length === balloonCount.length) {
      const balloons = document.querySelector(".balloons");
      balloons.innerHTML = "";
      const win = document.createElement("h1");
      win.textContent = "Congratulations! You Won!";
      balloons.classList.remove("balloons");
      win.classList.add("won");
      balloons.appendChild(win);
    }
  }
});
