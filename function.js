var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = []


var lvl = 0;
var started = false;


  $(document).on("keypress", function (){
    if(!started){

      $("#level-title").text("lvl " + lvl)

      nextSequence();

      started = true;

    }

  });

    function nextSequence(){

      userClickedPattern = [];

      $("#level-title").text("Level " + lvl);

      var randomNumber = Math.floor(Math.random() * 4)
      var randomChosenColour = buttonColours[randomNumber];

      gamePattern.push(randomChosenColour);

      animatePress(randomChosenColour);

      playSound(randomChosenColour);

    }



$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

 checkAnswer(userClickedPattern.length-1)


});




function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {

  $("#" + currentColour).fadeIn(100).fadeOut(100).fadeIn(100);
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed")
  }, 100)

}



function checkAnswer(currentLevel){

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
lvl++;
    setTimeout(function () {
      nextSequence();
    }, 1000);

}
  }else{

  $("body").addClass("game-over");
  setTimeout(function(){  $("body").removeClass("game-over");},50)
  $("h1").css("font-size", "1.6rem")

  $("#level-title").text("No problem you got this. Press a key to Start again." );

  var audio = new Audio("sounds/wrong.mp3");
  audio.play()

  started = false;
gamePattern=[];
lvl = 0;
  }
}




// var buttonColours = ["red", "blue", "green", "yellow"];
//
// var gamePattern = [];
// var userClickedPattern = [];
//
// var started = false;
// var level = 0;
//
// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });
//
// $(".btn").click(function() {
//
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//
//   checkAnswer(userClickedPattern.length-1);
// });
//
// function checkAnswer(currentLevel) {
//
//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");
//
//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);
//
//       startOver();
//     }
// }
//
//
// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }
//
// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }
//
// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
//
// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }
