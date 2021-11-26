var colors=['#FF0000','#082032','#232323','#0331ff','#f7edf7','#CDFFFC','#DDDDDD','#FCF8E8','#fff','#F5CEBE'];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  max=getRndInteger(0,colors.length)
  
  $(document).ready(function(){
    
    $(".colors").css("background-color",colors[max]);
  
    if( max<4){
      $(".color").css("color","white")
    }
    else if(7>max&&max>4){
      $(".color").css("color",'black')
    }
    else{
      $(".color").css("color","blue")

    }
    $("i").on({
      mouseenter: function(){
        $(this).css("font-size", "90px");
      },
      mouseleave: function(){
        $(this).css("font-size", "80px");
      }
      
    });
    $(".f").on({
      mouseenter: function(){
        $(".colors").css("background-color", "white");
        $(".color").css("color","#1877f2")
      },
      mouseleave: function(){
        $('.colors').css("background-color", "white");
      },
      click:function(){
        $(".colors").css("background-color", "white");
        $(".color").css("color","#1877f2")
      }
      
      
    });
    $(".l").on({
      mouseenter: function(){
        $(".colors").css("background-color", "#0a66c2");
        $(".color").css("color","white")
      },
      mouseleave: function(){
        $('.colors').css("background-color", "#0a66c2");
      },
      click:function(){
        $(".colors").css("background-color", "white");
        $(".color").css("color","#00e676")
      },
      click:function(){
        $(".colors").css("background-color", "#0a66c2");
        $(".color").css("color","white")}
      
      
    });
    $(".g").on({
      mouseenter: function(){
        $(".colors").css("background-color", "black");
        $(".color").css("color","white")
      },
      mouseleave: function(){
        $('.colors').css("background-color", "black");
      },
      click:function(){
        $(".colors").css("background-color", "black");
        $(".color").css("color","white")
      }
      
      
    });
    $(".w").on({
      mouseenter: function(){
        $(".colors").css("background-color", "white");
        $(".color").css("color","#00e676")
      },
      mouseleave: function(){
        $('.colors').css("background-color", "white");
      },
      click:function(){
        $(".colors").css("background-color", "white");
        $(".color").css("color","#00e676")
      }
      
      
    });
    
    
})