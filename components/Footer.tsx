export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">© {new Date().getFullYear()} Advogada Tech. Todos os direitos reservados.</p>
          <p className="text-xs mt-2">CNPJ: 00.000.000/0001-00 | OAB: 000.000</p>
          <p className="text-xs mt-1">Especialista em Direito da Tecnologia e LGPD</p>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-600">
          <p>Este site é uma propaganda do direito e respeita as normas da OAB. Os resultados referem-se a casos específicos e não constituem garantia de sucessos.</p>
        </div>
      </div>
    </footer>
  )
}
