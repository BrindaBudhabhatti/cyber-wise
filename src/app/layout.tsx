// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { MainLayout } from '@/components/main-layout'
import { Toaster } from '@/components/ui/toaster'
import { I18nProvider } from '@/components/i18n-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter } from 'next/font/google'
import { ExitIntentDialog } from '@/components/exit-intent-dialog'
import Script from 'next/script'
import DigitalRain from '@/components/DigitalRain' // ✅ Matrix-style background

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CyberWise',
  description: 'Your guide to cyber safety and Indian cyber laws.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D5K56PLSVB"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D5K56PLSVB');
          `}
        </Script>
      </head>

      {/* ✅ Only ONE body tag */}
      <body className={`${inter.className} antialiased relative bg-transparent`}>
        {/* ✅ Background Canvas: Matrix-style Digital Rain */}
        <DigitalRain />

        {/* ✅ All UI content wrapped in Theme & i18n */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {/* ✅ Bring all content in front of canvas using z-10 */}
            <MainLayout>
              <div className="relative z-10">
                {children}
              </div>
            </MainLayout>

            <Toaster />
            <ExitIntentDialog />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
