import { useEffect, useContext } from 'react';
import { WordsContext } from '../../context/word-context';
import Word from './Word';

export default function GameBoard({ reverse }) {
  const { resetGame } = useContext(WordsContext);

  useEffect(() => {
    resetGame(reverse);
  }, []);

  return (
    <div className="p-4">
      <Word row={1} />
      <Word row={2} />
      <Word row={3} />
      <Word row={4} />
      <Word row={5} />
      <Word row={6} />
    </div>
  );
}
