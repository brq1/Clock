var currentTime = new Date();
var ms, s, m, h;
var pm = false;
var format = false;

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
  m : document.getElementById("minBox"),

}
var mode = document.getElementsByName("radio");
var zone = document.getElementsByName("zone");

window.onload = function clock(){
  getTime();
  displayTime();
  displayAmPm();
  setTimeout(clock,10);
}

function getTime(){
  currentTime = new Date;

  ms = currentTime.getMilliseconds();
  s = currentTime.getSeconds();
  m = currentTime.getMinutes();
  h = currentTime.getHours();
}

function trimHour (hour) {
  return pm ? hour%12 : hour;
}

function displayFix(x){ 
  return (x<10) ? "0"+x : x;
}
 
function trimMilliseconds(v){
  return (v>100) ? Math.floor(v/10) : v;
}

function displayTime(){
  div.ms.innerText = displayFix(trimMilliseconds(ms));
  div.s.innerText = displayFix(s);
  div.m.innerText = displayFix(m);
  div.h.innerText = displayFix(trimHour(h));
}

function hideTime (box,target){
    if (box.checked) {
      target.style.visibility = "visible";
    } else {
      target.style.visibility = "hidden";
    }
  }

function displayAmPm() {

  if (pm) {
    if (h<12) {
      div.Am.innerHTML = "AM";
    } else {
      div.Am.innerHTML = "PM";
    }
  } else {
    div.Am.innerHTML = "";
  }
}


box.ms.addEventListener("change", () => hideTime(box.ms, div.ms));
box.s.addEventListener("change", () => hideTime(box.s,div.s));
box.m.addEventListener("change", () => hideTime(box.m,div.m));

mode[0].addEventListener("change", function(){pm = false});
mode[1].addEventListener("change", function(){pm = true});

