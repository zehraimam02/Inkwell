// Sticky Navigation

let navbar = $(".navbar");

$(window).scroll(function(){
    let oTop = $(".section-2").offset().top - window.innerHeight;
    if($(window).scrollTop() > oTop){
        navbar.addClass("sticky");  // If the scrollTop is greater than oTop than add sticky navigation
    }else{
        navbar.removeClass("sticky");
    }
});


// Counter Animation

let nCount = function(selector) {
    $(selector).each(function(){

        $(this).animate({
            Counter:$(this).text()
        }, {
                duration: 2000,  // How long the animation will run - 4s
                easing:"swing",  // Which easing func to use for the trans.
                step: function(value){  // Called for each animated property of each animated element
                    $(this).text(Math.ceil(value));  // Returns the smallest int >= given number
                }
            }
        );

    });
};

let a = 0;
$(window).scroll(function() {
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if(a==0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".rect > h1");
    }
});