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

window.onload = function getTime(){
  ms = (Math.floor(currentTime/10))%100;
  s = (Math.floor(currentTime/1000))%60;
  m = (Math.floor(currentTime/60000))%60;
  h = (Math.floor(currentTime/3600000))%24 + timeZone;

  display();
  currentTime = (currentTime*1+10);
  setTimeout(getTime,10);
}

function display2(x){
  return (x<10) ? "0"+x : x;
}
 
function display(){
  div.ms.innerText = display2(ms);
  div.s.innerText = display2(s);
  div.m.innerText = display2(m);
  div.h.innerText = display2(h - (pm*12));
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
var testH = 24 - currentTime.getHours();
var revision = 86400000-currentTime; // time to end day

for (var i = 0;i<2;i++){
this.addEventListener("change", function ampm(){
  if (radio[0].checked){
    if (testH < 12){
      div.Am.innerHTML = "PM";
      pm = true;
    } else{
      div.Am.innerHTML = "AM";
      pm = false;
    }
    setTimeout(pm,revision);
  } else {
    div.Am.innerHTML = "";
    pm = false
  }
});}