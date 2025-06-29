// 受け取るPropsを定義
interface TimerDisplayProps {
  minutes: number;
  seconds: number;
  mode: 'work' | 'break'; // オプションでモードを受け取る
}

export default function TimerDisplay({ minutes, seconds, mode }: TimerDisplayProps) {
    return(
        <div className={`text-6xl font-mono font-bold
          ${mode === 'work' ? 'text-red-500' : 'text-green-500'}
        `}>
          {String(minutes).padStart(2, '0')}: {String(seconds).padStart(2, '0')}
        </div>
    )
}