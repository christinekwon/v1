function cd_animate() {
    // cdMove0();
	// cdMove1();
	// cdMove2();
}
// l-system
function cdMove0() {
	var elem = document.getElementById("cdAnimation0");
	var xpos = randomX();// x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	var x_increasing = Math.random() >= 0.5; 
	var y_increasing = Math.random() >= 0.5;
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = cd_link0;
	}
  
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("cd-folder0").src = "resources/images/home/folder-open.png";
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
		document.getElementById("cd-folder0").src = "resources/images/home/folder-closed.png";
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
function cdMove1() {
	var elem = document.getElementById("cdAnimation1");
	var xpos = randomX(); // x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	var x_increasing = Math.random() >= 0.5; 
	var y_increasing = Math.random() >= 0.5; 
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = cd_link1;
	}
  
	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("cd-folder1").src = "resources/images/home/folder-open.png";
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
		document.getElementById("cd-folder1").src = "resources/images/home/folder-closed.png";
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
function cdMove2() {
	var elem = document.getElementById("cdAnimation2");
	var xpos = randomX(); // x coordinate of circle
	var ypos = randomY(); // y coordinate of circle
	elem.style.left = xpos;
	elem.style.top = ypos;
   
	var x_increasing = Math.random() >= 0.5; 
	var y_increasing = Math.random() >= 0.5; 
	var stop = false;

	elem.onclick = function (e) {
		let name = e.target.name;
		location.href = cd_link2;
	}

	elem.addEventListener("mouseover", function( event ) {   
		document.getElementById("cd-folder2").src = "resources/images/home/folder-open.png";
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
		document.getElementById("cd-folder2").src = "resources/images/home/folder-closed.png";
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