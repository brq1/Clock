var ms = new Date();
var s, m, h;
var timeZone = 2;
var AmPm = 0;


var div = {
  ms : document.getElementById("msec"),
  s : document.getElementById("sec"),
  m : document.getElementById("min"),
  h : document.getElementById("hour")
}

var box = {
  ms : document.getElementById("mscBox"),
  s : document.getElementById("secBox"),
  m : document.getElementById("minBox")
}

function timer (){
  ms++;
}

function getTime(){
  setTimeout(timer,1);
  s = Math.floor(ms/1000);
  m = Math.floor(s/60);
  h = Math.floor(m/60) + timeZone - (AmPm*12);

  ms %= 1000;
  s %= 60;
  m %= 60;
  h %= 24;

  h = (h<10) ? "0"+h : h;
  m = (m<10) ? "0"+m : m;
  s = (s<10) ? "0"+s : s;
  ms = (ms<10) ? "0"+ms : ms;
}

window.onload = function time(){
      getTime();
      div.ms.innerText = ms;
      div.s.innerText = s;
      div.m.innerText = m;
      div.h.innerText = h;
      //setInterval(getTime,1);
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

var radio = document.getElementById("radioAmPm");

radio.addEventListener("change", function radio(){
  if (this.checked) {
    AmPm = 1
  } else {
    AmPm = 0;
  }
});

 /* radio[i].addEventListener("click", function mode(){
    for (var i=0; i<2; i++) {
      if (radio[i].checked) {
        radio[i].value
      }
    }
  }
  )*/
