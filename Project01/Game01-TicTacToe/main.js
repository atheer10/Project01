
$(document).ready(function() {


    
//--- Game logic ---//
// Hovering highlights current zone 
// a function that locks a player choice to the zone 

// There should be two player/turn 
// Each played turn disable clicks for current player / display the other player symbol 
// if a zone is locked you cannot re-click it
// Decide winning conditions / 4 scenarios 


var turn = 1 ;
//1)
 $(".zone").on("mouseenter",function(event) {
        $(this).addClass("hover");
        $(".zone").on("mouseout",function (event){
        $(this).removeClass("hover");
           });
        });

// 2) 


    $(".zone").on("click",function (event){
        $(this).unbind("mouseout");
        
        if (turn === 1) {
         $(this).addClass("x"); 
         turn --;
        }else if (turn === 0 ) {
        $(this).addClass("o"); 
        turn ++;

      }
    

// 3) winning conditions 


var mainZone4 = [ $("#zone1"),$("#zone4") ,$("#zone7")];
var mainZone5 = [ $("#zone2"),$("#zone5") ,$("#zone6")];
var mainZone6 = [ $("#zone3"),$("#zone6") ,$("#zone9")];
var mainZone7 = [ $("#zone3"),$("#zone5") ,$("#zone7")];
var mainZone8 = [ $("#zone1"),$("#zone5") ,$("#zone9")];

switch ($(this)) {

case 1 :
$("#mainZone1").hasClass("x");
case 2 :
$("#mainZone2").hasClass("x");
case 3 :
$("#mainZone3").hasClass("x");
case 4 :
mainZone4.hasClass("x");
case 5 :
mainZone5.hasClass("x");
case 6 :
mainZone6.hasClass("x");
case 7:
mainZone7.hasClass("x");
case 8 :
mainZone8.hasClass("x");

alert("X is the winner");
} 



});

    






// function playerClicks(firstPlayer,secondPlayer) {




});






//  .hasClass("x") && ($("#zone2").hasClass("x") && ($("zone3".hasClass("x");
// case "2" :
//  ($("#zone4").hasClass("x") && ($("#zone5").hasClass("x") && ($("zone6").hasClass("x")
//  case "3" :
//  $("#zone7" && "#zone6" && "zone9").hasClass("x");
//  case "4" :
//  $("#zone1" && "#zone4" && "zone7").hasClass("x");
//  case "5" :
//  $("#zone2" && "#zone5" && "zone6").hasClass("x"); 
//  case "6" :
//  $("#zone3" && "#zone6" && "zone9").hasClass("x"); 
// case "7" :
// $("#zone3" && "#zone5" && "zone7").hasClass("x");