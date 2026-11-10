import { LogOut, Menu, Play, X, Zap } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

interface Props {
  basePath: string;
  loginPath: string;
  showUsers?: boolean;
  showMyGames?: boolean;
  playLabel?: string;
}

export default function CreatorNavBar({
  basePath,
  loginPath,
  showUsers = false,
  showMyGames = false,
  playLabel = 'Play ↗',
}: Props) {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { appName } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  const active = (path: string) =>
    cn(navBtn, location.pathname === path && 'bg-muted text-foreground');

  const links = [
    { to: basePath, label: 'Dashboard' },
    { to: `${basePath}/quiz/new`, label: '+ New Quiz' },
    { to: `${basePath}/history`, label: 'History' },
    ...(showMyGames ? [{ to: `${basePath}/my-games`, label: 'My games' }] : []),
    ...(showUsers ? [{ to: `${basePath}/users`, label: 'Users' }] : []),
    { to: `${basePath}/settings`, label: 'Settings' },
  ];

  async function handleLogout() {
    setMenuOpen(false);
    await logout();
    navigate(loginPath);
  }

  return (
    <nav className="sticky top-0 z-50 border-b-3 border-black bg-white shadow-[0_3px_0px_#000]">
      <div className="flex min-h-14 items-center gap-2 px-3 sm:px-4">
        <Link
          to={basePath}
          className="mr-2 flex min-w-0 items-center gap-2 border-2 border-black bg-[#FFE600] px-3 py-1 rounded-md shadow-[3px_3px_0px_#000] -rotate-1 hover:rotate-0 transition-transform"
        >
          <Zap className="size-4 shrink-0 fill-black text-black" />
          <span className="truncate text-sm sm:text-base font-black uppercase tracking-tight text-black">
            {appName || 'Quis SMP Negeri 7 Yogyakarta'}
          </span>
        </Link>

        <div className="hidden flex-wrap items-center gap-1.5 md:flex">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className={active(to)}>
              {label}
            </Link>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <Link
            to="/play"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 font-bold uppercase text-xs border-2 border-black bg-[#00F0FF] rounded-md shadow-[2px_2px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-black"
          >
            <Play className="size-3.5 fill-black" /> {playLabel}
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 font-bold uppercase text-xs border-2 border-black bg-[#FF3366] text-white rounded-md shadow-[2px_2px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
          >
            <LogOut className="size-3.5" /> Logout
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          className="ml-auto flex size-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border px-3 pb-3 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={cn(active(to), 'w-full justify-start')}
              >
                {label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-1.5 border-t border-border pt-2">
              <Link
                to="/play"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground"
              >
                <Play className="size-3.5" /> {playLabel}
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground"
              >
                <LogOut className="size-3.5" /> Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const navBtn =
  'inline-flex items-center px-3 py-1.5 text-xs font-bold uppercase rounded-md border-2 border-black bg-white shadow-[2px_2px_0px_#000] hover:bg-[#FFE600] transition-colors';
