function design_animate() {
    // designMove0();
	// designMove1();
	// designMove2();
}
// l-system
function designMove0() {
	var elem = document.getElementById("designAnimation0");
	var xpos = randomX();// x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	var x_increasing = Math.random() >= 0.5; 
	var y_increasing = Math.random() >= 0.5;
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = design_link0;
	}
  
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("design-folder0").src = "resources/images/home/folder-open.png";
		elem.style.backgroundColor = backgroundColor1;
		elem.style.zIndex = "2";
		if (xpos > window.innerWidth / 2) {
			elem.children[2].style.left = tooltipRight;
		}
		else {
			elem.children[2].style.left = tooltipLeft;
		}
		stop = true;
	}, false);
  
	elem.addEventListener("mouseout", function( event ) {   
		document.getElementById("design-folder0").src = "resources/images/home/folder-closed.png";
		elem.style.backgroundColor = backgroundColor0;
		elem.style.zIndex = "1";
		stop = false;
	}, false);

	setInterval(frame, speed);
  
 	function frame() {
		elem.style.visibility = "visible";
		if (!stop) {
			if (ypos >= window.innerHeight - bottomPadding) {
				y_increasing = false;
				ypos--;
				elem.style.top = ypos + 'px'; 
			}
			else if (ypos <= 0) {
				y_increasing = true;
				ypos++;
				elem.style.top = ypos + 'px'; 
			}
			else {
				if (y_increasing) {
					ypos++;
					elem.style.top = ypos + 'px'; 
				}
				else {
					ypos--;
					elem.style.top = ypos + 'px'; 
				}
			}
	
			if (xpos >= window.innerWidth - rightPadding) {
				x_increasing = false;
				xpos--;
				elem.style.left = xpos + 'px'; 
			}
			else if (xpos <= 0) {
				x_increasing = true;
				xpos++; 
				elem.style.left = xpos + 'px'; 
			}
			else {
				if (x_increasing) {
					xpos++;
					elem.style.left = xpos + 'px'; 
				}
				else {
					xpos--;
					elem.style.left = xpos + 'px'; 
				}
			}
		}
	
	}
}

// shape grammar
function designMove1() {
	var elem = document.getElementById("designAnimation1");
	var xpos = randomX(); // x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	var x_increasing = Math.random() >= 0.5; 
	var y_increasing = Math.random() >= 0.5; 
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = design_link1;
	}
  
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("design-folder1").src = "resources/images/home/folder-open.png";
		elem.style.backgroundColor = backgroundColor1;
		elem.style.zIndex = "2";
		if (xpos > window.innerWidth / 2) {
			elem.children[2].style.left = tooltipRight;
		}
		else {
			elem.children[2].style.left = tooltipLeft;
		}
		stop = true;
	}, false);
  
	elem.addEventListener("mouseout", function( event ) {   
		document.getElementById("design-folder1").src = "resources/images/home/folder-closed.png";
		elem.style.backgroundColor = backgroundColor0;
		elem.style.zIndex = "1";
		stop = false;
	}, false);

	setInterval(frame, speed);
  
 	function frame() {
		elem.style.visibility = "visible";
		if (!stop) {
			if (ypos >= window.innerHeight - bottomPadding) {
				y_increasing = false;
				ypos--;
				elem.style.top = ypos + 'px'; 
			}
			else if (ypos <= 0) {
				y_increasing = true;
				ypos++;
				elem.style.top = ypos + 'px'; 
			}
			else {
				if (y_increasing) {
					ypos++;
					elem.style.top = ypos + 'px'; 
				}
				else {
					ypos--;
					elem.style.top = ypos + 'px'; 
				}
			}
	
			if (xpos >= window.innerWidth - rightPadding) {
				x_increasing = false;
				xpos--;
				elem.style.left = xpos + 'px'; 
			}
			else if (xpos <= 0) {
				x_increasing = true;
				xpos++; 
				elem.style.left = xpos + 'px'; 
			}
			else {
				if (x_increasing) {
					xpos++;
					elem.style.left = xpos + 'px'; 
				}
				else {
					xpos--;
					elem.style.left = xpos + 'px'; 
				}
			}
		}
	
	}
}


// cellular automata
function designMove2() {
	var elem = document.getElementById("designAnimation2");
	var xpos = randomX(); // x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	var x_increasing = Math.random() >= 0.5; 
	var y_increasing = Math.random() >= 0.5; 
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = design_link2;
	}

	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("design-folder2").src = "resources/images/home/folder-open.png";
		elem.style.backgroundColor = backgroundColor1;
		elem.style.zIndex = "2";
		if (xpos > window.innerWidth / 2) {
			elem.children[2].style.left = tooltipRight;
		}
		else {
			elem.children[2].style.left = tooltipLeft;
		}
		stop = true;
	}, false);
  
	elem.addEventListener("mouseout", function( event ) {   
		document.getElementById("design-folder2").src = "resources/images/home/folder-closed.png";
		elem.style.backgroundColor = backgroundColor0;
		elem.style.zIndex = "1";		
		stop = false;
	}, false);

	setInterval(frame, speed);
  
 	function frame() {
		elem.style.visibility = "visible";
		if (!stop) {
			if (ypos >= window.innerHeight - bottomPadding) {
				y_increasing = false;
				ypos--;
				elem.style.top = ypos + 'px'; 
			}
			else if (ypos <= 0) {
				y_increasing = true;
				ypos++;
				elem.style.top = ypos + 'px'; 
			}
			else {
				if (y_increasing) {
					ypos++;
					elem.style.top = ypos + 'px'; 
				}
				else {
					ypos--;
					elem.style.top = ypos + 'px'; 
				}
			}
	
			if (xpos >= window.innerWidth - rightPadding) {
				x_increasing = false;
				xpos--;
				elem.style.left = xpos + 'px'; 
			}
			else if (xpos <= 0) {
				x_increasing = true;
				xpos++; 
				elem.style.left = xpos + 'px'; 
			}
			else {
				if (x_increasing) {
					xpos++;
					elem.style.left = xpos + 'px'; 
				}
				else {
					xpos--;
					elem.style.left = xpos + 'px'; 
				}
			}
		}
	
	}
}