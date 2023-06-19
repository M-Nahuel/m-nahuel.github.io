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

document.getElementById('convert').addEventListener('click', function() {
    let input = document.getElementById('input').value;
    let mixed = textShuffler(input);
    let done = document.getElementById('done');

    document.getElementById('input').style.display = 'none';
    document.getElementById('convert').style.display = 'none';

    document.getElementById('description').textContent = "Words shuffled!";
    let outp = document.getElementById('output');
    outp.textContent = mixed;
    outp.style.display = 'block';
    done.style.display = 'block';
    console.log(mixed);
});

document.getElementById('done').addEventListener('click', function(){
    window.location.reload();
})
  