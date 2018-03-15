/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

jQuery.fn.clickToggle = function(a,b) {
    function cb(){ [b,a][this._tog^=1].call(this); }
    return this.on("click", cb);
};

$('.cat-item').hide();

$('.category-head').on('click',function(){
        $('.all-item').fadeOut();                
        $('.cat-item').fadeOut();                
        var category = $(this).text();
        console.log(category);
        console.log(this);
        var articles = $('article.'+category);
        console.log(articles)
        articles.appendTo('.post-display');
        articles.fadeIn();
        
    });
$('.all-posts-show').on('click',function(){
        $('.cat-item').fadeOut(); 
        $('.all-item').fadeIn();                
          
    }
);
