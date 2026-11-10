import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border-3 border-black font-mono text-xs font-bold tracking-[0.08em] whitespace-nowrap uppercase transition-all outline-none select-none cursor-pointer shadow-[4px_4px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-[#FFE600] text-black hover:bg-[#FFF066]',
        outline: 'border-black bg-white text-black hover:bg-black/5',
        secondary: 'bg-[#00F0FF] text-black hover:bg-[#66F4FF]',
        ghost:
          'border-transparent shadow-none hover:border-black hover:bg-white hover:text-black hover:shadow-[3px_3px_0px_#000]',
        destructive: 'bg-[#FF3366] text-white hover:bg-[#FF5C85]',
        success: 'bg-[#22C55E] text-black hover:bg-[#4ADE80]',
        warning: 'bg-[#FFB800] text-black hover:bg-[#FFC733]',
        link: 'border-transparent shadow-none text-black underline-offset-4 hover:underline hover:shadow-none hover:translate-x-0 hover:translate-y-0',
      },
      size: {
        default: 'h-10 gap-2 px-4 py-2 text-xs',
        xs: 'h-7 gap-1 rounded-md px-2.5 text-[0.68rem] shadow-[2px_2px_0px_#000] hover:shadow-[3px_3px_0px_#000]',
        sm: 'h-8 gap-1.5 rounded-md px-3 text-[0.72rem] shadow-[3px_3px_0px_#000] hover:shadow-[4px_4px_0px_#000]',
        lg: 'h-12 gap-2.5 px-6 py-3 text-sm shadow-[5px_5px_0px_#000] hover:shadow-[7px_7px_0px_#000]',
        icon: 'size-10',
        'icon-xs': 'size-7 rounded-md shadow-[2px_2px_0px_#000]',
        'icon-sm': 'size-8 rounded-md shadow-[3px_3px_0px_#000]',
        'icon-lg': 'size-12 shadow-[5px_5px_0px_#000]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
