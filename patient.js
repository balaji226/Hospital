// Hospital Management System - Patient Management

let patients = JSON.parse(localStorage.getItem("patients")) || [];

// Load existing patients when page opens
window.onload = function () {
    displayPatients();
};

// Add Patient
function addPatient() {

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value.trim();
    let disease = document.getElementById("disease").value.trim();

    if (name === "" || age === "" || gender === "" || disease === "") {
        alert("Please fill all fields");
        return;
    }

    let patient = {
        id: Date.now(),
        name: name,
        age: age,
        gender: gender,
        disease: disease
    };

    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));

    displayPatients();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("disease").value = "";

    alert("Patient Added Successfully");
}

// Display Patients
function displayPatients() {

    let table = document.getElementById("patientTable");

    table.innerHTML = "";

    patients.forEach(function(patient, index) {

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td>${patient.disease}</td>
            <td>
                <button class="delete-btn" onclick="deletePatient(${patient.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });

}

// Delete Patient
function deletePatient(id) {

    if (confirm("Are you sure you want to delete this patient?")) {

        patients = patients.filter(function(patient) {
            return patient.id !== id;
        });

        localStorage.setItem("patients", JSON.stringify(patients));

        displayPatients();

    }

}
