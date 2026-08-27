import { ShieldCheckIcon, DocumentTextIcon, ScaleIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const services = [
  { id: 'lgpd', title: 'Adequação LGPD', desc: 'Consultoria técnica e jurídica para implementação da Lei Geral de Proteção de Dados. Mapeamento de dados, avaliação de riscos (DPIA) e respostas a incidentes de segurança.', icon: ShieldCheckIcon, aria: 'Serviço de proteção de dados pessoais conforme LGPD' },
  { id: 'contracts', title: 'Contratos de Tecnologia', desc: 'Arquitetura e blindagem de contratos de SaaS, licenciamento de software, SLAs e acordos de confidencialidade (NDA).', icon: DocumentTextIcon, aria: 'Serviço de contratos digitais para empresas' },
  { id: 'compliance', title: 'Compliance Digital', desc: 'Estruturação de políticas internas de governança corporativa, segurança da informação e prevenção a fraudes no ambiente digital.', icon: LockClosedIcon, aria: 'Serviço de compliance corporativo e segurança da informação' },
  { id: 'mediation', title: 'Mediação Tecnológica', desc: 'Resolução extrajudicial e ágil de disputas envolvendo ativos digitais, quebras de contrato de TI e infrações de propriedade intelectual.', icon: ScaleIcon, aria: 'Serviço de mediação para conflitos tecnológicos' }
]

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-background relative" aria-labelledby="services-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 id="services-heading" className="text-4xl lg:text-5xl font-display font-medium text-text mb-6">
            Áreas de <span className="text-gold italic">Atuação</span>
          </h2>
          <div className="h-1 w-24 bg-gold mb-8"></div>
          <p className="text-xl text-text-secondary font-light">
            Soluções jurídicas estruturadas com a mesma precisão da sua engenharia. Atendimento consultivo e contencioso estratégico.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((s) => (
            <article key={s.id} className="group bg-surface p-10 border border-border hover:border-gold transition-colors duration-500 relative" aria-labelledby={`service-title-${s.id}`}>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-gold transition-colors duration-500 pointer-events-none" aria-hidden="true"></div>
              
              <div className="w-16 h-16 rounded-none flex items-center justify-center mb-8 bg-background border border-border group-hover:border-gold/50 transition-colors duration-500" aria-hidden="true">
                <s.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
              </div>
              <h3 id={`service-title-${s.id}`} className="text-2xl font-display font-medium text-text mb-4">{s.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-6 font-light">{s.desc}</p>
              
              <div className="mt-auto">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center group-hover:pl-2 transition-all duration-300">
                  <span className="w-4 h-px bg-gold mr-3"></span> Detalhes
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
