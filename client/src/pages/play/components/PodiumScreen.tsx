import { ArrowRight, Trophy } from 'lucide-react';
import { useState } from 'react';
import { Confetti } from '@/components/game/Confetti';
import { Podium } from '@/components/game/Podium';
import { PageCenter } from '@/components/layout';
import { Button } from '@/components/ui/button';
import type { GameEndedPayload } from '@/types';

interface Props {
  leaderboard: GameEndedPayload['leaderboard'];
  onContinue: () => void;
}

export function PodiumScreen({ leaderboard, onContinue }: Props) {
  const [celebrate, setCelebrate] = useState(false);
  return (
    <PageCenter className="flex-col gap-6 bg-[#FFFDF5]">
      {celebrate && (
        <Confetti count={40} spread="center" durationRange={[0.6, 2]} />
      )}

      <div className="inline-block border-3 border-black bg-[#FFE600] px-3.5 py-1.5 shadow-[4px_4px_0px_#000] rounded-xl -rotate-1">
        <span className="text-xs sm:text-sm font-black uppercase tracking-tight text-black">
          Quis SMP Negeri 7 Yogyakarta
        </span>
      </div>

      <h1 className="flex items-center justify-center gap-2 text-center text-2xl sm:text-3xl font-black uppercase tracking-tight text-black">
        <Trophy className="size-8 text-[#FFB800]" /> 🏆 PODIUM JUARA 🏆
      </h1>

      <Podium
        leaderboard={leaderboard}
        columnClassName="podium-column"
        sequenced
        onSequenceEnd={() => setCelebrate(true)}
      />

      <Button
        type="button"
        variant="default"
        size="lg"
        onClick={onContinue}
        className="mt-2 font-black border-3 border-black bg-[#FFE600] text-black shadow-[5px_5px_0px_#000] hover:bg-[#FFF066]"
      >
        <span className="inline-flex items-center gap-2">
          Lihat Hasil Lengkap <ArrowRight className="size-4" />
        </span>
      </Button>
    </PageCenter>
  );
}
