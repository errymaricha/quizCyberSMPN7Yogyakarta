import { Link } from 'react-router-dom';
import { AuthCard, PageCenter } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Zap, Trophy, Smartphone } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Landing() {
  const { displayName, appSubtitle } = useApp();

  return (
    <PageCenter className="relative overflow-hidden bg-[#FFFDF5]">
      {/* Decorative Neo-Brutalist floating stamps */}
      <div className="absolute top-6 left-6 hidden md:block -rotate-6 select-none pointer-events-none">
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
            VOXPAYANA • SMPN 12 YOGYAKARTA
          </Badge>

          <div className="my-2 inline-block border-3 border-black bg-[#FFE600] px-5 py-3 shadow-[5px_5px_0px_#000] rounded-xl -rotate-1">
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black leading-tight">
              {displayName || 'Quis SMP Negri 12 Yogyakarta Voxpayana'}
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

        <div className="mt-6 pt-4 border-t-2 border-black/10 flex items-center justify-center gap-4 text-[11px] font-mono text-black/60 font-bold uppercase">
          <span>🔒 Edukasi Keamanan Digital</span>
          <span>•</span>
          <span>🎯 Real-Time Quiz</span>
        </div>
      </AuthCard>
    </PageCenter>
  );
}
