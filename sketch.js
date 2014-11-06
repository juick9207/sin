function setup() {
   bg=loadImage("wuzu.jpg");

    createCanvas(1500, 1000);
}


function draw() {
   background(bg);
     
   fill(255,255,0);
   ellipse(750,500,500,500);


   noFill();
   stroke(225);
   ellipse(750,500,780,780);

   var duration = 10000;
   var timing = (new Date()%duration)/duration;

   fill(100,100,255);
    ellipse(750 + Math.cos(timing*2*PI)*560,
          500+Math.sin(timing*2*PI)*560,
          250,
          250);

    fill(150,70,155);
    ellipse(750 + Math.cos(timing*8*PI)*400,
          500+Math.sin(timing*8*PI)*400,
          170,
          170);

   fill(196,158,0);
   ellipse(750 + Math.cos(timing*2*PI)*560 + Math.cos(timing*4*PI)*200,           // x좌표
        500+Math.sin(timing*2*PI)*560 + Math.sin(timing*4*PI)*200,       // y좌표
        50,                                     // width
        50);                                        // height



   fill(255,150,20);
   ellipse(750 + Math.cos(timing*2*PI)*560 + Math.cos(timing*2*PI)*150,           // x좌표
        500+Math.sin(timing*2*PI)*560 + Math.sin(timing*2*PI)*150,       // y좌표
        30,                                     // width
        30);    

}