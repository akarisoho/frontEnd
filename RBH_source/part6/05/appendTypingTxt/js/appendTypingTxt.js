let typingTxt = $('.typing-txt').text();
console.log(`자르기 전 typingTxt ${typingTxt}`);

typingTxt = typingTxt.split("");
console.log(`자른 후 typingTxt ${typingTxt}`);
console.log(typingTxt);

setInterval(function () { typing() }, 200);

let typingIdx = 0;

// 타이핑 함수정의
function typing() {
    if (typingIdx < typingTxt.length) { 
        $('.typing').append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        setTimeout(function () {
            typingIdx = 0; 
            $('.typing').text("");
        }, 200);
    }
}