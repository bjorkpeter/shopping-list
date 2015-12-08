$(document).ready(function() {

/*Declaring Variables*/
var leftbutton = '<img class="check" src="http://bjorkpeter.github.io/shopping-list/images/approve.png" alt="check" title="click to mark purchase" width="30px">'
var rightbutton = '<img class="close" src="http://bjorkpeter.github.io/shopping-list/images/close.png" alt="close" title="click to remove item" width="30px>">'

/*Allows ENTER Keydown to add text to list*/
/*research append, prepend, val*/
  
/*Allows RIGHT Button Clicks*/
 $('.leftbutton').on('click', '.check', function() {
	if ($(this).closest('.list > div').hasClass('result')) {
  		$(this).closest('.list > div').addClass( 'result-remove' );
  		$(this).closest('.list > div').removeClass( 'result' );
  		
	} 	
	else {
  		$(this).closest('.list > div').removeClass( 'result-remove' );
  		$(this).closest('.list > div').addClass( 'result' );
	}
	});
  
  /*Allows RIGHT Button Clicks*/
  $('.rightbutton').on('click', '.close', function() {
	    $(this).closest('.list > div').remove('div')
  		
	});
  
  /*Do I want to add animations?*/
});