var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var table = document.getElementById("demo");

const todoItems = [];

form.addEventListener('submit', function name(e) {
    e.preventDefault();

    const person = {
        username: username.value,
        email: email.value,
        password: password.value

    };



    if (person.username == "najaf" && person.email == "najafhanif29@gmail.com" && person.password == "najaf1997") {
        window.location.href = "form.html";
        todoItems.push(person);

        username.value = ' ';
        email.value = ' ';
        password.value = ' ';

        table.innerHTML = ' ';

        for (const item of todoItems) {
            const tr = document.createElement('tr')
            for (const key in item) {
                const td = document.createElement('td')
                td.innerText = item[key]
                tr.appendChild(td)
            }
            table.appendChild(tr);
        }
    }

    else {
        alert("Incorrect Username Email and Password");
    }


})
