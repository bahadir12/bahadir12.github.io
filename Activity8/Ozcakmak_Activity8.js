var mouseButton = document.querySelector("#movingButton");

var index = 0;

var max_delay = 500;
    mouseButton.style.left = "850px";
    mouseButton.style.top = "350px";
mouseButton.addEventListener("mouseover",()=>setTimeout(change,max_delay));

var buttonClick = document.getElementById("movingButton");

buttonClick.onclick = function(){
	index++;
	if(index==3){
		
		alert("Level 2")
		
		max_delay = max_delay-100;
	}
	
	else if(index==6){
		
		alert("Level 3")
		
		max_delay = max_delay-100;
	}
	
	else if(index==9){
		
		alert("Level 4")
		
		max_delay = max_delay-100;
	}
	
	else if(index==12){
		
		alert("Level 5")
		
		max_delay = max_delay-100;
	}
	
	else if(index==12){
		
		alert("Level 6")
		
		max_delay = max_delay-100;
	}

}


function change()
{
let random_x = Math.floor(Math.random()*300)+1;

let random_y = Math.floor(Math.random()*300)+1;


    mouseButton.style.left = random_x + "px";
    mouseButton.style.top = random_y + "px";
	
};