// Hospital Management System - Appointment Management

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

// Load Appointments
window.onload = function () {
    displayAppointments();
};

// Add Appointment
function addAppointment() {

    let patientName = document.getElementById("patientName").value.trim();
    let doctorName = document.getElementById("doctorName").value.trim();
    let appointmentDate = document.getElementById("appointmentDate").value;
    let appointmentTime = document.getElementById("appointmentTime").value;

    if (
        patientName === "" ||
        doctorName === "" ||
        appointmentDate === "" ||
        appointmentTime === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    let appointment = {
        id: Date.now(),
        patientName: patientName,
        doctorName: doctorName,
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime
    };

    appointments.push(appointment);

    localStorage.setItem("appointments", JSON.stringify(appointments));

    displayAppointments();

    // Clear Form
    document.getElementById("patientName").value = "";
    document.getElementById("doctorName").value = "";
    document.getElementById("appointmentDate").value = "";
    document.getElementById("appointmentTime").value = "";

    alert("Appointment Booked Successfully");
}

// Display Appointments
function displayAppointments() {

    let table = document.getElementById("appointmentTable");

    table.innerHTML = "";

    appointments.forEach(function(appointment, index){

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${appointment.patientName}</td>
            <td>${appointment.doctorName}</td>
            <td>${appointment.appointmentDate}</td>
            <td>${appointment.appointmentTime}</td>
            <td>
                <button class="delete-btn"
                onclick="deleteAppointment(${appointment.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

}

// Delete Appointment
function deleteAppointment(id){

    if(confirm("Are you sure you want to delete this appointment?")){

        appointments = appointments.filter(function(item){
            return item.id !== id;
        });

        localStorage.setItem("appointments", JSON.stringify(appointments));

        displayAppointments();

        alert("Appointment Deleted Successfully");

    }

}
