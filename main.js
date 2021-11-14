function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save('error_cantdownloadfile.png');
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("x coordinate of nose"+results[0].pose.nose.x);
        console.log("y coordinate of nose"+results[0].pose.nose.y);
    }
}
