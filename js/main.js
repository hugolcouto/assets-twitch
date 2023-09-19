$(document).ready(function () {

	const date = new Date();

	const today = date.toLocaleDateString('pt-bt', { weekday: 'short' });


	$.urlParam = function (name) {
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results == null) {
			return null;
		}
		return decodeURI(results[1]) || 0;
	}

	$('.title').html($.urlParam('title'));

	if ($.urlParam('view') === '1') {
		$('.frontground').hide();
	}

	var hasCountdown = $.urlParam('countdown');
	var countdownTimer = parseInt($.urlParam('timer')) || 5;

	if (hasCountdown && hasCountdown == 1) {
		var count = countdownTimer * 60; // 5 minutos em segundos
		var countdown = setInterval(function () {
			var minutes = Math.floor(count / 60);
			var seconds = count % 60;

			$(".countdown").text(minutes + ":" + seconds);

			if (count === 0) {
				clearInterval(countdown);
				$(".countdown").text("Loading...");
			} else {
				count--;
			}
		}, 1000);
	} else {
		$(".countdown").hide();
	}
})