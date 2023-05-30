const userAmount = document.querySelectorAll(".amount");
const total = document.querySelector(".amountTotal");

const vatAmount = document.querySelectorAll(".vatAmount");
const vatTotal = document.querySelector(".vatTotal");

const adjustAmount = document.querySelectorAll(".adjustAmount");
const adjustTotal = document.querySelector(".adjustTotal");

// section-II
const amountII = document.querySelectorAll(".amount-II");
const amountTotalII = document.querySelector(".amountTotal-II");

const vatII = document.querySelectorAll(".vat-II");
const vatTotalII = document.querySelector(".vatTotal-II");

const adjustII = document.querySelectorAll(".adjust-II");
const adjustTotalII = document.querySelector(".adjustTotal-II");
const column13 = document.querySelector(".column13");
const totalVat = document.querySelector(".tt-vat");
const totalAdjust = document.querySelectorAll(".tt-ad");
const totalFinal = document.querySelector(".tt-final");

// extra
const amountSP = document.querySelector(".amount-sp");
const vatSP = document.querySelector(".vat-sp");
const adjustSP = document.querySelector(".adjust-sp");

// negative
const amountNegative = document.querySelector(".amount-neg");
const vatNegative = document.querySelector(".vat-neg");
const adjustNegative = document.querySelector(".adjust-neg");
// ends

// ends
const mail = document.querySelector(".mail");
const submit = document.querySelector(".submit");
// ends
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
      set13thval({ val1: vatTotalII.value, val2: adjustTotalII.value });
      // column12.value = `${temp}`;
      //   set13thval({
      //     val1: vatTotal.value,
      //     val2: adjustTotal.value,
      //   });
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
      //   set13thval({
      //     val1: vatTotal.value,
      //     val2: adjustTotal.value,
      //   });
      //   ttvat();
      x.classList.remove("cuz-err");
    } else {
      x.classList.add("cuz-err");
    }
  });
});

// section-II
amountII.forEach((x) => {
  x.addEventListener("change", (e) => {
    if (!isNaN(e.target.value)) {
      temp = 0;

      amountII.forEach((y) => {
        temp += Math.round(y.value * 10) / 10;
      });

      amountTotalII.value = `${parseFloat(amountII[1].value) + temp}`;
      x.classList.remove("cuz-err");
    } else {
      x.classList.add("cuz-err");
    }
  });
});

amountSP.addEventListener("change", () => {
  let data = `-${amountSP.value}`;
  // console.log(data);
  amountNegative.value = data;
});
vatII.forEach((x) => {
  x.addEventListener("change", (e) => {
    if (!isNaN(e.target.value)) {
      temp = 0;
      vatII.forEach((y) => {
        temp += Math.round(y.value * 10) / 10;
      });

      vatTotalII.value = `${Math.abs(vatII[1].value - temp)}`;
      set13thval({
        val1: vatTotalII.value,
        val2: adjustTotalII.value,
      });
      x.classList.remove("cuz-err");
    } else {
      x.classList.add("cuz-err");
    }
  });
});
vatSP.addEventListener("change", () => {
  let data = `-${vatSP.value}`;
  vatNegative.value = data;
});
adjustII.forEach((x) => {
  x.addEventListener("change", (e) => {
    temp = 0;
    adjustII.forEach((y) => {
      temp += Math.round(y.value * 10) / 10;
    });

    adjustTotalII.value = `${temp}`;
    set13thval({
      val1: vatTotalII.value,
      val2: adjustTotalII.value,
    });

    // ttvat();
  });
});
adjustSP.addEventListener("change", () => {
  let data = `-${adjustSP.value}`;
  adjustNegative.value = data;
});
// ends
function set13thval({ val1, val2 }) {
  // console.log(parseInt(vatTotal.value));
  // console.log(parseInt(val1));

  let diff = parseFloat(vatTotal.value) - parseFloat(adjustTotal.value);

  let data = diff + parseFloat(val1) + parseFloat(val2);
  console.log(data);
  column13.value = Math.round(data * 10) / 10;
}
totalAdjust.forEach((x) => {
  x.addEventListener("change", () => {
    setNetVat();
  });
});

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
function setNetVat() {
  temp = 0;
  totalAdjust.forEach((y) => {
    temp += Math.round(y.value * 10) / 10;
  });

  totalFinal.value = Number(totalVat.value) + temp;
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
