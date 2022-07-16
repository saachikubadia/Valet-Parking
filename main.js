//Create a reference for canvas 
var canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x= 10;
car_y= 10;

car_height= 50;
car_width= 100;

//Set initial position for a car image.

function add() {
	   //upload car, and background images on the canvas.
	   background_image=new Image();
	   background_image.onload=uploadBackground;
	   background_image.src=backgrond;

	greencar_image=new Image();
    greencar_image.onload=uploadRover;
    greencar_image.src=rover_Image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
