var url = new URL(window.location.href);
var json = url.searchParams.get("jsonObj");

// get json object
var data = JSON.parse(json);

data['title'] = data['title'].replace(/<br>/g, " ");
document.title = data['title'];

add_title();
add_description();
add_footer();



function add_title() {
    var title = document.getElementById('title');
    title.innerHTML = data['title'];
    // var link = document.getElementById('link');
    // link.href = data['link'];
}

function add_description() {
    var description = document.getElementById('description');
    for (let d of data['description']) {
        if (d['type'] == 'img') {
            add_img_block(description, d['content']);
        }
        if (d['type'] == 'video') {
            add_video_block(description, d['content']);
        }
        if (d['type'] == 'youtube') {
            add_youtube_block(description, d['content']);
        }
        if (d['type'] == 'link') {
            add_link_block(description, d['content']);
        } else if (d['type'] == 'text') {
            add_text_block(description, d['content']);
        }
    }
}

function add_img_block(parent, content) {
    let img_block = document.createElement('img');
    img_block.classList.add('img-block');
    img_block.classList.add('block');
    img_block.src = content;
    parent.appendChild(img_block);
}

function add_youtube_block(parent, content) {
    let video_block = document.createElement('iframe');
    video_block.classList.add('video_block');
    video_block.classList.add('block');
    video_block.src = content;
    video_block.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video_block.frameBorder = "0";
    video_block.title = "YouTube video player";
    parent.appendChild(video_block);
}

function add_video_block(parent, content) {
    let video_block = document.createElement('video');
    let source = document.createElement('source');
    source.src = content;
    source.type = "video/mp4";
    video_block.controls = true;
    video_block.classList.add('video_block');
    video_block.classList.add('block');
    video_block.src = content;
    video_block.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video_block.appendChild(source);
    parent.appendChild(video_block);
}

function add_link_block(parent, content) {
    let link_block = document.createElement('a');
    link_block.classList.add('link_block');
    link_block.classList.add('block');
    link_block.href = content;
    link_block.target = "_blank";
    link_block.innerHTML = "link";
    parent.appendChild(link_block);
}


function add_text_block(parent, content) {
    let text_block = document.createElement('div');
    text_block.classList.add('text-block');
    text_block.classList.add('block');
    text_block.innerHTML = content;
    parent.appendChild(text_block);
}

function add_footer() {
    var footer = document.getElementById('footer');
    footer.textContent = data['footer'];
}