

function main(){
	curTime=Date.now()-startTime;
	deltaTime=curTime-lastTime;

	update();
	render();

	lastTime=curTime;

	// request another frame to keep the loop going
	requestAnimationFrame(main);
}




function init(){
	// initialize input managers
	keys.init();
	keys.capture=[keys.LEFT,keys.RIGHT,keys.UP,keys.DOWN,keys.SPACE,keys.ENTER,keys.BACKSPACE,keys.ESCAPE,keys.F,keys.M];


	scene = new PIXI.Container();
	game.addChild(scene);

	world = new PIXI.Container(); // container for all the in-game stuff (i.e. not the menu)


	// setup screen filter
	screen_filter = new CustomFilter(PIXI.loader.resources.screen_shader.data);
	screen_filter.padding=0;

	renderSprite.filters = [screen_filter];


	// screen background
	bg = new PIXI.Graphics();
	world.addChild(bg);


	$(document).on("keydown",function(event){
		if(event.keyCode == keys.F){
			toggleFullscreen();
		}
	});
	
	fillerTextLines=[
	"no",
	"no not like that",
	"argh",
	"what are you doing",
	"do you even know how to do this",
	"can't you follow simple instructions",
	"oh come on",
	"you're not even trying are you",
	"what is wrong with you",
	"seriously"
	];

	actualTextLines=[
	"hey there!",
	"welcome to the game",
	"this is your first time playing",
	"yeah?",
	"well",
	"don't worry",
	"it's pretty simple",
	"i mean...",
	"it's right in the title",
	"you know?",
	"press the button to win!",
	"...",
	"...",
	"oh!",
	"you're probably wondering...",
	"\"which button???\"",
	"right?",
	"ha",
	"ha",
	"ha",
	"ha",
	"ha",
	"ha",
	"no worries",
	"let's see...",
	"which button was it again?",
	"...",
	"...",
	"hmm...",
	"...",
	"just a sec...",
	"...",
	"ah",
	"here it is",
	"X",
	"you got that?",
	"so all you need to do",
	"is press the X button",
	"and then you win!",
	"easy as pie.",
	"in fact",
	"it's easier than pie",
	"you gotta like",
	"cut",
	"bite",
	"chew",
	"swallow",
	"when you're eating pie",
	"this is just a button press",
	"...",
	"...",
	"are you using a gamepad?",
	"like an xbox controller",
	"or dualshock",
	"or whatever?",
	"cause that won't work",
	"i know they've got X buttons",
	"but i figured",
	"\"it's a short game\"",
	"\"single button interaction\"",
	"\"who's gonna bother with a gamepad\"",
	"not me!",
	"so i didn't bother with the gamepad code",
	"sorry if that was the issue",
	"go ahead and give it another shot",
	"just use the keyboard this time",
	"...",
	"...",
	"so",
	"yeah",
	"X button",
	"should be in the lower left of your keyboard",
	"you're on a QWERTY keyboard",
	"right?",
	"i guess some people have AZERTY",
	"where's the X on AZERTY?",
	"...",
	"oh it's the same spot",
	"lower left",
	"...",
	"oh DVORAK!",
	"DVORAK is a thing",
	"right?",
	"maybe you're on DVORAK",
	"looks like it's more of a middle key",
	"on DVORAK, that is",
	"still on the bottom row though",
	"...",
	"...",
	"...",
	"ok",
	"so",
	"confession:",
	"i'm really only checking the X button",
	"maybe you've hit others",
	"maybe not",
	"but either way",
	"you didn't hit the X",
	"i'm like",
	"99% sure of that",
	"and that's like",
	"the only thing you need to do",
	"i mean",
	"it's the only thing i've even told you to do",
	"so",
	"can you just go ahead",
	"and do that",
	"hit the X button",
	"for me?",
	":)",
	"...",
	":(",
	"really?",
	"i don't even",
	"i don't even know what to say at this point",
	"actually",
	"you know what?",
	"last chance",
	"hit the X button now",
	"5",
	"4",
	"3",
	"2",
	"1",
	"0",
	"oh come on",
	"screw it",
	"game over",
	"bye bye",
	"you lose"
	];


	recordings={
		intro:{
			messages:[{"text":"hey there!","time":1985},{"text":"welcome to the game","time":1436},{"text":"this is your first time playing","time":2439},{"text":"yeah?","time":752},{"text":"well","time":2355},{"text":"don't worry","time":585},{"text":"it's pretty simple","time":1520},{"text":"i mean...","time":1604},{"text":"it's right in the title","time":684},{"text":"you know?","time":1989},{"text":"press the button to win!","time":1170},{"text":"...","time":3357},{"text":"...","time":2138},{"text":"oh!","time":3425},{"text":"you're probably wondering...","time":401},{"text":"\"which button???\"","time":1870},{"text":"right?","time":1370},{"text":"ha","time":1604},{"text":"ha","time":150},{"text":"ha","time":384},{"text":"ha","time":152},{"text":"ha","time":366},{"text":"ha","time":167},{"text":"no worries","time":601},{"text":"let's see...","time":1973},{"text":"which button was it again?","time":985},{"text":"...","time":1971},{"text":"...","time":1187},{"text":"hmm...","time":1202},{"text":"...","time":518},{"text":"just a sec...","time":2188},{"text":"...","time":450},{"text":"ah","time":2708},{"text":"here it is","time":651},{"text":"X","time":2121},{"text":"you got that?","time":1455},{"text":"so all you need to do","time":2872},{"text":"is press the X button","time":1236},{"text":"and then you win!","time":3224},{"text":"easy as pie.","time":2874},{"text":"in fact","time":2589},{"text":"it's easier than pie","time":619},{"text":"you gotta like","time":1903},{"text":"cut","time":1120},{"text":"bite","time":584},{"text":"chew","time":719},{"text":"swallow","time":501},{"text":"when you're eating pie","time":685},{"text":"this is just a button press","time":2189},{"text":"...","time":3106},{"text":"...","time":3307},{"text":"are you using a gamepad?","time":2790},{"text":"like an xbox controller","time":1971},{"text":"or dualshock","time":1337},{"text":"or whatever?","time":535},{"text":"cause that won't work","time":2772},{"text":"i know they've got X buttons","time":2624},{"text":"but i figured","time":1235},{"text":"\"it's a short game\"","time":1754},{"text":"\"single button interaction\"","time":1487},{"text":"\"who's gonna bother with a gamepad\"","time":1905},{"text":"not me!","time":2421},{"text":"so i didn't bother with the gamepad code","time":2606},{"text":"sorry if that was the issue","time":1804},{"text":"go ahead and give it another shot","time":2456},{"text":"just use the keyboard this time","time":1838},{"text":"...","time":2004},{"text":"...","time":2004},{"text":"so","time":2924},{"text":"yeah","time":1954},{"text":"X button","time":1955},{"text":"should be in the lower left of your keyboard","time":2840},{"text":"you're on a QWERTY keyboard","time":4243},{"text":"right?","time":1303},{"text":"i guess some people have AZERTY","time":4243},{"text":"where's the X on AZERTY?","time":1720},{"text":"...","time":2706},{"text":"oh it's the same spot","time":1404},{"text":"lower left","time":1955},{"text":"...","time":3406},{"text":"oh DVORAK!","time":5446},{"text":"DVORAK is a thing","time":518},{"text":"right?","time":2472},{"text":"maybe you're on DVORAK","time":1421},{"text":"looks like it's more of a middle key","time":5245},{"text":"on DVORAK, that is","time":1170},{"text":"still on the bottom row though","time":2539},{"text":"...","time":5096},{"text":"...","time":2404},{"text":"...","time":2623},{"text":"ok","time":3491},{"text":"so","time":434},{"text":"confession:","time":1003},{"text":"i'm really only checking the X button","time":2405},{"text":"maybe you've hit others","time":2306},{"text":"maybe not","time":1336},{"text":"but either way","time":970},{"text":"you didn't hit the X","time":750},{"text":"i'm like","time":2658},{"text":"99% sure of that","time":500},{"text":"and that's like","time":2824},{"text":"the only thing you need to do","time":985},{"text":"i mean","time":2673},{"text":"it's the only thing i've even told you to do","time":585},{"text":"so","time":3457},{"text":"can you just go ahead","time":1420},{"text":"and do that","time":1086},{"text":"hit the X button","time":2573},{"text":"for me?","time":3709},{"text":":)","time":868},{"text":"...","time":6799},{"text":":(","time":3992},{"text":"really?","time":936},{"text":"i don't even","time":2656},{"text":"i don't even know what to say at this point","time":601},{"text":"actually","time":3241},{"text":"you know what?","time":451},{"text":"last chance","time":1520},{"text":"hit the X button now","time":1504},{"text":"5","time":2572},{"text":"4","time":1336},{"text":"3","time":1387},{"text":"2","time":1704},{"text":"1","time":2171},{"text":"0","time":4745},{"text":"oh come on","time":718}],
			press:function(){
				console.log("button pressed");
				recordings.goTo("ending-wait");
			},
			complete:function(){
				recordings.goTo("ending-wait");
			}
		},

		"ending-wait":{
			messages:[{"text":"screw it","time":3592},{"text":"game over","time":517},{"text":"bye bye","time":618},{"text":"you lose","time":569}],
			press:function(){

			},
			complete:function(){
				recordings.current=null;
			}
		},

		current:"intro",
		goTo:function(s){
			recordings.current=s;
		}
	};




	record=false;

	if(record){
		recording=[];
		recordingOffset=0;
	}
	recordTime=0;

	fillerText=[];
	actualText=[];
	allText=[];


	for(var i = 0; i < 64; ++i){
		var t = new PIXI.Text("",fontStyle2);
		t.anchor.x=0.5;
		t.anchor.y=0.5;
		
		var c = new PIXI.Graphics();
		c.text = t;
		c.r=Math.max(t.width,t.height)/2+15;
		c.beginFill(0);
		c.lineStyle(10, 0xFFFFFF);
		c.drawCircle(0,0,c.r);

		c.position.x = Math.random()*(size[0]-t.width)+t.width/2;
		c.position.y = Math.random()*(size[1]-t.height)+t.height/2;
		c.endFill();
		c.addChild(t);
		world.addChild(c);
		c.startTime = -i;
		c.v={x:0,y:0};

		actualText.push(c);
		allText.push(c);
	}

	for(var i = 0; i < 512; ++i){
		var t = fillerTextLines[Math.floor(Math.random()*(fillerTextLines.length))%fillerTextLines.length];
		t = new PIXI.Text(t,fontStyle1);
		t.anchor.x=0.5;
		t.anchor.y=0.5;
		
		var c = new PIXI.Container();
		c.addChild(t);
		world.addChild(c);
		c.position.x = Math.random()*(size[0]);
		c.position.y = Math.random()*(size[1]);
		c.startTime = -i;
		c.v={x:0,y:0};

		fillerText.push(c);
		allText.push(c);
	}

	fillerTextOffset=0;
	actualTextOffset=0;


	scene.addChild(world);

	irritation=0.0000;
	messageAngle=0;

	// start the main loop
	window.onresize = onResize;
	_resize();
	main();
}


function update(){

	// game logic goes here

	for(var i = 0; i < allText.length; ++i){
		var text=allText[i];
		text.rotation+=(Math.random()-0.5)*0.0001*(clamp(0, curTime-text.rotTime, 1000))*irritation;
		text.v.x+=(Math.random()-0.5)*0.001*(clamp(0, curTime-text.startTime, 1000))*irritation;
		text.v.y+=(Math.random()-0.5)*0.001*(clamp(0, curTime-text.startTime, 1000))*irritation;
		text.v.x*=0.5;
		text.v.y*=0.5;
		text.position.x+=text.v.x;
		text.position.y+=text.v.y;
	}
	for(var i = 0; i < actualText.length; ++i){
		var text=actualText[i];
		text.position.x=lerp(text.position.x, size[0]/2, 0.002);
		text.position.y=lerp(text.position.y, size[1]/2, 0.002);
		text.scale.x=Math.max(0, text.scale.x-0.001);
		text.scale.y=Math.max(0, text.scale.y-0.001);
	}

	for(var i = 0; i < irritation; ++i){
		var t = fillerText[fillerTextOffset];
		t.position.x = Math.random()*size[0];
		t.position.y = Math.random()*size[1];
		t.rotTime=t.startTime=curTime;
		t.rotation=0;
		t.v={x:0,y:0};
		world.removeChild(t);
		world.addChild(t);

		fillerTextOffset=(fillerTextOffset+1)%fillerText.length;
	}



	if(record){
		if(keys.isJustDown(keys.SPACE)){
			//irritation=Math.min(25,irritation+1);

			nextMessage();

			recording.push({
				text:actualTextLines[recordingOffset],
				time:curTime-recordTime
			});
			recordingOffset+=1;
			recordTime=curTime;
		}

		if(keys.isJustDown(keys.ENTER)){
			console.log(JSON.stringify(recording));
		}
	}else{
		if(recordings.current){
			var r=recordings[recordings.current].messages[0];

			if(curTime-recordTime > r.time){
				nextMessage();
				recordings[recordings.current].messages.shift();
				recordTime=recordTime+r.time;

				if(recordings[recordings.current].messages.length == 0){
					recordings[recordings.current].complete();
				}
			}


			if(keys.isJustDown(keys.X)){
				recordings[recordings.current].press();
			}
		}
	}

	
	{
		var t = actualTextOffset-1;
		if(t < 0){
			t=actualText.length-1;
		}
		t = actualText[t];
		t.rotation=0;
		t.v={x:0,y:0};

		t.scale.x=ease(clamp(0,(curTime-t.startTime)/300,1));
		t.scale.y=ease(clamp(0,(curTime-t.startTime)/300,1));

		world.removeChild(t);
		world.addChild(t);
	}

	screen_filter.uniforms.time = curTime/1000;
	screen_filter.uniforms.irritation = irritation;

	// update input managers
	keys.update();
}

function render(){
	renderer.render(scene,renderTexture);
	try{
		renderer.render(renderSprite,null,true,false);
	}catch(e){
		renderer.render(scene,null,true,false);
	}
}




function nextMessage(){
	sounds["bloop"]._rate = Math.random()*0.5+0.75;
	sounds["bloop"].play();
	var t = actualTextOffset-1;
	if(t < 0){
		t=actualText.length-1;
	}
	t = actualText[t];
	t.rotTime=curTime;
	t.rotation=0;
	t.v={x:0,y:0};

	var x=t.position.x;
	var y=t.position.y;
	var r=t.r;


	t = actualText[actualTextOffset];

	t.text.text = record ? actualTextLines[recordingOffset] : recordings[recordings.current].messages[0].text;
	t.r=Math.max(t.text.width,t.text.height)/2+15;
	t.clear();
	t.beginFill(0);
	t.lineStyle(10, 0xFFFFFF);
	t.drawCircle(0,0,t.r);

	messageAngle+=(Math.random()-0.5)*Math.PI*2;
	t.position.x = clamp(t.r, x+(t.r+r-5)*Math.cos(messageAngle), size[0]-t.r);
	t.position.y = clamp(t.r, y+(t.r+r-5)*Math.sin(messageAngle), size[1]-t.r);
	
	t.startTime=curTime;
	t.rotation=0;
	world.removeChild(t);
	world.addChild(t);

	actualTextOffset=(actualTextOffset+1)%actualText.length;
}