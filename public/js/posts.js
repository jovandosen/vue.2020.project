Vue.component('table-heading', {
	template: '<tr><th v-bind:style="cellStyle">Title</th><th v-bind:style="cellStyle">Content</th><th v-bind:style="cellStyle">Author</th><th v-bind:style="cellStyle">Likes</th><th v-bind:style="cellStyle">Comments</th><th v-bind:style="cellStyle">Created</th></tr>',
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

Vue.component('post-row', {
	props: ['title', 'content', 'author', 'likes', 'comments', 'created'],
	template: '<tr><td v-bind:style="cellStyle">{{ title }}</td><td v-bind:style="cellStyle">{{ content }}</td><td v-bind:style="cellStyle">{{ author }}</td><td v-bind:style="cellStyle">{{ likes }}</td><td v-bind:style="cellStyle">{{ comments }}</td><td v-bind:style="cellStyle">{{ created }}</td></tr>',
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

var postsData = new Vue({
	el: '#posts-content',
	data: {
		posts: [
			{ id: 0, title: 'Foo', content: 'Foo content', author: 'John', likes: 10, comments: 2, created: '5/10/2020' },
			{ id: 1, title: 'Bar', content: 'Bar content', author: 'Jane', likes: 20, comments: 12, created: '5/14/2020' },
			{ id: 2, title: 'Baz', content: 'Baz content', author: 'Jack', likes: 15, comments: 23, created: '2/11/2020' },
			{ id: 3, title: 'Test', content: 'Test content', author: 'David', likes: 12, comments: 5, created: '1/10/2020' },
			{ id: 4, title: 'Dev', content: 'Dev content', author: 'Kate', likes: 100, comments: 40, created: '2/20/2020' }
		]
	}
})