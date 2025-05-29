import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/index'

const buttonVariants = cva(
  'inline-flex items-center text-inherit justify-center whitespace-nowrap overflow-hidden transition-all enabled:cursor-pointer disabled:pointer-events-none disabled:opacity-34 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-accent-foreground font-family-inter hover:bg-accent/90 active:bg-accent/80',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border border-border text-foreground bg-transparent hover:bg-background/90 active:bg-background/80',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-10 px-4 gap-2 text-sm font-medium [&_svg:not([class*="size-"])]:size-4 rounded-sm',
        sm: 'h-6 px-2 gap-1 text-[11px] tracking-[-0.0275rem] [&_svg:not([class*="size-"])]:size-3 rounded-xs',
        lg: 'h-12 px-6 gap-2 text-base font-medium [&_svg:not([class*="size-"])]:size-4 rounded-md',
        icon: 'size-10 [&_svg:not([class*="size-"])]:size-4 rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className = '',
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
