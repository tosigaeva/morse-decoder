const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let decodedString = '';
  for (let i = 0; i < expr.length; i = i + 10) {
    const encodedLetter = expr.slice(i, i + 10);

    decodedString += decodeLetter(encodedLetter);
  }
  return decodedString;
}

module.exports = {
  decode,
};

function decodeLetter(encodedLetter) {
  if (encodedLetter === '**********') {
    return ' ';
  }

  let morseCode = encodedLetter
    .replace(/00/g, '')
    .replace(/10/g, '.')
    .replace(/11/g, '-');

  return MORSE_TABLE[morseCode];
}
