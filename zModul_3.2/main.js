//Global variables
const catURL = "https://aws.random.cat/meow";
const dogURL = "https://random.dog/woof.json";
const foxURL = "https://randomfox.ca/floof/";
const picture = document.querySelector(".picture");
const form = document.querySelector(".chooseAnimal");
const choise = document.querySelector(".dropdown");
const favorite = document.querySelector(".image");

//Waits for the Submit-button to be pressed
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Editors note: I could use an if else here but I feel that this is cleaner

  //Checks what animal is chosen
  switch (choise.value) {
    case "Cat":
      chosenCat();
      break;
    case "Dog":
      chosenDog();
      break;
    case "Fox":
      chosenFox();
      break;
    default:
      break;
  }
});

//Checks for and retrieves a cat picture
function chosenCat() {
  fetch(catURL)
    .then((response) => response.json())
    .then((data) => {
      let cat = data.file;
      console.log(cat);
      display(cat);
    });
}

//Checks for and retrieves a dog picture
function chosenDog() {
  fetch(dogURL)
    .then((response) => response.json())
    .then((data) => {
      let dog = data.url;
      console.log(dog);
      display(dog);
    });
}

//Checks for and retrieves a fox picture
function chosenFox() {
  fetch(foxURL)
    .then((response) => response.json())
    .then((data) => {
      let fox = data.image;
      console.log(fox);
      display(fox);
    });
}

//Clears the previous image and displays the new one
function display(animal) {
  const screen = document.querySelector(".image-box");
  screen.innerHTML = "";
  const image = document.createElement("img");
  image.src = animal;
  image.classList.add("image");
  screen.appendChild(image);

  //Checks for favorites
  const favorite = document.querySelector(".image");
  favorite.addEventListener("click", () => {
    displayFavorite(animal);
  });
}

//Displays favoroited pictures in a an album of their own
function displayFavorite(liked) {
  const favorite = document.querySelector(".favorites-box");
  const image = document.createElement("img");
  image.src = liked;
  image.classList.add("favorite");
  favorite.appendChild(image);
}
