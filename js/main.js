$(document).ready(function(){    
    
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
    
    $('.skilice>li>a, .about-img>a').on('click', function(){
        $('#menu').hide();
        $('.carousel-control').hide();
    });
    
    $('.close, .fade').on('click', function(){
       $('#menu').show();
        $('.carousel-control').show(); 
    });
    
    $('#getnext').on('click',function(){
        getNext().trigger('click');
    });
    
    $('#getprev').on('click',function(){
        getPrev().trigger('click');       
    });
    drawCanvas();
    function getNext(){

        var next = $('#menu>ul>li.active').next().children('a').first();
        
        if(!next.attr('href'))
        {
            return $('#menu>ul>li>a').first();
        }
        
        return next;
    }
    
    function getPrev()
    {
        var prev = $('#menu>ul>li.active').prev().children('a').first();        
        if(!prev.attr('href'))
        {
            return $('#menu>ul>li>a').last();
        }        
        return prev;
    }
    function drawCanvas()
    {
        var canvas = document.getElementById("clothesWire");

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var width = window.innerWidth;        
            var end = width - 80;
            canvas.setAttribute('width', end);
            var middle = end / 2;
            ctx.beginPath();
            ctx.bezierCurveTo(20, 50, middle, 100, end, 50);            
            ctx.stroke();
          }        
    }
    
    $( window ).resize(drawCanvas);
});

$(window).load(function(){
    $('#loader').hide();
    $('body').removeClass('loading');
    $('#page').show();
});