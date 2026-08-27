'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold font-display text-text hover:text-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background rounded" aria-label="Página inicial">
            <span className="text-gold">Ribeiro</span> Advocacia Tech
          </Link>

          <nav className="hidden md:flex space-x-10" aria-label="Navegação principal">
            <Link href="#servicos" className="relative text-text-secondary hover:text-gold transition-colors font-medium text-sm tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background rounded group">
              Serviços
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#sobre" className="relative text-text-secondary hover:text-gold transition-colors font-medium text-sm tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background rounded group">
              Sobre
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#contato" className="relative text-text-secondary hover:text-gold transition-colors font-medium text-sm tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background rounded group">
              Contato
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <Link href="#contato" className="hidden sm:inline-block bg-gold hover:bg-gold-light text-background px-6 py-3 rounded-none font-semibold uppercase tracking-wider text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background" aria-label="Agendar consulta inicial">
            Consulta Inicial
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-md text-text hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold transition-colors" aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            <span className="sr-only">Menu</span>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 border-t border-border animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-2 pt-4" aria-label="Navegação mobile">
              <Link href="#servicos" className="block px-4 py-3 text-text-secondary hover:text-gold hover:bg-surface focus:outline-none focus:ring-2 focus:ring-gold rounded transition-colors uppercase tracking-widest text-sm font-medium" onClick={() => setMenuOpen(false)}>Serviços</Link>
              <Link href="#sobre" className="block px-4 py-3 text-text-secondary hover:text-gold hover:bg-surface focus:outline-none focus:ring-2 focus:ring-gold rounded transition-colors uppercase tracking-widest text-sm font-medium" onClick={() => setMenuOpen(false)}>Sobre Mim</Link>
              <Link href="#contato" className="block px-4 py-3 text-text-secondary hover:text-gold hover:bg-surface focus:outline-none focus:ring-2 focus:ring-gold rounded transition-colors uppercase tracking-widest text-sm font-medium" onClick={() => setMenuOpen(false)}>Contato</Link>
              <Link href="#contato" className="block mx-4 my-4 px-4 py-3 bg-gold text-background rounded-none font-bold uppercase tracking-widest text-sm text-center hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-gold transition-colors" onClick={() => setMenuOpen(false)}>Consulta Inicial</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
