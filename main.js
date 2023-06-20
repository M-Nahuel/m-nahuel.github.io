function shuffle(word) {
    let chars = word.split('');

    switch (chars.length) {
        case 2:
            [chars[0], chars[1]] = [chars[1], chars[0]];
            break;
        case 3:
            [chars[1], chars[2]] = [chars[2], chars[1]];
            break;
        case 4:
            [chars[1], chars[2]] = [chars[2], chars[1]];
            break;
        case chars.length % 2 === 0:
            for (let i=1; i<chars.length - 2; i+=2) {
                [chars[i], chars[i+1]] = [chars[i+1], chars[i]];
            };
            break;
        default:
            for (let i=chars.length - 2; i>1; i-=2) {
                [chars[i], chars[i-1]] = [chars[i-1], chars[i]];
            };
            break;            
    }

    let shuffled = chars.join('');
    return shuffled;
}
  
function textShuffler(text) {
    let words = text.split(' ');
  
    let textShuffled = words.map(word => shuffle(word));
  
    return textShuffled.join(' ');
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("modalbtn").click();
});

let textarea = document.getElementById('input');
let convert = document.getElementById('convert');
let reveal = document.getElementById('reveal');
let done = document.getElementById('done');
let outp = document.getElementById('output');

textarea.addEventListener('input', () => {
    convert.disabled = textarea.value.trim() !== '' ? false : true;
});

convert.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    let mixed = textShuffler(input);

    document.getElementById('input').style.display = 'none';
    document.getElementById('convert').style.display = 'none';

    reveal.style.display = 'block'

    document.getElementById('description').textContent = "Words shuffled!";

    outp.textContent = mixed;
    outp.style.display = 'block';
    done.style.display = 'block';
    console.log(mixed);
});

reveal.addEventListener('click', () => {
    
});

document.getElementById('done').addEventListener('click', () => {
    window.location.reload();
})
  