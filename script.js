const words = ["javascript", "html", "css", "programming", "developer"];
let currentWord = "";
let jumbledWord = "";

function jumble(word) {
    return word.split('').sort(() => 0.5 - Math.random()).join('');
}

function newWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    jumbledWord = jumble(currentWord);
    document.getElementById('jumbleWord').innerText = jumbledWord;
    document.getElementById('userInput').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('hint').innerText = `Hint: The word has ${currentWord.length} letters and starts with "${currentWord.charAt(0)}".`;
    document.getElementById('nextBtn').style.display = 'none';
}

document.getElementById('checkBtn').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;
    if (userInput.toLowerCase() === currentWord) {
        document.getElementById('result').innerText = 'Correct!';
        document.getElementById('nextBtn').style.display = 'inline-block';
    } else {
        document.getElementById('result').innerText = 'Try Again!';
    }
});

document.getElementById('nextBtn').addEventListener('click', newWord);

newWord();