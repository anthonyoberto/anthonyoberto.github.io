
// var emailForm = document.getElementById('name');

// emailForm.onfocus = function() {
// 	if (emailForm.value == "Name") {
// 		emailForm.value = "";
// 	}
// };

// emailForm.onblur = function() {
// 	if (emailForm.value == "") {
// 		emailForm.value = "Name";
// 	}
// };

// function prepareEventHandlers() {
// 	document.getElementById('sendButton').onclick = function() {
// 		// prevent a form from submitting if no name
// 		if (document.getElementById('name').value == "Name") {
// 			document.getElementById('errorMessage').innerHTML = "Please provide your first name.";
// 			// to stop the form from submitting
// 			return false;
// 		} else {
// 			// reset and allow the form to submit
// 			document.getElementById('errorMessage').innerHTML = "";
// 			return true;
// 		}
// 	};
// }

// // when the document loads
// window.onload = function() {
// 	prepareEventHandlers();
// }