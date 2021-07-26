// Progess bar for step 1
var total1 = 0;
function checkboxes1(){
   	var inputElems = document.getElementsByClassName("check1"),
	count = 0;

        for (var i=0; i<inputElems.length; i++) {       
			if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
			    count++; 
			}
		}
		var percentage = (count/3)*100;
		percentage = Math.round(percentage);


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

// Progess bar for step 2
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

// Progess bar for step 3
var total3 = 0;
function checkboxes3(){
   	var inputElems = document.getElementsByClassName("check3"),
	count = 0;

        for (var i=0; i<inputElems.length; i++) {       
			if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
			    count++; 
			}
		}
		var percentage = (count/3)*100;
		percentage = Math.round(percentage)


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

// More info buttons 1-12
// Expand opens, close closes
function expand1() {
	var x = document.getElementById("pop-up1");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
}

function closepop1() {
	document.getElementById("pop-up1").style.display = "none";
}

function expand2() {
	var x = document.getElementById("pop-up2");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
}

function closepop2() {
	document.getElementById("pop-up2").style.display = "none";
}

function expand3() {
	var x = document.getElementById("pop-up3");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
}

function closepop3() {
	document.getElementById("pop-up3").style.display = "none";
}

function expand4() {
	var x = document.getElementById("pop-up4");
	if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
}

function closepop4() {
	document.getElementById("pop-up4").style.display = "none";
}

function expand5() {
	var x = document.getElementById("pop-up5");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
}

function closepop5() {
	document.getElementById("pop-up5").style.display = "none";
}

function expand6() {
	var x = document.getElementById("pop-up6");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
}

function closepop6() {
	document.getElementById("pop-up6").style.display = "none";
}

function expand7() {
	var x = document.getElementById("pop-up7");
	  if (x.style.display === "none") {
	    x.style.display = "block";
	  } else {
	    x.style.display = "none";
	  }
}

function closepop7() {
	document.getElementById("pop-up7").style.display = "none";
}
