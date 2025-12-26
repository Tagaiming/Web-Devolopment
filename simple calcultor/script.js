let frist_input=document.getElementById("frist");
let second_input=document.getElementById("second")
let btnsum=document.getElementById("sum")
let btnmin=document.getElementById("min")
let btndiv=document.getElementById("div")
let btnmol=document.getElementById("mol")
let resut_info=document.getElementById("result")


document.addEventListener("DOMContentLoaded",()=>{
btnsum.addEventListener("click",()=>{
    if(frist_input.value!="" && second_input.value!=""){
    pluse();}
    else{
    resut_info.innerHTML="Frsit enter your number"
}
})
})

document.addEventListener("DOMContentLoaded",()=>{
    btnmin.addEventListener("click",()=>{
        if (frist_input.value!="" && second_input.value!="") {
          minuse()  
        }
        else{
            resut_info.innerHTML="Frist enter your number";
        }
       

    })
})
document.addEventListener("DOMContentLoaded",()=>{
    btnmol.addEventListener("click",()=>{
         if (frist_input.value!="" && second_input.value!="") {
          into()  
        }
        else{
            resut_info.innerHTML="Frist enter your number";
        }

    })
})
document.addEventListener("DOMContentLoaded",()=>{
    btndiv.addEventListener("click",()=>{
         if (frist_input.value!="" && second_input.value!="") {
          divide() 
        }
        else{
            resut_info.innerHTML="Frist enter your number";
        }

    })
})










function pluse() {
    let s=parseInt(frist_input.value)+parseInt(second_input.value)
    resut_info.innerHTML=`Your result is:${s}`;
    
    
}
function divide() {
    let m=parseInt(frist_input.value)/parseInt(second_input.value)
    resut_info.innerHTML=`Your result is:${m}`;
    
    
    
}
function minuse() {
    let i=parseInt(frist_input.value)-parseInt(second_input.value)
   resut_info.innerHTML=`Your result is:${i}`;
    
    
}
function into() {
    let d=parseInt(frist_input.value)*parseInt(second_input.value)
    resut_info.innerHTML=`Your result is:${d}`;
    
    
}