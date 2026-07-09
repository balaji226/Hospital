// Hospital Management System - Doctor Management

let doctors = JSON.parse(localStorage.getItem("doctors")) || [];

// Load doctors when page opens
window.onload = function () {
    displayDoctors();
};

// Add Doctor
function addDoctor() {

    let doctorName = document.getElementById("doctorName").value.trim();
    let specialization = document.getElementById("specialization").value.trim();
    let experience = document.getElementById("experience").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (
        doctorName === "" ||
        specialization === "" ||
        experience === "" ||
        phone === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    let doctor = {
        id: Date.now(),
        doctorName: doctorName,
        specialization: specialization,
        experience: experience,
        phone: phone
    };

    doctors.push(doctor);

    localStorage.setItem("doctors", JSON.stringify(doctors));

    displayDoctors();

    // Clear form
    document.getElementById("doctorName").value = "";
    document.getElementById("specialization").value = "";
    document.getElementById("experience").value = "";
    document.getElementById("phone").value = "";

    alert("Doctor Added Successfully");
}

// Display Doctors
function displayDoctors() {

    let table = document.getElementById("doctorTable");

    table.innerHTML = "";

    doctors.forEach(function (doctor, index) {

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${doctor.doctorName}</td>
            <td>${doctor.specialization}</td>
            <td>${doctor.experience} Years</td>
            <td>${doctor.phone}</td>
            <td>
                <button class="delete-btn"
                onclick="deleteDoctor(${doctor.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

}

// Delete Doctor
function deleteDoctor(id) {

    let confirmDelete = confirm("Are you sure you want to delete this doctor?");

    if (confirmDelete) {

        doctors = doctors.filter(function (doctor) {
            return doctor.id !== id;
        });

        localStorage.setItem("doctors", JSON.stringify(doctors));

        displayDoctors();

        alert("Doctor Deleted Successfully");
    }

}
