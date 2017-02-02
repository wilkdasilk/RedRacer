console.log("sanity check: JS connected!");
//vars for players
var player1 = $("#p1");
var player2= $("#p2");

//names for players
player1.name = "Red";
player2.name = "Green";

//div variables
var resetDiv = $('.reset');
var statusDiv = $('.status');

//win?
var didWin = function(aPlayer) {
  if (aPlayer.attr("style") == "left: 900px;"){
    statusDiv.html("<p>" + aPlayer.name + " wins!</p>");
    return true;
  }
  else return false;
};


$(document).ready(function(){

  //when typing
  $('body').keydown(function moveRight(event){
    //as long as no one has won
    if(!(didWin(player1) || didWin(player2))){
      //if s or d
      if (event.which ===83 || event.which ===68){
        //move player one right 20px
          player1.animate({left: "+=20px"}, 0);
          //win?
          didWin(player1);
          //if win, reset button appears
          if(didWin(player1)){
            resetDiv.html("<p>Play again</p>");
            resetDiv.css("visibility", "visible");
            }
          }
        //if j or k
      if (event.which ===74 || event.which ===75){
         //move player two right 20px
         player2.animate({left: "+=20px"}, 0);
         //win?
         didWin(player2);
         //if win, reset button appears
         if(didWin(player2)){
           resetDiv.html("<p>Play again</p>");
           resetDiv.css("visibility", "visible");
         }
       }
    }




 })
});

  //keycode for s is 83
  //keycode for d is 68
  //keycode for j is 74
  //keycode for k is 75
