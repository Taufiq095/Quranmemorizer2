import { last20SurahNumbers } from '../data/surahs';

type Props = {
  current?: number;
  onJump: (num: number) => void;
};

export function QuickJump({ current, onJump }: Props) {
  return (
    <nav className="quick-jump" aria-label="Quick navigation">
      {last20SurahNumbers.map(num => (
        <button
          key={num}
          className={`button jump-btn ${current === num ? 'active' : ''}`}
          onClick={() => onJump(num)}
          aria-current={current === num ? 'page' : undefined}
        >
          {num}
        </button>
      ))}
    </nav>
  );
}