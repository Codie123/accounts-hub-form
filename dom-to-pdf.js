const button = document.querySelector(".submit");
$(document).ready(function () {
  const node = document.querySelector("#test");
  $(".submit").click(function () {
    button.style.display = "none";
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var img = document.createElement("img");
        img.src = dataUrl;

        button.style.display = "block";
        Email.send({
          SecureToken: "f45d3100-0419-40f5-88b8-fd990ffaa237",
          To: "ahexam22@gmail.com",
          From: "elliott6518@gmail.com",
          Subject: "Accounts Hub Vat Form",
          Body: "Form Attached below",
          Attachments: [
            {
              name: "image.png",
              data: dataUrl,
            },
          ],
        }).then((message) => alert(`${message} Mail Sent Successfully`));
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  });
});
