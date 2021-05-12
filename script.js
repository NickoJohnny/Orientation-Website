var ourimbah = "Ourimbah";

function setOurimbah(){
	localStorage.setItem("campus", "Ourimbah");
	window.location.href = "home.html";
}

function setCallaghan(){
	localStorage.setItem("campus", "Callaghan");
	window.location.href = "home.html";
}

function changeCampus(){
	var campus=localStorage.getItem("campus");
	if (campus == "Callaghan"){
		localStorage.setItem("campus", "Ourimbah");
	} else if (campus == "Ourimbah"){
		localStorage.setItem("campus", "Callaghan");
	}
	location.reload()
}

function staff(){
	var campus=localStorage.getItem("campus");
	if (campus == "Callaghan"){
		window.location.href = "staffCallaghan.html";
	} else if (campus == "Ourimbah"){
		window.location.href = "staffOurimbah.html";
	}
}

function map(){
	var campus=localStorage.getItem("campus");
	if (campus == "Callaghan"){
		window.location.href = "mapCallaghan.html";
	} else if (campus == "Ourimbah"){
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

