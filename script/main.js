// хедер главной страницы
var myCanvas = document.getElementById('imgLogo');
if (myCanvas.getContext) {
	var ctx = myCanvas.getContext('2d');
	console.log('ok');

	ctx.beginPath();
	ctx.arc(75, 75, 70, 0, (Math.PI/180)*360, true);
	ctx.fillStyle = 'rgba(30, 160, 224, 0.5)';
	ctx.fill();

}