$(document).ready(function() {
    var slides = $('#fullpage').children().map(function() { return $(this).data('anchor') }).toArray();
    var indicatorWidth = $('#indicator').width();
    var indicatorStep = ($('#indicator').width()/slides.length);
    var indicatorSet = function(hash) {
        if (!hash)
            hash = slides[0];
        var index = -1;
        $.each(slides, function(key, val) {
            if (val == hash)
                index = key;
        });

        if ((hash == slides[0]) || (index == 0)) {
            $('.slide-about').removeClass('slide-hidden');
        }
        
        if (index == -1)
            return false;
        var margin = index*indicatorStep;
        $('#indicatorMarker').css('margin-left', margin);
    };
    var SCROLLING_SPEED = 700;
    $('#fullpage').fullpage({
        css3: true,
        anchors: slides,
        animateAnchor: false,
        scrollingSpeed: SCROLLING_SPEED,
        responsiveSlides: true,
//      responsiveHeight: 500,
        fadingEffect: true,
        fadingEffectKey: 'YW5kcml1c3BldHJvc2l1cy5jb21fekc2Wm1Ga2FXNW5SV1ptWldOMDRLNg==',
        lazyLoading: true,
        onLeave: function(index, nextIndex, direction){
            indicatorSet(slides[nextIndex-1]);
            $('.slide-about').removeClass('slide-hidden');
        },
    });
/*    $(window).on('hashchange', function() {
        console.log('on hash change');
      indicatorSet(location.hash.replace('#',''));
  });*/
    indicatorSet(location.hash.replace('#',''));
/*
    $('#liveclick').on('click', function() {
        userengage('widget.open');
        return false;
    });*/
    $('#mobileMenuBtn').on('click', function() {
        $('#mobileMenu').toggleClass('mobile-menu-visible');
        $('#mainHeader').toggleClass('mobile-menu-opened');
        return false;
    });
});
