const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground; 
var division1, division2, division3, division4, division5, division6, division7;
var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9, plinko10, plinko11, plinko12, plinko13, plinko14, plinko15, plinko16, plinko17, plinko18, plinko19; 
var plinko20, plinko21, plinko22, plinko23, plinko24, plinko25, plinko26, plinko27, plinko28, plinko29, plinko30, plinko31, plinko32, plinko33, plinko34, plinko35, plinko36, plinko37, plinko38;

    var particles = [];
    var plinkos = [];
    var divisions = [];
    var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

     engine = Engine.create();
     world = engine.world;

     ground = new Ground (240,1120,480,10);

     division1 = new Division (0,990,10,250);
     division2 = new Division (80,990,10,250);
     division3 = new Division (160,990,10,250);
     division4 = new Division (240,990,10,250);
     division5 = new Division (320,990,10,250);
     division6 = new Division (400,990,10,250);
     division7 = new Division (480,990,10,250);

     plinko1 = new Plinko (40,400,20);
     plinko2 = new Plinko (90,400,20);
     plinko3 = new Plinko (140,400,20);
     plinko4 = new Plinko (190,400,20);
     plinko5 = new Plinko (240,400,20);
     plinko6 = new Plinko (290,400,20);
     plinko7 = new Plinko (340,400,20);
     plinko8 = new Plinko (390,400,20);
     plinko9 = new Plinko (440,400,20);

     plinko10 = new Plinko(15,500,20);
     plinko11 = new Plinko(65,500,20);
     plinko12 = new Plinko(115,500,20);
     plinko13 = new Plinko(165,500,20);
     plinko14 = new Plinko(215,500,20);
     plinko15 = new Plinko(265,500,20);
     plinko16 = new Plinko(315,500,20);
     plinko17 = new Plinko(365,500,20);
     plinko18 = new Plinko(415,500,20);
     plinko19 = new Plinko(465,500,20);

     plinko20 = new Plinko(40,600,20);
     plinko21 = new Plinko(90,600,20);
     plinko22 = new Plinko(140,600,20);
     plinko23 = new Plinko(190,600,20);
     plinko24 = new Plinko(240,600,20);
     plinko25 = new Plinko(290,600,20);
     plinko26 = new Plinko(340,600,20);
     plinko27 = new Plinko(390,600,20);
     plinko28 = new Plinko(440,600,20);

     plinko29 = new Plinko(15,700,20);
     plinko30 = new Plinko(65,700,20);
     plinko31 = new Plinko(115,700,20);
     plinko32 = new Plinko(165,700,20);
     plinko33 = new Plinko(215,700,20);
     plinko34 = new Plinko(265,700,20);
     plinko35 = new Plinko(315,700,20);
     plinko36 = new Plinko(365,700,20);
     plinko37 = new Plinko(415,700,20);
     plinko38 = new Plinko(465,700,20);

     /*
     particle1 = new Particle(20,100,10);
     particle2 = new Particle(40,100,10);
     particle3 = new Particle(60,100,10);
     particle4 = new Particle(80,100,10);
     particle5 = new Particle(100,100,10);
     particle6 = new Particle(120,100,10);
     particle7 = new Particle(140,100,10);
     particle8 = new Particle(160,100,10);
     particle2 = new Particle(180,100,10);
     */

     
    var particles = [];
    var plinkos = [];
    var divisions = [];

    for (var j = 0; j < particles.length; j++){
      particles[j].display();
    }

    for (var k = 0; k < divisions.length; k++){
        divisions[k].display();
    }


    
}

function draw() {
  background(0,0,0);  
  drawSprites();

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();

  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();

  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();

  //particle1.display();
}