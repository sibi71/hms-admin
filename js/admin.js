const add_patient_btn = document.querySelector("#add-patient-btn");
const alerts = document.querySelector("#alert");

add_patient_btn.addEventListener("click",()=>{
    setTimeout(()=>{
        alerts.style.display="flex";
    },1000)
   
   
})