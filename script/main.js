$(document).ready(main);

var menuOculto = 1;

function main() {
    $('.menu_bar').click(function() {

        if (menuOculto == 1) {
            $('nav').animate ({
                left: '0'
            });
            menuOculto = 0;
         }
         else {
            $('nav').animate({
                left: '-100%'
            });
            menuOculto = 1;
         }
    });
    
    $('.subMenu').click(function() {
        $(this).children('.children').slideToggle();
    }); 
}