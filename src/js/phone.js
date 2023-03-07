function animatePhone() {
	jQuery.fn.rotate = function(degrees) {
		$(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
					 '-moz-transform' : 'rotate('+ degrees +'deg)',
					 '-ms-transform' : 'rotate('+ degrees +'deg)',
					 'transform' : 'rotate('+ degrees +'deg)'});
		return $(this);
	};

	function rotateForward() {
		$("#phone-container").rotate(7);
	}	
	function rotateBackward() {
		$("#phone-container").rotate(0);
	}

	let interval = 70;

    let i = 1;
	while (i < 20) {
		setTimeout(rotateForward, interval * i);
        setTimeout(rotateBackward, interval * (i + 1));
        i += 2;
    }
    
    let bubble = document.getElementById("welcome-message");
    setTimeout(function() { bubble.style.visibility = "visible"; }, interval * i);
}

