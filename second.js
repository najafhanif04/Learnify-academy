var input = document.getElementById("inp");
var div = document.getElementById("demo");


const todoItem = []

form.addEventListener('submit', function name(e) {
    e.preventDefault();
    div.innerHTML = ' ';
    todoItem.push(inp.value)
    
    inp.value = ' ';
    for (const i of todoItem) {
        var p = document.createElement("p");
        p.innerText = i;

        div.appendChild(p);
    }
})

