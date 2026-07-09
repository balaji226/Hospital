// Hospital Management System - Billing

let bills = JSON.parse(localStorage.getItem("bills")) || [];

// Load Bills
window.onload = function () {
    displayBills();
};

// Generate Bill
function generateBill() {

    let patientName = document.getElementById("patientName").value.trim();
    let treatment = document.getElementById("treatment").value.trim();
    let amount = document.getElementById("amount").value.trim();

    if (patientName === "" || treatment === "" || amount === "") {
        alert("Please fill all fields.");
        return;
    }

    let bill = {
        id: Date.now(),
        patientName: patientName,
        treatment: treatment,
        amount: amount
    };

    bills.push(bill);

    localStorage.setItem("bills", JSON.stringify(bills));

    displayBills();

    // Clear Form
    document.getElementById("patientName").value = "";
    document.getElementById("treatment").value = "";
    document.getElementById("amount").value = "";

    alert("Bill Generated Successfully");
}

// Display Bills
function displayBills() {

    let table = document.getElementById("billTable");

    table.innerHTML = "";

    bills.forEach(function (bill, index) {

        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${bill.patientName}</td>
            <td>${bill.treatment}</td>
            <td>₹ ${bill.amount}</td>
            <td>
                <button class="delete-btn"
                    onclick="deleteBill(${bill.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

}

// Delete Bill
function deleteBill(id) {

    if (confirm("Are you sure you want to delete this bill?")) {

        bills = bills.filter(function (bill) {
            return bill.id !== id;
        });

        localStorage.setItem("bills", JSON.stringify(bills));

        displayBills();

        alert("Bill Deleted Successfully");
    }

}
