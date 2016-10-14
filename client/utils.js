function lerp(from,to,t){
	if(Math.abs(to-from) < 1){
		return to;
	}
	return from+(to-from)*t;
}

function clamp(min,v,max){
	return Math.max(min,Math.min(v,max));
}

// fullscreen toggle from https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API#Toggling_fullscreen_mode
function isFullscreen(){
	return !(!document.fullscreenElement&& !document.mozFullScreenElement&& !document.webkitFullscreenElement&& !document.msFullscreenElement);
}
function toggleFullscreen(){
	if(!isFullscreen()){
		if (document.body.requestFullscreen) {
			document.body.requestFullscreen();
		} else if (document.body.msRequestFullscreen) {
			document.body.msRequestFullscreen();
		} else if (document.body.mozRequestFullScreen) {
			document.body.mozRequestFullScreen();
		} else if (document.body.webkitRequestFullscreen) {
			document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
}

function ease(t) {
	var s=1.70158;var p=0;var a=1;
	if (t==0) return 0;  if ((t/=1)==1) return 1;  if (!p) p=.3;
	if (a < Math.abs(1)) { a=1; var s=p/4; }
	else var s = p/(2*Math.PI) * Math.asin (1/a);
	return a*Math.pow(2,-10*t) * Math.sin( (t-s)*(2*Math.PI)/p ) + 1;
};