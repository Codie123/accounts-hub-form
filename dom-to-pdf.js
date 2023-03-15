const button = document.querySelector(".submit");
var element = document.getElementById("test");
var opt = {
  margin: 1,
  filename: "myfile.pdf",
  image: { type: "jpeg", quality: 0.98 },

  jsPDF: { unit: "px", format: [1519.2, 1428.19], orientation: "portrait" },
};

button.addEventListener("click", () => {
  button.style.display = "none";
  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      button.style.display = "block";
    });
});
