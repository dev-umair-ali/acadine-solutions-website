'use client'

type HoneypotFieldProps = {
  checked: boolean
  onChange: (checked: boolean) => void
}

/** Hidden checkbox — bots may tick this; humans never see it. */
export function HoneypotField({ checked, onChange }: HoneypotFieldProps) {
  return (
    <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" aria-hidden tabIndex={-1}>
      Do not fill this field
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  )
}
