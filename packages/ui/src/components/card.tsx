import * as React from 'react'
import { cn } from '@/lib/utils/index'

function Card({
  className,
  children,
  aside,
  ...props
}: React.ComponentProps<'div'> & { aside?: React.ReactNode }) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground border-table-stroke flex flex-nowrap gap-2 rounded-xl border px-3 py-2',
        className
      )}
      {...props}
    >
      {aside && <aside className="shrink-0">{aside}</aside>}
      <div className="flex flex-1 flex-col gap-2">{children}</div>
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-0.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('text-foreground text-sm leading-none tracking-[-0.00875rem]', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted text-xs leading-none tracking-[-0.00875rem]', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="card-content" className={cn('text-foreground text-sm', className)} {...props} />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('text-foreground flex items-center text-sm [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
