$(document).ready(main);

var menu_oculto = 1;

function main() {

    $('.menup_bar').click(function() {

        if (menu_oculto == 1) {
            $('nav').animate ({
                left: '0'
            });
            menu_oculto = 0;
         }
         else {
            $('nav').animate({
                left: '-100%'
            });
            menu_oculto = 1;
         }
    });
    
    $('.sub_menup').click(function() {
        $(this).children('.children').slideToggle();
    }); 
}