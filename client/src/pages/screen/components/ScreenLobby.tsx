import { QRCodeSVG } from 'qrcode.react';
import { LobbyPlayers } from '@/components/game/LobbyPlayers';
import { QuizIntroCard } from '@/components/game/QuizIntroCard';
import { useApp } from '@/context/AppContext';
import { publicBaseUrl } from '@/helpers';
import type { PlayerInfo, QuizIntro } from '@/types';

interface Props {
  pin: string;
  title: string;
  questionCount: number;
  intro?: QuizIntro;
  players: PlayerInfo[];
}

const GOOGLE_SLIDES_URL = 'https://docs.google.com/presentation/d/1RyYz--dXTAD8B3V8k4Pf0OU1a1FR6AoYxv4kAR0-g3s/edit?usp=sharing';

export function ScreenLobby({ pin, title, questionCount, intro, players }: Props) {
  const { publicUrl } = useApp();
  const baseUrl = publicBaseUrl(publicUrl);
  const joinUrl = `${baseUrl}/play/${pin}`;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1800px] flex-col justify-center gap-6 p-6 lg:p-10 bg-[#FFFDF5]">
      {/* Top Banner Branding */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4">
        <div className="inline-flex items-center gap-2.5 border-3 border-black bg-[#FFE600] px-4 py-2 shadow-[4px_4px_0px_#000] rounded-xl -rotate-1">
          <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-[#FFE600] px-2.5 py-1 rounded">
            SMPN 7 YOGYAKARTA
          </span>
          <span className="text-base sm:text-lg font-black uppercase tracking-tight text-black">
            Quis SMP Negeri 7 Yogyakarta
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={GOOGLE_SLIDES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-mono text-xs font-black uppercase tracking-wider bg-[#22C55E] text-black border-3 border-black px-3.5 py-1.5 rounded-lg shadow-[3px_3px_0px_#000] hover:bg-[#4ADE80] transition-colors"
          >
            Buka Google Slides ↗
          </a>
          <div className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider bg-[#00F0FF] border-3 border-black px-3.5 py-1.5 rounded-lg shadow-[3px_3px_0px_#000]">
            CYBER CHALLENGE: KLIK ATAU SKIP?
          </div>
        </div>
      </div>

      <div className="grid w-full flex-1 items-center gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        {/* Left: Join Info & QR Code */}
        <div className="flex min-w-0 flex-col items-center gap-4 text-center">
          <div className="inline-block border-2 border-black bg-white px-4 py-1 text-sm font-mono font-black uppercase tracking-widest shadow-[3px_3px_0px_#000] rounded-md">
            PINDAI UNTUK BERGABUNG
          </div>

          <div className="w-full max-w-[min(46vh,420px)] rounded-2xl bg-white p-5 border-4 border-black shadow-[10px_10px_0px_#000]">
            <QRCodeSVG
              value={joinUrl}
              title={`Join link: ${joinUrl}`}
              level="M"
              size={380}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="text-base font-mono font-bold text-black/80 bg-white border-2 border-black px-3 py-1 rounded-md shadow-[2px_2px_0px_#000]">
            atau buka{' '}
            <strong className="text-black underline underline-offset-4 font-black">
              {baseUrl.replace(/^https?:\/\//, '')}
            </strong>
          </div>

          <div className="pin-display">{pin}</div>
        </div>

        {/* Right: Quiz Details & Players */}
        <div className="flex min-w-0 flex-col gap-6">
          {intro ? (
            <QuizIntroCard intro={intro} layout="row" className="screen-intro border-4 border-black shadow-[8px_8px_0px_#000] rounded-2xl bg-white" />
          ) : (
            <div className="border-4 border-black bg-white p-6 rounded-2xl shadow-[8px_8px_0px_#000] text-center">
              <h1 className="font-black uppercase text-black leading-tight tracking-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)' }}>
                {title}
              </h1>
              <p className="mt-2 text-sm font-mono font-bold uppercase tracking-wider text-black/70">
                {questionCount} Pertanyaan • Uji Keamanan Digital
              </p>
            </div>
          )}

          <div className="flex flex-col items-center gap-4 text-center border-4 border-black bg-white p-6 rounded-2xl shadow-[8px_8px_0px_#000]">
            <div className="inline-block bg-[#22C55E] text-black border-2 border-black px-4 py-1 rounded-full font-mono text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_#000]">
              {players.length} Peserta Sudah Bergabung
            </div>
            <LobbyPlayers players={players} />
          </div>
        </div>
      </div>
    </div>
  );
}
