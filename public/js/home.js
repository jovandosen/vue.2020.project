var textExample = {
	template: '<p>Well and good. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>'
}

var textExampleTwo = {
	props: ['text'],
	template: '<p>{{ text }}</p>'
}

var home = new Vue({
	el: '#home-data',
	data: {
		hrStyle: {
			'margin-top': '10px',
			'margin-bottom': '10px'
		},
		pStyle: {
			'text-align': 'justify'
		},
		text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
	},
	components: {
		'text-example': textExample,
		'text-example-two': textExampleTwo
	}
})