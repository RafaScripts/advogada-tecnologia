import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityWidget from '../components/AccessibilityWidget';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap', weight: ['400', '500', '600', '700'] });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: { default: 'Advogada Especialista em Direito da Tecnologia | LGPD e Compliance', template: '%s | Advogada Tech' },
  description: 'Advogada especializada em LGPD, contratos digitais, mediação de conflitos tecnológicos e compliance corporativo.',
  keywords: ['advogada tecnologia', 'LGPD', 'proteção de dados', 'contratos digitais', 'mediação', 'direito digital', 'compliance'],
  authors: [{ name: 'Advogada Tech' }],
  openGraph: { title: 'Advogada Especialista em Direito da Tecnologia', description: 'Especialista em LGPD, contratos digitais e mediação tecnológica', url: 'https://advogada-tecnologia.vercel.app', siteName: 'Advogada Tech', locale: 'pt_BR', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#D4AF37" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans bg-white text-gray-700 antialiased`} data-font-size="normal" data-contrast="normal">
        <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
        <Header />
        <main id="main-content" className="pt-16">{children}</main>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  )
}
