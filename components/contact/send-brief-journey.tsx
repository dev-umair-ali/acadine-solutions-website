'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ChevronDown, Send, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { submitToWeb3Forms, WEB3FORMS_RECIPIENT } from '@/lib/web3forms'
import { cn } from '@/lib/utils'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const BRIEF_CATEGORIES = [
  {
    id: 'operations',
    icon: '⚙️',
    title: 'Operations & Workflows',
    blurb: 'Coordination, throughput, and process improvement.',
    interests: [
      'Process mapping and improvement',
      'Workflow automation',
      'SOP development',
      'Quality reporting',
      'Resource planning',
      'Operational dashboards',
    ],
  },
  {
    id: 'reporting',
    icon: '📊',
    title: 'Reporting & Analytics',
    blurb: 'Faster, more reliable visibility for leadership.',
    interests: [
      'Executive dashboards',
      'Automated reporting packs',
      'KPI tracking',
      'Exception alerts',
      'Cross-system reconciliation',
      'Forecasting support',
    ],
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI & Automation Opportunities',
    blurb: 'Where AI, automation, or rules-based systems may fit.',
    interests: [
      'AI opportunity assessment',
      'Document review support',
      'Customer service assistants',
      'Internal knowledge assistants',
      'Ticket or email routing',
      'Rules-based automation',
    ],
  },
  {
    id: 'customer',
    icon: '💬',
    title: 'Customer & Front Office',
    blurb: 'Response quality, consistency, and capacity.',
    interests: [
      'FAQ and knowledge base',
      'Ticket classification',
      'Response drafting support',
      'Service trend reporting',
      'Multichannel consistency',
      'Customer feedback analysis',
    ],
  },
  {
    id: 'finance',
    icon: '💰',
    title: 'Finance & Admin',
    blurb: 'Controls, reporting speed, and administrative load.',
    interests: [
      'Invoice processing',
      'Financial reporting automation',
      'Exception tracking',
      'Budget forecasting',
      'Compliance documentation',
      'Contract review support',
    ],
  },
  {
    id: 'people',
    icon: '🧠',
    title: 'People & Knowledge',
    blurb: 'Training, enablement, and institutional knowledge.',
    interests: [
      'AI education for teams',
      'Internal knowledge management',
      'Onboarding support',
      'Policy and SOP lookup',
      'Change management',
      'Leadership enablement',
    ],
  },
]

const REFLECTION_PROMPTS = [
  'What takes your team too much time each week?',
  'What tasks are repetitive across departments?',
  'Where does manual coordination create delays?',
  'What reporting eats up your week?',
  'If you could improve one workflow tomorrow, what would it be?',
]

type SelectedInterest = {
  categoryId: string
  categoryTitle: string
  interest: string
}

export function SendBriefJourney() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set())
  const [selected, setSelected] = useState<Map<string, SelectedInterest>>(new Map())
  const [reflections, setReflections] = useState<Record<number, string>>({})
  const [contact, setContact] = useState({ name: '', email: '', company: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const selectedList = useMemo(() => Array.from(selected.values()), [selected])

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleInterest = (categoryId: string, categoryTitle: string, interest: string) => {
    const key = `${categoryId}::${interest}`
    setSelected((prev) => {
      const next = new Map(prev)
      if (next.has(key)) next.delete(key)
      else next.set(key, { categoryId, categoryTitle, interest })
      return next
    })
  }

  const groupedSelections = useMemo(() => {
    const groups: Record<string, { title: string; items: string[] }> = {}
    selectedList.forEach(({ categoryId, categoryTitle, interest }) => {
      if (!groups[categoryId]) groups[categoryId] = { title: categoryTitle, items: [] }
      groups[categoryId].items.push(interest)
    })
    return groups
  }, [selectedList])

  const buildMessage = () => {
    const lines: string[] = ['--- Areas of Interest ---']
    if (selectedList.length === 0) {
      lines.push('(none selected)')
    } else {
      Object.values(groupedSelections).forEach((group) => {
        lines.push(`\n${group.title}:`)
        group.items.forEach((item) => lines.push(`  • ${item}`))
      })
    }

    const reflectionAnswers = REFLECTION_PROMPTS.map((q, i) => reflections[i]?.trim()).filter(Boolean)
    if (reflectionAnswers.length > 0) {
      lines.push('\n--- Reflection Notes ---')
      REFLECTION_PROMPTS.forEach((q, i) => {
        const answer = reflections[i]?.trim()
        if (answer) lines.push(`\n${q}\n${answer}`)
      })
    }

    return lines.join('\n')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const data = await submitToWeb3Forms({
        subject: 'Send a Brief — Acadine Solutions',
        from_name: contact.name,
        email: contact.email,
        replyto: contact.email,
        name: contact.name,
        company: contact.company,
        message: buildMessage(),
        recipient: WEB3FORMS_RECIPIENT,
        form_type: 'guided_brief',
        interests_count: String(selectedList.length),
      })

      if (data.success) {
        setStatus('success')
        setSelected(new Map())
        setReflections({})
        setContact({ name: '', email: '', company: '' })
        setOpenCategories(new Set())
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center rounded-2xl border border-accent/20 bg-accent/5 p-10 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
          <CheckCircle2 className="h-8 w-8 text-accent" />
        </div>
        <p className="mt-5 text-xl font-bold text-foreground">Brief sent successfully!</p>
        <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
          Thank you. We&apos;ll review your interests and respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex rounded-xl border border-border/60 bg-background px-6 py-2.5 text-[13px] font-bold text-foreground transition hover:bg-muted/30"
        >
          Send another brief
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="rounded-xl border border-accent/15 bg-linear-to-br from-accent/5 via-background to-muted/15 p-4 md:p-5">
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <p className="text-[14px] leading-relaxed text-foreground/75">
            <b className="font-semibold text-foreground">Explore the possibilities.</b> Tap the areas that interest you or seem relevant to your organization. You don&apos;t need technical knowledge — your selections help us prepare for a more focused conversation.
          </p>
        </div>
      </div>

      <div className="space-y-2.5">
        {BRIEF_CATEGORIES.map((cat) => {
          const isOpen = openCategories.has(cat.id)
          const count = selectedList.filter((s) => s.categoryId === cat.id).length
          return (
            <div
              key={cat.id}
              className={cn(
                'overflow-hidden rounded-xl border border-border/50 bg-background transition',
                isOpen && 'border-accent/30 shadow-sm',
                count > 0 && !isOpen && 'border-accent/20',
              )}
            >
              <button
                type="button"
                onClick={() => toggleCategory(cat.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 p-4 text-left md:gap-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-muted/20 text-base md:h-10 md:w-10 md:text-lg">
                  {cat.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[14px] font-bold text-foreground md:text-[15px]">{cat.title}</h3>
                    {count > 0 && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                        {count}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground">{cat.blurb}</p>
                </div>
                <ChevronDown
                  className={cn('h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200', isOpen && 'rotate-180')}
                />
              </button>

              {isOpen && (
                <div className="border-t border-border/40 px-4 pb-4 pt-1 md:px-5 md:pb-5">
                  <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/40">
                    Tap what interests you
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.interests.map((interest) => {
                      const key = `${cat.id}::${interest}`
                      const isSel = selected.has(key)
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => toggleInterest(cat.id, cat.title, interest)}
                          className={cn(
                            'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[12px] font-medium transition md:px-3 md:py-2',
                            isSel
                              ? 'border-accent bg-accent/10 text-accent'
                              : 'border-border/60 bg-muted/10 text-foreground/70 hover:border-accent/40',
                          )}
                        >
                          <span
                            className={cn(
                              'flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border text-[8px]',
                              isSel ? 'border-accent bg-accent text-accent-foreground' : 'border-border/70',
                            )}
                          >
                            {isSel ? '✓' : ''}
                          </span>
                          {interest}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {selectedList.length > 0 && (
        <div className="rounded-xl border border-primary/15 bg-primary p-5 text-primary-foreground md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-bold md:text-lg">Your brief summary</h3>
            <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-[12px] font-bold">
              {selectedList.length} selected
            </span>
          </div>
          <p className="mt-1.5 text-[13px] text-primary-foreground/65">
            These selections will be included when you submit — no need to commit to any of them.
          </p>
          <div className="mt-4 space-y-3">
            {Object.values(groupedSelections).map((group) => (
              <div key={group.title}>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent">{group.title}</p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-primary-foreground/15 bg-primary-foreground/8 px-2.5 py-1 text-[11px] text-primary-foreground/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-[15px] font-bold text-foreground">Before we meet, consider</h3>
        <p className="mt-1 text-[13px] text-muted-foreground">
          Optional — helps us prepare for a productive first conversation.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {REFLECTION_PROMPTS.map((prompt, i) => (
            <div
              key={prompt}
              className={cn(
                'rounded-xl border border-border/50 bg-muted/10 p-4',
                i === REFLECTION_PROMPTS.length - 1 && REFLECTION_PROMPTS.length % 2 === 1 && 'md:col-span-2',
              )}
            >
              <label htmlFor={`reflection-${i}`} className="text-[13px] font-medium text-foreground">
                {prompt}
              </label>
              <textarea
                id={`reflection-${i}`}
                value={reflections[i] ?? ''}
                onChange={(e) => setReflections((prev) => ({ ...prev, [i]: e.target.value }))}
                disabled={status === 'loading'}
                rows={2}
                className="mt-2 w-full resize-y rounded-lg border border-border/60 bg-background px-3 py-2.5 text-[13px] text-foreground outline-none transition placeholder:text-foreground/30 focus:border-accent/50 focus:ring-2 disabled:opacity-60"
                placeholder="Optional"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 border-t border-border/40 pt-6">
        <h3 className="text-[15px] font-bold text-foreground">Your contact details</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="brief-name" className="block text-[13px] font-bold text-foreground">
              Name <span className="text-destructive">*</span>
            </label>
            <input
              id="brief-name"
              value={contact.name}
              onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
              required
              disabled={status === 'loading'}
              autoComplete="name"
              className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-[14px] text-foreground shadow-sm outline-none focus:border-accent/50 focus:ring-2 disabled:opacity-60"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="brief-email" className="block text-[13px] font-bold text-foreground">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id="brief-email"
              type="email"
              value={contact.email}
              onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
              required
              disabled={status === 'loading'}
              autoComplete="email"
              className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-[14px] text-foreground shadow-sm outline-none focus:border-accent/50 focus:ring-2 disabled:opacity-60"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="brief-company" className="block text-[13px] font-bold text-foreground">
            Company
          </label>
          <input
            id="brief-company"
            value={contact.company}
            onChange={(e) => setContact((p) => ({ ...p, company: e.target.value }))}
            disabled={status === 'loading'}
            autoComplete="organization"
            className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-[14px] text-foreground shadow-sm outline-none focus:border-accent/50 focus:ring-2 disabled:opacity-60"
            placeholder="Company name"
          />
        </div>
      </div>

      {status === 'error' && (
        <div className="rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-[13px] font-medium text-destructive">
          Something went wrong. Please try again or email us at info@acadine.io.
        </div>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-[14px] font-bold text-primary-foreground shadow-[0_12px_36px_-10px_rgba(15,23,42,0.45)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'loading' ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Submit Brief
            </>
          )}
        </button>
        <p className="text-[12px] text-foreground/40">Submissions go to {WEB3FORMS_RECIPIENT}</p>
      </div>
    </form>
  )
}
