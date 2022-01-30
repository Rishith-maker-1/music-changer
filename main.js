song="";
songs="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function setup(){
    canvas=createCanvas(500,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,500,350);
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("left wrist x = "+leftWristX+"left wrist y = "+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right wrist x = "+rightWristX+"right wrist y = "+rightWristY);
    }
}
function preload(){
    song=loadSound("music.mp3");
    songs=loadSound("music2.mp3");
}