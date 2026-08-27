import { ShieldCheckIcon, DocumentTextIcon, ScaleIcon } from '@heroicons/react/24/outline'

const services = [
  { id: 'lgpd', title: 'Proteção de Dados (LGPD)', desc: 'Consultoria completa para adequação à Lei Geral de Proteção de Dados. Análise de riscos, DPIA, políticas de privacidade e resposta a incidentes.', icon: ShieldCheckIcon, aria: 'Serviço de proteção de dados pessoais conforme LGPD' },
  { id: 'contracts', title: 'Contratos Digitais', desc: 'Elaboração e revisão de contratos digitais, acordos de confidencialidade e termos de uso para empresas tecnológicas.', icon: DocumentTextIcon, aria: 'Serviço de contratos digitais para empresas' },
  { id: 'mediation', title: 'Mediação Tecnológica', desc: 'Resolução de conflitos digitais e disputas online de forma ágil e eficiente, preservando relacionamentos comerciais relevantes.', icon: ScaleIcon, aria: 'Serviço de mediação para conflitos tecnológicos' }
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-4">Áreas de Atuação</h2>
          <p className="text-lg text-gray-600">Especializada em direito da tecnologia com foco em inovação e compliance</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article key={s.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow" aria-labelledby={`service-title-${s.id}`}>
              <div className="bg-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6" aria-hidden="true">
                <s.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 id={`service-title-${s.id}`} className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{s.desc}</p>
              <aside className="text-xs text-gray-500 italic">Conforme normas éticas da OAB</aside>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
