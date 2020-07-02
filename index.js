// make sound by click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", hundleClick);
}
function hundleClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// make sound by keyboard
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      playSound("snare");
      break;

    case "a":
      playSound("crash")
      break;

    case "s":
      playSound("tom-1")
      break;

    case "d":
      playSound("tom-2")
      break;

    case "j":
      playSound("tom-3")
      break;

    case "k":
      playSound("tom-4")
      break;

    case "l":
      playSound("kick-bass")
      break;

    default:
      console.log(key);
  }
}

function playSound(name) {
  var audio = new Audio(`sounds\\${name}.mp3`);
  audio.play();
}

function buttonAnimation(currentkey) {

  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 120);

}
