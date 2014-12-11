
// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);
    $(".posts").html(posts['posts'][0]['content']);
    $(".posts2").html(posts['posts'][1]['content2']);
    $(".posts3").html(posts['posts'][2]['content3']);
    $(".posts4").html(posts['posts'][3]['content4']);
    $(".posts5").html(posts['posts'][4]['content5']);
    $('.posts').toggle();
    $('.posts2').toggle();
    $('.posts3').toggle();
    $('.posts4').toggle();
    $('.posts5').toggle();
    $('.blogmost').hide();
    $('.blogmost2').hide();
    $('.blogmost3').hide();
    $('.blogmost3').hide();
    $('.blogmost4').hide();
    $('.blogmost5').hide();
  });
});

  $('.blogger').click(function(){
    $('.busqueda').hide();
    $('.posts').toggle('slide');
    $('.posts2').hide('slide');
    $('.blogmost').toggle('slide');
    $('.blogmost2').hide('slide');
    $('.blogmost3').hide('slide');
  });

    $('.blogger2').click(function(){
    $('.busqueda').hide();
    $('.posts2').toggle('slide');
    $('.posts').hide('slide');
    $('.blogmost').hide('slide');
    $('.blogmost2').toggle('slide');
  });

    $('.blogger3').click(function(){
    $('.busqueda').hide();
    $('.posts3').toggle('slide');
    $('.blogmost').hide();
    $('.blogmost2').hide();
    $('.blogmost3').toggle('slide');
    $('.blogmost4').hide('slide');
    $('.blogmost5').hide('slide');
    $('.posts4').hide('slide');
    $('.posts5').hide('slide');
  });

    $('.blogger4').click(function(){
    $('.busqueda').hide();
    $('.posts4').toggle('slide');
    $('.blogmost').hide();
    $('.blogmost3').hide();
    $('.blogmost4').toggle('slide');
    $('.posts3').hide('slide');
    $('.posts5').hide('slide');
    $('.blogmost5').hide('slide');
  });

    $('.blogger5').click(function(){
    $('.busqueda').hide();
    $('.posts5').toggle('slide');
    $('.blogmost').hide();
    $('.blogmost3').hide();
    $('.posts3').hide('slide');
    $('.posts4').hide('slide');
    $('.blogmost4').hide('slide');
    $('.blogmost5').toggle('slide');
  });

  $('.botonotropost').click(function(){
    $('.busqueda').hide();
    $('.blogger').hide('slide');
    $('.blogger2').hide('slide');
    $('.blogger3').toggle('slow');
    $('.blogmost2').hide();
    $('.blogmost3').hide();
    $('.blogmost').hide();
    $('.blogger4').toggle('slow');
    $('.blogger5').toggle('slow');
  });

    $('#botonotropost2').click(function(){
    $('.busqueda').hide();
    $('.blogger3').hide('slide');
    $('.blogger2').show('slide');
    $('.blogger').show('slide');
    $('.blogmost3').hide('slide');
    $('.posts2').hide('slide');
    $('.posts3').hide('slide');
    $('.posts').hide('slide');
    $('.blogger4').hide('slow');
    $('.posts4').hide('slide');
    $('.blogger5').hide('slow');
    $('.posts5').hide('slide');
    $('.blogmost3').hide('slide');
    $('.blogmost4').hide('slide');
    $('.blogmost5').hide('slide');

  });

    $('.listo').click(function() {
      var Listo = $("input[name=message]").val();
        $('.messages').append("<div class='divscomment'>"+Listo+"</div>");
    });

    $('.listo1').click(function() {
      var Listo1 = $("input[name=message2]").val();
        $('.messages1').append("<div class='divscomment'>"+Listo1+"</div>");
    });

     $('.listo2').click(function() {
      var Listo2 = $("input[name=message3]").val();
        $('.messages2').append("<div class='divscomment'>"+Listo2+"</div>");
      });

     $('.listo3').click(function() {
      var Listo3 = $("input[name=message4]").val();
        $('.messages3').append("<div class='divscomment'>"+Listo3+"</div>");
      });

     $('.listo4').click(function() {
      var Listo4 = $("input[name=message5]").val();
        $('.messages4').append("<div class='divscomment'>"+Listo4+"</div>");
      });


   $('.righthome').click(function(){
    $('.busqueda').toggle('slide');
   });

$.expr[':'].icontains = function(obj, index, meta, stack){
    return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
  };
    $(document).ready(function(){  
      $('#target').keyup(function(){
       buscar = $(this).val();
       $('.lista p').removeClass('resaltar');
        if(jQuery.trim(buscar) != ''){
         $(".lista p:icontains('" + buscar + "')").addClass('resaltar');
        }
    });
  });
