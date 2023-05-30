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
const mail = document.querySelector(".mail");
const submit = document.querySelector(".submit");

let temp = 0;
let numbers = /^[-+.]?[0-9]+$/;
userAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    if (!isNaN(e.target.value)) {
      temp = 0;
      document.querySelectorAll(".amount").forEach((y) => {
        temp += Math.round(y.value * 10) / 10;
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
    if (!isNaN(e.target.value)) {
      temp = 0;
      document.querySelectorAll(".vatAmount").forEach((y) => {
        temp += Math.round(y.value * 10) / 10;
      });

      vatTotal.value = `${temp}`;

      // column12.value = `${temp}`;
      set12thval({ val1: vatTotal.value, val2: adjustTotal.value });
      x.classList.remove("cuz-err");
    } else {
      x.classList.add("cuz-err");
    }
  });
});

//_______________________________________________

adjustAmount.forEach((x) => {
  x.addEventListener("change", (e) => {
    if (!isNaN(e.target.value)) {
      temp = 0;
      document.querySelectorAll(".adjustAmount").forEach((y) => {
        temp += Math.round(y.value * 10) / 10;
      });

      adjustTotal.value = `${temp}`;
      set12thval({ val1: vatTotal.value, val2: adjustTotal.value });
      ttvat();
      x.classList.remove("cuz-err");
    } else {
      x.classList.add("cuz-err");
    }
  });
});
// 12 columns
function set12thval({ val1, val2 }) {
  // console.log(parseInt(vatTotal.value));
  // console.log(parseInt(val1));
  // parseInt(val1) + parseInt(val2)
  let data = parseFloat(val1) - parseFloat(val2);

  column12.value = Math.round(data * 10) / 10;
  difference();
}
// ends
//________________________________________________
amountII.forEach((x) => {
  x.addEventListener("change", (e) => {
    if (!isNaN(e.target.value)) {
      temp = 0;
      amountII.forEach((y) => {
        temp += Math.round(y.value * 10) / 10;
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
    if (!isNaN(e.target.value)) {
      temp = 0;
      vatII.forEach((y) => {
        temp += Math.round(y.value * 10) / 10;
      });

      vatTotalII.value = `${temp}`;
      set13thval({ val1: vatTotalII.value, val2: adjustTotalII.value });
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
      temp += Math.round(y.value * 10) / 10;
    });

    adjustTotalII.value = `${temp}`;
    set13thval({ val1: vatTotalII.value, val2: adjustTotalII.value });

    ttvat();
  });
});
// 13 column
function set13thval({ val1, val2 }) {
  // console.log(parseInt(vatTotal.value));
  // console.log(parseInt(val1));
  let data = parseFloat(val1) + parseFloat(val2);
  column13.value = Math.round(data * 10) / 10;
  difference();
}
// ends
totalAdjust.forEach((x) => {
  x.addEventListener("change", () => {
    setNetVat();
  });
});

function setNetVat() {
  temp = 0;
  totalAdjust.forEach((y) => {
    temp += Math.round(y.value * 10) / 10;
  });

  totalFinal.value = Number(totalVat.value) + temp;
}
function difference() {
  if (column12.value !== null && column13.value !== null) {
    column14.value = `${Math.abs(column12.value - column13.value)}`;
  }
}

function ttvat() {
  if (totalVat === null) {
    return;
  } else {
    if (adjustTotal.value !== null && adjustTotalII.value !== null) {
      totalVat.value = `${Math.abs(adjustTotal.value - adjustTotalII.value)}`;
      setNetVat();
    }
  }
}

mail.addEventListener("keydown", submitValidation);
// console.log(mail);

function submitValidation() {
  if (mail.value != "") {
    submit.removeAttribute("disabled", "");
    submit.classList.remove("disable");
  } else {
    submit.setAttribute("disabled", "");
    submit.classList.add("disable");
  }
}
