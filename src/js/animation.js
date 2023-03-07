var mirror = document.getElementById("mirror");

mirror.addEventListener("mouseover", function(event) {
    mirror.parentElement.style.zIndex = "10";
    mirror.style.transform = "rotate(2160deg)";
    document.getElementById("me-text").style.opacity = "0.8";
}, false);

mirror.addEventListener("mouseout", function(event) {
    mirror.parentElement.style.zIndex = "0";
    mirror.style.transform = "rotate(0)";
    document.getElementById("me-text").style.opacity = "0.0";

}, false);

// var art_container = document.getElementById("art-container");
// var art = document.getElementById("art");

// art.addEventListener("mouseover", function( event ) {   
// 	art_container.style.zIndex = "10";
// 	art.style.transform ="rotate(-2165deg)";
// }, false);

// art.addEventListener("mouseout", function( event ) {   
// 	art_container.style.zIndex = "-1";
// 	art.style.transform ="rotate(-5deg)";
// }, false);

function calcLeftTooltip(icon_container, tooltip) {
    let left = icon_container.style.left;
    left = parseInt(left.substring(0, left.length - 1));
    left -= 110;
    left += "px";
    tooltip.style.left = left;
    tooltip.style.top = icon_container.style.top;
}

function calcRightTooltip(icon_container, tooltip) {
    let left = icon_container.style.left;
    left = parseInt(left.substring(0, left.length - 1));
    left += 280;
    left += "px";
    tooltip.style.left = left;
    tooltip.style.top = icon_container.style.top;
}

function move(index) {
    var icon_container = document.getElementById("icon-" + index);

    var xpos = randomX(); // x coordinate of circle
    var ypos = randomY(); // y coordinate of circle
    icon_container.style.left = xpos;
    icon_container.style.top = ypos;

    // flag; true means circle is moving l --> r, false means r --> l
    var x_increasing = Math.random() >= 0.5;
    // flag; true means circle is moving top -- > bottom, false means bottom --> top
    var y_increasing = Math.random() >= 0.5;

    // true = circle is stopped, false = circle is moving
    var stop = false;

    var folder = 'folder-' + index;
    // when mouse hovers over circle, it expands and stops
    var tooltip = icon_container.parentElement.children[1];

    icon_container.addEventListener("mouseover", function(event) {
        // only allow certain hover effects on non-touch screen / pc
        // showing tooltip can make mobile version very messy!!
        if (!isMobile) {
            icon_container.style.backgroundColor = backgroundColor1;
            icon_container.style.zIndex = "2";
            if (xpos > window.innerWidth / 2) {
                calcLeftTooltip(icon_container, tooltip);
            } else {
                calcRightTooltip(icon_container, tooltip);
            }
            tooltip.style.opacity = "1.0";
        }

        document.getElementById(folder).src = "src/images/home/folder-open.png";

        stop = true;
    }, false);

    // when mouse is stops hovering over circle, go back go original size && continue moving
    icon_container.addEventListener("mouseout", function(event) {
        document.getElementById(folder).src = "src/images/home/folder-closed.png";
        icon_container.style.backgroundColor = backgroundColor0;
        icon_container.style.zIndex = "1";
        tooltip.style.opacity = "0.0";
        stop = false;
    }, false);

    // calculate location change every 10 milliseconds by calling frame() function
    setInterval(frame, speed);
    icon_container.style.visibility = "visible";

    function frame() {
        icon_container.style.visibility = "visible";
        // only execute script if the mouse is not hovering over the circle
        if (!stop) {
            // when circle reaches bottom edge of window, bounce back
            if (ypos >= window.innerHeight - bottomPadding) {
                y_increasing = false;
                ypos--;
                icon_container.style.top = ypos + 'px';
            }
            // when circle reaches top edge of window, bounce back
            else if (ypos <= 20) {
                y_increasing = true;
                ypos++;
                icon_container.style.top = ypos + 'px';
            }
            // if circle is floating in the middle of the screen, increment
            // its y position according to the y_increasing flag
            else {
                if (y_increasing) {
                    ypos++;
                    icon_container.style.top = ypos + 'px';
                } else {
                    ypos--;
                    icon_container.style.top = ypos + 'px';
                }
            }

            // when circle reaches right edge of window, bounce back
            if (xpos >= window.innerWidth - rightPadding) {
                // console.log(window.innerWidth)
                x_increasing = false;
                xpos--;
                icon_container.style.left = xpos + 'px';
            }
            // when circle reaches left edge of window, bounce back
            else if (xpos <= 20) {
                x_increasing = true;
                xpos++;
                icon_container.style.left = xpos + 'px';
            }
            // if circle is floating in the middle of the screen, increment
            // its x position according to the x_increasing flag
            else {
                if (x_increasing) {
                    xpos++;
                    icon_container.style.left = xpos + 'px';
                } else {
                    xpos--;
                    icon_container.style.left = xpos + 'px';
                }
            }
        }

    }
}