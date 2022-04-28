import KeyButton from './KeyButton';
import KeyRow from './KeyRow';

export default function Keyboard() {
  return (
    <div id="keyboard">
      <KeyRow>
        <KeyButton letter="q" />
        <KeyButton letter="w" />
        <KeyButton letter="e" />
        <KeyButton letter="r" />
        <KeyButton letter="t" />
        <KeyButton letter="y" />
        <KeyButton letter="u" />
        <KeyButton letter="i" />
        <KeyButton letter="o" />
        <KeyButton letter="p" />
      </KeyRow>
      <KeyRow>
        <KeyButton letter="a" />
        <KeyButton letter="s" />
        <KeyButton letter="d" />
        <KeyButton letter="f" />
        <KeyButton letter="g" />
        <KeyButton letter="h" />
        <KeyButton letter="j" />
        <KeyButton letter="k" />
        <KeyButton letter="l" />
      </KeyRow>
      <KeyRow>
        <KeyButton letter="enter" big={true} />
        <KeyButton letter="z" />
        <KeyButton letter="x" />
        <KeyButton letter="c" />
        <KeyButton letter="v" />
        <KeyButton letter="b" />
        <KeyButton letter="n" />
        <KeyButton letter="m" />
        <KeyButton letter="del" big={true} />
      </KeyRow>
    </div>
  );
}
