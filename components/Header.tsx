'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded" aria-label="Página inicial">
            <span className="text-gold">Advogada</span> Tech
          </Link>

          <nav className="hidden md:flex space-x-8" aria-label="Navegação principal">
            <Link href="#servicos" className="text-gray-700 hover:text-gold focus:outline-none focus:text-gold focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-colors font-medium text-sm tracking-wide">Serviços</Link>
            <Link href="#sobre" className="text-gray-700 hover:text-gold focus:outline-none focus:text-gold focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-colors font-medium text-sm tracking-wide">Sobre Mim</Link>
            <Link href="#contato" className="text-gray-700 hover:text-gold focus:outline-none focus:text-gold focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-colors font-medium text-sm tracking-wide">Contato</Link>
          </nav>

          <Link href="#contato" className="hidden sm:inline-block bg-gold hover:bg-gold-hover text-white px-6 py-2.5 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 shadow-md hover:shadow-lg" aria-label="Agendar consulta inicial">
            Consulta Inicial
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-md text-gray-700 hover:text-gold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold transition-colors" aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            <span className="block w-6 h-0.5 bg-gray-900 mb-1 transition-all duration-200"></span>
            <span className="block w-6 h-0.5 bg-gray-900 mb-1 transition-all duration-200"></span>
            <span className="block w-6 h-0.5 bg-gray-900 transition-all duration-200"></span>
            <span className="sr-only">Menu</span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-1 pt-4" aria-label="Navegação mobile">
              <Link href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-gold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold rounded transition-colors" onClick={() => setMenuOpen(false)}>Serviços</Link>
              <Link href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-gold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold rounded transition-colors" onClick={() => setMenuOpen(false)}>Sobre Mim</Link>
              <Link href="#contato" className="block px-3 py-2 text-gray-700 hover:text-gold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold rounded transition-colors" onClick={() => setMenuOpen(false)}>Contato</Link>
              <Link href="#contato" className="block mx-3 my-2 px-4 py-2.5 bg-gold text-white rounded-md font-medium hover:bg-gold-hover focus:outline-none focus:ring-2 focus:ring-gold transition-colors" onClick={() => setMenuOpen(false)}>Consulta Inicial</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
