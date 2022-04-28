import { useContext } from 'react';
import { WordsContext } from '../../../context/word-context';

export default function KeyButton({ letter, big }) {
  const { correctLetters, guessedLetters, wrongLetters } = useContext(WordsContext);

  let colour = 'zinc-500';
  if (guessedLetters.includes(letter)) {
    if (correctLetters.includes(letter)) {
      colour = 'emerald-600';
    } else if (wrongLetters.includes(letter)) colour = 'zinc-700';
  }

  return (
    <div
      className={`h-14 lg:h-16 ${
        big ? 'w-16 lg:w-20' : 'w-11 lg:w-14'
      } uppercase bg-${colour} flex justify-center
      items-center text-zinc-100 rounded font-bold text-xs transition-all duration-500`}
      id={`key-${letter}`}
    >
      {letter === 'del' && (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" id="key-delete">
          <path
            fill="rgb(244 244 245)"
            d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
          ></path>
        </svg>
      )}
      {letter !== 'del' && letter}
    </div>
  );
}
