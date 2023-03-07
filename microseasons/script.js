// EVERYTHING ZERO INDEXED !!!

const six = [
    140,
    156,
    177,
    203,
    209,
    250
];

let sekki_arr = "";
let ko_arr = "";
const current_ko = getKo();
const current_sekki = Math.floor(current_ko / 3);
// console.log(current_ko);
// console.log(current_sekki);


fetch('sekki.txt')
    .then(response => response.text())
    .then(text => {
        var lines = text.split('\n');
        for (let line = 0; line < lines.length; line++) {
            sekki_arr = [...sekki_arr, ...(lines[line].split(" "))]
            createSekkiItem(line, lines[line])
        }
        console.log(sekki_arr);

    })

fetch('ko.txt')
    .then(response => response.text())
    .then(text => {
        var lines = text.split('\n');
        for (let line = 0; line < lines.length; line++) {
            if (line == current_ko) {
                document.title = lines[line];
            }
            ko_arr = [...ko_arr, ...(lines[line].split(" "))]
            createKoItem(line, lines[line])
        }
        // console.log(ko_arr);

    })

// index + 1 corresponds to how many 6-day seasons there have been


var sekki_ul = document.getElementById("sekki");
var ko_ul = document.getElementById("ko");
var sekki_marker_ul = document.getElementById("sekki-marker");
var ko_marker_ul = document.getElementById("ko-marker");

let translation = -100;
let rotateX = 90;

const window_width = document.documentElement.clientWidth;
if (window_width <= 600) {
    translation = 0;
}

function createSekkiItem(index, name) {
    let li = document.createElement('li');
    let label = document.createElement('label');
    label.textContent = name;
    label.classList.add('label');
    label.id = "sekki" + index;
    if (index == current_sekki) {
        label.style.color = "red";
    }
    let angle;
    if (window_width <= 600) {
        angle = -1 * 360 / 24 * (index);
    } else {
        angle = 360 / 24 * (index);
    }
    // let angle = 360 / 24 * (index);
    li.style.transform = "rotate(" + angle + "deg) translate(" + translation + "%, " + translation + "%) translateY(-260px) rotateX(" + rotateX + "deg)";
    li.appendChild(label);
    sekki_ul.appendChild(li);

}

function createKoItem(index, name) {

    let li = document.createElement('li');
    let label = document.createElement('label');

    // label.textContent = "* \n*\n" + name;
    label.textContent = name;
    label.classList.add('label');
    label.id = "ko" + index;
    if (index == current_ko) {
        label.style.color = "red";
    }
    let angle;
    if (window_width <= 600) {
        angle = -1 * 360 / 72 * (index);
    } else {
        angle = 360 / 72 * (index);
    }
    // let angle = 360 / 72 * (index);
    li.style.transform = "rotate(" + angle + "deg) translate(" + translation + "%, " + translation + "%) translateY(-260px) rotateX(" + rotateX + "deg)";
    li.appendChild(label);
    ko.appendChild(li);

}



function getDate(now) {

    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;

    // 6 days
    // may 15 - may 20
    // may 31 - june 5
    // june 21 - june 26
    // july 17 - july 22
    // july 23 - july 28
    // september 2 - september 7

    // 4 days
    // january 1 - january 4

    // leap year
}



// 0 index
function getKo() {
    // 5 - 9
    const today = getDate(new Date());
    // const today = getDate(new Date('February 4, 2022 12:00:00'));
    let ko;

    let quotient = Math.floor(today / 5);
    let remainder = ko % 5;
    let count = 0;
    for (let i in six) {
        if (today > six[i]) {
            count++;
        }
    }
    remainder += count;
    if (remainder > 5) {
        quotient += 1;
        if (remainder > 10) {
            quotient += 1;
        }
    }
    // make index from 1
    ko = quotient + 1;


    // calendar starts in feb
    // first 7 go to end
    if (ko <= 7) {
        ko = 72 - (7 - ko);
    } else {
        ko -= 7;
    }

    // console.log(ko);
    return ko - 1;

}

// 6 day
// 135
// 140

//  151
//  156

//  172
//  177

//  198
//  203

//  204
//  209

//  245
//  250

// 4 day
//  1
//  4


function getDateList() {
    const dates = [
        'May 15',
        'May 20',
        'May 31',
        'June 5',
        'June 21',
        'June 26',
        'July 17',
        'July 22',
        'July 23',
        'July 28',
        'September 2',
        'September 7',
        'January 1',
        'January 4',
    ]
    let current;
    for (let date in dates) {
        current = new Date(dates[date] + ', 2022 12:00:00');
        // console.log(getDate(current));
    }
}


// const date1 = new Date('May 15, 2022 12:00:00');
// console.log(getDate(date1));