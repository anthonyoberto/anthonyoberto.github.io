
/* global $,document,console,Parse */
$(document).ready(function() {
	
	var parseAPPID = "Tay5CdQYNvLGp0wS9skzNJKvAOBovMmkBZX3ZOSf";
	var parseJSID = "2OEOuShGd2wohfz5mMGJYkF71LCHTeurXCtpnQca";
	
	Parse.initialize(parseAPPID, parseJSID);
	var CommentObject = Parse.Object.extend("CommentObject");
	
	$("#commentForm").on("submit", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var data = {};
		data.name = $("#name").val();
		data.email = $("#email").val();
		data.location = $("#location").val();
		data.phone = $("#phone").val();
		data.comments = $("#comments").val();

		var comment = new CommentObject();
		comment.save(data, {
			success:function() {
				console.log("Success");
				//Alerts are lame - but quick and easy
				alert("Thanks for filling the form!");
			},
			error:function(e) {
				console.dir(e);
			}
		});
		
	});
	
});