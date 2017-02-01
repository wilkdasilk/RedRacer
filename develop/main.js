console.log("sanity check: JS connected!");

$(document).ready(function(){
  //when typing
  $('body').keydown(function moveRight(event){
    //if s or d
    if (event.which ===83 || event.which ===68){
      //move player one right 20px
      $("#p1").animate({left: "+=20px"}, 100);
    };
    //if j or k
     if (event.which ===74 || event.which ===75){
       //move player two right 20px
      $("#p2").animate({left: "+=20px"}, 100);
      }
    })


  });

  //keycode for s is 83
  //keycode for d is 68
  //keycode for j is 74
  //keycode for k is 75
