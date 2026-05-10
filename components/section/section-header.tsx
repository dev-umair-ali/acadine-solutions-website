import { cn } from '@/lib/utils'

type SectionHeaderProps = {
  index?: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  dark?: boolean
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === 'center' && 'mx-auto max-w-3xl text-center',
        dark ? 'text-primary-foreground' : '',
        className,
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3',
          align === 'center' && 'justify-center',
          dark ? 'text-primary-foreground/55' : 'text-muted-foreground',
        )}
      >
        {index && (
          <span
            className={cn(
              'font-mono text-[11px] font-medium tabular-nums tracking-tight',
              dark ? 'text-accent/90' : 'text-accent',
            )}
          >
            {index}
          </span>
        )}
        {index && (
          <span className={cn('h-px w-8 bg-current opacity-40', align === 'center' && 'hidden sm:block')} aria-hidden />
        )}
        <span
          className={cn(
            'text-[10px] font-semibold uppercase tracking-[0.28em]',
            dark ? 'text-primary-foreground/60' : 'text-foreground/45',
          )}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          'mt-4 max-w-4xl text-balance text-[1.65rem] font-semibold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.15rem] lg:leading-[1.12]',
          align === 'center' && 'mx-auto',
          dark ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-3 max-w-2xl text-pretty text-[15px] leading-relaxed sm:text-base',
            align === 'center' && 'mx-auto',
            dark ? 'text-primary-foreground/72' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
