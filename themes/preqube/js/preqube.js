
$(document).ready(function($) {
	
	$('.footer-widgets div[id^="block-footer"]').addClass('col-md-3');
	$('.copyright-section div[id^="block-footermessage"]').addClass('col-md-6');
	
	$('.is-active').addClass('active');
	$('.dropdown .active').parent().parent().prev("a").addClass('active');
	//$('#toolbar-administration').css('z-index','99999990');
	
	$('#accordion').find('.panel.panel-default').unwrap();
	$('#accordion').find('.panel.panel-default').unwrap();
	$('#contact-form').parent().parent().parent().addClass('row');
	jQuery('.panel,.panel-default').first().find('a').removeClass('collapsed');
	jQuery('#collapse-1').addClass('in');
	jQuery('#collapse-6').addClass('in');

});

