import Head from 'next/head';
import Keyboard from '../../components/Wordle/Keyboard';
import Navbar from '../../components/Nav/Navbar';
import GameBoard from '../../components/Wordle/GameBoard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wordle</title>
        <meta name="description" content="New York Times Wordle Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-zinc-900 min-h-screen w-screen">
        <Navbar title="Wordle" />
        <GameBoard />
        <Keyboard />
      </main>

      {/* Pre-loading colours to fix tailwind bug */}
      <div className="hidden bg-emerald-600 bg-zinc-700 bg-zinc-500 bg-yellow-600 border-emerald-600 border-yellow-600">
        Test
      </div>

      {/* <footer></footer> */}
    </div>
  );
}
