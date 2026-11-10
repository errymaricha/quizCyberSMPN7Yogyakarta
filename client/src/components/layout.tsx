import type { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import CreatorNav from './CreatorNav';

export function Page({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('flex min-h-0 flex-1 flex-col overflow-x-hidden bg-[#FFFDF5]', className)}>
      {children}
    </div>
  );
}

export function PageCenter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'flex min-h-screen flex-1 flex-col items-center justify-center p-4 sm:p-6 bg-[#FFFDF5]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PageVCenter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'flex min-h-screen flex-1 flex-col items-center justify-center px-4 py-8 bg-[#FFFDF5]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MainContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl flex-1 px-4 py-5 sm:p-6', className)}>
      {children}
    </div>
  );
}

type AuthCardProps = {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg';
};

const maxWidthClass = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

export function AuthCard({ children, className, maxWidth = 'md' }: AuthCardProps) {
  return (
    <Card
      className={cn(
        'w-full bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-2xl transition-all',
        maxWidthClass[maxWidth],
        className,
      )}
    >
      <CardContent className="p-6 sm:p-8">{children}</CardContent>
    </Card>
  );
}

export function AppLogo({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'inline-block font-black text-black tracking-tight text-xl sm:text-2xl uppercase border-3 border-black bg-[#FFE600] px-4 py-1.5 shadow-[4px_4px_0px_#000] rounded-lg -rotate-1 hover:rotate-0 transition-transform',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Subtitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'text-xs sm:text-sm font-mono font-bold tracking-wide uppercase text-black/80 mt-1',
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Full-page loading (or error) placeholder shown under the creator nav. */
export function PageLoading({ message = 'Loading…', nav }: { message?: string; nav?: ReactNode }) {
  return (
    <Page>
      {nav ?? <CreatorNav />}
      <PageCenter>
        <div className="bg-white border-3 border-black p-6 rounded-xl shadow-[6px_6px_0px_#000]">
          <p className="font-bold text-black uppercase tracking-wider">{message}</p>
        </div>
      </PageCenter>
    </Page>
  );
}

export function FormRow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', className)}>{children}</div>;
}
