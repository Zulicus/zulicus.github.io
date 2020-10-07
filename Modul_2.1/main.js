const form = document.querySelector("#addToList");
const addNew = document.querySelector("#addToListInput");
const list = document.querySelector("#todoList");
//Set focus on text input
addNew.focus();

//Add event listener for submitting form.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(addNew.value);
});

//Add new list element
function addTodo(newText) { 
  list.insertAdjacentHTML(
    "beforeend",
    `<li>${newText}<button onclick="deleteTodo(this)">Delete</button></li>`
  );
  form.reset();
  addNew.focus();
}

//Deletes the list element
function deleteTodo(element) {
  element.parentElement.remove();
  addNew.focus();
}
