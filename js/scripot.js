console.log("hej");

const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 hour format ( % moduels operator)
  hour = hour % 12 || 12;

  // output the time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} `;

  setTimeout(showTime, 1000);
}

//Add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// set background and greerting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // mornging
    document.body.style.backgroundImage = "url('/img/morning.jpeg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('/img/afternoon.jpeg')";
    greeting.textContent = "Good Afternoon";
    document.body.style.color = "white";
  } else {
    //evening
    document.body.style.backgroundImage = "url('/img/evening.jpeg')";
    greeting.textContent = "Good Evening";
  }
}

// Get name
function getName() {
  if (localStorage.getItem("nameKey") === null) {
    name.textContent = " [enter name]";
  } else {
    name.textContent = localStorage.getItem("nameKey");
  }
}

//set name
function setName(e) {
  if (e.type === "keypress") {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("nameKey", e.target.innerText);
      //prevent enter from next line
      name.blur();
    }
  } else {
    localStorage.setItem("nameKey", e.target.innerText);
  }
}

// Get focus
function getFocus() {
  if (localStorage.getItem("focusKey") === null) {
    focus.textContent = " [enter focus]";
  } else {
    focus.textContent = localStorage.getItem("focusKey");
  }
}

// set focus
function setFocus(e) {
  if (e.type === "keypress") {
    // make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focusKey", e.target.innerText);
      //prevent enter from next line
      focus.blur();
    }
  } else {
    localStorage.setItem("focusKey", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// run
showTime();
setBgGreet();
getName();
getFocus();
