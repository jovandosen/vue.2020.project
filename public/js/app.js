var nav = new Vue({
	el: '#navigation',
	data: {
		links: [
			{ text: 'Home', url: '/' },
			{ text: 'About', url: 'about.html' },
			{ text: 'Contact', url: 'contact.html' },
			{ text: 'Register', url: 'register.html' },
			{ text: 'Login', url: 'login.html' }
		]
	}
})

var content = new Vue({
	el: '#content',
	data: {
		contentStyle: {
			'margin-left': 'auto',
			'margin-right': 'auto',
			'margin-top': '2%',
			'width': '70%',
			'height': '250px',
			'padding': '15px'
		},
		contentBoxes: {
			'float': 'left',
			'width': '31%',
			'text-align': 'justify',
			'margin-left': '25px'
		}
	}
})

var contentThree = new Vue({
	el: '#content-three',
	data: {
		contentThreeStyle: {
			'margin-left': 'auto',
			'margin-right': 'auto',
			'padding': '20px',
			'width': '70%'
		},
		contentThreeBoxes: {
			'float': 'left',
			'width': '35%',
			'text-align': 'justify',
			'margin-left': '150px'
		}
	}
})