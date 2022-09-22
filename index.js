
var num_drum_btn=document.querySelectorAll(".drum").length;

//function that applies .press as a way to animate the button was pressed
//console says function not defined so placed before function call
function buttonAnimation(key){
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
}

//Adding an event listener to all the necessary buttons
for(var i=0; i<num_drum_btn; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonName=this.innerHTML;
    whichLetterKey(buttonName);
    buttonAnimation(buttonName);

  });
}

//Adding an event listener to all keyboard keys
document.addEventListener("keydown", function(event){
  whichLetterKey(event.key);
  buttonAnimation(event.key);
});



//Function for checking which letter the key lines up with
function whichLetterKey(buttonName){
  switch (buttonName) {
    case "w":
      var crash=new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kick=new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "s":
      var snare=new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1=new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2=new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3=new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4=new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default: console.log();
  }


}
