export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 id="about-heading" className="text-3xl font-bold text-center text-gray-900 mb-12">Sobre Mim</h2>
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="aspect-w-1 aspect-h-1 rounded-xl bg-gray-200 overflow-hidden" role="img" aria-label="Fotografia da advogada">
                <div className="w-full h-48 bg-gradient-to-br from-gold/20 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Foto da advogada</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-sm text-gray-600">Inscrição OAB: 000.000</p>
                <p className="text-sm text-gray-600">Especialização: Direito da Tecnologia</p>
                <p className="text-sm text-gray-600">Certificada em LGPD</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-4">Advogada com mais de 10 anos de experiência em direito da tecnologia, especializada em proteção de dados pessoais (LGPD), contratos digitais e mediação de conflitos online.</p>
                <p className="mb-4">Atuo com uma abordagem humanizada e tecnológica, oferecendo soluções jurídicas ágeis e eficazes para empresas e pessoas físicas.</p>
              </div>
              <aside className="mt-8 p-4 bg-yellow-50 border-l-4 border-gold rounded-r-lg" role="note">
                <p className="text-sm text-gray-700"><strong>Nota Importante:</strong> Conforme orientação da OAB, nenhuma informação neste site constitui um testemunho de sucesso garantido. Cada caso é analisado individualmente.</p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
