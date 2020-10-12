  class sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    };
    this.stop = function () {
      this.sound.pause();
    };
  }
}

//Variabler
let balloonCounter=0;
var popped, win;
win = new sound("sounds/balloonVictory.mp3");
game();
//Check all balloons
function game(){
  document.querySelectorAll(".balloon").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
        //Removes the balloon class and leaves only the pop class
        item.classList.remove("balloon");
        popped = new sound("sounds/balloonpop.mp3");
        popped.play();
        balloonCounter++;
        //When all balloons are poped, this will display the victory screen
        if(balloonCounter==45){
            item.insertAdjacentHTML(
                "afterend",
                '<div id="victory"><h1>You did it!</h1></div><div><button onclick="reset(this)">Reset Game!</button></div>'
              );
            document.querySelectorAll(".pop").forEach((pop) => {
                pop.remove()});
            }
    },{once:true});
  });
};

function reset(doc){
  let blons = '<div class="balloon pop"><h1>POP!</h1></div>';
  win.play();
  for (let i=0;i<45;i++){
    doc.insertAdjacentHTML("afterend", `${blons}`);
    }
  victory.remove();
  doc.remove();
  balloonCounter=0;
  game();
};