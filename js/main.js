$(document).ready(function(){
   $('.square-menu>li>a').hover(function(){
       var content = $(this).attr('data-link');
       $(this).html(content);
   }, 
   function(){
       var content = '<span class="glyphicon glyphicon-stop"></span>';
       $(this).html(content);
   }); 
});
$('.square-menu>li>a').on('click', function(e){
    e.preventDefault();
    var activeColor = $('.active-section').first().css('background-color');    
    $('body').css('background-color', activeColor);
    $('.page-section').hide();
    $('.page-section').removeClass('active-section');
    var id = $(this).attr('href');
    $(id).addClass('active-section');
    $(id).show();
    var width = $(id).width();
    $(id).css('right', width + 'px');
    $(id).animate({right: "-="+width}, 500);
});

