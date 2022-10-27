var formContacts = document.getElementsByClassName("contactForm");

Array.from(formContacts).forEach((contactForm) => {

var formData = new FormData();
var elements = Array.from(contactForm.elements);

	contactForm.addEventListener("submit", function(event) {
		event.preventDefault();

		var formData = new FormData();
		var elements = Array.from(contactForm.elements);

		for (const element of elements) {
			const valueOfInput = formData.append(element.getAttribute("name"), element.value);
		}

		grecaptcha.ready(function() {
			grecaptcha.execute('6LdMLa4cAAAAALe3fZb0afV_C_TMjLxsMwqDqD_l', {action:'submit'}).then(function(token) {

				formData.append('wa-recaptcha', token);

				var req = new XMLHttpRequest();
				req.open('POST', 'https://mailer.apps.webarray.com/post/HOvoMpaz5gZPEKZ5e2Zfapn6AcJ6l9yk', false);
				
				req.onreadystatechange = function() {
					if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
						window.location.href = 'https://lidiap.buildmy.ca/private/webarray/magneta-website/2022-08-09/thankyou.html';						
					}	
					else {
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Something went wrong!'
						})
					}
				}
				
				req.send(formData);
							

			});
		});
	});
});