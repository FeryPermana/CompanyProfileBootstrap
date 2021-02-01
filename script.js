$('.page-scroll').on('click', function (e) {
	// body...
	var tujuan = $(this).attribute('href');
	var elementTujuan = $(tujuan);

	console.log($('body').scrollTop());

	e.preventDefault();

});