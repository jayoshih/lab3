'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		console.log("Project clicked");
		$('#testjs').text("Javascript is connected");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$(".thumbnail").click(projectClick);
	$(".project").click(toggleProject)
    $("#submitBtn").click(submitChanges); 
} 

function submitChanges(e) {
   var pid = $('#project').val();
   $(pid).animate({width: $('#width').val()});
   $(pid + " .project-description").text($('#description').val());
}

function projectClick(e){
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<p class='project-description'>Description of the project.</p>");
    } else {
       description.remove();
	}
}

function toggleProject(e){
	if(e.target.tagName != "img"){
		e.preventDefault();
		$(this).find(".project-description").toggle();
		$(this).find("img").toggle();
	}
}