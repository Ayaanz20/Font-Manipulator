difference=0;
rightWrist=0;
leftWrist=0;
function setup(){
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);

    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet is Initialised');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(leftWrist - rightWrist);

        console.log("leftWrist" + leftWrist + "rightWrist" + rightWrist + "difference" + difference);
    }
}
function preload(){}
function draw(){
    background('#6C91C2');
    document.getElementById('font_size').innerHTML="Font Size Of The Text Will Be: " + difference + "px";
    textSize(difference);
 fill('#FFE787');
 text('Hello', 50, 400);
}