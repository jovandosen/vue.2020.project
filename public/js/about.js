Vue.component('about-page-content', {
	template: '<p v-bind:style="textStyle"><slot>Default text to be displayed.</slot></p>',
	data: function () {
		return {
			textStyle: {
				'text-align': 'justify'
			}
		}
	}
})

Vue.component('about-details', {
	template: '<div v-bind:style="detailsTextStyle"><div v-bind:style="boxStyle"><slot name="header">Header content</slot></div><div v-bind:style="boxStyle"><slot name="main">Main content</slot></div><div v-bind:style="boxStyle"><slot name="footer">Footer content</slot></div></div>',
	data: function () {
		return {
			detailsTextStyle: {
				'text-align': 'justify'
			},
			boxStyle: {
				'margin-top': '15px'
			}
		}
	}
})

var aboutData = new Vue({
	el: '#about-content'
})