//The global "const field": where all the global constants are declaired
const apiURL = "https://reqres.in/",
  fromEl = document.querySelector("#loginForm"),
  usersListEl = document.querySelector(".usersList"),
  showUsersButton = document.querySelector(".showUsersButton"),
  userInfoContainer = document.querySelector(".userInfoContainer");

//Wating for form submition
fromEl.addEventListener("submit", (event) => {
  event.preventDefault();

  //Checkes and validates the user input data
  fetch(apiURL + "api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: fromEl["email"].value,
      password: fromEl["password"].value,
    }),
  })
    .then((res) => res.json())
    .then((jsonData) => {
      //Error handling
      if (jsonData.error) {
        const errorMessageEl = document.querySelector("#loginErrorMessage");
        errorMessageEl.innerText = jsonData.error;
        errorMessageEl.classList.remove("hide");
      } else {
        showUsersButton.classList.remove("hide");
      }
    });
});

//Upon successful login, the user is able to view a button that, when clicked, shows other users
showUsersButton.addEventListener("click", (event) => {
  fetch(apiURL + "api/users")
    .then((res) => res.json())
    .then((data) => {
      const users = data.data,
        userList = users
          .map((user) => {
            return `<li class="user" data-userid="${user.id}">${user.first_name}</li>`;
          })
          .join("");
      usersListEl.innerHTML = userList;
    });
});

//Looks for the user to click a name to get its info
usersListEl.addEventListener("click", (e) => {
  const userId = e.target.dataset.userid;
  fetch(`${apiURL}api/users/${userId}`)
    .then((res) => res.json())
    .then((jsonData) => {
      //Local "const field"
      const user = jsonData.data,
        name = document.createElement("p"),
        avatarImg = document.createElement("img"),
        email = document.createElement("p");

      //Clears the container
      userInfoContainer.innerHTML = "";

      //assigns the new values of the users loaded in to the container
      name.innerText = `${user.first_name} ${user.last_name}`;
      avatarImg.src = user.avatar;
      email.innerText = user.email;

      userInfoContainer.append(email, avatarImg, name);
    });
});
