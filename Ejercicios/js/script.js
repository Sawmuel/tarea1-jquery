$("#p5").hide();
$("#rest1").hide();
$("#click2b").hide();
$("#desac").hide();
$("#desac2").hide();
$("#click32").hide();
$("#click3a").hide();

$(document).ready (function(){
    alert("Bienvenido");
    
    $("#p3").mouseenter(function(){
        $("#p4").slideUp();
        $("#p5").slideDown();
    });
    
    $("#p3").mouseleave(function(){
        $("#p4").slideDown();
        $("#p5").slideUp();
    });
    
    $("#delete1").click(function(){
        $("#p1").fadeOut();
        $("#rest1").slideDown();
        $("#delete1").hide();
        $("#desac").show();
    });
    
    $("#rest1").click(function() {
       $("#p1").fadeIn();
       $("#delete1").show();
       $("#rest1").slideUp();
       $("#desac").hide();
    });
    
    $("#click2").click(function() {
       $("#p3").animate({height: "200px"});
       $("#click2b").slideDown();
       $("#click2").hide();
       $("#desac2").show();
    });
    
    $("#click2b").click(function() {
       $("#p3").animate({height: "80px"});
       $("#click2").show();
       $("#click2b").slideUp();
       $("#desac2").hide();
    });
    
    $("#click31").click(function(){
        $("#p2").addClass("text-warning");
        $("#click31").hide();
        $("#click32").show();
        $("#click3a").show();
        $("#click3b").hide();
    });
    
    $("#click3a").click(function(){
        $("#p2").addClass("text-dark");
        $("#click3a").hide();
        $("#click3b").show();
    });

});