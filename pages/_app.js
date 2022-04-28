import WordsContextProvider from '../context/word-context';
import '../styles/globals.css';

export default function Application({ Component, pageProps }) {
  return (
    <WordsContextProvider>
      <Component {...pageProps} />
    </WordsContextProvider>
  );
}
