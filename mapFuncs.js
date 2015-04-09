function loadMap(background, backgroundWidth, backgroundHeight, foreground, foregroundWidth, foregroundHeight, playerX, playerY) {
        notWalkable = [];
	document.getElementById('background').src = "Resources/"+background;
	$('#background').css('width', backgroundWidth * 2 + "em");
	$('#background').css('height', backgroundHeight * 2 + "em");
	$('#background').css('margin-left', 0-backgroundWidth + "em");
	document.getElementById('foreground').src = "Resources/"+foreground;
	$('#foreground').css('width', foregroundWidth * 2 + "em");
	$('#foreground').css('height', foregroundHeight * 2 + "em");
	$('#foreground').css('margin-left', 0-foregroundWidth + "em");
	$('div').css("width", backgroundWidth * 2 + "em");
	$('div').css("height", backgroundHeight * 2 + "em");
	$('div').css("margin-left", 0-backgroundWidth + "em");
	$("#player").css("left", playerX * 2 + "em");
	$("#player").css("top", playerY * 2 + "em");
}
