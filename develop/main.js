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
  var need1= 83;
  var need2=74;
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
          //win?
          didWin(player1);
          //if win, reset button appears
          if(didWin(player1)){
            resetDiv.css("visibility", "visible");
            }
            //switch needed key
            if (need1==83){
              need1 = 68
            }
            else {
              need1=83
            };
          }
        //if j or k
      if (event.which == need2){
        //first change the status to race!
        statusDiv.html("<p>Tap fast to win</p>");
         //move player two right 20px
         player2.animate({left: "+=20px"}, 0);
         //win?
         didWin(player2);
         //if win, reset button appears
         if(didWin(player2)){
           resetDiv.css("visibility", "visible");
         }
         //switch needed key
         if (need2==74){
           need2 = 75
         }
         else {
           need2=74
         };
       }
    }




 })
 //when click reset
 resetDiv.on('click', function resetGame(){
   //original style and classes
   $('.player').attr("style", "left: 0px;");
   statusDiv.html("<p>start!</p>");
   resetDiv.css("visibility", "hidden");
   need1 =83;
   need2=74;
 })

});

  //keycode for s is 83
  //keycode for d is 68
  //keycode for j is 74
  //keycode for k is 75
