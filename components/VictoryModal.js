import { useContext, useEffect } from 'react';
import { WordsContext } from '../context/word-context';

export default function VictoryModal({ visible, setVisible }) {
  const { playerScore } = useContext(WordsContext);

  const calculateScore = (row) => {
    return playerScore.filter((x) => x == row).length;
  };

  const calculateWidth = (row) => {
    const answers = playerScore.filter((x) => x == row).length;
    const total = playerScore.length;
    return Math.ceil(6 + (96 * answers) / total);
  };

  return (
    <>
      {visible && (
        <div className="h-full w-full fixed flex justify-center align-center z-40">
          <div
            onClick={() => setVisible(false)}
            className="h-full w-full fixed top-0 left-0 right-0 flex items-center
          justify-center backdrop-blur-sm backdrop-brightness-50"
          ></div>
          <div
            className="m-auto bg-zinc-900 drop-shadow-xl rounded flex flex-col items-center transition-all duration-300 slide
            justify-center py-12 px-4 relative border-[1px] border-zinc-800 w-[32rem] scale-75 md:transform-none lg:scale-125 delay-200"
          >
            <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setVisible(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path
                  fill="#e4e4e7"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                ></path>
              </svg>
            </div>
            <h2 className="uppercase text-md text-zinc-100 font-bold p-2">Statistics</h2>
            <div className="flex flex-row gap-2 text-zinc-100">
              <div className="flex items-center flex-col w-14">
                <p className="text-4xl">1</p>
                <p className="text-xs text-center leading-4">Played</p>
              </div>
              <div className="flex  items-center flex-col w-14">
                <p className="text-4xl">100</p>
                <p className="text-xs text-center leading-4">Win %</p>
              </div>
              <div className="flex  items-center flex-col w-14">
                <p className="text-4xl">1</p>
                <p className="text-xs text-center leading-4">Current Streak</p>
              </div>
              <div className="flex  items-center flex-col w-14">
                <p className="text-4xl">1</p>
                <p className="text-xs text-center leading-4">Max Streak</p>
              </div>
            </div>
            <h2 className="uppercase text-md text-zinc-100 font-bold p-2">Guess Distribution</h2>
            <div className="flex flex-col gap-1 text-zinc-200 w-96 text-sm">
              <div className="flex flex-row gap-2">
                <span className="w-2">1</span>
                <span
                  className={`width-${calculateWidth(1)} pr-2 text-right ${
                    calculateScore(1) ? 'bg-emerald-600' : 'bg-zinc-600'
                  }`}
                >
                  {calculateScore(1)}
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <span className="w-2">2</span>
                <span
                  className={`width-${calculateWidth(2)} pr-2 text-right ${
                    calculateScore(2) ? 'bg-emerald-600' : 'bg-zinc-600'
                  }`}
                >
                  {calculateScore(2)}
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <span className="w-2">3</span>
                <span
                  className={`width-${calculateWidth(3)} pr-2 text-right ${
                    calculateScore(3) ? 'bg-emerald-600' : 'bg-zinc-600'
                  }`}
                >
                  {calculateScore(3)}
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <span className="w-2">4</span>
                <span
                  className={`width-${calculateWidth(4)} pr-2 text-right ${
                    calculateScore(4) ? 'bg-emerald-600' : 'bg-zinc-600'
                  }`}
                >
                  {calculateScore(4)}
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <span className="w-2">5</span>
                <span
                  className={`width-${calculateWidth(5)} pr-2 text-right ${
                    calculateScore(5) ? 'bg-emerald-600' : 'bg-zinc-600'
                  }`}
                >
                  {calculateScore(5)}
                </span>
              </div>
              <div className="flex flex-row gap-2">
                <span className="w-2">6</span>
                <span
                  className={`width-${calculateWidth(6)} pr-2 text-right ${
                    calculateScore(6) ? 'bg-emerald-600' : 'bg-zinc-600'
                  }`}
                >
                  {calculateScore(6)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
