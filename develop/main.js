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
  //initial keys to move
  var need1= 83;
  var need2=74;

  //initial scores
  var redScore =0;
  var greenScore = 0;

  //when typing
  $('body').keydown(function moveRight(event){
    //as long as no one has won
    if(!(didWin(player1) || didWin(player2))){
      //if needed key 83 then 68
      if (event.which == need1){
          //first change the status to race!
        statusDiv.html("<p>Tap fast to win</p>");
        //move player one right 20px
          player1.animate({left: "+=20px"}, 0);
          //switch needed key
          if (need1==83){
            need1 = 68
          }
          else {
            need1=83
          };
          //win?
          didWin(player1);
          //if win, reset button appears
          if(didWin(player1)){
            resetDiv.css("visibility", "visible");
            //listen for enter
            $('body').keydown(catchEnter);
            //update score
            redScore++;
            }

          }
        //if j or k
      if (event.which == need2){
        //first change the status to race!
        statusDiv.html("<p>Tap fast to win</p>");
         //move player two right 20px
         player2.animate({left: "+=20px"}, 0);
         //switch needed key
         if (need2==74){
           need2 = 75
         }
         else {
           need2=74
         };
         //win?
         didWin(player2);
         //if win, reset button appears
         if(didWin(player2)){
           //display reset
           resetDiv.css("visibility", "visible");
           //listen for enter
           $('body').keydown(catchEnter);
           //update score
           greenScore++;

          }
        }
       }

 })
 //when click reset
 resetDiv.on('click', resetGame);


 function resetGame(){
   //original style and classes
   $('.player').attr("style", "left: 0px;");
   statusDiv.html("<p>start!</p>");
   resetDiv.css("visibility", "hidden");
   $('body').unbind("keydown", catchEnter);
   //show new score
   $(".score").css('visibility', "visible");
   $('.score.green').text(greenScore);
   $('.score.red').text(redScore);


   need1 =83;
   need2=74;
 };

 function catchEnter(event) {
   if (event.which ===13){
     resetGame();
   }
 }

});
