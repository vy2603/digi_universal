'use client';

import { useLeadPopup } from '@/context/lead-popup-context';
import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  className?: string;
}

export default function CTAButton({ children, className = '' }: CTAButtonProps) {
  const { openPopup } = useLeadPopup();

  return (
    <button onClick={openPopup} className={className} type="button">
      {children}
    </button>
  );
}
