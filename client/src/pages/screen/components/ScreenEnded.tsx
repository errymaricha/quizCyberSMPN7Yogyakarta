import { Trophy } from 'lucide-react';
import { useState } from 'react';
import { Confetti } from '@/components/game/Confetti';
import { FinalLeaderboard } from '@/components/game/LeaderboardList';
import { Podium } from '@/components/game/Podium';
import { QuizMakerPicker } from '@/components/game/QuizMakerPicker';
import { Card, CardContent } from '@/components/ui/card';
import type { FinalLeaderboardEntry } from '@/types';

interface Props {
  title: string;
  leaderboard: FinalLeaderboardEntry[];
  chooseQuizMaker: boolean;
}

export function ScreenEnded({ title, leaderboard, chooseQuizMaker }: Props) {
  const [celebrate, setCelebrate] = useState(false);

  if (leaderboard.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center bg-[#FFFDF5]">
        <div className="inline-block border-3 border-black bg-[#FFE600] px-4 py-2 shadow-[4px_4px_0px_#000] rounded-xl -rotate-1">
          <span className="text-base font-black uppercase tracking-tight text-black">
            Quis SMP Negeri 7 Yogyakarta
          </span>
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tight">Permainan Selesai</h1>
        <p className="text-lg font-mono font-bold text-black/70">{title}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-center gap-6 p-6 bg-[#FFFDF5]">
      {celebrate && <Confetti />}

      <div className="inline-flex items-center gap-2 border-3 border-black bg-[#FFE600] px-4 py-1.5 shadow-[4px_4px_0px_#000] rounded-xl -rotate-1">
        <span className="font-mono text-xs font-black uppercase tracking-wider bg-black text-[#FFE600] px-2 py-0.5 rounded">
          SMPN 7 YOGYAKARTA
        </span>
        <span className="text-sm sm:text-base font-black uppercase tracking-tight text-black">
          Quis SMP Negeri 7 Yogyakarta
        </span>
      </div>

      <h1 className="flex items-center gap-3 text-center text-4xl sm:text-5xl font-black uppercase tracking-tight text-black border-b-4 border-black pb-2">
        <Trophy className="size-10 sm:size-12 text-[#FFB800]" /> 🏆 PODIUM JUARA 🏆
      </h1>

      <p className="font-mono text-xs font-bold uppercase tracking-widest text-black/70 bg-white border-2 border-black px-3 py-1 rounded-md shadow-[2px_2px_0px_#000]">
        Cyber Champion & Cyber Defenders
      </p>

      <Podium leaderboard={leaderboard} sequenced onSequenceEnd={() => setCelebrate(true)} />

      {chooseQuizMaker && <QuizMakerPicker players={leaderboard} />}

      {leaderboard.length > 3 && (
        <Card className="w-full max-w-2xl border-4 border-black bg-white shadow-[8px_8px_0px_#000] rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-base font-black uppercase tracking-wider mb-4 border-b-2 border-black pb-2">
              Peringkat Peserta Teratas
            </h2>
            <FinalLeaderboard entries={leaderboard.slice(0, 10)} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
