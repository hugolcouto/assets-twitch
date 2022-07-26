$(document).ready(function () {

	const date = new Date();

	const today = date.toLocaleDateString('pt-bt', { weekday: 'short' });

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