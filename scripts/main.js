
document.querySelector("h1").addEventListener("click", function () {
    alert("click");
  });

let myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = ` ${myName}`;
    }
  }

myButton.onclick = function () {
    setUserName();
  };