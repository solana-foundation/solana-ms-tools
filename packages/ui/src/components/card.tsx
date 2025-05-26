import { ComponentProps, FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type CardProps = ComponentProps<'div'> & {
  aside?: ReactNode
}

export const Card: FC<CardProps> = ({ className, children, aside, ...props }) => (
  <div
    data-slot="card"
    className={cn(
      'flex flex-row gap-2 overflow-hidden rounded-sm border border-stone-100 bg-stone-100 px-2 py-3 text-sm tracking-tight text-black shadow-sm dark:border-black dark:bg-stone-900 dark:text-white dark:shadow-none',
      className
    )}
    {...props}
  >
    <div className="order-2 flex flex-1 flex-col gap-2">{children}</div>
    {aside && (
      <aside data-slot="card-aside" className="order-1 max-w-8 shrink-0 overflow-hidden">
        {aside}
      </aside>
    )}
  </div>
)

type CardAsideCounterProps = ComponentProps<'div'>
export const CardAsideCounter: FC<CardAsideCounterProps> = ({ className, ...props }) => (
  <div
    data-slot="card-aside-counter"
    className={cn(
      'min-h-5 min-w-5 overflow-hidden rounded-full border border-emerald-700 bg-emerald-700 px-0.5 pt-0.5 pb-1 text-center text-xs leading-none tracking-tight text-ellipsis whitespace-nowrap text-white dark:border-emerald-400 dark:bg-transparent dark:text-emerald-400',
      className
    )}
    {...props}
  />
)

type CardHeaderProps = ComponentProps<'div'>
export const CardHeader: FC<CardHeaderProps> = ({ className, ...props }) => (
  <div data-slot="card-header" className={cn('flex flex-col gap-0.5', className)} {...props} />
)

type CardTitleProps = ComponentProps<'div'>
export const CardTitle: FC<CardTitleProps> = ({ className, ...props }) => (
  <div
    data-slot="card-title"
    className={cn('text-sm leading-none tracking-tight text-black dark:text-white', className)}
    {...props}
  />
)

type CardDescriptionProps = ComponentProps<'div'>
export const CardDescription: FC<CardDescriptionProps> = ({ className, ...props }) => (
  <div
    data-slot="card-description"
    className={cn(
      'text-xs leading-none tracking-tight text-black/50 dark:text-white/50',
      className
    )}
    {...props}
  />
)

type CardContentProps = ComponentProps<'div'>
export const CardContent: FC<CardContentProps> = ({ className, ...props }) => (
  <div
    data-slot="card-content"
    className={cn('text-base leading-none tracking-tight text-black dark:text-white', className)}
    {...props}
  />
)

type CardActionProps = ComponentProps<'div'>
export const CardAction: FC<CardActionProps> = ({ className, ...props }) => (
  <div
    data-slot="card-action"
    className={cn('flex flex-row-reverse gap-4', className)}
    {...props}
  />
)

type CardFooterProps = ComponentProps<'div'>
export const CardFooter: FC<CardFooterProps> = ({ className, ...props }) => (
  <div data-slot="card-footer" className={cn('pt-4', className)} {...props} />
)
