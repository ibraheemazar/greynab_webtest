'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import BriefBuilder from './BriefBuilder';

interface BriefBuilderContextValue {
  open: (prefill?: BriefPrefill) => void;
  close: () => void;
}

export interface BriefPrefill {
  projectType?: string;
  industry?: string;
}

const BriefBuilderContext = createContext<BriefBuilderContextValue | null>(null);

export function useBriefBuilder() {
  const ctx = useContext(BriefBuilderContext);
  if (!ctx) throw new Error('useBriefBuilder must be inside BriefBuilderProvider');
  return ctx;
}

export default function BriefBuilderProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState<BriefPrefill>({});

  const open = (p: BriefPrefill = {}) => {
    setPrefill(p);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  return (
    <BriefBuilderContext.Provider value={{ open, close }}>
      {children}
      <BriefBuilder isOpen={isOpen} onClose={close} prefill={prefill} />
    </BriefBuilderContext.Provider>
  );
}
