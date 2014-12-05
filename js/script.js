
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
    $('.posts').toggle();
    $('.posts2').toggle();
    $('.blogmost').hide();
    $('.blogmost2').hide();
    $('.blogmost3').hide();
  });
});

  $('.blogger').click(function(){
    $('.posts').toggle('slide');
    $('.posts2').hide('slide');
    $('.blogmost').toggle('slide');
    $('.blogmost2').hide('slide');
  });

    $('.blogger2').click(function(){
    $('.posts2').toggle('slide');
    $('.posts').hide('slide');
    $('.blogmost').hide('slide');
    $('.blogmost2').toggle('slide');
  });

    $('.blogger3').click(function(){
    $('.posts3').toggle('slide');
  });

  $('#botonotropost').click(function(){
    $('.blogger').hide('slide');
    $('.blogger2').hide('slide');
    $('.blogger3').toggle('slow');
  });
    $('#botonotropost2').click(function(){
    $('.blogger').toggle('slow');
    $('.blogger2').toggle('slow');
    $('.blogger3').hide('slide');
  });

    $('button').click(function() {
      var Listo = $("input[name=message]").val();
        $('#messages').append("<div class='divscomment'>"+Listo+"</div>");
        $('Listo').value="";
    });

