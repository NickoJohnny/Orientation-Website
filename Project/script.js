var ourimbah = "ourimbah";

function setOurimbah(){
	localStorage.setItem("campus", "ourimbah");
	window.location.href = "home.html";
}

function setCallaghan(){
	localStorage.setItem("campus", "callaghan");
	window.location.href = "home.html";
}

function changeCampus(){
	var campus=localStorage.getItem("campus");
	if (campus == "callaghan"){
		localStorage.setItem("campus", "ourimbah");
	} else if (campus == "ourimbah"){
		localStorage.setItem("campus", "callaghan");
	}
	location.reload()
}

function staff(){
	var campus=localStorage.getItem("campus");
	if (campus == "callaghan"){
		window.location.href = "staffCallaghan.html";
	} else if (campus == "ourimbah"){
		window.location.href = "staffOurimbah.html";
	}
}

function map(){
	var campus=localStorage.getItem("campus");
	if (campus == "callaghan"){
		window.location.href = "mapCallaghan.html";
	} else if (campus == "ourimbah"){
		window.location.href = "mapOurimbah.html";
	}
}

function todo(){
	window.location.href = "todo.html";
}

window.onload = function() {
	var campus=localStorage.getItem("campus");
   	document.getElementById("currentCampus").innerHTML= campus;
} 