// Vue component

Vue.component('todo-item', {
  	template: '<li>This is a todo</li>'
})

// end of component

var app = new Vue({
	el: '#app',
	data: {
		message: 'Well and Good.'
	}
})

var app2 = new Vue({
  	el: '#app-2',
  	data: {
    	message: 'You loaded this page on ' + new Date().toLocaleString()
  	}
})

var app3 = new Vue({
  	el: '#app-3',
  	data: {
    	seen: true
  	}
})

var app4 = new Vue({
  	el: '#app-4',
  	data: {
    	todos: [
	      	{ text: 'Learn JavaScript' },
	      	{ text: 'Learn Vue' },
	      	{ text: 'Learn PHP' },
	      	{ text: 'Learn CSS' },
	      	{ text: 'Learn SQL' }
    	]
  	}
})

var app5 = new Vue({
  	el: '#app-5',
  	data: {
    	message: 'JovaN'
  	},
  	methods: {
    	reverseMessage: function () {
      		this.message = this.message.split('').reverse().join('')
    	}
  	}
})

var app6 = new Vue({
  	el: '#app-6',
  	data: {
    	message: 'Hello Vue!'
  	}
})