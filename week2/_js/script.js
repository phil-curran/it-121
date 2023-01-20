const form = document.getElementById("form");
const input = document.getElementById("input");
const result = document.getElementById("result");

const isVowel = (param) => {
  const vowels = /[aeiouAEIOU]/;
  return param.match(vowels) == null ? false : true;
};

const isConsonant = (param) => {
  const consonants = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
  return param.match(consonants) === null ? false : true;
};

const isPunctuation = (param) => {
  const punctuation = /[.,!?;:()\s]/g;
  return param.match(punctuation) === null ? false : true;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let tempResult = [];
  let textValue = input.value.split(" ");

  textValue.forEach((word) => {
    let wordLength = word.length;
    let firstLetter = word[0];
    let secondLetter = word[1];

    if (isVowel(firstLetter)) {
      tempResult.push(word + "way");
    } else if (isConsonant(firstLetter) && isConsonant(secondLetter)) {
      tempResult.push(word.slice(2) + firstLetter + secondLetter + "ay");
    } else if (isConsonant(firstLetter)) {
      tempResult.push(word.slice(1) + firstLetter + "ay");
    } else if (isPunctuation(firstLetter)) {
      tempResult.push(word);
    }
  });

  result.innerHTML = tempResult.join(" ");
  document.getElementById("input").value = "";
});
