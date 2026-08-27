export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Link href="/" className="inline-block text-2xl font-bold font-display text-text mb-4 focus:outline-none focus:ring-2 focus:ring-gold" aria-label="Voltar ao topo">
            <span className="text-gold">Ribeiro</span> Advocacia Tech
          </Link>
          
          <div className="h-px w-full bg-border"></div>
          
          <p className="text-sm text-text-secondary font-light uppercase tracking-widest">
            © {new Date().getFullYear()} Advocacia Tech. Todos os direitos reservados.
          </p>
          <p className="text-xs text-text-secondary font-light tracking-wide">
            CNPJ: 00.000.000/0001-00 | OAB: 000.000 | Especialista em Direito Digital e Compliance
          </p>
          <p className="text-xs text-text-secondary/60 font-light max-w-2xl mx-auto">
            Site projetado com prioridade em acessibilidade (WCAG 2.1 AA). Este portal respeita as normas de publicidade da OAB (Provimento 205/2021).
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link';
