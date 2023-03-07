function type() {
    let message0 = "...";
    let message1 = "hi there ~";
    let message2 = "nice to meet you ! :)";
    let message3 = "my name is christine minjae kwon";
    let message4 = "and i am a 23 y/o digital creative";
    let message5 = "based in brooklyn";
    let message6 = "click on any of the folders to see my projects ~";
    var typed = new Typed('.mac-text', {
        strings: [message0, message1, message2, message3, message4, message5, message6],
        // 25 is good
        typeSpeed: 25,
        showCursor: false,
        cursorChar: '|',
        autoInsertCss: true,
    });
}