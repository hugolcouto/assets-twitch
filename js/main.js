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
	$('.tt').html($.urlParam('twitter'));
	// $('.agenda').html($.urlParam('agenda'));

	if ($.urlParam('agenda') == '0') {
		console.log('agenda is false')
		$('.schedule').hide();
	}

	if ($.urlParam('twitter') === null) {
		$('.line-twitter').hide();
	}

	if ($.urlParam('view') === '1') {
		$('.frontground').hide();
	}

	$.getJSON('agenda.json', function (data) {
		$('.schedule-content').html(
			data.agenda.map(function (item) {
				if (item.vacancy) {
					return `<li>${item.week}: <span class="${item.vacancy && 'vacancy'}">Folga</span></li>`
				}
				return `<li class="${today === item.weekday && 'is-today'}">${item.week}: <span class="${item.vacancy && 'vacancy'}">${item.title}</span></li>`
			})
		)
	})
})