let acceptedWords = require('../data/acceptedWords.json');
let wordList = require('../data/wordList.json');

function markWord(currentGuess, currentWord) {
  const answer = [];
  const correctLetters = [];
  const wrongLetters = [];
  const guessedLetters = [];
  for (let i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === currentGuess[i]) {
      correctLetters.push(currentWord[i]);
    }
  }

  for (let i = 0; i < currentWord.length; i++) {
    const numLettersAnswer = currentWord.split('').filter((x) => x === currentGuess[i]).length;
    const numLettersGuess = [...guessedLetters, currentGuess[i]].filter((x) => x === currentGuess[i]).length;

    if (currentWord[i] === currentGuess[i]) {
      answer.push('correct');
    } else if (currentWord.includes(currentGuess[i])) {
      if (guessedLetters.includes(currentGuess[i]) && numLettersGuess > numLettersAnswer) {
        answer.push('wrong');
      } else answer.push('present');
    } else {
      answer.push('wrong');
      wrongLetters.push(currentGuess[i]);
    }

    guessedLetters.push(currentGuess[i]);
  }
  return { correctLetters, wrongLetters, answer };
}

export default function checkAnswer(
  currentGuess,
  setIsPlaying,
  activeRow,
  setActiveRow,
  currentWord,
  setGuessedLetters,
  setCorrectLetters,
  setCurrentAnswer,
  setHasWon,
  setWrongLetters,
  setPlayerScore,
  setVisible
) {
  if (!acceptedWords.includes(currentGuess.join('')) && !wordList.includes(currentGuess.join(''))) {
    console.log('not a word');
    return;
  }
  // Check if on the last guess
  if (activeRow === 6) {
    setIsPlaying(false);
  }

  // Update keyboard & guessed letters
  const { answer, wrongLetters, correctLetters } = markWord(currentGuess, currentWord);

  setCorrectLetters((prevState) => {
    const letters = [...prevState, ...correctLetters];
    return [...new Set(letters)];
  });
  setGuessedLetters((prevState) => {
    const letters = [...prevState, ...currentGuess];
    return [...new Set(letters)];
  });
  setWrongLetters((prevState) => {
    const letters = [...prevState, ...wrongLetters];
    return [...new Set(letters)];
  });
  setCurrentAnswer(answer);

  // Check if win
  if (currentWord === currentGuess.join('')) {
    setHasWon(true);
    setPlayerScore((prevState) => [...prevState, activeRow]);
    setVisible(true);
    return setIsPlaying(false);
  }

  // Move to next row
  setActiveRow((prevState) => prevState + 1);
}
