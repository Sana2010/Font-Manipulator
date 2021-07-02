nosex=0;
nosey=0;

leftwristx = 0;
rightwristx = 0;

difference = 0

function setup()
{
canvas = createCanvas(400, 300);
canvas.position(600,150);

video = createCapture(VIDEO);
video.size(400,300);
video.position(170,190);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function draw() 
{
word = document.getElementById("name").value;
color = document.getElementById("col").value;

console.log(word);

background("#8fdfd6");
fill(color);
stroke(color);
textSize(difference);
text(word,nosex,nosey);

document.getElementById("size").innerHTML = "text-size:" + difference + "px";
}

function modelLoaded() 
{
console.log("model has loaded");
}

function gotPoses(results) 
{
if (results.length > 0) 
{
console.log(results);

nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;

leftwristx = results[0].pose.leftWrist.x;
rightwristx = results[0].pose.rightWrist.x;

difference = floor(leftwristx - rightwristx);

console.log("leftwrist=" + leftwristx + "rightwrist=" + rightwristx + "difference=" + difference);
}
}