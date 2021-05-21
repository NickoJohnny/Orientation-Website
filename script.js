var ourimbah = "Ourimbah";

function setOurimbah(){
	localStorage.setItem("campus", "Ourimbah");
	window.location.href = "home.html";
}

function setCallaghan(){
	localStorage.setItem("campus", "Callaghan");
	window.location.href = "home.html";
}

function setNuSpace(){
	localStorage.setItem("campus", "NuSpace");
	window.location.href = "home.html";
}

function changeOurimbah(){
	localStorage.setItem("campus", "Ourimbah");
	location.reload()
}

function changeCallaghan(){
	localStorage.setItem("campus", "Callaghan");
	location.reload()
}

function changeNuSpace(){
	localStorage.setItem("campus", "NuSpace");
	location.reload()
}

function changeCampusDropdown() {
	var x = document.getElementById("menuDropdown");
  		if (window.getComputedStyle(x).display === "none") {
  			document.getElementById("menuDropdown").style.display = "inline";
  		}
  		else
  		{
  			document.getElementById("menuDropdown").style.display = "none";
  		}
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

function services() {
	window.location.href = "services.html";
}

function about() {
	window.location.href = "about.html";
}

//Possible multiple FAQ's for campuses?
function faq(){
	window.location.href = "faq.html";
}

window.onload = function() {
	var campus=localStorage.getItem("campus");
   	document.getElementById("currentCampus").innerHTML= campus;
} 

