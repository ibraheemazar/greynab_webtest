'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { BriefPrefill } from './BriefBuilderProvider';

interface BriefFormData {
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  name: string;
  email: string;
  company: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  prefill: BriefPrefill;
}

const PROJECT_TYPES = [
  'Commercial / TVC',
  'Campaign',
  'Branding',
  'Social',
  'Media',
  'Event',
  'Other',
];

const BUDGETS = [
  'Under $25K',
  '$25K – $100K',
  '$100K – $500K',
  '$500K+',
  'Not sure yet',
];

const TIMELINES = ['ASAP', '1–3 months', '3–6 months', 'Later / exploring'];

export default function BriefBuilder({ isOpen, onClose, prefill }: Props) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<BriefFormData>({
    projectType: prefill.projectType || '',
    budget: '',
    timeline: '',
    message: '',
    name: '',
    email: '',
    company: '',
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmitted(false);
      setData((d) => ({ ...d, projectType: prefill.projectType || d.projectType }));
    }
  }, [isOpen, prefill]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const update = <K extends keyof BriefFormData>(key: K, value: BriefFormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    // Track step completion for funnel analytics (Phase A)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'brief_step_completed', { step_number: step });
    }
  };

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, prefill }),
      });
      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'brief_submitted', {
            budget: data.budget,
            timeline: data.timeline,
          });
        }
      }
    } catch (err) {
      console.error('Brief submission failed:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return !!data.projectType;
      case 2:
        return !!data.budget;
      case 3:
        return !!data.timeline;
      case 4:
        return true; // message optional
      case 5:
        return !!data.name && !!data.email;
      default:
        return false;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            className="bg-paper text-ink rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Header */}
            <div className="sticky top-0 bg-paper border-b border-ink/10 px-8 py-5 flex justify-between items-center z-10">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-graphite">
                  Brief Builder
                </span>
                {!submitted && (
                  <span className="text-xs font-mono tracking-[0.15em] text-green">
                    Step {step} of 5
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-ink/60 hover:text-ink transition-colors text-xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Progress bar */}
            {!submitted && (
              <div className="h-0.5 bg-ink/10">
                <motion.div
                  className="h-full bg-green"
                  initial={{ width: '20%' }}
                  animate={{ width: `${step * 20}%` }}
                  transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                />
              </div>
            )}

            {/* Body */}
            <div className="p-8 sm:p-12 min-h-[420px]">
              {submitted ? (
                <SuccessState onClose={onClose} />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 1 && (
                      <Step
                        eyebrow="01 — Project"
                        question="What kind of project?"
                        sub="Pick the closest fit. You can tell us more later."
                      >
                        <OptionGrid
                          options={PROJECT_TYPES}
                          value={data.projectType}
                          onChange={(v) => update('projectType', v)}
                          cols={2}
                        />
                      </Step>
                    )}
                    {step === 2 && (
                      <Step
                        eyebrow="02 — Budget"
                        question="What's the budget range?"
                        sub="Ranges, not exact. Helps us route you to the right team."
                      >
                        <OptionGrid
                          options={BUDGETS}
                          value={data.budget}
                          onChange={(v) => update('budget', v)}
                          cols={1}
                        />
                      </Step>
                    )}
                    {step === 3 && (
                      <Step
                        eyebrow="03 — Timeline"
                        question="When do you need this?"
                        sub="Be honest. We'd rather match expectations than oversell."
                      >
                        <OptionGrid
                          options={TIMELINES}
                          value={data.timeline}
                          onChange={(v) => update('timeline', v)}
                          cols={2}
                        />
                      </Step>
                    )}
                    {step === 4 && (
                      <Step
                        eyebrow="04 — Tell us"
                        question="Tell us in two lines."
                        sub="Optional. Skip if you'd rather talk it through. Real conversation happens after."
                      >
                        <textarea
                          value={data.message}
                          onChange={(e) => update('message', e.target.value)}
                          placeholder="The brand, the problem, what 'good' looks like…"
                          className="w-full h-40 p-5 border border-ink/15 rounded-xl bg-soft focus:outline-none focus:border-green resize-none text-base"
                          autoFocus
                        />
                      </Step>
                    )}
                    {step === 5 && (
                      <Step
                        eyebrow="05 — You"
                        question="Last bit — where to send a reply?"
                        sub="We respond within 4 hours during business, 24 hours outside."
                      >
                        <div className="space-y-4">
                          <Input
                            label="Your name"
                            value={data.name}
                            onChange={(v) => update('name', v)}
                            autoFocus
                          />
                          <Input
                            label="Email"
                            type="email"
                            value={data.email}
                            onChange={(v) => update('email', v)}
                          />
                          <Input
                            label="Company"
                            value={data.company}
                            onChange={(v) => update('company', v)}
                            optional
                          />
                        </div>
                      </Step>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Footer with controls */}
            {!submitted && (
              <div className="sticky bottom-0 bg-paper border-t border-ink/10 px-8 py-5 flex justify-between items-center">
                <button
                  onClick={back}
                  disabled={step === 1}
                  className="text-sm font-medium tracking-wide disabled:opacity-30 hover:text-green transition-colors"
                >
                  ← Back
                </button>
                {step < 5 ? (
                  <button
                    onClick={next}
                    disabled={!canProceed()}
                    className="bg-green text-ink px-7 py-3.5 rounded-full text-sm font-medium tracking-wide disabled:opacity-30 hover:bg-green-glow transition-all duration-component ease-brand inline-flex items-center gap-2"
                  >
                    Continue <span>→</span>
                  </button>
                ) : (
                  <button
                    onClick={submit}
                    disabled={!canProceed() || submitting}
                    className="bg-green text-ink px-7 py-3.5 rounded-full text-sm font-medium tracking-wide disabled:opacity-30 hover:bg-green-glow transition-all duration-component ease-brand inline-flex items-center gap-2"
                  >
                    {submitting ? 'Sending…' : 'Send brief →'}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Step({
  eyebrow,
  question,
  sub,
  children,
}: {
  eyebrow: string;
  question: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="text-xs font-mono tracking-[0.2em] uppercase text-green mb-4">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl sm:text-5xl font-light leading-[1.05] tracking-tight mb-3">
        {question}
      </h2>
      <p className="text-graphite text-base mb-10 max-w-xl">{sub}</p>
      {children}
    </>
  );
}

function OptionGrid({
  options,
  value,
  onChange,
  cols,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  cols: 1 | 2;
}) {
  return (
    <div className={`grid gap-3 ${cols === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`text-left p-5 rounded-xl border transition-all duration-component ease-brand ${
            value === opt
              ? 'border-green bg-green/5 text-ink'
              : 'border-ink/15 hover:border-ink/40 text-ink/80'
          }`}
        >
          <span className="font-medium text-base">{opt}</span>
        </button>
      ))}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  type = 'text',
  optional = false,
  autoFocus = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  optional?: boolean;
  autoFocus?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-xs font-mono tracking-[0.15em] uppercase text-graphite mb-2">
        {label} {optional && <span className="text-ink/40">(optional)</span>}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={autoFocus}
        className="w-full p-4 border border-ink/15 rounded-xl bg-soft focus:outline-none focus:border-green text-base"
      />
    </label>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-12">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="inline-flex w-20 h-20 rounded-full bg-green text-ink items-center justify-center mb-8 text-3xl"
      >
        ✓
      </motion.div>
      <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight tracking-tight mb-4">
        Brief received.
      </h2>
      <p className="text-graphite text-lg max-w-md mx-auto mb-10">
        We'll get back to you within 4 hours during business — or 24 hours outside.
      </p>
      <button
        onClick={onClose}
        className="bg-ink text-paper px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-green hover:text-ink transition-all duration-component ease-brand"
      >
        Close
      </button>
    </div>
  );
}
