
$(document).ready(function() {


    
//--- Game logic ---//
// Hovering highlights current zone 
// a function that locks a player choice to the zone 

// There should be two player/turn 
// Each played turn disable clicks for current player / display the other player symbol 
// if a zone is locked you cannot re-click it
// Decide winning conditions / scenarios 


var turn = 0;
var x = "x";
var o = "o";
var zone1 = $("#zone1");
var zone2 = $("#zone2");
var zone3 = $("#zone3");
var zone4 = $("#zone4");
var zone5 = $("#zone5");
var zone6 = $("#zone6");
var zone7 = $("#zone7");
var zone8 = $("#zone8");
var zone9 = $("#zone9");


// var mainZone4 = [ zone1,zone4 ,zone7];
// var mainZone5 = [ zone2,zone5 ,zone8];
// var mainZone6 = [ zone3,zone6 ,zone9];
// var mainZone7 = [ zone3,zone5 ,zone7];
// var mainZone8 = [ zone1,zone5,zone9];




//1)
 $(".zone").on("mouseenter",function(event) {
        $(this).addClass("hover");
        $(".zone").on("mouseout",function (event){
        $(this).removeClass("hover");
           });
        });

    

   $(".zone").on("click",function (event){
        $(this).unbind("mouseout");
        
        if (turn%2 === 0) {
         $(this).addClass("x"); 
         $(this).text("x"); 
         $(this).addClass("disable")
         turn ++
        
        }else {
        $(this).addClass("o"); 
        $(this).text("o"); 
        $(this).addClass("disable")
        turn ++;

      }
    });




// 2-3) winning conditions 

// $(".zone").on("click",function (){
    function checkWinner() {
if (
zone1.hasClass("x") && zone2.hasClass("x") && zone3hasClass("x")
||
zone4.hasClass("x") && zone5.hasClass("x") && zone6.hasClass("x")
||
zone7.hasClass("x") && zone8.hasClass("x") && zone9.hasClass("x")
||
zone1.hasClass("x") && zone4.hasClass("x") && zone7.hasClass("x")
||
zone2.hasClass("x") && zone5.hasClass("x") && zone8.hasClass("x")
||
zone3.hasClass("x") && zone6.hasClass("x") && zone9.hasClass("x")
||
zone3.hasClass("x") && zone5.hasClass("x") && zone7.hasClass("x")
||
zone1.hasClass("x") && zone5.hasClass("x") && zone9.hasClass("x")
){
alert("X is the winner");
$(".zone").removeClass("disable");
$(".zone").removeClass("o");
$(".zone").removeClass("x");
turn = 0;

} else if 
(
    zone1.hasClass("o") && zone2.hasClass("o") && zone3hasClass("o")
    ||
    zone4.hasClass("o") && zone5.hasClass("o") && zone6.hasClass("o")
    ||
    zone7.hasClass("o") && zone8.hasClass("o") && zone9.hasClass("o")
    ||
    zone1.hasClass("o") && zone4.hasClass("o") && zone7.hasClass("o")
    ||
    zone2.hasClass("o") && zone5.hasClass("o") && zone8.hasClass("o")
    ||
    zone3.hasClass("o") && zone6.hasClass("o") && zone9.hasClass("o")
    ||
    zone3.hasClass("o") && zone5.hasClass("o") && zone7.hasClass("o")
    ||
    zone1.hasClass("o") && zone5.hasClass("o") && zone9.hasClass("o")
    ){
    alert("O is the winner");

    $(".zone").removeClass("o");
    $(".zone").removeClass("x");
    turn = 0;
 
    } else if (turn === 9) {
        alert("It's a tie");
        $(".zone").removeClass("o");
        $(".zone").removeClass("x");
        turn = 0;
    }

    else if ($(this).hasClass("disable")) {
          $(this).unbind("click");
          alert("filled");
    // } else if ($(this).hasClass("o")) {
    //     $(this).unbind("click");
    } 

}

//  disabling multiple clicks 



// reset function 

$("#reset").on("click",function (){

    $(".zone").empty()
    $(".zone").removeClass("x");
    $(".zone").removeClass("o");
    $(".zone").removeClass("hover");
   
    turn = 0;

});






checkWinner();

});








// 2) 


    // $(".zone").on("click",function (event){
        // $(this).unbind("mouseout");
        
    //     if (turn === 1) {
    //      $(this).addClass("x"); 
    //      turn --;
    //     }else if (turn === 0 ) {
    //     $(this).addClass("o"); 
    //     turn ++;

    //   }





//3)
//    $("#mainTable tr")
// function checkWinner() {



// case 3 :
// $("#mainZone3").hasClass("x");
// case 4 :
// mainZone4.hasClass("x");
// case 5 :
// mainZone5.hasClass("x");
// case 6 :
// mainZone6.hasClass("x");
// case 7:
// mainZone7.hasClass("x");
// case 8 :
// mainZone8.hasClass("x");



        // $(".zone").removeClass("disable");
