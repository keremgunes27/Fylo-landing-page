var input = document.getElementById("email-input");
var boolEmail = false;

$("#newsletter-btn").click(function () {
  if (document.getElementById("email-input").value != 0) {
    document.getElementById("emailLabel").style.display = "hsl(0, 100%, 63%)";
    let validate = document.getElementById("email-input").value;
    if (validate.indexOf("@") != -1) {
      document.getElementById("emailLabel").style.color = "transparent";
      boolEmail = true;
    } else {
      document.getElementById("emailLabel").style.color = "hsl(0, 100%, 63%)";
    }
  } else {
    document.getElementById("emailLabel").style.color = "hsl(0, 100%, 63%)";
  }
  if (boolEmail) {
    document.getElementById("newsletter-form").submit();
  }
});
