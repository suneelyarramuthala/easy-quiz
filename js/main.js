var ok = document.querySelector("#btn1");
var name2 = document.querySelector("#name");
var boardScore = document.querySelector("#boardscore");
var userName = "";
var text = "";

$ = function (id) {
  return document.getElementById(id);
};

var show = function (id) {
  $(id).style.display = "block";
};
var hide = function (id) {
  $(id).style.display = "none";
};
function goBack() {
  location.replace("quiz.html");
}

ok.addEventListener("click", nameCheck);
function nameCheck() {
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
  return name;
}
function validate(event) {
  var x = event.code;
  if (x == "Enter") {
    nameCheck();
  }
}
console.log(userName);
for (let i = 0; i < localStorage.length - 1; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  console.log(key, value);
  text += key + "&nbsp &nbsp &nbsp &nbsp &nbsp" + value + "</br>" + "<hr>";
}
if (text === "") {
  console.log("hi");
  boardScore.innerHTML = "EMPTY";
} else {
  boardScore.innerHTML = text;
}
function clearData() {
  localStorage.clear();
  location.reload();
}
