import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Copyable, LABELS } from '@/shared/copyable'

const lgVariants = cva('hidden lg:flex', {
  variants: {
    align: {
      center: 'items-center',
      right: 'justify-end',
    },
  },
  defaultVariants: {
    align: 'center',
  },
})

const defVariants = cva('whitespace-nowrap lg:hidden')

const truncateVariants = cva('', {
  variants: {
    overflow: {
      ellipsis: 'text-ellipsis whitespace-nowrap overflow-hidden',
      unset: '',
    },
  },
  defaultVariants: {
    overflow: 'unset',
  },
})

type Props = {
  address: string
  displayAddress?: string
  truncate?: boolean
  truncateUnknown?: boolean
  truncateChars?: number
  overrideText?: string
} & Pick<React.ComponentProps<typeof Copyable>, 'labels'>

export function Address({
  address,
  displayAddress,
  truncate,
  truncateUnknown,
  truncateChars,
  overrideText,
  asChild = false,
  children,
  labels = LABELS,
}: React.ComponentProps<'div'> & VariantProps<typeof defVariants> & { asChild?: boolean } & Props) {
  if (truncateUnknown && address === displayAddress) {
    truncate = true
  }

  let addressLabel = displayAddress ?? address

  if (truncateChars && addressLabel === address) {
    addressLabel = addressLabel.slice(0, truncateChars) + '…'
  }

  if (overrideText) {
    addressLabel = overrideText
  }

  const handleMouseEnter = (text: string) => {
    const elements = document.querySelectorAll(`[data-address="${text}"]`)
    elements.forEach((el) => {
      ;(el as HTMLElement).classList.add('address-highlight')
    })
  }

  const handleMouseLeave = (text: string) => {
    const elements = document.querySelectorAll(`[data-address="${text}"]`)
    elements.forEach((el) => {
      ;(el as HTMLElement).classList.remove('address-highlight')
    })
  }

  const overflow = React.useMemo(() => (truncate ? 'ellipsis' : 'unset'), [truncate])

  const content = (
    <Copyable labels={labels} text={address}>
      <span
        data-address={address}
        className={cn(truncateVariants({ overflow }), 'font-mono')}
        onMouseEnter={() => handleMouseEnter(address)}
        onMouseLeave={() => handleMouseLeave(address)}
      >
        {asChild ? children : <span>{addressLabel}</span>}
      </span>
    </Copyable>
  )

  return (
    <>
      <div className={lgVariants()}>{content}</div>
      <div className={defVariants()}>{content}</div>
    </>
  )
}

export { truncateVariants }
