var Mana = {

	init: function(){
		this.customScrollbar();
		alert('ssd');
	},
	customScrollbar: function(){
		alert('tesr');
		$(window).load(function(){
		 	$(".scrollableText").mCustomScrollbar({
				scrollButtons:{
					enable: false
				}
			});
	 	});
	}

}


$(function(){
	Mana.init();
});