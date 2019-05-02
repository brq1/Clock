var currentTime = new Date();
var ms = currentTime.getMilliseconds;
var s = currentTime.getSeconds;
var m = currentTime.getMinutes;
var h = currentTime.getHours;
var timeZone = 2;
var pm = true;


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


window.onload = function getTime(){
  ms = Math.floor(currentTime/10);
  s = Math.floor(currentTime/1000);
  m = Math.floor(currentTime/60000);
  h = Math.floor(currentTime/3600000) + timeZone;

  ms %= 100;
  s %= 60;
  m %= 60;
  h %= 24;

  h = (h<10) ? "0"+h : h;
  m = (m<10) ? "0"+m : m;
  s = (s<10) ? "0"+s : s;
  ms = (ms<10) ? "0"+ms : ms;

  dispay();
  currentTime = (currentTime*1+10);
  setTimeout(getTime,10);
}

function dispay(){
    div.ms.innerText = ms;
    div.s.innerText = s;
    div.m.innerText = m;
    div.h.innerText = h - (pm*12);

}


function pm (){  
  
  var testH = 24 - currentTime.getHours();
  var revision = 86400000-currentTime; // time to end day
  
  if (testH >= 12){
    div.Am.innerHTML = "PM";
    pm = true;
  } else{
    div.Am.innerHTML = "AM";
    pm = false;
  }
  setTimeout(pm,revision);
}

box.ms.addEventListener("change", function hideMs(){
  if (this.checked) {
    div.ms.style.visibility = "visible";
  } else {
    div.ms.style.visibility = "hidden";
  }
});

box.s.addEventListener("change", function hideS(){
  if (this.checked) {
    div.s.style.visibility = "visible";
  } else {
    div.s.style.visibility = "hidden";
  }
});

box.m.addEventListener("change", function hideM(){
  if (this.checked) {
    div.m.style.visibility = "visible";
  } else {
    div.m.style.visibility = "hidden";
  }
});

var radio = document.getElementsByName("radio");

