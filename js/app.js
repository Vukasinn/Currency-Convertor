
let rotate = () => {
	$('.swap').css({
		 transform  : 'rotate(360deg)',
		'transition': '0.7s'
	});
}

$(".swap").on('click',function(){
	rotate();
});


