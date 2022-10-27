displayName = localStorage.getItem("uName");
console.log(displayName);
var btn = document.querySelector("#btn");
var reload = document.querySelector("#reload");
let score = 0;
alert("hello " + displayName + " please continue with the quiz below");
btn.addEventListener("click", () => {
  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.querySelector('input[name="q3"]:checked');
  var q4 = document.querySelector('input[name="q4"]:checked');
  console.log(q1.value);
  console.log(q2.value);
  console.log(q3.value);
  console.log(q4.value);
  console.log(typeof q1.value);
  if (q1.value === "1") {
    score += 1;
  }
  if (q2.value === "2") {
    score += 1;
  }
  if (q3.value === "3") {
    score += 1;
  }
  if (q4.value === "4") {
    score += 1;
  }
  alert("well done " + displayName + " your score is " + score);
  localStorage.setItem(displayName, score);
});
let playerScore = reload.addEventListener("click", () => {
  location.reload();
});
