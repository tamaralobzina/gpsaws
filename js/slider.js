'use strict'

$(function(){
    var width= 1035;
    var animationSpeed=2000;
    var pause = 3000;
    var currentSlide=1;

    var $slider=$('#slider');                               //searches HTML once
    var $slideContainer=$slider.find('.slides');
    var $slides=$slideContainer.find('.slide');

    var interval;

    function startSlider(){
        interval = setInterval(function(){
            $slideContainer.animate({'margin-left':'-='+width},animationSpeed, function(){
                currentSlide++;
                if(currentSlide==$slides.length){
                    currentSlide=1;
                    $slideContainer.css('margin-left',0)
                }
            });                                                                         //slides every 1 second              //keep subtrcting -720 pixels each time
        },pause);
    }

    function stopSlider(){
        clearInterval(interval);
    }
    $slider.on('mouseenter',stopSlider).on('mouseleave',startSlider);

    startSlider();

});

