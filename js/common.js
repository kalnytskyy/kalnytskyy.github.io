$(function() {


  $(document).ready(function() {

  // full page
  $('.site-content').fullpage({
   menu : '.site-menu',
   anchors:['home', 'about', 'portfolio' ],
   verticalCentered:false,
 });

  // slider
  var slider = $('.portfolio-slider')
  slider.owlCarousel({
      nav : false, // Show next and prev buttons
      dots: false,
      singleItem: true,
      lazyLoad : true,
      afterAction : reloadNum
    });

  function reloadNum(event, info){
    var curentItem = this.owl.currentItem + 1;
    var itemLegth = this.owl.owlItems.length;
    var result = curentItem + ' / ' + itemLegth;
    $('.slider-controls').find('.slider-number').text(result);
  }

  $(".next").click(function(){
    slider.trigger('owl.next');
  })

  $(".prev").click(function(){
    slider.trigger('owl.prev');
  })

  // tabs
  $('.about-tabs').tabslet();


});

});
