var world = {};


$(document).ready(function() {
	$(document).click(function(event) {
		//alert("You clicked me! " + event.pageX + " " + event.pageY);
		$("#hero_div").css("top",event.pageY+"px");
		$("#hero_div").css("left",event.pageX+"px");
	});	
	
	world.people = [];
	world.people.push({el: $("#extra1"), top: 0, left: 0});
	world.people.push({el: $("#extra2"), top: 0, left: 0});	
	movePeople()
});

function movePeople() {
	for (person in world.people) {
		
	}
}
	
	