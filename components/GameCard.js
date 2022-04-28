import Link from 'next/link';

export default function GameCard({ href, name }) {
  return (
    <Link href={href} passHref>
      <div
        className="w-80 bg-zinc-500 text-white font-bold text-xl hover-bounce cursor-pointer
        rounded h-12 mx-auto uppercase flex justify-center items-center"
      >
        {name}
      </div>
    </Link>
  );
}
