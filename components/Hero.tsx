import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden" aria-labelledby="hero-heading">
      {/* Decorative structured background lines (subtle grid/blueprint motif) */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-border"></div>
        <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-border"></div>
        <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-border"></div>
        <div className="absolute top-[70%] left-0 right-0 h-[1px] bg-border"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="hero-heading" className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-text mb-8 leading-tight">
            Advocacia Especializada em <br/><span className="text-gold italic">Tecnologia & Inovação</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Segurança jurídica para o ambiente digital. Atuamos com LGPD, contratos digitais e compliance corporativo para empresas que lideram o futuro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="#contato" className="inline-block bg-gold hover:bg-gold-light text-background px-10 py-4 font-semibold uppercase tracking-widest text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background text-center shadow-card" aria-label="Agendar uma consulta inicial">
              Agendar Consulta
            </Link>
            <Link href="#servicos" className="inline-block border border-border text-text hover:bg-surface px-10 py-4 font-semibold uppercase tracking-widest text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background text-center">
              Explorar Serviços
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-text-secondary uppercase tracking-widest font-medium">
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gold mr-3 rounded-sm" aria-hidden="true"></span> 10+ anos de experiência</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gold mr-3 rounded-sm" aria-hidden="true"></span> Certificação Exin DPO</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gold mr-3 rounded-sm" aria-hidden="true"></span> Acessibilidade Nível AA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
