const userAmount = document.querySelectorAll(".amount");
const total = document.querySelector(".amountTotal");

const vatAmount = document.querySelectorAll(".vatAmount");
const vatTotal = document.querySelector(".vatTotal");

const adjustAmount = document.querySelectorAll(".adjustAmount");
const adjustTotal = document.querySelector(".adjustTotal");

// section -II
const amountII = document.querySelectorAll(".amount-II");
const amountTotalII = document.querySelector(".amountTotal-II");

const vatII = document.querySelectorAll(".vat-II");
const vatTotalII = document.querySelector(".vatTotal-II");

const adjustII = document.querySelectorAll(".adjust-II");
const adjustTotalII = document.querySelector(".adjustTotal-II");

const totalAdjust = document.querySelectorAll(".tt-ad");
const totalFinal = document.querySelector(".tt-final");
// ends
// section III
const column12 = document.querySelector(".column12");
const column13 = document.querySelector(".column13");
const column14 = document.querySelector(".column14");
const totalVat = document.querySelector(".tt-vat");
// ends
// let userData = [];
// let userData1 = [];
// let userData2 = [];
let temp = 0;
let numbers = /^[-+]?[0-9]+$/;
userAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    if (e.target.value.match(numbers)) {
      temp = 0;
      document.querySelectorAll(".amount").forEach((y) => {
        temp += Number(y.value);
      });
      total.value = `${temp}`;

      x.classList.remove("cuz-err");
    } else {
      x.classList.add("cuz-err");
    }
  });
});

// _______________________________
vatAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    if (e.target.value.match(numbers)) {
      temp = 0;
      document.querySelectorAll(".vatAmount").forEach((y) => {
        temp += Number(y.value);
      });
      vatTotal.value = `${temp}`;
      column12.value = `${temp}`;
      difference();
      x.classList.remove("cuz-err");
    } else {
      x.classList.add("cuz-err");
    }
  });
});

//_______________________________________________

adjustAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    if (e.target.value.match(numbers)) {
      temp = 0;
      document.querySelectorAll(".adjustAmount").forEach((y) => {
        temp += Number(y.value);
      });
      adjustTotal.value = `${temp}`;
      ttvat();
      x.classList.remove("cuz-err");
    } else {
      x.classList.add("cuz-err");
    }
  });
});

//________________________________________________
amountII.forEach((x) => {
  x.addEventListener("change", (e) => {
    if (e.target.value.match(numbers)) {
      temp = 0;
      amountII.forEach((y) => {
        temp += Number(y.value);
      });
      amountTotalII.value = `${temp}`;
      x.classList.remove("cuz-err");
    } else {
      x.classList.add("cuz-err");
    }
  });
});

vatII.forEach((x) => {
  x.addEventListener("change", (e) => {
    if (e.target.value.match(numbers)) {
      temp = 0;
      vatII.forEach((y) => {
        temp += Number(y.value);
      });
      vatTotalII.value = `${temp}`;
      column13.value = `${temp}`;
      difference();
      x.classList.remove("cuz-err");
    } else {
      x.classList.add("cuz-err");
    }
  });
});
adjustII.forEach((x) => {
  x.addEventListener("change", (e) => {
    temp = 0;
    adjustII.forEach((y) => {
      temp += Number(y.value);
    });
    adjustTotalII.value = `${temp}`;
    ttvat();
  });
});

totalAdjust.forEach((x) => {
  x.addEventListener("change", () => {
    setNetVat();
  });
});

function setNetVat() {
  temp = 0;
  totalAdjust.forEach((y) => {
    temp += Number(y.value);
  });
  totalFinal.value = Number(totalVat.value) + temp;
}
function difference() {
  if (column12.value !== null && column13.value !== null) {
    column14.value = `${Math.abs(column12.value - column13.value)}`;
  }
}

function ttvat() {
  if (adjustTotal.value !== null && adjustTotalII.value !== null) {
    totalVat.value = `${Math.abs(adjustTotal.value - adjustTotalII.value)}`;
    setNetVat();
  }
}
