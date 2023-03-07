var data = {};

var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
const button_height = document.querySelector("button").offsetHeight * 3;

var files = ["../src/data/3D.json", "../src/data/2D.json", "../src/data/CS.json", "../src/data/GD.json"]
const num_files = files.length;

const fold_time = 0.5;

read_files();

function read_files() {
    const promises = [];
    for (let i = 0; i < num_files; i++) {
        promises.push(fetch(files[i]).then(value => value.json()))
    }

    // read json file
    Promise.all(promises)
        .then((json_data) => {
            for (let set of json_data) {
                data = {...data, ...set };
            }
            for (let key in data) {
                mod_inner_panel(key, data[key]);
            }
            for (let i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", accordion);
            }
            let time;
            const button_height = document.querySelector("button").offsetHeight;
            for (let p of panels) {
                // geq 1 but leq 10
                time = Math.max(1, Math.min(5, Math.floor(p.scrollHeight / button_height)));
                p.style.transition = "max-height " + time + "s ease";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function accordion(e) {
    e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;
    fold_inactive_panels(e.target, panel)
    if (panel) {
        // close open panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            for (let child of panel.children) {
                const classList = child.classList;
                // deactivate any accordion buttons
                if (classList.contains('accordion')) {
                    classList.remove("active");
                }
                // collapse any open child panels
                if (classList.contains('panel')) {
                    child.style.maxHeight = null;
                }
            }
            panel.style.transition = "max-height " + fold_time + "s ease";
        }
        // open a panel
        else {
            let time;
            time = Math.max(1, Math.min(5, Math.floor(panel.scrollHeight / button_height)));
            panel.style.transition = "max-height " + time + "s ease";

            // open inner panel
            if (panel.classList.contains("inner-panel")) {
                e.target.parentElement.style.maxHeight = e.target.parentElement.scrollHeight + panel.scrollHeight + "px";
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
            // open outer panel 
            else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    }
}

// once an accordion is selected, fold all other accordions
function fold_inactive_panels(active_accordion, active_panel) {

    // if inner accordion is selected, fold all other inner panels in the same accordion
    if (active_panel.classList.contains('inner-panel')) {
        fold_inactive_inner_accs(active_accordion.parentElement, active_accordion);
    }

    // if outer accordion is selected, fold all other outer accordions
    if (active_panel.classList.contains('outer-panel')) {
        const outer_accordions = document.getElementsByClassName('outer-accordion');
        for (let elem of outer_accordions) {
            if (elem.isEqualNode(active_accordion)) {
                continue;
            }

            // fold inactive outer accordions
            elem.classList.remove("active");
            elem.nextElementSibling.style.transition = "max-height " + fold_time + "s ease";
            elem.nextElementSibling.style.maxHeight = null;

            // fold all inner accordions in inactive outer accordions
            fold_inactive_inner_accs(elem.nextElementSibling);
        }
    }

}

// given the currently focused panel and activated inner accordion, deactivate all other inner accs
function fold_inactive_inner_accs(active_outer_panel, active_inner_acc) {
    // const active_outer_panel = active_inner_acc.parentElement;
    const children = active_outer_panel.children;

    let child;
    let i;
    for (i = 0; i < children.length; i++) {
        child = children[i];

        // sometimes this method is called w.o active_inner_acc arg just to close all inner panels
        if (active_inner_acc) {
            if (child.isEqualNode(active_inner_acc)) {
                i++; // skip next panel associated with this acc
                continue;
            }
        }

        const classList = child.classList;

        // deactivate any accordion buttons
        if (classList.contains('accordion')) {
            classList.remove("active");
        }
        // collapse any open child panels
        if (classList.contains('panel')) {
            child.style.maxHeight = null;
        }
        // make it collapse quickly
        child.style.transition = "max-height " + fold_time + "s ease";

    }
    // active_outer_panel.style.transition = "max-height " + 0.5 + "s ease";
}

// type: 2D 3D GD CS

function mod_inner_panel(key, project) {

    // find outer wrapping elements
    const type = project["type"];
    const outer_accordion = document.getElementById(type);
    const outer_panel = outer_accordion.nextElementSibling;

    // init related accordion button
    const inner_accordion = document.createElement('button');
    inner_accordion.classList.add('accordion', 'inner-accordion');
    inner_accordion.innerHTML = project["title"];

    // attach new inner accordion to outer panel
    outer_panel.appendChild(inner_accordion);

    // init related inner panel
    const inner_panel = document.createElement('div');
    inner_panel.id = key;
    inner_panel.classList.add('panel', 'inner-panel');

    // if media is present, split inner panel into two
    const media = project["media"];
    let inner_left_panel;
    let inner_right_panel;
    if (media) {

        inner_right_panel = document.createElement('div');
        inner_left_panel = document.createElement('div');

        for (let item of media) {
            let type = item['type'];
            let url = item['url'];
            if (type == "image") {
                inner_right_panel.appendChild(get_img_block(url));
            }
            if (type == "video") {

                inner_right_panel.appendChild(get_video_block(url));
            }
        }

        inner_left_panel.classList.add('inner-left-panel', 'half-panel');
        inner_right_panel.classList.add('inner-right-panel', 'half-panel')

        inner_panel.appendChild(inner_left_panel);
        inner_panel.appendChild(inner_right_panel);

    }

    for (let d of project["description"]) {
        let block;
        if (d['type'] == 'img') {
            block = get_img_block(d['content']);
        }
        if (d['type'] == 'video') {
            block = get_video_block(d['content']);
        }
        if (d['type'] == 'youtube') {
            block = get_youtube_block(d['content']);
        }
        if (d['type'] == 'link') {
            block = get_link_block(d['content']);
        } else if (d['type'] == 'text') {
            block = get_text_block(d['content']);
        }
        if (media) {
            inner_left_panel.appendChild(block);
        } else {
            inner_panel.appendChild(block);
        }
    }

    let tools = project["tools"];
    if (tools) {
        let tools_block = get_text_block("tools used: " + tools);
        if (media) {
            inner_left_panel.appendChild(tools_block);
        } else {
            inner_panel.appendChild(tools_block);
        }
    }
    outer_panel.appendChild(inner_panel);
}


function get_img_block(content) {
    const img_block = document.createElement('img');
    img_block.classList.add('image-block');
    img_block.classList.add('block');
    img_block.src = content;
    return img_block
}

function get_youtube_block(content) {
    const video_block = document.createElement('iframe');
    video_block.classList.add('video_block');
    video_block.classList.add('block');
    video_block.src = content;
    video_block.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video_block.frameBorder = "0";
    video_block.title = "YouTube video player";
    return video_block;
}

function get_video_block(content) {
    const video_block = document.createElement('video');
    let source = document.createElement('source');
    source.src = content;
    source.type = "video/mp4";
    // video_block.controls = true;
    video_block.autoplay = true;
    video_block.muted = true;
    video_block.classList.add('video-block');
    video_block.classList.add('block');
    video_block.src = content;
    // video_block.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video_block.appendChild(source);
    return video_block;
}

function get_link_block(content) {
    const link_block = document.createElement('a');
    link_block.classList.add('link_block');
    link_block.classList.add('block');
    link_block.href = content;
    link_block.target = "_blank";
    link_block.innerHTML = "link";
    return link_block;
}

function get_text_block(content) {
    const text_block = document.createElement('p');
    text_block.classList.add('text-block');
    text_block.classList.add('block');
    text_block.innerHTML = content;
    return text_block;
}