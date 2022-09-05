$(document).ready(function () {

	const date = new Date();

	const today = date.toLocaleDateString('pt-bt', { weekday: 'short' });

	function parseUrl(url) {
		const explodedQuery = url.split('=');
		return $.url(explodedQuery[1]).data.attr.source;
	}

	$('.title').html(parseUrl(location.search));

	$.getJSON('agenda.json', function (data) {
		$('.schedule').html(
			data.agenda.map(function (item) {
				if (item.vacancy) {
					return `
						<li class="${item.vacancy && 'vacancy'}">
							<span class="weekday">${item.week}</span>
							<span class="game">Não tem live</span>
						</li>
					`
				}
				// return `<li class="${today === item.weekday && 'is-today'}">${item.week}: <span class="${item.vacancy && 'vacancy'}">${item.title}</span></li>`
				return `
				<li>
					<span class="weekday">${item.week} • ${item.hour}</span>
					<span class="game">${item.title}</span>
				</li>
				`
			})
		)
	})

	$('#btnSave').on('click', function () {
		html2canvas(document.querySelector("#magazine")).then(canvas => {
			document.getElementById('canvas').appendChild(canvas);
		});
	});


	Date.prototype.addDays = function (days) {
		var date = new Date(this.valueOf());
		date.setDate(date.getDate() + days);
		return date;
	}


	console.log(date.addDays(5).toLocaleDateString('pt-br'));

	function formatDate(date) {
		const spltDate = date.split('/');
		return `${spltDate[0]}/${spltDate[1]}`;
	}

	$('.from-date').html(formatDate(date.addDays(1).toLocaleDateString('pt-br')))
	$('.to-date').html(formatDate(date.addDays(7).toLocaleDateString('pt-br')))
})