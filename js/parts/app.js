$(document).ready(function() {
    var slides = $('#fullpage').children().map(function() { return $(this).data('anchor') }).toArray();
    var indicatorWidth = $('#indicator').width();
    var indicatorStep = ($('#indicator').width()/slides.length);
    var indicatorSet = function(hash) {
        if (!hash)
            hash = slides[0];
        var index = slides.findIndex(function(el) { return el == hash; });
        if (index == -1)
            return false;
        var margin = index*indicatorStep;
        $('#indicatorMarker').css('margin-left', margin);
    };

    $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 700,
        responsiveSlides: true,
        responsiveHeight: 500,
        onLeave: function(index, nextIndex, direction){
            indicatorSet(slides[nextIndex-1]);
        }
    });

/*    $(window).on('hashchange', function() {
        console.log('on hash change');
      indicatorSet(location.hash.replace('#',''));
  });*/
    indicatorSet(location.hash.replace('#',''));

    $('#liveclick').on('click', function() {
        userengage('widget.open');
        return false;
    });
    $('#mobileMenuBtn').on('click', function() {
        $('#mobileMenu').toggleClass('mobile-menu-visible');
        return false;
    });
});
