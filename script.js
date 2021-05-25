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

function map(){
	var campus=localStorage.getItem("campus");
	if (campus == "Callaghan"){
		window.location.href = "https://www.newcastle.edu.au/campus-life/newcastle/callaghan/map";
	} else if (campus == "Ourimbah"){
		window.location.href = "https://www.newcastle.edu.au/campus-life/central-coast/ourimbah/map";
	}
	else {
		window.location.href = "https://www.newcastle.edu.au/campus-life/newcastle/newcastle-city/map";
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

var total = 0;
function checkboxes1(){
   	var inputElems = document.getElementsByClassName("check1"),
	count = 0;

        for (var i=0; i<inputElems.length; i++) {       
			if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
			    count++; 
			}
		}
		var percentage = (count/4)*100;


		var id = setInterval(frame, 10);
			function frame(){
				if (total < percentage){
						total++;
						document.getElementById("Bar").style.width = total+"%";
						document.getElementById("Percent1").innerHTML = total+"%";
				}
				else if (percentage == 0) {
					total--;
					document.getElementById("Bar").style.width = total+"%";
					document.getElementById("Percent1").innerHTML = total+"%";
				}
				else {
						total--;
						document.getElementById("Bar").style.width = total+"%";
						document.getElementById("Percent1").innerHTML = total+"%";
				}
				if (total == percentage) {
					clearInterval(id);
			}
		}
	
}
