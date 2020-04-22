"use strict";
//sticky menubar that is going to be applied to the bottom menubar
function myFunction() {
  if(window.pageYOffset > sticky)
    header.classList.add("sticky");
} else {
  header.classList.remove("sticky");
}
}
//dark mode setting to change the background of website to dark
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if(e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
toggleSwitch.addEventListener('change', switchTheme, false);

// rating star system
document.addEventListener('DOMContentLoaded', function() {
  let stars = document.querySelectorAll('.star');
  stars.forEach(function(star) { // for each star selected apply a setRating
    star.addEventListener('click', setRating);
  })
})
//setRating function chages the value of the maximum of 5 to 1 depending what is selected
function setRating(ev) {
  let span = ev.currentTarget;
  let stars = document.querySelectorAll('.star');
  let match = false;
  let num = 0;
  stars.forEach(function(star, index) {
    if(match) {
      star.classList.remove('rated');
    } else {
      star.classList.add('rated');
    }
    if(star === span) {
      match = true;
      num = index + 1;
    }
  })
  document.querySelector('.stars').setAttribute('data-rating', num);
}
