var myBall;
var myBall2;
var myBall3;
var mySound;

function preload(){
	mySound = loadSound ("snare.wav");
}

function setup(){
	createCanvas(800,800);
	background(100);
	myBall = new Ball(200, mySound);
	myBall2 = new Ball(400, mySound);
	myBall3 = new Ball(600, mySound);
	mySound.play();

}

function draw(){
	background(255);
	myBall.animate();
	myBall.display();
	myBall2.animate();
	myBall2.display();
	myBall3.animate();
	myBall3.display();

}

function mouseClicked() {
      // mySound.stop()
}

function Ball(yPos, _mySound){

	this.x = 0;
	this.y = yPos;
	this.step = 2;
	this.sound = _mySound;

	this.animate = function(){
		this.x += this.step;
		if(this.x > width){
			this.step = this.step*(-1);
			this.sound.play();
    		console.log(this.sound.isPlaying());
		}
	}

	this.display = function(){
		ellipse(this.x, this.y, 20,40);
	}
};
