'use client'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon, MagnifyingGlassPlusIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/outline'

export default function AccessibilityWidget() {
  const [mounted, setMounted] = useState(false)
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal')
  const [contrast, setContrast] = useState<'normal' | 'high'>('normal')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.body.classList.add('reduce-motion')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
      document.body.classList.add('dark')
    }
  }, [])

  const toggleFontSize = () => {
    const newSize = fontSize === 'normal' ? 'large' : 'normal'
    setFontSize(newSize)
    document.body.setAttribute('data-font-size', newSize)
  }

  const toggleContrast = () => {
    const newContrast = contrast === 'normal' ? 'high' : 'normal'
    setContrast(newContrast)
    document.body.setAttribute('data-contrast', newContrast)
  }

  const toggleTheme = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    if (newDarkMode) document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }

  if (!mounted) return null

  return (
    <aside className="fixed bottom-6 right-6 z-50 bg-white shadow-xl rounded-xl p-4 border border-gray-200 max-w-xs" aria-label="Ferramentas de acessibilidade" role="complementary">
      <h3 className="sr-only">Ferramentas de acessibilidade</h3>
      <div className="grid grid-cols-3 gap-2">
        <button onClick={toggleFontSize} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold" aria-label="Alternar tamanho do texto" title="Alternar tamanho do texto">
          <MagnifyingGlassPlusIcon className="w-5 h-5 text-gray-700 mx-auto" />
        </button>
        <button onClick={toggleContrast} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold" aria-label="Alternar contraste alto" title="Alternar contraste alto">
          <AdjustmentsVerticalIcon className="w-5 h-5 text-gray-700 mx-auto" />
        </button>
        <button onClick={toggleTheme} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold" aria-label={darkMode ? "Tema claro" : "Tema escuro"}>
          {darkMode ? <SunIcon className="w-5 h-5 text-gray-700 mx-auto" /> : <MoonIcon className="w-5 h-5 text-gray-700 mx-auto" />}
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-3 text-center">Acessibilidade WCAG 2.1 AA</p>
    </aside>
  )
}
