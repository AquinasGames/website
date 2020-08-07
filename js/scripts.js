// Scripts For Entire Site

var screenHeight = $(window).height();

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

grecaptcha.ready(function() {
    grecaptcha.execute('6Lcd5bsZAAAAAD8jOi_RJa6bAyv6wKw24Ym3Usx2', {action: 'homepage'})
    .then(function(token) {
        document.getElementById('captchaResponse').value = token;
    });
});

$(window).scroll(function () {
    console.log($(window).scrollTop())
    if (isScrolledIntoView($('#navigation-bar-links'))) {
        $('#navigation-bar-links').addClass('fixed-navbar');
    }
    if (! (isScrolledIntoView($('#navigation-bar-links')))) {
        $('#navigation-bar-links').removeClass('fixed-navbar');
    }
});
