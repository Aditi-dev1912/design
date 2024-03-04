/* created by Design Bureau */

$(document).ready(function(){
   
$(".fa-bars").click(function(){
    $("nav").toggleclass("nav-active");
});

$(window).on("load scroll",function(){
      $(".fa-bars").removeclass("fa-times");
      $("nav").removeclass("nav-active");
});

$(".project").magnificPopup({
     delegate:"a",
     type:"image",
     gallery:{
        enabled:true,
     },
 });

});
