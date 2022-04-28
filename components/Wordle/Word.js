import { useState, useEffect, useContext } from 'react';
import { WordsContext } from '../../context/word-context';
import checkAnswer from '../../helper/checkAnswer';
import Tile from './Tile';

export default function Word({ row }) {
  const [wordPosition, setWordPosition] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(['', '', '', '', '']);
  const [currentAnswer, setCurrentAnswer] = useState(['', '', '', '', '']);

  const {
    isPlaying,
    setIsPlaying,
    activeRow,
    setActiveRow,
    currentWord,
    setGuessedLetters,
    setCorrectLetters,
    setHasWon,
    setWrongLetters,
    setPlayerScore,
    setVisible,
  } = useContext(WordsContext);

  console.log(currentWord);

  const handleClick = (e) => {
    const elementId = e.srcElement.id;
    const parentId = e.srcElement.parentElement.id;
    // Check if clicking the letter not the spaces
    if (!elementId.startsWith('key-') && !parentId.startsWith('key-')) return;
    if (row !== activeRow || !isPlaying) return;

    const letter = elementId.split('key-')[1];
    const deleteKey = parentId.split('key-')[1];

    // Backspace
    if (deleteKey === 'delete' || letter === 'del' || letter === 'delete') {
      if (wordPosition < 1) return;

      const newGuesses = Array.from(currentGuess);
      newGuesses[wordPosition - 1] = '';
      setCurrentGuess(newGuesses);
      setWordPosition((prevState) => prevState - 1);
    }

    // Type a letter
    if (letter !== 'del' && letter !== 'delete' && letter !== 'enter') {
      if (wordPosition > 4) return;

      const newGuesses = Array.from(currentGuess);
      newGuesses[wordPosition] = letter;
      setCurrentGuess(newGuesses);
      setWordPosition((prevState) => prevState + 1);
    }

    // Check Answer
    if (letter === 'enter') {
      if (wordPosition <= 4) return;
      checkAnswer(
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
      );
    }
  };

  const handleKeyUp = (e) => {
    if (row !== activeRow || !isPlaying) return;

    // Backspace
    if (e.keyCode === 8) {
      if (wordPosition < 1) return;

      const newGuesses = Array.from(currentGuess);
      newGuesses[wordPosition - 1] = '';
      setCurrentGuess(newGuesses);
      setWordPosition((prevState) => prevState - 1);
    }

    // Type a letter
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      if (wordPosition > 4) return;

      const newGuesses = Array.from(currentGuess);
      newGuesses[wordPosition] = e.key;
      setCurrentGuess(newGuesses);
      setWordPosition((prevState) => prevState + 1);
    }

    // Check Answer
    if (e.keyCode === 13 && wordPosition === 5) {
      if (wordPosition <= 4) return;

      checkAnswer(
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
      );
    }
  };

  useEffect(() => {
    const keyboard = document.querySelector('#keyboard');
    document.addEventListener('keyup', handleKeyUp);
    keyboard.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
      keyboard.removeEventListener('click', handleClick);
    };
  });

  return (
    <div className="flex flex-row gap-1 pb-1 justify-center">
      <Tile index={1} letter={currentGuess[0]} answer={currentAnswer[0]} />
      <Tile index={2} letter={currentGuess[1]} answer={currentAnswer[1]} />
      <Tile index={3} letter={currentGuess[2]} answer={currentAnswer[2]} />
      <Tile index={4} letter={currentGuess[3]} answer={currentAnswer[3]} />
      <Tile index={5} letter={currentGuess[4]} answer={currentAnswer[4]} />
    </div>
  );
}
