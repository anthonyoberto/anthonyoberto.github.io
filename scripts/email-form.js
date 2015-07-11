
var formName = document.getElementById('name');
var formEmail = document.getElementById('email');
var formLocation = document.getElementById('location');
var formPhone = document.getElementById('phone');
var formComments = document.getElementById('comments');

// ONFOCUS
formName.onfocus = function() {
	if (formName.value == "Name") {
		formName.value = "";
	}
};

formEmail.onfocus = function() {
	if (formEmail.value == "Email") {
		formEmail.value = "";
	}
};

formLocation.onfocus = function() {
	if (formLocation.value == "Location") {
		formLocation.value = "";
	}
};

formPhone.onfocus = function() {
	if (formPhone.value == "Phone Number") {
		formPhone.value = "";
	}
};

formComments.onfocus = function() {
	if (formComments.value == "Message") {
		formComments.value = "";
	}
};

// ONBLUR
formName.onblur = function() {
	if (this.value == "") {
		this.value = "Name";
	}
};

formEmail.onblur = function() {
	if (this.value == "") {
		this.value = "Email";
	}
};

formLocation.onblur = function() {
	if (this.value == "") {
		this.value = "Location";
	}
};

formPhone.onblur = function() {
	if (this.value == "") {
		this.value = "Phone Number";
	}
};

formComments.onblur = function() {
	if (this.value == "") {
		this.value = "Message";
	}
};

function prepareEventHandlers() {
	document.getElementById('sendButton').onclick = function() {
		// prevent a form from submitting if no name
		if (document.getElementById('name').value == "Name") {
			document.getElementById('errorMessage').innerHTML = "*Please provide your name above.";
			// to stop the form from submitting
			return false;
		} else if (document.getElementById('email').value == "Email") {
			document.getElementById('errorMessage').innerHTML = "*Please provide your email address above.";
			// to stop the form from submitting
			return false;
		} else if (document.getElementById('phone').value == "Phone Number") {
			document.getElementById('errorMessage').innerHTML = "*Please provide your phone number above.";
			// to stop the form from submitting
			return false;
		} else if (document.getElementById('comments').value == "Message") {
			document.getElementById('errorMessage').innerHTML = "*Please include a message above.";
			// to stop the form from submitting
			return false;
		} else {
			// reset and allow the form to submit
			document.getElementById('errorMessage').innerHTML = "";
			return true;
		}

	};
}

// when the document loads
window.onload = function() {
	prepareEventHandlers();
}