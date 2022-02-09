song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristx=0;
rightWristy=0;

function preload()
{
    song1= loadSound("song1.mp3");
    song2= loadSound("song2.mp3");

}

function setup()
{
    canvas= createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
     console.log(results);
     leftWristX= results[0].pose.leftWrist.x;
     leftWristY= results[0].pose.leftWrist.y;
     console.log("Left Wrist x= "+ leftWristX+" Left Wrist Y= "+leftWristY)
     rightWristx= results[0].pose.rightWrist.x;
     rightWristy=results[0].pose.rightWrist.y;
     console.log("Right Wrist X= "+rightWristx+" Right Wrist Y= "+rightWristy);

    }
}


function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1)
}