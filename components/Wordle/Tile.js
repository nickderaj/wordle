import { useContext } from 'react';
import { WordsContext } from '../../context/word-context';

export default function Tile({ index, letter, answer }) {
  const { hasWon } = useContext(WordsContext);
  let bgColour = '';
  let delay = '';

  switch (answer) {
    case 'correct':
      bgColour = 'emerald-600';
      break;
    case 'present':
      bgColour = 'yellow-600';
      break;
    case 'wrong':
      bgColour = 'zinc-700';
      break;
    default:
      bgColour = 'zinc-800';
  }

  switch (index) {
    case 1:
      delay = '';
      break;
    case 2:
      delay = 'delay-100';
      break;
    case 3:
      delay = 'delay-200';
      break;
    case 4:
      delay = 'delay-300';
      break;
    case 5:
      delay = 'delay-[400ms]';
      break;
    default:
      delay = '';
  }

  const classNames = `transition-all ${delay} duration-500 text-zinc-100 text-lg lg:text-4xl bg-${bgColour}  
    uppercase font-bolder w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center border-2 
    ${bgColour === 'zinc-800' ? 'border-zinc-700' : `border-${bgColour}`} ${hasWon ? 'animate-pulse' : ''} 
    ${letter ? 'bounce' : ''}`;

  return <span className={classNames}>{letter}</span>;
}
