'use client';

import * as Popover from '@radix-ui/react-popover';
import { ArrowRight, Mail, Send } from 'lucide-react';
import { useId } from 'react';

type CtaPopoverButtonProps = {
  mobile?: boolean;
  label?: string;
  tone?: 'light' | 'dark';
};

export function CtaPopoverButton({
  mobile = false,
  label = 'Umów konsultację',
  tone = 'light',
}: CtaPopoverButtonProps) {
  const emailId = useId();

  const buttonClass = [
    'inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition',
    mobile ? 'w-full justify-center' : '',
    tone === 'dark'
      ? 'bg-gradient-to-r from-[#fed102] to-[#ffdf55] text-[#2a2400] shadow-[0_12px_28px_rgba(254,209,2,0.32)] hover:from-[#ffe36f] hover:to-[#ffd948]'
      : 'bg-gradient-to-r from-[#1ebaf1] to-[#0f8ec9] text-white shadow-[0_16px_40px_rgba(17,142,201,0.32)] hover:from-[#2ac6fd] hover:to-[#11a5dc]'
  ]
    .filter(Boolean)
    .join(' ');

  const popoverTextColor = tone === 'dark' ? '#1d2f3c' : '#0f3044';

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className={buttonClass}>
          {label}
          <ArrowRight className="h-4 w-4" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={12}
          className="w-[270px] rounded-3xl bg-white p-5 text-left shadow-[0_26px_60px_rgba(71,176,217,0.35)] focus:outline-none"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1ebaf1]">
            Zgłoś się na rozmowę
          </p>
          <p className="mt-2 text-sm" style={{ color: `${popoverTextColor}cc` }}>
            Zostaw swój e-mail, a w ciągu 24 godzin otrzymasz propozycję indywidualnego planu działania.
          </p>
          <form className="mt-4 flex flex-col gap-2">
            <label
              className="flex items-center gap-2 rounded-2xl border border-[#c7ecfa] bg-[#e7f9ff] px-3 py-2 text-sm text-[#0f3b52]"
              htmlFor={emailId}
            >
              <Mail className="h-4 w-4 text-[#1ebaf1]" aria-hidden />
              <input
                id={emailId}
                type="email"
                required
                placeholder="Twój e-mail"
                className="w-full border-none bg-transparent text-sm text-[#0f3b52] outline-none placeholder:text-[#7baec1]"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f8ec9] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0d79ad]"
            >
              Wyślij wiadomość
              <Send className="h-4 w-4" />
            </button>
          </form>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
