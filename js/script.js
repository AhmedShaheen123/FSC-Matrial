$(document).ready(function(){
    $("nav li a").on("click",function(){
        $(this).addClass('active').parent().siblings().find("a").removeClass('active')
    })
    //  var heeaderHight=$("nav").height();
    //  $("nav a").click(function(){
    //      var id=$(this).attr('id');
    //      $("body,html").animate({
    //          scrollTop: $("." +id).offset().top-heeaderHight
    //      })
    //  })
//color for department
$(".box-depart").on({
    mouseenter: function(){
      $(this).css("background-color", "green");
    },
    mouseleave: function(){
      $(this).css("background-color", "#2f55be");
    }
  });

  $(".effect").on({
    mouseenter: function(){
      $(this).css("background-color", "green");
    },
    mouseleave: function(){
      $(this).css("background-color", "#2f55be");
    }
  });
 
});