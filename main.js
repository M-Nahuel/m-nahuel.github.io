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
};

//split the input into an array
function textShuffler(text) {
    let words = text.split(' ');
  
    let textShuffled = words.map(word => shuffle(word));
  
    return textShuffled.join(' ');
};

//pop-up
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("modalbtn").click();
});

//elements targeting section
let textarea = document.getElementById('input');
let input = document.getElementById('input');
let convert = document.getElementById('convert');
let reveal = document.getElementById('reveal');
let done = document.getElementById('done');
let outpDiv = document.getElementById('output-div');
let outp = document.getElementById('output');

//check for the input to enable convert button
textarea.addEventListener('input', () => {
    convert.disabled = textarea.value.trim() !== '' ? false : true;
});

//convert button logic
convert.addEventListener('click', () => {
    let mixed = textShuffler(input.value);

    input.style.display = 'none';
    document.getElementById('convert').style.display = 'none';

    reveal.style.display = 'block'

    document.getElementById('description').textContent = "Words shuffled!";

    outp.textContent = mixed;
    outpDiv.style.display = 'block';
    done.style.display = 'block';
    console.log(mixed);
});

//reveal button logic
reveal.addEventListener('click', () => {
    const revealArray = input.value.split(' ');
  
    outpDiv.innerHTML = '';
  
    revealArray.forEach((word) => {
        const wordB = document.createElement('button');
        const wordP = document.createElement('p');

        wordP.textContent = word;
        wordB.appendChild(wordP);
        outpDiv.appendChild(wordB);

        //logic to reveal the selected word
        
    });
  });
  


//done button logic
document.getElementById('done').addEventListener('click', () => {
    window.location.reload();
})
  