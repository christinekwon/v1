let container = document.getElementById('container');
let bub_size = 150;

let row_count = 10;
let col_count = 10;

let bub_count;
let popped = 0;
let start_time;

init_grid();
init_bubs();

function init_grid() {
    let height = innerHeight;
    let width = innerWidth;

    if (width < 600) {
        bub_size = 50;
        console.log(bub_size);
        container.style.height = '105vh';
    } else {
        container.style.height = '100vh';
    }


    console.log(height, width);
    row_count = ~~(height / bub_size);
    col_count = ~~(width / bub_size);
    console.log(row_count, col_count)

    container.style.gridTemplateColumns = 'repeat(' + col_count + ', 1fr)';
    container.style.gridTemplateRows = 'repeat(' + row_count + ', 1fr)';

    bub_count = row_count * col_count;
    console.log(bub_count);
}

function init_bubs() {
    for (let i = 0; i < row_count; i++) {
        for (let j = 0; j < col_count; j++) {
            let img = document.createElement('img');
            img.src = './img/pre.png';
            img.classList.add('block');
            // if odd, offset a bit
            if (i % 2) {
                img.classList.add('odd');
            } else {
                img.classList.add('even');
            }
            img.style.width = bub_size + 'px';
            img.style.height = bub_size + 'px';
            img.value = 0;

            // add case for double clicked element
            img.addEventListener('click', function() {
                if (popped == 0) {
                    start_time = new Date();
                }
                if (img.value == 0) {
                    img.src = './img/post.png';
                    img.style.transform = 'rotate(' + rand_rot() + 'deg)';
                    popped++;
                    console.log(popped);
                    img.value = 1;

                    if (popped == bub_count) {
                        show_ending();
                    }
                }

            });
            container.appendChild(img);
            // img_block.src = content;
        }
    }
}

function rand_rot() {
    return Math.floor(Math.random() * 360);
}

function show_ending() {
    const end_time = new Date();
    let diff = (end_time - start_time) / 1000;
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    minutes.innerHTML = Math.floor(diff / 60);
    seconds.innerHTML = Math.floor(diff % 60);
    const ending = document.getElementById('ending');
    ending.style.visibility = 'visible';
}