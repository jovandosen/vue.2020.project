Vue.component('nav-links', {
	props: ['text', 'url'],
	template: '<li><a v-bind:href="url">{{ text }}</a></li>'
})

Vue.component('sidebar-links', {
	props: ['text'],
	template: '<li><a>{{ text }}</a></li>'
})

var nav = new Vue({
	el: '#navigation',
	data: {
		links: [
			{ id: 0, text: 'Home', url: '/' },
			{ id: 1, text: 'About', url: 'about.html' },
			{ id: 2, text: 'Contact', url: 'contact.html' },
			{ id: 3, text: 'Register', url: 'register.html' },
			{ id: 4, text: 'Login', url: 'login.html' }
		]
	}
})

var sidebarNav = new Vue({
	el: '#sidebar-body',
	data: {
		links: [
			{ id: 0, text: 'Learn Html' },
			{ id: 1, text: 'Learn Css' },
			{ id: 2, text: 'Learn Javascript' },
			{ id: 3, text: 'Learn Sql' },
			{ id: 4, text: 'Learn Php' },
			{ id: 5, text: 'Learn Slim' },
			{ id: 6, text: 'Learn Laravel' },
			{ id: 7, text: 'Learn Wordpress' },
			{ id: 8, text: 'Learn Bootstrap' },
			{ id: 9, text: 'Learn Vue' }
		]
	}
})