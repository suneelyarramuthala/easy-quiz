var ok = document.querySelector("#btn1");
var userName = "";

$ = function (id) {
  return document.getElementById(id);
};

var show = function (id) {
  $(id).style.display = "block";
};
var hide = function (id) {
  $(id).style.display = "none";
};

ok.addEventListener("click", () => {
  var name = document.querySelector('input[name="name"]');
  console.log(name.value);
  console.log(name.value.length);
  if (name.value === null) {
    alert("Please enter a name to move further");
  } else {
    if (name.value === "") {
      alert("Please enter a name to move further");
    } else {
      if (name.value.length < 3) {
        alert("Please enter a name with more than two characters");
      } else {
        userName = name.value;
        console.log(userName);
        localStorage.setItem("uName", userName);
        location.replace("quiz.html");
      }
    }
  }
});
console.log(userName);
