const userAmount = document.querySelectorAll(".amount");
const total = document.querySelector(".amountTotal");

const vatAmount = document.querySelectorAll(".vatAmount");
const vatTotal = document.querySelector(".vatTotal");

const adjustAmount = document.querySelectorAll(".adjustAmount");
const adjustTotal = document.querySelector(".adjustTotal");

let userData,
  userData1,
  userData2 = [];

userAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    // calculate(e.target.value);
    !e.target.value
      ? console.log("no value")
      : userData.push(Number(e.target.value));
    calculate(userData);
  });
});
function calculate(val) {
  console.log(val);
  let temp = 0;
  for (let i = 0; i < val.length; i++) {
    temp += val[i];

    total.value = `${temp}`;
    // console.log(temp);
  }

  //   total.value = `${}`;
}
// _______________________________
vatAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    !e.target.value
      ? console.log("no value ")
      : userData1.push(Number(e.target.value));
    setValue(userData1);
  });
});
function setValue(val) {
  let temp = 0;
  for (let i = 0; i < val.length; i++) {
    temp += val[i];
    vatTotal.value = `${temp}`;
  }
}

//_______________________________________________

adjustAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    !e.target.value
      ? console.log("no value ")
      : userData2.push(Number(e.target.value));
    setValue2(userData2);
  });
});

function setValue2(val) {
  let temp = 0;
  for (let i = 0; i < val.length; i++) {
    temp += val[i];
    adjustTotal.value = `${temp}`;
  }
}
