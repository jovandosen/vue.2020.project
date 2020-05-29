Vue.component('user-table-heading', {
	template: '<tr><th v-bind:style="cellStyle">First Name</th><th v-bind:style="cellStyle">Last Name</th><th v-bind:style="cellStyle">Email</th><th v-bind:style="cellStyle">Age</th><th v-bind:style="cellStyle">Gender</th><th v-bind:style="cellStyle">Role</th></tr>',
	data: function () {
		return {
			cellStyle: {
				'border-collapse': 'collapse',
				'border': '1px solid #808080',
				'padding': '20px',
				'text-align': 'center'
			}
		}
	}
})

Vue.component('user-row', {
	props: ['firstName', 'lastName', 'email', 'age', 'gender', 'role'],
	template: '<tr v-bind:class="userRowClass" v-on:click="getUserDetails"><td v-bind:style="cellStyle">{{ firstName }}</td><td v-bind:style="cellStyle">{{ lastName }}</td><td v-bind:style="cellStyle">{{ email }}</td><td v-bind:style="cellStyle">{{ age }}</td><td v-bind:style="cellStyle">{{ gender }}</td><td v-bind:style="cellStyle">{{ role }}</td></tr>',
	data: function () {
		return {
			cellStyle: {
				'border-collapse': 'collapse',
				'border': '1px solid #808080',
				'padding': '20px',
				'text-align': 'center'
			},
			userRowClass: 'rowStyle'
		}
	},
	methods: {
		getUserDetails: function () {
			alert('Hello ' + this.firstName + ' ' + this.lastName);
		}
	}
})

var usersData = new Vue({
	el: '#users-content',
	data: {
		users: [
			{ id: 0, firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', age: 32, gender: 'Male', role: 'admin' },
			{ id: 1, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@gmail.com', age: 40, gender: 'Female', role: 'editor' },
			{ id: 2, firstName: 'Jack', lastName: 'Smith', email: 'jacksmith@gmail.com', age: 22, gender: 'Male', role: 'subscriber' },
			{ id: 3, firstName: 'David', lastName: 'Johnson', email: 'david@gmail.com', age: 52, gender: 'Male', role: 'admin' },
			{ id: 4, firstName: 'Lilly', lastName: 'Lock', email: 'lillylock@gmail.com', age: 25, gender: 'Female', role: 'author' }
		]
	}
})