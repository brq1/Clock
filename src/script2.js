var currentTime = new Date();
var ms = currentTime.getMilliseconds;
var s = currentTime.getSeconds;
var m = currentTime.getMinutes;
var h = currentTime.getHours;
var timeZone = 2;
var pm = false;


var div = {
  ms : document.getElementById("msec"),
  s : document.getElementById("sec"),
  m : document.getElementById("min"),
  h : document.getElementById("hour"),
  Am : document.getElementById("AmPm")
}

var box = {
  ms : document.getElementById("mscBox"),
  s : document.getElementById("secBox"),
  m : document.getElementById("minBox")
}

window.onload = function clock(){
  getTime()
  displayTime()
  currentTime = currentTime*1+10;
  setTimeout(clock,10);
}

function getTime(){
  ms = (Math.floor(currentTime/10))%100; // getMilliseconds
  s = (Math.floor(currentTime/1000))%60; // getSeconds
  m = (Math.floor(currentTime/60000))%60; // getMinutes
  h = (Math.floor(currentTime/3600000))%24 + timeZone; // getHours
}

function displayFix(x){ 
  return (x<10) ? "0"+x : x;
}
 
function displayTime(){
  div.ms.innerText = displayFix(ms);
  div.s.innerText = displayFix(s);
  div.m.innerText = displayFix(m);
  div.h.innerText = displayFix(h - (pm*12));
}

function hideTime (box,target){

    if (box.checked) {
      target.style.visibility = "visible";
    } else {
      target.style.visibility = "hidden";
    }
}

box.ms.addEventListener("change", () => hideTime(box.ms, div.ms));
box.s.addEventListener("change", () => hideTime(box.s,div.s));
box.m.addEventListener("change", () => hideTime(box.m,div.m));


var radio = document.getElementsByName("radio");
const halfDay = 43200000; // 12:00 it's hour to change AM to PM
var revision = halfDay - (currentTime*1+timeZone*3600000)%halfDay; // time to change AM to PM

for (var i = 0;i<2;i++){
this.addEventListener("change", function ampm(){
  if (radio[0].checked){
    if (h > 12){
      div.Am.innerHTML = "PM";
      pm = true;
    } else{
      div.Am.innerHTML = "AM";
      pm = false;
    }
    setTimeout(ampm,revision);
  } else {
    div.Am.innerHTML = "";
    pm = false
  }})}
