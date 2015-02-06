var loadMap = function(background, foreground, playerX, playerY){
	document.getElementById('background').src = background;
	document.getElementById('foreground').src = foreground;
	var playerFinalX = (playerX * 32) + 76;
	var playerFinalY = (playerY * 32) + 568;
	$("#player").css("top", playerFinalX);
	$("#player").css("left", playerFinalY);
}
