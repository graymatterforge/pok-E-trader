(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $('.carousel').carousel({dist: -25,padding:5});
    /*var stackedCard = new stackedCards({
  	 	selector: '.mycards',
  	 	layout: "slide",
  	 	transformOrigin: "top",
  	});

  	stackedCard.init();*/
    $('input.autocomplete').autocomplete({
     data: {
       "Apple": null,
       "Microsoft": null,
       "Google": 'https://placehold.it/250x250'
     },
     limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
     onAutocomplete: function(val) {
       // Callback function when value is autcompleted.
     },
     minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
   });
   $('.table-of-contents').pushpin({
     top: 0,
     bottom: 1500,
     offset: 50
   });


  }); // end of document ready
})(jQuery); // end of jQuery name space
