


speedBoost=1;
function main(){
	curTime=Date.now()*speedBoost-startTime;
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

	actualTextLines=[];
	/*

	];

	




	"you win"

	*/


	recordings={
		"intro":{
			messages:[{"text":"hey there!","time":1985},{"text":"welcome to the game","time":1436},{"text":"you're ready to start?","time":2439},{"text":"yeah?","time":752},{"text":"well","time":2355},{"text":"don't worry","time":585},{"text":"it's pretty simple","time":1520},{"text":"i mean...","time":1604},{"text":"it's right in the title","time":684},{"text":"you know?","time":1989},{"text":"push the button to win!","time":1170}],
			push:function(){
				recordings.goTo("gun-jumping");
				targetIrritation+=1;
			},
			complete:function(){
				recordings.goTo("intro2");
				targetIrritation+=0.001;
			}
		},

		"intro2":{
			messages:[{"text":"...","time":3357},{"text":"...","time":2138},{"text":"oh!","time":3425},{"text":"you're probably wondering...","time":401},{"text":"\"which button???\"","time":1870},{"text":"right?","time":1370},{"text":"ha","time":1604},{"text":"ha","time":150},{"text":"ha","time":384},{"text":"ha","time":152},{"text":"ha","time":366},{"text":"ha","time":167},{"text":"no worries","time":601},{"text":"let's see...","time":1973},{"text":"which button was it again?","time":985},{"text":"...","time":1971},{"text":"...","time":1187},{"text":"hmm...","time":1202},{"text":"...","time":518},{"text":"just a sec...","time":2188},{"text":"...","time":450},{"text":"ah","time":2708},{"text":"here it is","time":651},{"text":"X","time":2121},{"text":"you got that?","time":1455},{"text":"so all you need to do","time":2872},{"text":"is push the X button","time":1236},{"text":"and then you win!","time":3224},{"text":"easy as pie.","time":2874},{"text":"in fact","time":2589},{"text":"it's easier than pie","time":619},{"text":"you gotta like","time":1903},{"text":"cut","time":1120},{"text":"bite","time":584},{"text":"chew","time":719},{"text":"swallow","time":501},{"text":"when you're eating pie","time":685},{"text":"this is just a button press","time":2189},{"text":"...","time":3106},{"text":"...","time":3307},{"text":"are you using a gamepad?","time":2790},{"text":"like an xbox controller","time":1971},{"text":"or dualshock","time":1337},{"text":"or whatever?","time":535},{"text":"cause that won't work","time":2772},{"text":"i know they've got X buttons","time":2624},{"text":"but i figured","time":1235},{"text":"\"it's a short game\"","time":1754},{"text":"\"single button interaction\"","time":1487},{"text":"\"who's gonna bother with a gamepad\"","time":1905},{"text":"not me!","time":2421},{"text":"so i didn't bother with the gamepad code","time":2606},{"text":"sorry if that was the issue","time":1804},{"text":"go ahead and give it another shot","time":2456},{"text":"just use the keyboard this time","time":1838},{"text":"...","time":2004},{"text":"...","time":2004},{"text":"so","time":2924},{"text":"yeah","time":1954},{"text":"X button","time":1955},{"text":"should be in the lower left of your keyboard","time":2840},{"text":"you're on a QWERTY keyboard","time":4243},{"text":"right?","time":1303},{"text":"i guess some people have AZERTY","time":4243},{"text":"where's the X on AZERTY?","time":1720},{"text":"...","time":2706},{"text":"oh it's the same spot","time":1404},{"text":"lower left","time":1955},{"text":"...","time":3406},{"text":"oh DVORAK!","time":5446},{"text":"DVORAK is a thing","time":518},{"text":"right?","time":2472},{"text":"maybe you're on DVORAK","time":1421},{"text":"looks like it's more of a middle key","time":5245},{"text":"on DVORAK, that is","time":1170},{"text":"still on the bottom row though","time":2539},{"text":"...","time":5096},{"text":"...","time":2404},{"text":"...","time":2623},{"text":"ok","time":3491},{"text":"so","time":434},{"text":"confession:","time":1003},{"text":"i'm really only checking the X button","time":2405},{"text":"maybe you've hit others","time":2306},{"text":"maybe not","time":1336},{"text":"but either way","time":970},{"text":"you didn't hit the X","time":750},{"text":"i'm like","time":2658},{"text":"99% sure of that","time":500},{"text":"and that's like","time":2824},{"text":"the only thing you need to do","time":985},{"text":"i mean","time":2673},{"text":"it's the only thing i've even told you to do","time":585},{"text":"so","time":3457},{"text":"can you just go ahead","time":1420},{"text":"and do that","time":1086},{"text":"hit the X button","time":2573},{"text":"for me?","time":3709},{"text":":)","time":868},{"text":"...","time":6799},{"text":":(","time":3992},{"text":"really?","time":936},{"text":"i don't even","time":2656},{"text":"i don't even know what to say at this point","time":601},{"text":"actually","time":3241},{"text":"you know what?","time":451},{"text":"last chance","time":1520},{"text":"hit the X button now","time":1504},{"text":"5","time":2572},{"text":"4","time":1336},{"text":"3","time":1387},{"text":"2","time":1704},{"text":"1","time":2171},{"text":"0","time":4745},{"text":"oh come on","time":718}],
			push:function(){
				recordings.goTo("push1");
			},
			complete:function(){
				recordings.goTo("ending-wait");
			}
		},

		"gun-jumping":{
			messages:[{"text":"oh","time":1762},{"text":"um","time":736},{"text":"i guess you've played before?","time":800},{"text":"that's fine","time":2339},{"text":"but","time":1370},{"text":"like","time":368},{"text":"you can't just","time":1670},{"text":"push the button","time":902},{"text":"cause you know what to do","time":1537},{"text":"you gotta wait","time":2022},{"text":"i need to tell you to push it","time":1920},{"text":"otherwise it won't work","time":3141},{"text":"so","time":3475},{"text":"yeah","time":451},{"text":"where was i?","time":1403},{"text":"...","time":2506},{"text":"right","time":2622}],
			push:function(){
				recordings.goTo("too-much");
			},
			complete:function(){
				recordings.goTo("intro");
				recordings.intro.push=function(){
					recordings.goTo("ending-wait");
				}
			}
		},

		"push1":{
			messages:[{"text":"ok!","time":1020},{"text":"great!","time":651},{"text":"you pushed it!","time":901},{"text":"that means...","time":1455},{"text":"wait for it","time":3707},{"text":"...","time":3776},{"text":"that means...","time":1855},{"text":"...","time":3992}],
			push:function(){
				recordings.goTo("push1-twice");
			},
			complete:function(){
				recordings.goTo("push1-wait");
			}
		},

		"push1-twice":{
			messages:[{"text":"hold on","time":1195},{"text":"you already pushed the button","time":969},{"text":"let's give it a second","time":1804},{"text":"gotta let it catch up","time":2322},{"text":"...","time":3057},{"text":"any minute now...","time":2907}],
			push:function(){
				recordings.goTo("too-much");
			},
			complete:function(){
				recordings.goTo("push1");
				recordings["push1"].push=function(){
					recordings.goTo("too-much");
				}
			}
		},

		"push1-wait":{
			messages:[{"text":"ok","time":1944},{"text":"no","time":754},{"text":"something went wrong","time":632},{"text":"the game's supposed to be done now","time":2323},{"text":"are you sure you pushed the button?","time":3275},{"text":"i mean","time":2439},{"text":"i got a button event on my end","time":417},{"text":"i can see here","time":1838},{"text":"it says you pushed it","time":768},{"text":"but like","time":3357},{"text":"you were supposed to win","time":601},{"text":"\"push the button to win!\"","time":1888},{"text":"and all that","time":1120},{"text":"...","time":2992},{"text":"you're sure you pushed it","time":3172},{"text":"right?","time":1186},{"text":"sorry","time":1571},{"text":"dumb question","time":451},{"text":"i know you did","time":667},{"text":"it's not your fault","time":1303},{"text":"we're gonna have to do something though","time":1420},{"text":"...","time":2523},{"text":"try pushing it again?","time":2940},{"text":"maybe?","time":2439},{"text":"idk","time":1805},{"text":"it's worth a shot","time":400},{"text":"i know you already pushed it","time":2439},{"text":"but it's not like you can do anything else","time":1486},{"text":"i guess we can wait","time":4945},{"text":"see if it's just on a delay","time":2756},{"text":"that could happen","time":3224},{"text":"right?","time":1036},{"text":"i'm sure that happens sometimes","time":1671},{"text":"...","time":2605},{"text":"you ever work with timezones?","time":3058},{"text":"absolutely miserable","time":1954},{"text":"probably has to do with that","time":1971},{"text":"if i had to guess","time":1220},{"text":"...","time":2707},{"text":"...","time":1887},{"text":"um","time":2823},{"text":"i don't think waiting is helping","time":818},{"text":"why don't you just try again?","time":2507},{"text":"...","time":2672},{"text":"...","time":2990},{"text":"i guess you've given up?","time":3208}],
			push:function(){
				recordings.goTo("push2");
			},
			complete:function(){
				recordings.goTo("ending-wait");
			}
		},


		"push2":{
			messages:[{"text":"ok","time":1169},{"text":"good","time":551},{"text":"you pushed it again","time":1053},{"text":"...","time":3340},{"text":"hmm","time":1186},{"text":"the game's still not done though","time":2273},{"text":"did you win?","time":2222},{"text":"it doesn't look like you won","time":1637},{"text":"...","time":2505}],
			push:function(){
				recordings.goTo("too-much");
			},
			complete:function(){
				recordings.goTo("push2-wait");
			}
		},

		"push2-wait":{
			messages:[{"text":"are you pushing it properly","time":1464},{"text":"like","time":1286},{"text":"don't just push the button","time":1352},{"text":"push it","time":1972},{"text":"hard","time":1387},{"text":"put some force into it","time":2973},{"text":"i bet you think you're pushing it","time":2138},{"text":"but it's not getting picked up as an actual press","time":2907},{"text":"you know?","time":3559},{"text":"it's like","time":1653},{"text":"a tap","time":685},{"text":"or something","time":601},{"text":"a click","time":2239},{"text":"not a push","time":818},{"text":"you gotta push it","time":2188},{"text":"push the button","time":2305},{"text":"\"push the button to win!\"","time":1705},{"text":"not \"click the button to win!\"","time":2055},{"text":"there's a difference","time":3575},{"text":"...","time":4477},{"text":"...","time":2205},{"text":"...","time":2321},{"text":"still waiting","time":3057},{"text":"on that push","time":969},{"text":"...","time":2923},{"text":"...","time":2774},{"text":"um","time":2589},{"text":"...","time":1270},{"text":"hello?","time":2890},{"text":"...","time":3425},{"text":"are you","time":3441},{"text":"are you still there","time":684},{"text":"...","time":3858}],
			push:function(){
				recordings.goTo("push3");
				targetIrritation+=3;
			},
			complete:function(){
				recordings.goTo("ending-wait");
			}
		},

		"push3":{
			messages:[{"text":"okay","time":1281},{"text":"nice try","time":985},{"text":"but","time":820},{"text":"no","time":450},{"text":"not like that","time":1387},{"text":"push it harder","time":2589},{"text":"...","time":2773},{"text":"do you even know what you're doing","time":1971},{"text":"it's not that hard","time":2523},{"text":"i could do it","time":1586},{"text":"do you want me to do it for you?","time":969},{"text":"actually","time":2355},{"text":"nevermind","time":352},{"text":"i take that back","time":1370},{"text":"that'd be cheating","time":1604},{"text":"you can't win if you cheat","time":2271},{"text":"just push the button","time":4176},{"text":"but","time":1621},{"text":"do it properly this time","time":233},{"text":"...","time":3275},{"text":"...","time":2455},{"text":"you","time":2924},{"text":"you don't actually care","time":869},{"text":"do you?","time":1386},{"text":"...","time":4243},{"text":"...","time":5378},{"text":"...","time":5378},{"text":"...","time":5378},{"text":"yeah","time":1500},{"text":"i'm done","time":5378},{"text":"...","time":5378}],
			push:function(){
				recordings.goTo("push4");
				targetIrritation+=3;
			},
			complete:function(){
				recordings.goTo("ending-wait");
			}
		},

		"push4":{
			messages:[{"text":"no","time":1396},{"text":"you're doing it wrong","time":533},{"text":"that's not hard enough","time":669},{"text":"you gotta","time":1704},{"text":"here","time":1086},{"text":"think of it like this","time":383},{"text":"you've got a button","time":1554},{"text":"yeah?","time":818},{"text":"and all you need to do","time":1906},{"text":"to win the game","time":1335},{"text":"is push the button","time":1454},{"text":"now","time":2055},{"text":"obviously","time":519},{"text":"if you could just","time":599},{"text":"\"push\"","time":1220},{"text":"the button","time":969},{"text":"that'd be easy","time":2289},{"text":"i mean","time":2088},{"text":"i probably wouldn't even call that a game","time":434},{"text":"it'd be like","time":1738},{"text":"an \"interactive","time":1721},{"text":"...","time":1436},{"text":"thing\"","time":769},{"text":"...","time":601},{"text":"not the point","time":1019},{"text":"point is:","time":701},{"text":"it's too easy","time":1337},{"text":"there's only one input","time":2371},{"text":"so that input's gotta be difficult","time":1988},{"text":"and it's not about speed","time":2407},{"text":"so it's gotta be","time":1602},{"text":"like","time":1070},{"text":"pressure","time":551},{"text":"button push pressure","time":1688},{"text":"you know?","time":1051},{"text":"...","time":2022},{"text":"...","time":1670},{"text":"that's dumb","time":2172},{"text":"that's really dumb","time":1404},{"text":"right?","time":1720},{"text":"i mean","time":736},{"text":"it's a keyboard","time":801},{"text":"keyboard buttons don't work like that","time":2055},{"text":"it doesn't matter how hard you push","time":2172},{"text":"it's either pressed","time":1838},{"text":"or not pressed","time":867},{"text":"...","time":2456}],
			push:function(){
				recordings.goTo("push5");
				targetIrritation+=3;
			},
			complete:function(){
				recordings.goTo("push5");
				targetIrritation=25;
			}
		},

		"push5":{
			messages:[{"text":"...","time":2196},{"text":"this isn't working","time":953},{"text":"...","time":1921},{"text":"look","time":450},{"text":"it's not my fault","time":636},{"text":"i didn't make this thing","time":2371},{"text":"wait","time":1621},{"text":"no","time":317},{"text":"...","time":402},{"text":"yeah i did","time":751},{"text":"i did make this","time":919},{"text":"whoops","time":1486},{"text":"...","time":651},{"text":"but!","time":702},{"text":"i was tired","time":1170},{"text":"and the deadline was coming up soon","time":1419},{"text":"i started late","time":2089},{"text":"cause i was working on another game","time":702},{"text":"it was really rushed","time":1954},{"text":"i didn't have much time for testing","time":2138},{"text":"so it's probably a bit buggy","time":1471},{"text":"but it does work","time":1920},{"text":"i've gone through it a bunch of times","time":1354},{"text":"no problems","time":1103},{"text":"you're probably doing it wrong","time":802},{"text":"it's basically your fault","time":2254},{"text":"i'll admit","time":1186},{"text":"it's not a perfect system","time":854},{"text":"but you can't just ignore the rules","time":951},{"text":"you probably broke it","time":1002},{"text":"i worked hard on this you know","time":1887},{"text":"and you come along","time":1237},{"text":"think you're so clever","time":2105},{"text":"think you can beat the game","time":934},{"text":"that it's easy","time":1037},{"text":"but remember","time":567},{"text":"it's only easy","time":1103},{"text":"cause i told you what to do","time":1086},{"text":"if you were on your own","time":919},{"text":"you'd be lost","time":1537},{"text":"...","time":2989},{"text":"now","time":1654},{"text":"some people","time":552},{"text":"might call that","time":1136},{"text":"\"bad game design\"","time":1570},{"text":"which","time":951},{"text":"i guess is fair","time":1070},{"text":"but at the same time","time":2456},{"text":"as a game developer","time":2104},{"text":"i try to make games challenging","time":1171},{"text":"but then also lead the player","time":1486},{"text":"like","time":1954},{"text":"that's what i'm here for","time":485},{"text":"to tell you what do to","time":2573},{"text":"you just can't seem to get it right","time":1937},{"text":"everyone else can do it","time":1553},{"text":"why can't you","time":986},{"text":"it's not even hard","time":919}],
			push:function(){
				recordings.goTo("push5-push");
				targetIrritation=25;
			},
			complete:function(){
				recordings.goTo("push52");
				targetIrritation+=3;
			}
		},

		"push5-push":{
			messages:[{"text":"oh","time":891},{"text":"you pushed it again","time":506},{"text":"thanks for trying","time":1900},{"text":"but like","time":1419},{"text":"it's obviously not doing anything","time":668},{"text":"in fact","time":2223},{"text":"i'm just gonna disable your button","time":1153},{"text":"just for now","time":1937},{"text":"okay?","time":1538},{"text":"okay","time":1085},{"text":"so","time":2438},{"text":"as i was saying","time":785}],
			push:function(){

			},
			complete:function(){
				recordings.goTo("push5");
				recordings["push5"].push=function(){

				};
			}
		},

		"push52":{
			messages:[{"text":"argh","time":907},{"text":"like","time":519},{"text":"just","time":449},{"text":"what did you even do","time":469},{"text":"you broke it","time":918},{"text":"you BROKE it","time":736},{"text":"YOU BROKE MY GAME","time":785},{"text":"UGH","time":1855},{"text":"HOW DO YOU EVEN DO THAT","time":400},{"text":"IT'S JUST A BUTTON","time":1487},{"text":"A BUTTON THAT YOU PUSH","time":718},{"text":"SERIOUSLY","time":450},{"text":"HOW","time":1203},{"text":"COULD","time":668},{"text":"YOU","time":752},{"text":"POS","time":752},{"text":"SIB","time":317},{"text":"BLY","time":285},{"text":"MESS","time":367},{"text":"THAT","time":651},{"text":"UP","time":418},{"text":"I","time":1621},{"text":"IT'S SO EASY","time":885},{"text":"YOU PUSH THE BUTTON","time":1937},{"text":"THEN YOU WIN","time":652},{"text":"THAT'S IT","time":1537},{"text":"THAT'S","time":585},{"text":"THE","time":417},{"text":"GAME","time":436},{"text":"THERE'S LIKE","time":733},{"text":"TWO STEPS","time":753},{"text":"AND BARELY ANY CODE","time":1687},{"text":"ALL","time":1687},{"text":"IT","time":251},{"text":"DOES","time":234},{"text":"IS","time":518},{"text":"wait","time":667},{"text":"wait","time":719},{"text":"WAIT","time":617},{"text":"...","time":1054},{"text":"...","time":166},{"text":"...","time":167},{"text":"...","time":351},{"text":"...","time":1120},{"text":"...","time":167},{"time":201}],
			push:function(){

			},
			complete:function(){
				targetIrritation=5;
				recordings.goTo("push53");
			}
		},

		"push53":{
			messages:[{"text":"oops","time":1371},{"text":"...","time":1203},{"text":"...","time":249},{"text":"um","time":1136},{"text":"so","time":536},{"text":"my bad","time":1787},{"text":"ha","time":801},{"text":"ha","time":168},{"text":"ha","time":300},{"text":"ha","time":334},{"text":"ha","time":167},{"text":"ha","time":168},{"text":"...","time":584},{"text":"heh...","time":1104},{"text":"this one's on me","time":1152},{"text":"sorry","time":2087},{"text":"lemme just","time":702}],
			push:function(){

			},
			complete:function(){
				targetIrritation=1;
				screen_filter.uniforms.flip=true;
				recordings.goTo("end");
			}
		},

		"end":{
			messages:[{"text":"there we go","time":1583},{"text":"should be fixed now","time":1905},{"text":"push the button to win the game","time":2356},{"text":"...","time":4877},{"text":"whenever you're ready","time":2489},{"text":"...","time":4243},{"text":"...","time":1537},{"text":"oh","time":3124},{"text":"did you want to know what happened?","time":484},{"text":"well","time":3157},{"text":"it's kind of embarrassing","time":2021},{"text":"i'd really rather not say","time":3242},{"text":"you understand","time":2255},{"text":"right?","time":918},{"text":"...","time":2406},{"text":"...","time":2739},{"text":"just go ahead and push the button","time":2707},{"text":"it's X","time":3457},{"text":"in case you forgot","time":1404},{"text":"the button that is","time":3425},{"text":"the one you need to push","time":2956},{"text":"to win","time":2590},{"text":"the game","time":1353},{"text":"X is the button you need to push to win the game","time":5462},{"text":"sorry","time":2841},{"text":"thought it might bear repeating","time":934},{"text":"...","time":3292},{"text":"i mean","time":2622},{"text":"you haven't pushed it yet","time":553},{"text":"so i don't think i was wrong","time":2221},{"text":"...","time":2973},{"text":"...","time":2271},{"text":"you really wanna know","time":3959},{"text":"don't you?","time":1438},{"text":"you're not just going to move on?","time":2204},{"text":"...","time":2840},{"text":"it's not that interesting","time":1102},{"text":"...","time":4695},{"text":"...","time":2489},{"text":"okay","time":2773},{"text":"the truth is","time":651},{"text":"if you push the button now","time":2122},{"text":"you'll win the game","time":1319},{"text":"a little message will pop up","time":2339},{"text":"just like these ones","time":2055},{"text":"saying \"you win\"","time":1938},{"text":"nothing fancy","time":2873},{"text":"same as the \"you lose\"","time":1052},{"text":"from if you messed up on another go","time":1454},{"text":"and that'll be it","time":3342},{"text":"you'll be done","time":1134},{"text":"but the reason it didn't work before","time":3393},{"text":"isn't that it was broken","time":2105},{"text":"or bugged","time":1201},{"text":"or not working","time":970},{"text":"or something","time":1019},{"text":"it's pretty obvious actually","time":2304},{"text":"if you think about it","time":1921},{"text":"i was just lying to you","time":3358},{"text":"this is all just part of the script","time":4527},{"text":"it's a video game","time":4043},{"text":"and not a very complicated one","time":1404},{"text":"yeah it's a jam game","time":2204},{"text":"so it might be a bit buggy","time":1203},{"text":"but even if it is","time":1988},{"text":"this isn't how bugs work","time":1554},{"text":"you probably know that","time":2472},{"text":"you're just waiting","time":2824},{"text":"patiently","time":4492},{"text":"to see what i have to say","time":4344},{"text":"to see why i made you wait through all this","time":2038},{"text":"waiting for the twist","time":3007},{"text":"or the message","time":1954},{"text":"or whatever","time":1688},{"text":"but i don't have one","time":1186},{"text":"i mean","time":2773},{"text":"this wasn't even originally my game idea","time":584},{"text":"i just liked it as a prompt","time":2657},{"text":"it's not even a good spin on the original idea","time":1988},{"text":"too literal","time":2773},{"text":"(in my opinion, at least)","time":1219},{"text":"it seemed like it would be doable though","time":2255},{"text":"given the limited time i had to work with","time":2723},{"text":"i put hastily made visuals and text together","time":3357},{"text":"to make sure i'd get an entry done","time":2156},{"text":"...","time":2388},{"text":"it's probably been done before too","time":4094},{"text":"just a boring narrative","time":2506},{"text":"gated by loosely timed button presses","time":2456},{"text":"and even this bit","time":3408},{"text":"is just standard fourth-wall breaking","time":1102},{"text":"...","time":2724},{"text":"...","time":3708},{"text":"what'd you think of the visuals though?","time":2672},{"text":"i quite like the background text","time":2122},{"text":"the way it eats up the messages","time":2974},{"text":"as","time":1636},{"text":"they","time":501},{"text":"pop","time":518},{"text":"up","time":318},{"text":"like","time":685},{"text":"this","time":217},{"text":"...","time":1637},{"text":"fun fact:","time":3140},{"text":"i wanted this to feel more natural","time":1771},{"text":"in terms of like","time":3291},{"text":"conversation","time":785},{"text":"and whatnot","time":1153},{"text":"so the text is fairly unedited","time":1586},{"text":"stream-of-consciousness stuff","time":2707},{"text":"and the game has a record mode","time":2405},{"text":"for the message timing","time":1988},{"text":"so each time one pops up","time":2941},{"text":"it's simulating the \"game developer\"'s speech pattern","time":1503},{"text":"sorry if it's too fast","time":4275},{"text":"or too slow, for that matter","time":1321},{"text":"i went with the first take for most lines","time":2672},{"text":"probably not this one though","time":3290},{"text":"it's a huge section","time":1688},{"text":"i should have separated it","time":953},{"text":"cause it's gonna be a pain to record","time":1169},{"text":"...","time":2773},{"text":"...","time":2371},{"text":"um","time":2874},{"text":"i think","time":1287},{"text":"i think that's about it","time":767},{"text":"thanks for playing","time":2924},{"text":"i hope you got something out of it","time":1871},{"text":"but if not","time":1503},{"text":"that's cool too","time":586},{"text":"you can push the button","time":2004},{"text":"if you want","time":2789},{"text":"or you can wait a bit longer","time":1520},{"text":"and i'll pretend you pushed it","time":2090},{"text":"okay?","time":2322},{"text":"okay","time":2338},{"text":"...","time":3007},{"text":"...","time":3441}],
			push:function(){
				recordings.goTo("win");
			},
			complete:function(){
				recordings.goTo("win");
			}
		},

		"win":{
			messages:[{"text":"you win","time":500}],
			push:function(){

			},
			complete:function(){
				recordings.current=null;
			}
		},

		"ending-wait":{
			messages:[{"text":"okay","time":500}],
			push:function(){

			},
			complete:function(){
				targetIrritation=0.1;
				recordings.goTo("ending-wait2");
			}
		},
		"ending-wait2":{
			messages:[{"text":"screw it","time":500},{"text":"game over","time":1517},{"text":"bye bye","time":618},],
			push:function(){

			},
			complete:function(){
				recordings.goTo("lose");
				screen_filter.uniforms.flip=true;
			}
		},
		"lose":{
			messages:[{"text":"you lose","time":569}],
			push:function(){

			},
			complete:function(){
				targetIrritation=0.1;
				recordings.current=null;
			}
		},



		"too-much":{
			messages:[{"text":"wait","time":250},{"text":"stop","time":250},{"text":"no","time":250},{"text":"don't","time":250}],
			push:function(){
				var a=["wait",
				"stop",
				"what are you",
				"no",
				"you can't just",
				"why did you",
				"that's not",
				"why would you",
				"what the",
				"don't",
				"no!"];
				recordings["too-much"].messages.push({"text":a[Math.floor(Math.random()*a.length)%a.length],"time":500});
				irritation+=5;
				targetIrritation+=1;
			},
			complete:function(){
				recordings.goTo("too-much2");
				targetIrritation=5;
			}
		},

		"too-much2":{
			messages:[{"text":"...","time":2460},{"text":"are you finished?","time":2389},{"text":"that","time":2707},{"text":"that was","time":801},{"text":"quite","time":1755},{"text":"rude","time":602},{"text":"how many times","time":1820},{"text":"did i tell you","time":1402},{"text":"to push the button?","time":1154},{"text":"...","time":1703},{"text":"it wasn't that many","time":3008},{"text":"you know","time":2706},{"text":"maybe it was an accident","time":667},{"text":"maybe","time":1637},{"text":"you didn't mean to push it","time":685},{"text":"so many times","time":986},{"text":"i don't think it was","time":2155},{"text":"but you know what","time":2138},{"text":"it doesn't matter","time":669},{"text":"frankly","time":2287},{"text":"you've already ruined it","time":603},{"text":"okay?","time":2623}],
			push:function(){

			},
			complete:function(){
				recordings.goTo("ending-wait");
			}
		},

		current:"intro",
		goTo:function(s){
			recordings.current=s;
			fillerTextLines=recordings[recordings.current].messages.slice();
		}
	};

	recordings.goTo("intro");



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
		c.text=t;
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

	irritation=0.00001;
	targetIrritation=0.00001;
	messageAngle=0;

	// start the main loop
	window.onresize = onResize;
	_resize();
	main();
}


function update(){

	// game logic goes here
	irritation=lerp(irritation,targetIrritation,0.1);
	fontStyle1.strokeThickness=irritation/5;

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

		t.text.text=fillerTextLines[Math.floor(Math.random()*fillerTextLines.length)%fillerTextLines.length].text;
		t.text.style=fontStyle1;

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
				recordTime=curTime;

				if(recordings[recordings.current].messages.length == 0){
					recordings[recordings.current].complete();
				}
			}


			if(keys.isJustDown(keys.X)){
				irritation+=5;
				nextMessage();
				recordings[recordings.current].push();
				if(recordings[recordings.current].messages.length > 1){
					recordings[recordings.current].messages.shift();
					recordTime=curTime+recordings[recordings.current].messages[0].time;
				}
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
	t.beginFill(0xFFFFFF);
	t.drawCircle(0,0,t.r+15);
	t.beginFill(0);
	t.drawCircle(0,0,t.r);
	t.endFill();

	messageAngle+=(Math.random()-0.5)*Math.PI*2;
	t.position.x = clamp(t.r, x+(t.r+r)*Math.cos(messageAngle), size[0]-t.r);
	t.position.y = clamp(t.r, y+(t.r+r)*Math.sin(messageAngle), size[1]-t.r);
	
	t.startTime=curTime;
	t.rotation=0;
	world.removeChild(t);
	world.addChild(t);

	actualTextOffset=(actualTextOffset+1)%actualText.length;
}