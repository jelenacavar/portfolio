$(document).ready(function(){
    
    $('#sub-home').slideDown(2000);
    
   $('.square-menu>li>a').hover(function(){
       if ($(this).parent().hasClass('active')){
           return;
       }
       var content = $(this).attr('data-link');
       $(this).html(content);
   }, 
   function(){
        if ($(this).parent().hasClass('active')){
           return;
       }
       var content = '<span class="glyphicon glyphicon-stop"></span>';
       $(this).html(content);
   }); 
});
$('.square-menu>li>a').on('click', function(e){
    $('#sub-home').hide();
    e.preventDefault();
    var glyph = '<span class="glyphicon glyphicon-stop"></span>';
    $('.square-menu>li>a').html(glyph);
    $('.square-menu>li').removeClass('active');
    $(this).parent().addClass('active');
    var content = $(this).attr('data-link');
    $(this).html(content);
    var activeColor = $('.active-section').first().css('background-color');    
    $('body').css('background-color', activeColor);
    $('.page-section').hide();
    $('.page-section').removeClass('active-section');
    var id = $(this).attr('href');
    $(id).addClass('active-section');
    $(id).show();
    var width = $(id).width();
    $(id).css('left', width + 'px');
    $(id).animate({left: "-="+width}, 800);
    if(id == '#home')
    {
        $('#sub-home').slideDown(2000);
    }
});

