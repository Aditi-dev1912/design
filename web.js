/* created by Design Bureau */

$(document).ready(function(){
   
$(".fa-bars").click(function(){
      $("nav").toggleClass("nav-active");
});

$(window).on("load scroll",function(){
      $(".fa-bars").removeClass ("fa-times");
      $("nav").removeClass ("nav-active");
});

$(".project").magnificPopup({
     delegate:"a",
     type:"image",
     gallery:{
        enabled:true,
     },
 });

});
