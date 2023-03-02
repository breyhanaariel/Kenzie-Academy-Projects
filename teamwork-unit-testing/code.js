// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.

/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 
*/
function encodeVowelWord(word) {
  let vowelRegex = '^[aieouAIEOU].*';
  let myVowels = word.match(vowelRegex);
  if (myVowels != null) {
    word = word.concat('-yay');
  }
  return word;
}

// Write your unit tests here
let vowelUnitTest1 = encodeVowelWord('eat');
console.assert(vowelUnitTest1 === 'eat-yay', {
  test: 'encodeVowelWord("eat");',
  expected: 'eat-yay',
  result: vowelUnitTest1
});
let vowelUnitTest2 = encodeVowelWord('omelet');
console.assert(vowelUnitTest2 === 'omelet-yay', {
  test: 'encodeVowelWord("omelet");',
  expected: 'omelet-yay',
  result: vowelUnitTest2
});

/*  --------------------------------------------------------
    encodeConsonantWord()

    Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
    
    For example:
        "latin" becomes "atin-lay"
        "cheers" becomes "eers-chay"
*/
function encodeConsonantWord(word) {
  let vowelRegex =  /^([^aeiouAEIOU])+/g;
  let consonantRegex = '^[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ].*';
  let myConsonants = word.match(consonantRegex);
  if (myConsonants != null) {
      word = word.slice(word.match(vowelRegex)[0].length) + '-' + word.slice(0,word.match(vowelRegex)[0].length) + 'ay';
  }
  return word;
}

// Write your unit tests here
let consonantUnitTest1 = encodeConsonantWord('latin');
console.assert(consonantUnitTest1 === 'atin-lay', {
  test: 'encodeConsonantWord("latin");',
  expected: 'atin-lay',
  result: consonantUnitTest1
});
let consonantUnitTest2 = encodeConsonantWord('cheers');
console.assert(consonantUnitTest2 === 'eers-chay', {
  test: 'encodeConsonantWord("cheers");',
  expected: 'eers-chay',
  result: consonantUnitTest2
});

/*  --------------------------------------------------------
    encodeWord()

    Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

    For example:
        "eat" becomes "eat-yay" because it starts with a vowel "e"
        "omelet" becomes "omelet-yay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/
function encodeWord(word) {
  let vowelRegex = '^[aieouAIEOU].*';
  if (word.match(vowelRegex)) {
   word = encodeVowelWord(word);
  } else {
    word = encodeConsonantWord(word);
  }
  return word;
}

// Write your unit tests here
let encodeWordUnitTest1 = encodeWord('smile');
console.assert(encodeWordUnitTest1 === 'ile-smay', {
  test: 'encodeWord("smile");',
  expected: 'ile-smay',
  result: encodeWordUnitTest1
});
let encodeWordUnitTest2 = encodeWord('you');
console.assert(encodeWordUnitTest2 === 'ou-yay', {
  test: 'encodeWord("you");',
  expected: 'ou-yay',
  result: encodeWordUnitTest2
});

/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/
var english = document.getElementById('english');
var translate = document.getElementById('translate');
var piglatin = document.getElementById('piglatin');

function encodeText(text) {
  if (text == "") {
    alert('Please enter a word, sentence, or full text to translate into pig latin');
  } else {
    let textArray = text.split(' ');
    let textResult = [];
    for (let pigText of textArray) {
      let vowelRegex = '^[aieouAIEOU].*';
      let consonantRegex = '^[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ].*';
      if (pigText.match(vowelRegex)) {
        let pigLatinVowel = encodeVowelWord(pigText);
        textResult.push(pigLatinVowel);
      } else if (pigText.match(consonantRegex)) {
        let pigLatinConsonant = encodeConsonantWord(pigText);
        textResult.push(pigLatinConsonant);
      } else {
        textResult.push(pigText);
      }
    }
    return textResult.join(' ');
  }
}



// Write your unit tests here
let encodeTextUnitTest1 = encodeText('This was so hard');
console.assert(encodeTextUnitTest1 === 'Is-thay as-way o-say ard-hay', {
  test: 'encodeText("This was so hard");',
  expected: 'Is-thay as-way o-say ard-hay',
  result: encodeTextUnitTest1
});
let encodeTextUnitTest2 = encodeText('I like cupcakes so much');
console.assert(encodeTextUnitTest2 === 'I-yay ike-lay upcakes-cay o-say uch-may', {
  test: 'encodeText("I like cupcakes so much");',
  expected: 'I-yay ike-lay upcakes-cay o-say uch-may',
  result: encodeTextUnitTest2
});
