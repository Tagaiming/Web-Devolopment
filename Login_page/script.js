let Email=document.getElementById("email")
let password=document.getElementById("pass")
let submit_btn=document.getElementById("submit")

document.addEventListener("DOMContentLoaded",()=>{
    submit_btn.addEventListener("click",()=>{
        if (Email.value=="example@gamil.com"&& password.value==123456) {
            window.location.href='main.html'
        }
        else{
            alert("Enter correct number and password")
        }
    })
})