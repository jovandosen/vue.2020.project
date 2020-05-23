Vue.component('nav-links', {
	props: ['text', 'url'],
	template: '<li><a v-bind:href="url" v-bind:class="{ active: isActive }" v-on:click="activeLink">{{ text }}</a></li>',
	data(){
		return {
			isActive: ( ( sessionStorage.getItem("linkID") == this._uid ) ? true : this.checkPath() )
		}
	},
	methods: {
		activeLink: function () {
			sessionStorage.setItem("linkID", this._uid);
		},
		checkPath: function () {
			var pageUrl = window.location.pathname;

			if( pageUrl.length > 1 ){
				pageUrl = pageUrl.replace("/", "");
			}

			if( pageUrl == this.url ){
				sessionStorage.clear();
				return true;
			}
		}
	}
})

Vue.component('sidebar-links', {
	props: ['text', 'url', 'target'],
	template: '<li><a v-bind:href="url" v-bind:target="target">{{ text }}</a></li>'
})

Vue.component('clear-session', {
	template: '<li><a v-bind:href="url" v-on:click="clearSession">Clear Session</a></li>',
	data(){
		return {
			url: '/'
		}
	},
	methods: {
		clearSession: function () {
			sessionStorage.clear();
		}
	}
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
			{ id: 0, text: 'Learn Html', url: 'https://www.w3schools.com/html/default.asp', target: '_blank' },
			{ id: 1, text: 'Learn Css', url: 'https://www.w3schools.com/css/default.asp', target: '_blank' },
			{ id: 2, text: 'Learn Javascript', url: 'https://www.w3schools.com/js/default.asp', target: '_blank' },
			{ id: 3, text: 'Learn Sql', url: 'https://www.w3schools.com/sql/default.asp', target: '_blank' },
			{ id: 4, text: 'Learn Php', url: 'https://www.w3schools.com/php/default.asp', target: '_blank' },
			{ id: 5, text: 'Learn Slim', url: 'http://www.slimframework.com/', target: '_blank' },
			{ id: 6, text: 'Learn Laravel', url: 'https://laravel.com/', target: '_blank' },
			{ id: 7, text: 'Learn Wordpress', url: 'https://developer.wordpress.org/', target: '_blank' },
			{ id: 8, text: 'Learn Bootstrap', url: 'https://getbootstrap.com/', target: '_blank' },
			{ id: 9, text: 'Learn Vue', url: 'https://vuejs.org/', target: '_blank' }
		]
	}
})