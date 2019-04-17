
function Clock(){;
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var ms = (date.getMilliseconds()/10).toFixed(0);
  var AmPm = document.getElementById("AmPm");
//AM / PM mode on
  if (AmPm.checked == true) {
    h = (h>12) ? h - 12 : h;
  }
//display method 
  h = (h<10) ? "0"+h : h;
  m = (document.getElementById("min").checked === true) ? ((m<10) ? "0"+m : m) : "--";
  s = (document.getElementById("sec").checked === true) ? ((s<10) ? "0"+s : s) : "--";
  ms = (document.getElementById("msc").checked === true) ? ((ms<10) ? "0"+ms : ms) : "--";
  
  var timer = h +":"+ m +":"+ s + ":" + ms;

  document.getElementById("display").innerHTML = timer;

  setInterval(Clock,1000);

}

