let frist_in = document.querySelector(".input1");
let second_in = document.querySelector(".input2");
let third_in = document.querySelector(".input3");
let forth_in = document.querySelector(".input4");
let fifth_in = document.querySelector(".input5");
let sixth_in = document.querySelector(".input6");
let optional = document.querySelector(".input7");
let cal_btn = document.querySelector(".btn");
let re=document.querySelector(".result");
document.addEventListener("DOMContentLoaded", () => {
  cal_btn.addEventListener("click", () => {
    let m1 = Number(frist_in.value);
    let m2 = Number(second_in.value);
    let m3 = Number(third_in.value);
    let m4 = Number(forth_in.value);
    let m5 = Number(fifth_in.value);
    let m6 = Number(sixth_in.value);
    let op = Number(optional.value);

    let gpa1 = gpa_cal(m1);
    let gpa2 = gpa_cal(m2);
    let gpa3 = gpa_cal(m3);
    let gpa4 = gpa_cal(m4);
    let gap5 = gpa_cal(m5);
    let gpa6 = gpa_cal(m6);
    let gpaop = gpa_cal(op);
    let extra = gpaop > 2 ? gpaop - 2 : 0;
    if (gpa1==0||gpa2==0||gpa3==0||gpa4==0 || gap5==0 ||gpa6==0) {
        re.innerHTML="You fail exam"
    }
    else{
    let avg=(gpa1+gpa2+gpa3+gpa4+gap5+gpa6)/6
    let final_gpa=avg+extra
    if (final_gpa> 5) final_gpa = 5;
    re.innerHTML = `Your Gpa is :${final_gpa}`
    }
   

  });
});

let gpa_cal = (num) => {
  if (num <= 100 && num >= 80) {
    return 5.0;
  } else if (num <= 79 && num >= 70) {
    return  4.0;
  } else if (num <= 69 && num >= 60) {
    return 3.5;
  } else if (num <= 59 && num >= 50) {
    return 3.0;
  } else if (num <= 49 && num >= 40) {
    return 2.0;
  } else if (num <= 39 && num >= 33) {
    return 1.0;
  } else if (num <= 32 && num >= 0) {
    return 0.00;
  } else {
    return "Somthink is wrong";
  }
};
