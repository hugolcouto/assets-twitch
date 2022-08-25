$(document).ready(function () {

	const date = new Date();

	const today = date.toLocaleDateString('pt-bt', { weekday: 'short' });

	function parseUrl(url) {
		const explodedQuery = url.split('=');
		return $.url(explodedQuery[1]).data.attr.source;
	}

	$('.title').html(parseUrl(location.search));

	$.getJSON('agenda.json', function (data) {
		$('.schedule-content').html(
			data.agenda.map(function (item) {
				if (item.vacancy) {
					return `<li class="${item.vacancy && 'vacancy'}">${item.week}: <span>Não tem live</span></li>`
				}
				return `<li class="${today === item.weekday && 'is-today'}">${item.week}: <span class="${item.vacancy && 'vacancy'}">${item.title}</span></li>`
			})
		)
	})
})