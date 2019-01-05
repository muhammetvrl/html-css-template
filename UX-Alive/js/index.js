$('.owl-one').owlCarousel({
    loop:true,
    items:3,
    margin:40,
    nav:false,
    dots:true

});

$('.owl-two').owlCarousel({
    loop:true,
    items:3,
    margin:40,
    nav:true,
    dots:true

});
$(document).ready(function() {
    $("#owl-why").owlCarousel({
        nav: true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
   
  });
