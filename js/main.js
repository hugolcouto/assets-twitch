$(document).ready(function () {
	$.getJSON('../agenda.json', function (data) {
		$('.schedule-content').html(
			data.agenda.map(function (item) {
				return `<li>${item.week}: <span class="${item.vacancy && 'vacancy'}">${item.title}</span></li>`
			})
		)
	})

})