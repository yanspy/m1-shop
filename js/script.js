$(document).ready(function($) {
	$('.catalog__sizes-opt').click(function() {
		if (!$(this).hasClass('absent')) {
			$(this).parent().find('.catalog__sizes-opt').removeClass('selected');
			$(this).toggleClass('selected');
		}
	});
	$(".catalog__colors-opt").each(function() {
		$(this).css({
			'background-color': $(this).attr('color')
		});
	});
	$(".catalog__colors-opt").click(function(e) {
		e.preventDefault();
		if (!$(this).hasClass('selected')) {
			$(this).parent().find('.catalog__colors-opt').removeClass('selected');
			$(this).toggleClass('selected');
		} else $(this).toggleClass('selected');
	});
	$('.catalog__switch-btn').click(function() {
		$('.catalog__switch-btn').removeClass('active');
		$(this).toggleClass('active');
		$(".catalog__list").removeClass('visible');
		$(".catalog__list[id='"+$(this).attr("show")+"']").addClass('visible');
	});
	$('.select-arrow').click(function(e) {
		e.preventDefault();
	});
	$('.catalog__order-btn').click(function(e) {
		$('.order__popup').addClass('visible');
		$('.order__popup').animate({
			'opacity': 1},
			300);
		var name     = $(this).parent().find('h4').text();
		$('.order__popup-info h4').text(name);
		var size     = $(this).parent().find('.catalog__sizes .catalog__sizes-opt.selected').text();
		$('.order__popup-select').val(size == null ? "XS" : size);
		var priceOld = $(this).parent().find('.catalog__price .oldPrice').text();
		$('.order__popup-info .oldPrice').text(priceOld);
		var priceCur = $(this).parent().find('.catalog__price .curPrice').text();
		$('.order__popup-info .curPrice').text(priceCur);

	});
	$('.popup-close').click(function(e) {
		$('.order__popup').animate({
			'opacity': 0},
			300, function() {
				$('.order__popup').removeClass('visible');
		});
	});
});	