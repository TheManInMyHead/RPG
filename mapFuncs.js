function loadMap(background, backgroundWidth, backgroundHeight, foreground, foregroundWidth, foregroundHeight, playerX, playerY) {
	var currentBack = document.getElementById('background');
	currentBack.src = "Resources/"+background;
	currentBack.width = backgroundWidth;
	currentBack.height = backgroundHeight;
	var currentFore = document.getElementById('foreground');
	currentFore.src = "Resources/"+foreground;
	currentFore.width = foregroundWidth;
	currentFore.height = foregroundHeight;
	var playerFinalX = $(playerX + 22.65).toPx();
	var playerFinalY = $(playerY + 6.6).toPx();
	$("#player").css("left", playerFinalX);
	$("#player").css("top", playerFinalY);
}
