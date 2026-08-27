import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityWidget from '../components/AccessibilityWidget';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap', weight: ['300','400','500','600','700','800'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap', weight: ['400','500','600','700','800'] });

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
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-gray-700 antialiased`} data-font-size="normal" data-contrast="normal">
        <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
        <Header />
        <main id="main-content" className="pt-16">{children}</main>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  )
}
