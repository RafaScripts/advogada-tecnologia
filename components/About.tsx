export default function About() {
  return (
    <section id="sobre" className="py-24 bg-surface" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="about-heading" className="text-4xl lg:text-5xl font-display font-medium text-text mb-6">
              A <span className="text-gold italic">Advogada</span>
            </h2>
            <div className="h-1 w-16 bg-gold mb-6 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="md:col-span-5">
              {/* Image Frame */}
              <div className="relative p-2 border border-border" role="img" aria-label="Fotografia da advogada em perfil profissional">
                <div className="aspect-[3/4] bg-background flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent mix-blend-overlay"></div>
                  <span className="text-text-secondary uppercase tracking-widest text-xs">Fotografia Corporativa</span>
                </div>
              </div>
              <div className="mt-8 space-y-4 border-t border-border pt-6">
                <p className="text-sm uppercase tracking-widest text-text font-semibold flex justify-between">
                  <span>Inscrição OAB</span>
                  <span className="text-gold">000.000</span>
                </p>
                <p className="text-sm uppercase tracking-widest text-text font-semibold flex justify-between">
                  <span>Especialização</span>
                  <span className="text-gold">Direito Digital</span>
                </p>
                <p className="text-sm uppercase tracking-widest text-text font-semibold flex justify-between">
                  <span>Certificação</span>
                  <span className="text-gold">DPO Exin</span>
                </p>
              </div>
            </div>
            
            <div className="md:col-span-7">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl leading-relaxed text-text font-light mb-8">
                  Advogada com mais de 10 anos de experiência estruturando a base legal para empresas de tecnologia, startups e corporações em transformação digital.
                </p>
                <p className="text-text-secondary leading-relaxed font-light mb-8">
                  Minha atuação une o rigor e a segurança do direito clássico com a velocidade e inovação exigidas pelo mercado de tecnologia. Especialista em proteção de dados pessoais (LGPD), contratos de software e infraestrutura, compliance corporativo e mediação de litígios complexos.
                </p>
                <p className="text-text-secondary leading-relaxed font-light mb-8">
                  Acredito que o direito não deve ser um obstáculo para a inovação, mas sim a sua fundação mais sólida.
                </p>
              </div>
              
              <aside className="mt-12 p-8 border border-border bg-background" role="note">
                <p className="text-sm text-text-secondary font-light">
                  <strong className="text-text font-semibold uppercase tracking-widest block mb-2">Nota Disciplinar OAB:</strong>
                  De acordo com as diretrizes da Ordem dos Advogados do Brasil (OAB), informamos que o conteúdo deste portal tem caráter estritamente informativo e não constitui promessa de resultado jurídico.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
