function setup(){
    canvas=createCanvas(650,480)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide();
    tint_colour="";
}

function draw(){ 
image(video,0,0,640,480) 

 } 

 function take_snapshot(){
    save("selfie.png")
 }