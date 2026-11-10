import { Link } from 'react-router-dom';
import { AuthCard, PageCenter } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/context/AppContext';
import { ExternalLink, Presentation, Smartphone, Zap } from 'lucide-react';

export default function Landing() {
  const { displayName, appSubtitle } = useApp();

  return (
    <PageCenter className="relative overflow-hidden bg-[#FFFDF5] min-h-screen">
      {/* Decorative Neo-Brutalism Stickers */}
      <div className="absolute top-8 left-8 hidden md:block -rotate-6 select-none pointer-events-none">
        <div className="bg-[#00F0FF] text-black border-3 border-black px-3.5 py-1.5 shadow-[4px_4px_0px_#000] font-mono text-xs font-black uppercase">
          ⚡ CYBER CHALLENGE
        </div>
      </div>
      <div className="absolute bottom-8 right-8 hidden md:block rotate-3 select-none pointer-events-none">
        <div className="bg-[#FF3366] text-white border-3 border-black px-4 py-2 shadow-[5px_5px_0px_#000] font-mono text-xs font-black uppercase">
          🛡️ KLIK ATAU SKIP?
        </div>
      </div>

      <AuthCard maxWidth="lg" className="max-w-[480px] text-center border-4 border-black bg-white shadow-[10px_10px_0px_#000] p-2">
        <div className="mb-6 flex flex-col items-center">
          <Badge variant="default" className="mb-3 bg-[#FFE600] text-black border-2 border-black px-3 py-1 text-xs font-black tracking-widest shadow-[3px_3px_0px_#000]">
            SMP NEGERI 7 YOGYAKARTA
          </Badge>

          <div className="my-2 inline-block border-3 border-black bg-[#FFE600] px-5 py-3 shadow-[5px_5px_0px_#000] rounded-xl -rotate-1">
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black leading-tight">
              {displayName || 'Quis SMP Negeri 7 Yogyakarta'}
            </h1>
          </div>

          <p className="mt-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-black/80 bg-[#00F0FF]/30 border-2 border-black rounded-md px-3 py-1.5 inline-block">
            {appSubtitle || 'Cyber Challenge: Klik atau Skip? — Think Before You Click!'}
          </p>
        </div>

        <div className="flex flex-col gap-3.5">
          <Button asChild variant="default" size="lg" className="w-full text-base font-black bg-[#FFE600] text-black border-3 border-black shadow-[5px_5px_0px_#000] hover:bg-[#FFF066]">
            <Link to="/play" className="flex items-center justify-center gap-2">
              <Smartphone className="size-5" />
              <span>GABUNG PERMAINAN (SISWA)</span>
            </Link>
          </Button>

          <a
            href="https://docs.google.com/presentation/d/1RyYz--dXTAD8B3V8k4Pf0OU1a1FR6AoYxv4kAR0-g3s/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-black bg-[#22C55E] text-black border-3 border-black shadow-[5px_5px_0px_#000] hover:bg-[#4ADE80] hover:translate-x-0.5 hover:translate-y-0.5 transition-all rounded-md"
          >
            <Presentation className="size-5" />
            <span>MULAI PRESENTASI (GOOGLE SLIDES)</span>
            <ExternalLink className="size-4 ml-0.5" />
          </a>

          <Button asChild variant="secondary" size="lg" className="w-full text-sm font-black bg-[#00F0FF] text-black border-3 border-black shadow-[5px_5px_0px_#000] hover:bg-[#66F4FF]">
            <Link to="/login" className="flex items-center justify-center gap-2">
              <Zap className="size-4" />
              <span>MASUK PEMATERI / ADMIN</span>
            </Link>
          </Button>

          <Button asChild variant="outline" size="sm" className="w-full text-xs font-bold border-2 border-black bg-white shadow-[3px_3px_0px_#000]">
            <Link to="/register">Daftar Akun Baru</Link>
          </Button>
        </div>

        <div className="mt-6 border-t-2 border-dashed border-black/30 pt-4 text-[11px] font-mono font-bold uppercase text-black/70">
          SMP Negeri 7 Yogyakarta • Think Before You Click!
        </div>
      </AuthCard>
    </PageCenter>
  );
}
