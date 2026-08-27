export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <p className="text-sm">© {new Date().getFullYear()} Advogada Tech. Todos os direitos reservados.</p>
          <p className="text-xs text-gray-600">CNPJ: 00.000.000/0001-00 | OAB: 000.000 | Especialista em Direito da Tecnologia e LGPD</p>
          <p className="text-xs text-gray-600">Este site é uma propaganda do direito e respeita as normas da OAB. Os resultados referem-se a casos específicos.</p>
        </div>
      </div>
    </footer>
  )
}
