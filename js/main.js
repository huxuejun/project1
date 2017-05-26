// JavaScript Document
$('document').ready(function() {
	$('.user-content').children('.my-book').show();
	$('.user-list ul li').click(function(e) {
        $('.user-list ul li').removeClass('active');
		var thisClass = $(this).attr('class');
		$(this).addClass('active');
		$('.user-content').children().hide();
		$('.user-content').children('.'+thisClass).show();
		e.preventDefault();
    });
});