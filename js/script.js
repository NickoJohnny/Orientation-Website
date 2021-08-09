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
	else {
		window.location.href = "staffNUspace.html";
	}
}

function services(){
	var campus=localStorage.getItem("campus");
	if (campus == "Callaghan"){
		window.location.href = "servicesCallaghan.html";
	} else if (campus == "Ourimbah"){
		window.location.href = "servicesOurimbah.html";
	}
	else {
		window.location.href = "servicesNUspace.html";
	}
}

function map(){
	var campus=localStorage.getItem("campus");
	if (campus == "Callaghan"){
		window.open("https://www.newcastle.edu.au/campus-life/newcastle/callaghan/map",'_blank');
	} else if (campus == "Ourimbah"){
		window.open("https://www.newcastle.edu.au/campus-life/central-coast/ourimbah/map",'_blank');
	}
	else {
		window.open("https://www.newcastle.edu.au/campus-life/newcastle/newcastle-city/map",'_blank');
	}
}

function todo(){
	window.location.href = "todo.html";
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

function openTab(href) {
	Object.assign(document.createElement('a'), {
	  target: '_blank',
	  href: href,
	}).click();
  }