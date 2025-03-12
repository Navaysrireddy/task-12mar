document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const users = {
        "admin": { password: "admin123", role: "admin" },
        "user": { password: "user123", role: "user" }
    };

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (users[username] && users[username].password === password) {
        localStorage.setItem("role", users[username].role);
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});