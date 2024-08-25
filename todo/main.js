const form = document.getElementById("todoform");
const todoItem = document.getElementById("todoitem");
const table = document.getElementById("table");


let todo = JSON.parse(localStorage.getItem('todoList')) || [];


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const tod = {
    person: todoItem.value,
  };

  todo.push(tod);   

  todoItem.value = " "; 

  showTodo();
  updateLocalStorage();

    
  
});



function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todo));
}

function updateTodo(index) {
  var updatedTodo = prompt("update");

  todo[index].person = updatedTodo;

  showTodo();
  updateLocalStorage();
}






function showTodo(data) {
  table.innerHTML = "";
  todo.map((item, index, array) => {
    table.innerHTML += `
        <tr>
            <td>${item.person}
            <span onClick="updateTodo(${index})">Update</span>
            <span onClick="deleteTodo(${index})"><img src="https://w7.pngwing.com/pngs/697/308/png-transparent-delete-icon-trash-trash-icon-essential-icon.png" width="30px"></span>
            </td>
        </tr>
        `;
  });
}

function deleteTodo(index) {
    todo.splice(index, 1);
    showTodo();
    updateLocalStorage();
}

showTodo();
