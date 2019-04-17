# Clock

Script is display current time in HH:MM:SS:MS format (digital clock) with option to set from user: AM/PM or 24H mode and to display or hide minutes, seconds, milliseconds.

```js

//AM / PM mode on
  if (AmPm.checked == true) {
    h = (h>12) ? h - 12 : h;
  }
//display method 
  h = (h<10) ? "0"+h : h;
  m = (document.getElementById("min").checked === true) ? ((m<10) ? "0"+m : m) : "--";
  s = (document.getElementById("sec").checked === true) ? ((s<10) ? "0"+s : s) : "--";
  ms = (document.getElementById("msc").checked === true) ? ((ms<10) ? "0"+ms : ms) : "--";
  
```
## Preview

https://brq1.github.io/Clock/src

## To develop

1. Current time on the classic clock face;
2. The possibility of time zone change;
3. Display of day, month, year and name of the week day

## Author

Michał Bryk