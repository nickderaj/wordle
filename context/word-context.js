import { createContext, useState } from 'react';
let wordList = require('../data/wordList.json');

export const WordsContext = createContext();

export default function WordsContextProvider({ children }) {
  // Check active word row
  const [activeRow, setActiveRow] = useState(1);

  // To check whether the user can input
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasWon, setHasWon] = useState(false);

  // The correct answer
  const [currentWord, setCurrentWord] = useState('');

  // To apply styling on letters
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  // Modal
  const [visible, setVisible] = useState(false);

  // Score
  const [playerScore, setPlayerScore] = useState([1, 3, 3, 4, 2]);

  // Reset Game State
  const resetGame = (reverse) => {
    setActiveRow(1);
    setIsPlaying(true);
    setHasWon(false);
    setGuessedLetters([]);
    setWrongLetters([]);
    setCorrectLetters([]);

    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    if (reverse) randomWord = randomWord.split('').reverse().join('');
    setCurrentWord(randomWord);
  };

  return (
    <WordsContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        hasWon,
        setHasWon,
        currentWord,
        setCurrentWord,
        activeRow,
        setActiveRow,
        guessedLetters,
        setGuessedLetters,
        correctLetters,
        setCorrectLetters,
        wrongLetters,
        setWrongLetters,
        visible,
        setVisible,
        resetGame,
        playerScore,
        setPlayerScore,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
}
