'use client'
import { useState, useEffect } from 'react'
import { MagnifyingGlassPlusIcon, AdjustmentsVerticalIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline'

export default function AccessibilityWidget() {
  const [mounted, setMounted] = useState(false)
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal')
  const [contrast, setContrast] = useState<'normal' | 'max'>('normal')
  const [spacing, setSpacing] = useState<'normal' | 'large'>('normal')

  useEffect(() => {
    setMounted(true)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduce-motion')
    }
  }, [])

  const toggleFontSize = () => {
    const newSize = fontSize === 'normal' ? 'large' : fontSize === 'large' ? 'xlarge' : 'normal'
    setFontSize(newSize)
    
    // Apply font sizes directly to root HTML for rem scaling
    const html = document.documentElement
    if (newSize === 'normal') html.style.fontSize = '100%'
    if (newSize === 'large') html.style.fontSize = '120%'
    if (newSize === 'xlarge') html.style.fontSize = '150%'
  }

  const toggleContrast = () => {
    const newContrast = contrast === 'normal' ? 'max' : 'normal'
    setContrast(newContrast)
    
    if (newContrast === 'max') {
      document.body.style.filter = 'contrast(1.5) grayscale(1)'
    } else {
      document.body.style.filter = 'none'
    }
  }

  const toggleSpacing = () => {
    const newSpacing = spacing === 'normal' ? 'large' : 'normal'
    setSpacing(newSpacing)
    
    if (newSpacing === 'large') {
      document.body.style.lineHeight = '2'
      document.body.style.letterSpacing = '0.05em'
    } else {
      document.body.style.lineHeight = ''
      document.body.style.letterSpacing = ''
    }
  }

  if (!mounted) return null

  return (
    <aside className="fixed bottom-6 right-6 z-50 bg-surface shadow-card border border-border p-3 max-w-xs" aria-label="Ferramentas de acessibilidade" role="complementary">
      <h3 className="sr-only">Painel de Acessibilidade</h3>
      <div className="flex space-x-2">
        <button onClick={toggleFontSize} className="p-3 bg-background border border-border hover:border-gold rounded-none focus:outline-none focus:ring-2 focus:ring-gold transition-colors group" aria-label="Aumentar tamanho do texto" title="Aumentar tamanho do texto">
          <MagnifyingGlassPlusIcon className="w-6 h-6 text-text group-hover:text-gold" />
        </button>
        <button onClick={toggleContrast} className="p-3 bg-background border border-border hover:border-gold rounded-none focus:outline-none focus:ring-2 focus:ring-gold transition-colors group" aria-label="Ativar contraste máximo (preto e branco)" title="Ativar contraste máximo">
          <AdjustmentsVerticalIcon className="w-6 h-6 text-text group-hover:text-gold" />
        </button>
        <button onClick={toggleSpacing} className="p-3 bg-background border border-border hover:border-gold rounded-none focus:outline-none focus:ring-2 focus:ring-gold transition-colors group" aria-label="Aumentar espaçamento do texto" title="Aumentar espaçamento">
          <ArrowsUpDownIcon className="w-6 h-6 text-text group-hover:text-gold" />
        </button>
      </div>
    </aside>
  )
}
