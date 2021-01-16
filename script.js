var h3 = document.querySelector("h3");
var clr1 = document.querySelector(".clr1");
var clr2 = document.querySelector(".clr2");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");



function changeColor(){
	body.style.background = "linear-gradient(to right, " + clr1.value + ", " + clr2.value +")";	
	if(clr1.value === clr2.value){
		if(clr1.value === "#ffffff"){
			h1.style.background = "linear-gradient(to right,black,black)";
			h1.style.borderImage = "linear-gradient(to right,black,black)";

		}else if(clr1.value === "#000000"){
			h1.style.borderImage = "linear-gradient(to right, white,white)";
			h1.style.background = "linear-gradient(to right,white,white)";	
		}
		
	}else{
			h1.style.background = "linear-gradient(to right, " + clr2.value + ", " + clr1.value +")";
	h1.style.borderImage = "linear-gradient(to right, " + clr2.value + ", " + clr1.value +")";
	}
	h1.style.webkitBackgroundClip="text";
	h1.style.borderImageSlice = "1";
	h3.textContent = body.style.background + " ;";
}	

clr1.addEventListener("input",changeColor);

clr2.addEventListener("input",changeColor)