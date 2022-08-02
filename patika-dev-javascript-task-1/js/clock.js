const inputName = prompt("Please enter your name:  ");
const userName = document.getElementById("myName");
const clock = document.getElementById("myClock");

userName.innerText = inputName;

function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let time = String(hours) + ":" + String(minutes) + ":" + String(seconds);
  console.log(time);
  clock.innerText = time;
  setTimeout(showTime, 1000);
}
showTime();
