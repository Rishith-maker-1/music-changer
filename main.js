song="";
songs="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
score=0;

status1="";
status2="";
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
    status1=song.isPlaying();
    status2=songs.isPlaying();
        stroke('black');
        fill('red');
    if(score>0.2){
        circle(leftWristX,leftWristY,20);
        songs.stop();
        if(status2==false){
            songs.play();
            document.getElementById("name").innerHTML="Song - Peter Pan";
        }
    }
    
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        score=results[0].pose.keypoints[9].score;
        console.log(score);
       
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
