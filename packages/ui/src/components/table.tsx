import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const tableVariants = cva('w-full caption-bottom', {
  variants: {
    density: {
      compact: 'text-sm',
      comfortable: 'text-sm',
    },
    layout: {
      default: '',
      'two-column': '',
    },
  },
  defaultVariants: {
    density: 'comfortable',
    layout: 'default',
  },
})

function Table({
  className,
  density,
  ...props
}: React.ComponentProps<'table'> & VariantProps<typeof tableVariants>) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table data-slot="table" className={cn(tableVariants({ density }), className)} {...props} />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        '[&_tr]:border-b [&_tr]:bg-[var(--table-head-background)] [&_tr]:hover:bg-[var(--table-head-background)]',
        className
      )}
      {...props}
    />
  )
}

const bodyVariants = cva('dark:text-primary', {
  variants: {
    density: {
      compact: '[&_tr:last-child]:border-0',
      comfortable: '[&_tr:last-child]:border-0',
    },
  },
  defaultVariants: {
    density: 'comfortable',
  },
})

function TableBody({
  className,
  density,
  ...props
}: React.ComponentProps<'tbody'> & VariantProps<typeof bodyVariants>) {
  return (
    <tbody data-slot="table-body" className={cn(bodyVariants({ density }), className)} {...props} />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        'bg-muted/50 dark:text-primary border-t font-medium [&>tr]:last:border-b-0',
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        className
      )}
      {...props}
    />
  )
}

const headVariants = cva(
  'text-foreground text-[#5D7976] h-10 px-2 text-left align-middle  font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
  {
    variants: {
      density: {
        compact: 'p-2 text-[.9375rem]/4',
        comfortable: 'px-6 py-[1.0625rem] text-[.625rem]/3 tracking-[0.6px] uppercase',
      },
    },
    defaultVariants: {
      density: 'comfortable',
    },
  }
)

function TableHead({
  className,
  density,
  ...props
}: React.ComponentProps<'th'> & VariantProps<typeof headVariants>) {
  return (
    <th data-slot="table-head" className={cn(headVariants({ density }), className)} {...props} />
  )
}

const cellVariants = cva(
  'align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
  {
    variants: {
      density: {
        compact: 'p-2',
        comfortable: 'px-6 py-[.9375rem]',
      },
      layout: {
        default: '',
        'two-column': 'lg:not-first:text-right lg:not-first:flex lg:not-first:flex-row-reverse',
      },
    },
    defaultVariants: {
      density: 'comfortable',
      layout: 'default',
    },
  }
)

function TableCell({
  className,
  density,
  layout,
  ...props
}: React.ComponentProps<'td'> & VariantProps<typeof cellVariants>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(cellVariants({ density, layout }), className)}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  )
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
