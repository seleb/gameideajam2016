var startTime=0;
var lastTime=0;
var curTime=0;

var game;
try{
	game = new PIXI.Container();
}catch(e){
	document.body.innerHTML="<p>Unsupported Browser. Sorry :(</p>";
}
var resizeTimeout=null;

var mouse={
	pos:[0,0]
};
var size=[500,300];

var sounds=[];

var scaleMode = 0;

$(document).ready(function(){

	// try to auto-focus and make sure the game can be focused with a click if run from an iframe
	window.focus();
	$(document).on("mousedown",function(event){
		window.focus();
	});

	// setup game
	startTime=Date.now();

	// create renderer
	renderer = PIXI.autoDetectRenderer(
		size[0],size[1],
		{
			antiAlias:false,
			transparent:false,
			resolution:1,
			roundPixels:true,
			clearBeforeRender:true,
			autoResize:false
		}
	);
	renderer.backgroundColor = 0x000000;

	PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
	PIXI.WRAP_MODES.DEFAULT = PIXI.WRAP_MODES.MIRRORED_REPEAT;

	// add the canvas to the html document
	$("#display").prepend(renderer.view);



	// create a new render texture..
	renderTexture = PIXI.RenderTexture.create(size[0],size[1],PIXI.SCALE_MODES.NEAREST,1);
	 
	// create a sprite that uses the new render texture...
	// and add it to the stage
	renderSprite = new PIXI.Sprite(renderTexture, new PIXI.Rectangle(0,0,size[0],size[1]));
	game.addChild(renderSprite);
	
	fontStyle={font: "8px sans-serif", align: "left"};

	CustomFilter.prototype = Object.create(PIXI.Filter.prototype);
	CustomFilter.prototype.constructor = CustomFilter;

	PIXI.loader
		.add("screen_shader","assets/screen_shader.frag");

	PIXI.loader
		.on("progress", loadProgressHandler)
		.load(init);
});


function CustomFilter(fragmentSource){
	PIXI.Filter.call(this,
		// vertex shader
		null,
		// fragment shader
		fragmentSource
	);
}


function loadProgressHandler(loader, resource){
	// called during loading
	console.log("loading: " + resource.url);
	console.log("progress: " + loader.progress+"%");
}

function onResize() {
	/*if(resizeTimeout != null){
		window.clearTimeout(resizeTimeout);
	}

	resizeTimeout=window.setTimeout(_resize,150);*/
	_resize();
}


function _resize(){
	var w=$("#display").innerWidth();
	var h=$("#display").innerHeight();
	var ratio=size[0]/size[1];

	
	if(w/h < ratio){
		h = Math.round(w/ratio);
	}else{
		w = Math.round(h*ratio);
	}
	

	var aw,ah;

	if(scaleMode==0){
		// largest multiple
		aw=size[0];
		ah=size[1];


		while(aw <= w || ah <= h){
			aw+=size[0];
			ah+=size[1];
		}

		aw-=size[0];
		ah-=size[1];
	}else if(scaleMode==1){
		// fit
		aw=w;
		ah=h;
	}else{
		// original
		aw=size[0];
		ah=size[1];
	}

	renderer.view.style.width=aw+"px";
	renderer.view.style.height=ah+"px";

	console.log("Resized",size,aw,ah);
}

PIXI.zero=new PIXI.Point(0,0);