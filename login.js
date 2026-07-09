// Hospital Management System Login

function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Default Admin Login
    const adminUser = "admin";
    const adminPass = "admin123";

    if (username === "" || password === "") {
        alert("Please enter Username and Password");
        return;
    }

    if (username === adminUser && password === adminPass) {

        // Save login status
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("username", username);

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Username or Password");

    }

}

// Press Enter to Login
document.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        login();
    }

});
