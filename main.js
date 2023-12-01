function preload(){

}

function setup(){
 c = createCanvas(550,550);
 c.center();
 video = createCapture(VIDEO);
 video.size(550,550);
 video.hide();
 poseNet = ml5.poseNet(video,ml);
 poseNet.on("pose",gotpose);
}

function draw(){
 image(video,0,0,550,550);
}

function take_snapshot(){
 save("save.jpg");
}

function ml(){
    console.log("Model working")
}

function gotpose(result){
 
    if(result.length > 0){
        console.log(result);
        console.log("nose X is " + result[0].pose.nose.x);
        console.log("nose Y is " + result[0].pose.nose.y);
    }
}