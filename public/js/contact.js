var contactData = new Vue({
	el: '#contact-data',
	data: {
		contactName: '',
		contactEmail: '',
		contactMessage: '',
		errors: []
	},
	methods: {
		validateContactForm: function () {

			if( this.contactName && this.contactEmail && this.contactMessage ){
				return true;
			}

			this.errors = [];

			if( !this.contactName ){
				this.errors.push('Name required.');
			}

			if( !this.contactEmail ){
				this.errors.push('Email required.');
			}

			if( !this.contactMessage ){
				this.errors.push('Message required.');
			}

			console.log(this.errors);
		}
	}
})