$(document).ready(function() {

$('.leftbutton').click(function() {
	if ($( '.leftbutton > img' ).hasClass('check')) {
  		$( '.check').hide();
  		$( '.add' ).show();
  		$( '.leftbutton > img' ).addClass( 'bought' );
  		$( '.leftbutton > img' ).removeClass( 'check' );
  		
	} 	
	else {
  		$( '.leftbutton > img' ).removeClass( 'add' );
  		$( '.leftbutton > img' ).addClass( 'check' );
	}
	});
});

