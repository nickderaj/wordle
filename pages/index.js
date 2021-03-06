import Head from 'next/head';
import GameCard from '../components/GameCard';
import Navbar from '../components/Nav/Navbar';
import VictoryModal from '../components/VictoryModal';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wordle</title>
        <meta name="description" content="List Of Wordle Variations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-zinc-900 min-h-screen w-screen">
        <Navbar title="Wordle" />
        <div className="w-screen h-screen flex flex-col pt-6 gap-3">
          <GameCard href="/games/wordle" name="classic" />
          <GameCard href="/games/eldrow" name="reversed" />
        </div>
      </main>

      {/* Pre-loading colours to fix tailwind bug */}
      <div className="hidden bg-emerald-600 bg-zinc-700 bg-zinc-500 bg-yellow-600 border-emerald-600 border-yellow-600">
        Test
      </div>

      {/* <footer></footer> */}
    </div>
  );
}
