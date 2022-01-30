song="";
songs="";

function setup(){
    
    canvas=createCanvas(500,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
}
function draw(){
    image(video,0,0,500,350);
}
function preload(){
    song=loadSound("music.mp3");
    songs=loadSound("music2.mp3");
}