$(document).ready(function() {
    $('a.menu_link').hover(
            function() {

                $(this).stop().animate({"margin-left": "25px"}, 100);

            },
            function() {
                $(this).stop().animate({"margin-left": "10px"}, 100);

            }
            );

    $("a.menu_link").click(function() {
        $.scrollTo($(this).attr("href"), 1000, 'easeOutCubic');
        window.location.hash = $(this).attr("href");
        return false;
    });

});

function manu(lang) {
    if (lang == 1) {
        document.getElementById("manuel").innerHTML = document.getElementById("manuel_fr").innerHTML;
    }
    if (lang == 2) {
        document.getElementById("manuel").innerHTML = document.getElementById("manuel_en").innerHTML;
    }
    if (lang == 3) {
        document.getElementById("manuel").innerHTML = document.getElementById("manuel_esp").innerHTML;
    }
    if (lang == 4) {
        document.getElementById("manuel").innerHTML = document.getElementById("manuel_al").innerHTML;
    }
}