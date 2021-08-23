  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour, minute;
var girlimg, girl;
var frameRate;

var bg = "sunrise1.png";


function preload() {
    // create getBackgroundImg( ) here
   girlimg=loadImage("girl.png")
   
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    girl= createSprite(600, 500, 150, 150);
    girl.addImage(girlimg);
    engine = Engine.create();
    world = engine.world;
    girl.scale=0.4;
}

function draw(){
     // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
    // write code to display time in correct format here
    fill("black");
    textSize(30);
    strokeWeight(4);
       stroke(255);
  
    if(hour>=12){

        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
 
         text("Time : 12 AM",100,100);
       }else{
   
        text("Time : "+ hour%12 + " AM", 50,100);
       }
       push();
   
    if(minute=minute) {  
      text(""+hour +":"+minute, 1000,500);
      text("The time is currently:",700, 500);
      pop();
    }
    drawSprites();
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    
    // write code slice the datetime
    hour = datetime.slice(11,13);
    minute = datetime.slice(14,16);

    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}