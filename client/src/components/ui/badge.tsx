import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-md border-2 border-black px-2.5 py-0.5 font-mono text-xs font-black tracking-wider uppercase shadow-[2px_2px_0px_#000] whitespace-nowrap transition-all select-none [&>svg]:pointer-events-none [&>svg]:size-3!',
  {
    variants: {
      variant: {
        default: 'bg-[#FFE600] text-black',
        secondary: 'bg-[#00F0FF] text-black',
        destructive: 'bg-[#FF3366] text-white',
        outline: 'border-black bg-white text-black',
        ghost: 'border-transparent shadow-none hover:border-black hover:bg-white',
        link: 'text-black underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
