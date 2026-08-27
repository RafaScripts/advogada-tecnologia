import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            <span className="text-gold">Direito da Tecnologia</span> com Excelência Jurídica
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl font-light">
            Proteção de dados pessoais (LGPD), contratos digitais, mediação de conflitos tecnológicos e compliance corporativo — com precisão e cuidado para seu ambiente digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="#contato" className="inline-block bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 text-center shadow-md hover:shadow-xl" aria-label="Agendar uma consulta inicial gratuita">
              Agende uma consulta
            </Link>
            <Link href="#servicos" className="inline-block border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 text-center">
              Conheça meus serviços
            </Link>
          </div>

          <div className="flex items-center space-x-8 text-sm text-gray-500">
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span> 10+ anos de experiência</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span> OAB Registro</span>
            <span className="flex items-center"><span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span> Atendimento 100% acessível</span>
          </div>
        </div>
      </div>
    </section>
  )
}
