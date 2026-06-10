let uwu = prompt("UwU?");

function body(text){
	document.body.innerHTML += "<p>" + text + "</p>";
}
body(uwu);

let temp = prompt("How hawt is it UwU?");
temp = Number(temp)
if(temp <= 32){
	body("it cwold 3:");
}else if(temp >= 80){
	body("enjwy the bweech fwoof :3");
}else{
	body("go on a walk UwU");
}

body("have a day fwoof :3")
