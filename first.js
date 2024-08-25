var user = document.getElementById("username");
var email = document.getElementById("useremail");
var pass = document.getElementById("userpassword");

var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log("work");
});




for (let i = 0; i < 100; i++) {
    console.log("Welcome");
}