
let firstRun = true;
let backgroundImage;
let LightCover;
let shakeAmount = 5;




// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(255)


   console.log(song.duration()) 
   


   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;

   if (firstRun){
      rectMode(CENTER)
      imageMode(CENTER)
      backgroundImage = loadImage('background.png');
      LightCover = loadImage('Cover.png');
      firstRun = false;
    }

    

    let vocalColor = map(vocal, 0, 100, 0, 200, true);
    let drumColor = map(drum, 0, 100, 0, 200, true);
    let bassColor = map(bass, 0, 100, 0, 200, true);
    let otherColor = map(other, 0, 100, 0, 200, true);
  
    if (song.currentTime() > 59 && song.currentTime() < 59 + 34) {
      let dx = random(drum/3, -shakeAmount, shakeAmount);
      let dy = random(drum/3, -shakeAmount, shakeAmount);
      translate(dx, dy);
    }
    

    push()
    tint(255);
    backgroundImage.resize(1920, 1080);
    image(backgroundImage, 960, 540);
    pop()


    
  

    
    
    if (vocal > 15){
      //translate(1500, 1080);
     noStroke()
     fill(320, 350, 0, vocalColor);
     triangle(-400, 1290, 890, 0, 1090, 0);
    }
    if (vocal){
      //translate(1500, 1080);
      noStroke()
     fill(320, 150, 0, vocalColor);
     triangle(-400, 1290, 940, 0, 1040, 0);
    }



    if (drum > 30){
      //translate(1500, 1080);
      noStroke()
     fill(0, 0, 255, drumColor);
     triangle(-150, 1290, 1110, 0, 1310, 0);
    }    
    if (drum){
      //translate(1500, 1080);
      noStroke()
     fill(0, 200, 255, drumColor);
     triangle(-150, 1290, 1160, 0, 1260, 0);
    }  



    if (bass > 30){
      //translate(1500, 1080);
      noStroke()
     fill(255, 0, 0, bassColor);
     triangle(2110, 1290, 670, 0, 870, 0);
    }
    if (bass){
      //translate(1500, 1080);
      noStroke()
     fill(255, 0, 250, bassColor);
     triangle(2110, 1290, 720, 0, 820, 0);
    }



    if (other > 55){
      //translate(1500, 1080);
      noStroke()
     fill(0, 255, 0, otherColor);
     triangle(2350, 1290, 890, 0, 1090, 0);
    }
    if (other){
      //translate(1500, 1080);
      noStroke()
     fill(0, 255, 200, otherColor);
     triangle(2350, 1290, 940, 0, 1040, 0);
    }
    
    image(LightCover, 960, 540);

   

   // vocal bar is red
   //fill(200, 0, 0);
   //rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   //fill(0);
   //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   //fill(0, 200, 0);
   //rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   //fill(0);
   //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   //fill(50, 50, 240);
   //rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   //fill(0);
   //text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   //fill(200, 200, 200);
   //rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   //fill(0);
   //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   //fill(255, 255, 0);
 
    //display "words"
   //textAlign(CENTER);
   //textSize(vocal);
   //text(words, width/2, height/3);

  //textFont('Helvetica'); // please use CSS safe fonts
  //rectMode(CENTER)
  //textSize(50);
  //text(words, width / 2, height / 2); // Display
}

