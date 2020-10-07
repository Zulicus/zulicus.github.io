//Variables
const clear = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");
const screen = document.querySelector(".screen");
let tracker = "0";

//Displays the initial 0 before anything is inputed
display(tracker);

//Checking for buttonpress
document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    //makes sure the displayed number doesn't start with a 0 ex: 077+85
    if (tracker == "0") {
      tracker = "";
    }
    //Adds the imput from the button to the Tracking Variable
    tracker = tracker.concat(item.getAttribute("data-num").toString());
    display(tracker);
  });
});

//Calculates the string
equal.addEventListener("click", (event) => {
  tracker = eval(tracker).toString();
  display(tracker);
});

//Resets the String
clear.addEventListener("click", (event) => {
  tracker = "0";
  display(tracker);
});

//Updates the screen
function display(x) {
  screen.value = x;
}
