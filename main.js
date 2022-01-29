song="";
songs="";
function preload(){
    song=loadSound("https://github.com/Rishith-maker-1/music-changer/blob/main/music.mp3?raw=true");
    songs=loadSound("https://github.com/Rishith-maker-1/music-changer/blob/main/music2.mp3?raw=true");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
