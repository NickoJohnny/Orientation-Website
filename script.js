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


// Progess bar
var total1 = 0;
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
				if (total1 < percentage){
						total1++;
						document.getElementById("Bar1").style.width = total1+"%";
						document.getElementById("Percent1").innerHTML = total1+"%";
				}
				else if (percentage == 0) {
					total1--;
					document.getElementById("Bar1").style.width = total1+"%";
					document.getElementById("Percent1").innerHTML = total1+"%";
				}
				else {
						total1--;
						document.getElementById("Bar1").style.width = total1+"%";
						document.getElementById("Percent1").innerHTML = total1+"%";
				}
				if (total1 == percentage) {
					clearInterval(id);
			}
		}
	
}


var total2 = 0;
function checkboxes2(){
   	var inputElems = document.getElementsByClassName("check2"),
	count = 0;

        for (var i=0; i<inputElems.length; i++) {       
			if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
			    count++; 
			}
		}
		var percentage = (count/4)*100;


		var id = setInterval(frame, 10);
			function frame(){
				if (total2 < percentage){
						total2++;
						document.getElementById("Bar2").style.width = total2+"%";
						document.getElementById("Percent2").innerHTML = total2+"%";
				}
				else if (percentage == 0) {
					total2--;
					document.getElementById("Bar2").style.width = total2+"%";
					document.getElementById("Percent2").innerHTML = total2+"%";
				}
				else {
						total2--;
						document.getElementById("Bar2").style.width = total2+"%";
						document.getElementById("Percent2").innerHTML = total2+"%";
				}
				if (total2 == percentage) {
					clearInterval(id);
			}
		}
	
}

var total3 = 0;
function checkboxes3(){
   	var inputElems = document.getElementsByClassName("check3"),
	count = 0;

        for (var i=0; i<inputElems.length; i++) {       
			if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
			    count++; 
			}
		}
		var percentage = (count/4)*100;


		var id = setInterval(frame, 10);
			function frame(){
				if (total3 < percentage){
						total3++;
						document.getElementById("Bar3").style.width = total3+"%";
						document.getElementById("Percent3").innerHTML = total3+"%";
				}
				else if (percentage == 0) {
					total2--;
					document.getElementById("Bar3").style.width = total3+"%";
					document.getElementById("Percent3").innerHTML = total3+"%";
				}
				else {
						total3--;
						document.getElementById("Bar3").style.width = total3+"%";
						document.getElementById("Percent3").innerHTML = total3+"%";
				}
				if (total3 == percentage) {
					clearInterval(id);
			}
		}
	
}

// More info button
function expand() {
	var x = document.getElementById("pop-up");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
}

function closepop() {
	document.getElementById("pop-up").style.display = "none";
}
