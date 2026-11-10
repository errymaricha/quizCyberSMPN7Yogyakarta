import type * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-11 w-full min-w-0 rounded-lg border-3 border-black bg-white px-3.5 py-2 font-mono text-sm text-black shadow-[3px_3px_0px_#000] transition-all outline-none placeholder:text-black/40 focus:border-black focus:bg-[#FFFDE6] focus:shadow-[5px_5px_0px_#000] focus:ring-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:shadow-none aria-invalid:border-[#FF3366] aria-invalid:bg-red-50',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
