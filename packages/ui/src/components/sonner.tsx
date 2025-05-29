import { Toaster as Sonner, ToasterProps } from 'sonner'
import { cn } from '@/lib/utils'

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        className: cn(
          '!px-4 !py-2',
          'data-[type=success]:!bg-accent-secondary data-[type=success]:!border-accent-secondary data-[type=success]:!text-foreground',
          'data-[type=error]:!bg-destructive data-[type=error]:!border-destructive data-[type=error]:!text-foreground'
        ),
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
