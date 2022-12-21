function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log('poseNet is intialized');
}
difference=0;
leftWrist=0;
rightWrist=0;
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx)
    }
}

function draw(){
    background('darkcyan');
    document.getElementById("font_size").innerHTML="font-size of the text will be"+difference+"px";
    textSize(difference);
    fill('black');
    text('Joyful',50,400);
}