$( document ).ready(function() {

     var even = $(".conteiner ul li:even").css("background-color", "orange");
     var odd = $(".conteiner ul li:odd").css("background-color", "yellow");
     $(function (){
        $(".conteiner ul li").draggable({
           revert: "invalid",
           helper: "clone"

      });

      $(".conteiner:first-child").droppable({
          accept: even,

          drop: function(even, ul){
              $(".left").append(ul.draggable);
          }
        });

      $(".conteiner:last-child").droppable({
          accept: odd,
          drop: function(even, ul){
              $(".right").append(ul.draggable);
          }
      });
     });

});
