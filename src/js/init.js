var data = [];

// read json file
fetch("./src/data/highlights.json")
    .then((response) => {
        return response.json();
    })

// do smth w the data
.then((json_data) => {
    // console.log(json_data);
    let index = 0;
    for (let key in json_data) {
        create_new_folder(index, json_data[key]);
        data.push(json_data[key]);
        index++;
    }

});



function create_new_folder(index, data) {

    // create new container
    var container = document.createElement('div');
    container.classList.add('container');
    container.id = "project" + index;

    var icon_container = document.createElement('div');
    icon_container.classList.add('icon-container');
    icon_container.id = "icon" + index;
    icon_container.onclick = function(e) {
        // location.href = data['link'] + '?key=' + index;
        location.href = './src/pages/project.html?jsonObj=' + encodeURIComponent(JSON.stringify(data));
    }

    var img = document.createElement('img');
    img.classList.add('folder');
    img.id = 'folder' + index;
    img.src = './src/images/home/folder-closed.png';

    // replace spaces in titles w/ line breaks to prevent horizontal crowding
    data['title'] = data['title'].replace(/ /g, "<br>");
    var title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = data['title'];

    icon_container.appendChild(img);
    icon_container.appendChild(title);

    var tooltip = document.createElement('span');
    tooltip.classList.add('tooltiptext');
    tooltip.id = 'tooltip' + index;
    tooltip.innerHTML = data['tooltip'];

    container.appendChild(icon_container);
    container.appendChild(tooltip);


    document.getElementById("folder-container").appendChild(container);
    // document.body.appendChild(container);
    move(index, data['link']);
}