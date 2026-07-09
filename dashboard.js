// Hospital Management System - Dashboard

// Check Login Status
function checkLogin() {

    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        alert("Please Login First!");

        window.location.href = "login.html";

    }

}

// Logout Function
function logout() {

    let confirmLogout = confirm("Do you want to Logout?");

    if (confirmLogout) {

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");

        alert("Logged Out Successfully");

        window.location.href = "login.html";

    }

}

// Dashboard Welcome
function welcomeUser() {

    let username = localStorage.getItem("username");

    if (username) {

        console.log("Welcome " + username);

    }

}

// Load Dashboard
window.onload = function () {

    checkLogin();

    welcomeUser();

};
