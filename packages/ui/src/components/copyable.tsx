import { ComponentProps, ReactNode, useState } from 'react'
import { cva } from 'class-variance-authority'
import { CheckCircle, Copy, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

type CopyState = 'copy' | 'copied' | 'errored'

type Props = {
  text: string
  children: ReactNode
  onClick?: () => void
  replaceText?: boolean
  _initialState?: CopyState
  timeout?: number
  labels?: {
    copied: string
    'copy-failed': string
    'copy-failed-msg': string
  }
}

const copiedVariant = cva('', {
  variants: {
    status: {
      copied: 'text-highlight',
      errored: 'text-destructive',
      copy: 'text-primary',
    },
  },
  defaultVariants: {
    status: 'copy',
  },
})

export const LABELS = {
  copied: 'Copied',
  'copy-failed': 'Copy Failed',
  // eslint-disable-next-line quotes
  'copy-failed-msg': "Please check your browser's copy permissions.",
}

export function Copyable({
  text,
  children,
  onClick,
  replaceText,
  _initialState = 'copy',
  timeout = 1_000,
  className,
  labels = LABELS,
}: ComponentProps<'span'> & Props) {
  const [state, setState] = useState<CopyState>(_initialState)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setState('copied')
      onClick?.()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_err) {
      setState('errored')
    }
    setTimeout(() => setState('copy'), timeout)
  }

  function CopyIcon() {
    if (state === 'copy') {
      return (
        <Copy
          role="button"
          className="inline cursor-pointer align-text-top"
          onClick={handleClick}
          size={13}
        />
      )
    } else if (state === 'copied') {
      return <CheckCircle className="inline align-text-top" size={13} />
    } else if (state === 'errored') {
      return (
        <span title={labels['copy-failed-msg']}>
          <XCircle className="inline align-text-top" size={13} />
        </span>
      )
    }
    return null
  }

  let message: string | undefined
  if (state === 'copied') {
    message = labels.copied
  } else if (state === 'errored') {
    message = labels['copy-failed']
  }

  function PrependCopyIcon({ className }: { className?: string }) {
    return (
      <span
        aria-label="button"
        className={cn(className, 'text-gray dark:text-primary text-primary flex align-top text-xs')}
      >
        <span className="mr-2">
          <span className={copiedVariant({ status: state })}>
            <CopyIcon />
          </span>
        </span>
        <span>
          {children}
          <span
            className={cn(copiedVariant({ status: 'copied' }), 'ml-2 hidden w-[40.2px]')}
          ></span>
        </span>
      </span>
    )
  }

  function ReplaceWithMessage() {
    return (
      <span className="flex-column relative flex flex-nowrap">
        <span className="absolute text-xs">
          <span className={copiedVariant({ status: state })}>
            <CopyIcon />
            <span className="ml-2">{message}</span>
          </span>
        </span>
        <span className="invisible">
          <span className="mr-2 inline-block w-[13px]">
            {/* empty span to take same space as icon */}
          </span>
          {children}
        </span>
      </span>
    )
  }

  if (state === 'copy') {
    return <PrependCopyIcon className={className} />
  } else if (replaceText) {
    return <ReplaceWithMessage />
  }

  return (
    <>
      <span className="hidden text-xs lg:block">
        <PrependCopyIcon />
      </span>
      <span className="block text-xs lg:hidden">
        <ReplaceWithMessage />
      </span>
    </>
  )
}
