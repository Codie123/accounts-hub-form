const userAmount = document.querySelectorAll(".amount");
const total = document.querySelector(".amountTotal");

const vatAmount = document.querySelectorAll(".vatAmount");
const vatTotal = document.querySelector(".vatTotal");

const adjustAmount = document.querySelectorAll(".adjustAmount");
const adjustTotal = document.querySelector(".adjustTotal");

// let userData = [];
// let userData1 = [];
// let userData2 = [];
let temp = 0;

userAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    // console.log(e.target.value);
    temp = 0;
    document.querySelectorAll(".amount").forEach((y) => {
      temp += Number(y.value);
    });
    total.value = `${temp}`;
  });
});

// _______________________________
vatAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    temp = 0;
    document.querySelectorAll(".vatAmount").forEach((y) => {
      temp += Number(y.value);
    });
    vatTotal.value = `${temp}`;
  });
});

//_______________________________________________

adjustAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    temp = 0;
    document.querySelectorAll(".adjustAmount").forEach((y) => {
      temp += Number(y.value);
    });
    adjustTotal.value = `${temp}`;
  });
});
