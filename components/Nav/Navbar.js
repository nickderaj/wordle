import Link from 'next/link';
import { useContext } from 'react';
import { WordsContext } from '../../context/word-context';
import VictoryModal from '../VictoryModal';

export default function Navbar({ title }) {
  const { visible, setVisible } = useContext(WordsContext);
  return (
    <>
      <div
        className="h-14 flex justify-between px-8 items-center 
      border-b-2 border-zinc-700 text-zinc-100 text-4xl font-phs "
      >
        <Link href="/" passHref>
          <svg className="w-8 h-8 cursor-pointer" viewBox="0 0 20 20">
            <path
              fill="#e4e4e7"
              d="M15.971,7.708l-4.763-4.712c-0.644-0.644-1.769-0.642-2.41-0.002L3.99,7.755C3.98,7.764,3.972,7.773,3.962,7.783C3.511,8.179,3.253,8.74,3.253,9.338v6.07c0,1.146,0.932,2.078,2.078,2.078h9.338c1.146,0,2.078-0.932,2.078-2.078v-6.07c0-0.529-0.205-1.037-0.57-1.421C16.129,7.83,16.058,7.758,15.971,7.708z M15.68,15.408c0,0.559-0.453,1.012-1.011,1.012h-4.318c0.04-0.076,0.096-0.143,0.096-0.232v-3.311c0-0.295-0.239-0.533-0.533-0.533c-0.295,0-0.534,0.238-0.534,0.533v3.311c0,0.09,0.057,0.156,0.096,0.232H5.331c-0.557,0-1.01-0.453-1.01-1.012v-6.07c0-0.305,0.141-0.591,0.386-0.787c0.039-0.03,0.073-0.066,0.1-0.104L9.55,3.75c0.242-0.239,0.665-0.24,0.906,0.002l4.786,4.735c0.024,0.033,0.053,0.063,0.084,0.09c0.228,0.196,0.354,0.466,0.354,0.76V15.408z"
            ></path>
          </svg>
        </Link>
        <h1>{title}</h1>
        <div onClick={() => setVisible(true)}>
          <svg className="w-8 h-8 cursor-pointer" viewBox="0 0 24 24">
            <path
              fill="#e4e4e7"
              d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
            ></path>
          </svg>
        </div>
      </div>
      <VictoryModal visible={visible} setVisible={setVisible} />
    </>
  );
}
