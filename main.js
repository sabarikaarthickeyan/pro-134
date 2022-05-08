function preload(){
    img1 = loadSound("ringing_old_phone.mp3")
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
     video = createCapture(VIDEO);
     video.hide();
    objectdetector = ml5.objectDetector('cocossd',modelloded);
    document.getElementById("status").innerHTML = "Status = Detecting Object ";

}
 
 objects = [];
 status1 = "";

function modelloded(){
    console.log("Modelloaded!!");
    status1 = true;
    

}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}



function draw(){
    image(video,0,0,500,500);
    objectdetector.detect(video,gotresults);
    
    if(status1!=""){
        
       for(i=0; i<objects.length; i++){
           
           
           noFill();
           r = random(255);
           g = random(100,200);
           b = random(255);
           stroke(r,g,b);
           persent = Math.floor(objects[i].confidence*100) ;
           rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
           textSize(22);
           textAlign(LEFT,BOTTOM);
           text(objects[i].label+" "+persent+"%",objects[i].x+15,objects[i].y);
           if(object[i].label=="person"){
            document.getElementById("baby").innerHTML = "Baby Detected";
            img1.stop();
    
        }
        else{
            document.getElementById("baby").innerHTML = "Baby Not Detected";
            img1.play();
        }
    
       }

    }

    if(object.length<0){
        document.getElementById("baby").innerHTML = "Baby Not Detected";
        img1.play();
    }


    
    
}