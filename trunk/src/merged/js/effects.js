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
    var code = lang;
    if (code == 1) {
        document.getElementById("manuel").innerHTML = document.getElementById("manuel_fr").innerHTML;
    }
    if (code == 2) {
        document.getElementById("manuel").innerHTML = document.getElementById("manuel_en").innerHTML;
    }
    if (code == 3) {
        document.getElementById("manuel").innerHTML = document.getElementById("manuel_esp").innerHTML;
    }
    if (code == 4) {
        document.getElementById("manuel").innerHTML = document.getElementById("manuel_al").innerHTML;
    }
}