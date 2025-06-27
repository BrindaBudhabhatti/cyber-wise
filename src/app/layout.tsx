import type {Metadata} from 'next';
import './globals.css';
import {MainLayout} from '@/components/main-layout';
import {Toaster} from '@/components/ui/toaster';
import { I18nProvider } from '@/components/i18n-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// src/components/main-layout.tsx
export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider /* ...props you already have */>
      {/* 1️⃣ tell the sidebar it may collapse to icons */}
      <Sidebar collapsible="icon" variant="sidebar">
        {/* 2️⃣ put the Toggle button somewhere visible (top-bar or footer) */}
        <SidebarHeader>
          <SidebarTrigger className="md:hidden lg:inline-flex" />   {/* shows a hamburger on mobile, a chevron on desktop */}
          {/* …your logo etc */}
        </SidebarHeader>

        {/* 3️⃣ everything else stays the same */}
        <SidebarContent>
          <MainNav />
        </SidebarContent>
        <SidebarFooter>
          {/* language, theme switcher, about-dev dialog… */}
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        {/* the page content */}
        <PageTitle />
        {children}
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}

export const metadata: Metadata = {
  title: 'CyberWise',
  description: 'Your guide to cyber safety and Indian cyber laws.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <MainLayout>{children}</MainLayout>
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
