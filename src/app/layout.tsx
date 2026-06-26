import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Onest } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from './providers/toaster';
import { LeadPopupProvider } from '@/context/lead-popup-context';
import LeadPopupModal from '@/components/lead-popup-modal';

const onest = Onest({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'DigiUniversal | Digital Marketing Agency Gurgaon — SEO, Ads & Growth',
    template: '%s | DigiUniversal',
  },
  description:
    'DigiUniversal is a global digital marketing agency based in Gurgaon, India. We offer SEO, Google Ads, Social Media Marketing and Performance Marketing for businesses worldwide.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}
      >
        <ThemeProvider disableTransitionOnChange>
          {/* ToasterProvider must render before the children components */}
          {/* https://github.com/emilkowalski/sonner/issues/168#issuecomment-1773734618 */}
          <ToasterProvider />
          <LeadPopupProvider>
            <div className="isolate flex flex-col flex-1">{children}</div>
            <LeadPopupModal />
          </LeadPopupProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
