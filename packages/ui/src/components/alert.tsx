import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { AlertCircle, AlertTriangle, Check, Info, X } from 'lucide-react'
import { cn } from '@/lib/utils/index'

const alertVariants = cva(
  'fixed left-1/2 -translate-x-1/2 bottom-4 w-[366px] flex items-center justify-between rounded-md px-4 py-2 text-sm shadow-[0px_8px_16px_rgba(0,0,0,0.2)] transition-all',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        success: 'bg-alert-success text-white',
        error: 'bg-alert-error text-white',
        warning: 'bg-alert-warning text-white',
        info: 'bg-alert-info text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const iconMap = {
  default: null,
  success: Check,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

interface AlertProps extends React.ComponentProps<'div'>, VariantProps<typeof alertVariants> {
  onClose?: () => void
}

function Alert({ className, variant = 'default', children, onClose, ...props }: AlertProps) {
  const Icon = iconMap[variant || 'default']

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="size-4" />}
        <div className="flex flex-col gap-0.5">{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-current/50 transition-colors hover:text-current"
          aria-label="Close alert"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="alert-title" className={cn('leading-6 font-medium', className)} {...props} />
  )
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="alert-description" className={cn('text-sm/6', className)} {...props} />
}

export { Alert, AlertTitle, AlertDescription }
