function addPatient(){

let name=document.getElementById("patientName").value;

let age=document.getElementById("patientAge").value;

if(name=="" || age==""){
    alert("Fill all details");
    return;
}

let li=document.createElement("li");

li.innerHTML="Patient Name : "+name+" | Age : "+age;

document.getElementById("patientList").appendChild(li);

document.getElementById("patientName").value="";

document.getElementById("patientAge").value="";
}
