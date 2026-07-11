console.log("connected")

var x = document.getElementById("noise");

function playAudio() {
    console.log("click")

    //get the checkbox
    var checkBox = document.getElementById("unicorn");

    //get the output
     document.getElementById("noise");

    //if checkbox is checked, play audio
    if (checkBox.checked == true) {
        x.play();
    }
}


// for sticky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav_bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}