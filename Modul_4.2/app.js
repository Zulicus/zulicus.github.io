//My global const field
const postsEl = document.querySelector(".posts"),
  userEl = document.querySelector(".user-container"),
  apiURL = "https://jsonplaceholder.typicode.com";

//Fetches and displays all posts
fetch(apiURL + "/posts")
  .then((result) => result.json())
  .then((data) => {
    let posts = "";
    data.forEach((element) => {
      //Adds all the posts together in one string
      posts =
        posts +
        `<div class="post">
        <h3 class="post-title">${element.title}</h3>
        <div class="post-body">${element.body}</div>
        <button class="comment-button" data-postid="${element.id}">Read comments</button>
        <button class="author-button" data-userid="${element.userId}">Author info</button>
        <ul class="comments"></ul>
        </div>`;
    });
    //Displays all posts at the same time
    postsEl.innerHTML = posts;
  });

//Checking fo clicks anywhere on the screen
document.addEventListener("click", (e) => {
  //If the click happened on a comment button, the comments are displayed
  if (e.target.getAttribute("class") === "comment-button") {
    const postId = e.target.getAttribute("data-postid");
    fetch(apiURL + "/comments")
      .then((result) => result.json())
      .then((data) => {
        const commentsEl = document.querySelectorAll(".comments");
        let comments = "";
        data.forEach((element) => {
          if (element.postId == postId) {
            comments =
              comments +
              `<li class="comment">
                  <div>${element.email}</div>
                  <div>${element.name}</div>
              </li>`;
          }
        });
        commentsEl[postId - 1].innerHTML = comments;
      });

    //If the click happened on an author button, the poster's information is displayed
  } else if (e.target.getAttribute("class") === "author-button") {
    const userId = e.target.getAttribute("data-userid");
    fetch(apiURL + "/users")
      .then((result) => result.json())
      .then((data) => {
        //Put all the relevant user information into user information box
        let user = `<div class="user">
        <h2>${data[userId - 1].username}</h2>
        <div>Full name: ${data[userId - 1].name}</div>
        <div>Email address: ${data[userId - 1].email}</div>
        <div>Phone: ${data[userId - 1].phone}</div>
        <br>
        <div>Address:</div>
        <div>city: ${data[userId - 1].address.city}</div>
        <div>street: ${data[userId - 1].address.street}</div>
        <div>zipcode: ${data[userId - 1].address.zipcode}</div>
        <div>Website: ${data[userId - 1].Website}</div>
        <br />
        <div>Company: ${data[userId - 1].company.name}</div>
        <div>${data[userId - 1].company.catchPhrase}</div>
        <br>
      </div>`;
        userEl.innerHTML = user; //Edditor's note: Instead of displaying multiple users I opted for only having one single user displayed at the time

        //This changes the colour of the posts to match the user information box, I did this to clarify which user made what post
        const postArray = document.querySelectorAll(".post");
        postArray.forEach((element) => {
          if (element.children[3].getAttribute("data-userid") == userId) {
            element.style.backgroundColor = "rgba(111, 111, 255, 0.514)";

            //This is to reset the post-colours when another user is selected
          } else {
            element.style.backgroundColor = "white";
          }
        });
      });
  }
});
