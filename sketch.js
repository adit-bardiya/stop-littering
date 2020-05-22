var dustbin1,dustbin2,dustbin3,paperball,sceneState;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(650,680,200,20);
	dustbin2 = new Dustbin(550,640,20,100);
	dustbin3 = new Dustbin(750,640,20,100);

	ground = new Ground();

	paperball = new paperBall;
	
	sceneState = 1;
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(243,122,0);
  fill("black");
  textSize(30);
  text("throw the paper into the dustbin using the up and down keys",0,120);
  text ("right arrow to continue",0,180);

  if(keyWentDown(RIGHT_ARROW)){
	  sceneState++;
  }

  if(sceneState===1){
	  fill("black");
	  textSize(30);
	  text("the environment needs us now more than ever",0,60);
  }
  else if(sceneState===2){
	fill("black");
	textSize(30);
	text("waste can pollute the environment in drastic ways",0,60);
	}
	else if(sceneState===3){
		fill("black");
		textSize(30);
		text("some animals ingest waste which is fatal to them",0,60);
	}
	else if(sceneState===4){
		fill("black");
		textSize(30);
		text("in fact many cows eat plastic which is fatal to them ",0,60);
	}
	else if(sceneState===5){
		fill("black");
		textSize(30);
		text("once a cow was found with 42kg of plastic in it ",0,60);
	}
	else if(sceneState===6){
		fill("black");
		textSize(30);
		text("waste also effects climate change by releasing methane  ",0,60);
	}
	else if(sceneState===7){
		fill("black");
		textSize(30);
		text("methane causes global warming, rising the temp. of earth",0,60);
	}
	else if(sceneState===8){
		fill("black");
		textSize(30);
		text("rising of global temperature can melt the polar ice caps",0,60);
	}
	else if(sceneState===9){
		fill("black");
		textSize(30);
		text("this will lead to rising sea levels",0,60);
	}
	else if(sceneState===10){
		fill("black");
		textSize(20);
		text("as when the ice melts it will form water adding to the oceans water level",0,60);
	}
	else if(sceneState===11){
		fill("black");
		textSize(30);
		text("rising sea levels will engulf islands and some port cities",0,60);
	}
	else if(sceneState===12){
		fill("black");
		textSize(15);
		text("rising global temp can also cause earth to turn into a barren wasteland",0,60);
	}
	else if(sceneState===13){
		fill("black");
		textSize(30);
		text("methane also causes holes in the ozone layer",0,60);
	}
	else if(sceneState===14){
		fill("black");
		textSize(30);
		text("while that may not sound like much it can be disastrous",0,60);
	}
	else if(sceneState===15){
		fill("black");
		textSize(15);
		text("the ozone layer protects us from harmful UV rays which cause many diseases like cataract,cancer etc.",0,60);
	}
	else if(sceneState===16){
		fill("black");
		textSize(20);
		text("UV rays also kill plankton, plankton are a keystone species for ocean life",0,60);
	}
	else if(sceneState===17){
		fill("black");
		textSize(30);
		text("this could cause destabilization of ocean life",0,60);
	}
	else if(sceneState===18){
		fill("black");
		textSize(30);
		text("waste also pollutes freshwater making it undrinkable",0,60);
	}
	else if(sceneState===19){
		fill("black");
		textSize(20);
		text("only 0.3  of all water is drinkable to us and we are spoiling that small amount with waste",0,60);
	}
	else if(sceneState===20){
		fill("black");
		textSize(15);
		text("you might be thinking that littering one paper ball wouldnt be much but what if 3 billion people were thinking this?",0,60);
	}
	else if(sceneState===21){
		fill("black");
		textSize(20);
		text("how can we help? by not throwing waste and picking up litter and disposing it",0,60);
	}
	else if(sceneState===22){
		fill("black");
		textSize(30);
		text("how does this help as you are only one person in a billion?",0,60);
	}
	else if(sceneState===23){
		fill("black");
		textSize(30);
		text("revolutions start with one person, let me give an example",0,60);
	}
	else if(sceneState===24){
		fill("black");
		textSize(25);
		text("greta thunberg was the one girl who sparked an entire revolution",0,60);
	}
	else if(sceneState===25){
		fill("black");
		textSize(20);
		text("her climate protest started as a silent one with only one person near the louvre",0,60);
	}
	else if(sceneState===26){
		fill("black");
		textSize(20);
		text("now it has exploded into a worldwide protest with many young people joining",0,60);
	}
	else if(sceneState===27){
		fill("black");
		textSize(15);
		text("so go be that one boy,man,girl or women who starts a revolution and who knows you may free the earth of waste by",0,60);
		text("starting another revolution! :)))))))))))))",0,80)
	}
	else if(sceneState===28){
		sceneState = 1;
	}

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();

  paperball.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:1,y:-1});
	}
	else if(keyDown(DOWN_ARROW)){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:-1,y:-1});
	}
}

