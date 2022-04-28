import Head from 'next/head';
import GameBoard from '../../components/Wordle/GameBoard';
import Keyboard from '../../components/Wordle/Keyboard';
import Navbar from '../../components/Nav/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>eldroW</title>
        <meta name="description" content="Reversed Wordle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-zinc-900 min-h-screen w-screen">
        <Navbar title="eldroW" />
        <GameBoard reverse={true} />
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
