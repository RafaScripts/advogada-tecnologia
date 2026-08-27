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
  description: 'Advogada especializada em LGPD, contratos digitais, mediação de conflitos tecnológicos e compliance corporativo. Alta acessibilidade e rigor técnico.',
  keywords: ['advogada tecnologia', 'LGPD', 'proteção de dados', 'contratos digitais', 'mediação', 'direito digital', 'compliance'],
  authors: [{ name: 'Advogada Tech' }],
  openGraph: { title: 'Advogada Especialista em Direito da Tecnologia', description: 'Especialista em LGPD, contratos digitais e mediação tecnológica', url: 'https://advogada-tecnologia.vercel.app', siteName: 'Advogada Tech', locale: 'pt_BR', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-background">
      <head>
        <meta name="theme-color" content="#D4AF37" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans bg-background text-text antialiased`} data-font-size="normal" data-contrast="normal">
        {/*
          THESIS: A premium, highly accessible tech law firm that operates with the precision and elegance of a top-tier fintech service.
          OWN-WORLD: Deep slate/navy background (slate-900), stark white text (slate-50), and precise gold accents (#D4AF37) for critical interactive elements and highlights. Sharp borders, generous padding, and high-contrast typography.
          STORY: The visitor realizes immediately they are dealing with a sophisticated, modern professional who understands both the gravity of the law and the speed of technology.
          FIRST VIEWPORT: A striking dark hero section. A large elegant serif headline in white with a gold highlight. A prominent gold 'Agende uma consulta' button. Subtle grid motif.
          FORM: Premium Fintech Metal Card. Seed key 1238ceb2.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
        <Header />
        <main id="main-content" className="pt-24">{children}</main>
        <Footer />
        <AccessibilityWidget />
      </body>
    </html>
  )
}
