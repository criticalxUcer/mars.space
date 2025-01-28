document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "user"; 
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
        window.location.href = "HomePage.html";
    } else {
        alert("Неверный логин или пароль");
    }
});


document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.textContent = type === "password" ? "👁" : "👁️‍🗨️";
});
