// name url tooltip


create_new_folder(
    "work",
    "./work/",
    "view my projects"
);

create_new_folder(
    "info",
    "./src/pages/me.html",
    "learn about me"
);

create_new_folder(
    "instagram",
    "https://www.instagram.com/cccccccccchristine/",
    "dm me"
);

create_new_folder(
    "email",
    "mailto: christinekwon22@gmail.com",
    "email me"
);

// create_new_folder(
//     "ring",
//     "tel:+4733378901",
//     "ring me"
// );

function create_new_folder(name, url, tooltip_txt) {

    // create new container
    var container = document.createElement('div');
    container.classList.add('container');
    container.id = name + "-folder";

    var icon_container = document.createElement('div');
    icon_container.classList.add('icon-container');
    icon_container.id = "icon-" + name;
    icon_container.onclick = function(e) {
        location.href = url;
    }

    var img = document.createElement('img');
    img.classList.add('folder');
    img.id = 'folder-' + name;
    img.src = './src/images/home/folder-closed.png';

    // replace spaces in titles w/ line breaks to prevent horizontal crowding
    name = name.replace(/ /g, "<br>");
    var title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = name;

    icon_container.appendChild(img);
    icon_container.appendChild(title);

    var tooltip = document.createElement('span');
    tooltip.classList.add('tooltiptext');
    tooltip.id = 'tooltip-' + name;
    tooltip.innerHTML = tooltip_txt;

    container.appendChild(icon_container);
    container.appendChild(tooltip);


    document.getElementById("folder-container").appendChild(container);
    // document.body.appendChild(container);
    move(name);
}