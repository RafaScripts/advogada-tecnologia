'use client'
import { useState } from 'react'
import { EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Erro:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 bg-white" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-xl p-8" role="alert">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Mensagem Enviada com Sucesso!</h3>
            <p className="text-green-700 mb-4">Sua mensagem foi recebida. Em breve entrarei em contato.</p>
            <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }) }} className="text-gold font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-gold">Enviar outra mensagem</button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-20 bg-white" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="contact-heading" className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600">Estou pronta para ajudá-lo(a). Envie uma mensagem e retornarei em até 24h úteis.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-3 rounded-lg"><EnvelopeIcon className="w-6 h-6 text-gold" aria-hidden="true" /></div>
                <div><h3 className="font-semibold text-gray-900">Email</h3><p className="text-gray-600">contato@advogadatech.com.br</p></div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 p-3 rounded-lg"><DevicePhoneMobileIcon className="w-6 h-6 text-gold" aria-hidden="true" /></div>
                <div><h3 className="font-semibold text-gray-900">Telefone/WhatsApp</h3><p className="text-gray-600">(11) 99999-9999</p></div>
              </div>
              <aside className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                <p className="mb-2"><strong>Formulário de contato:</strong> Preencha os campos abaixo para agendar uma consulta.</p>
                <p className="text-xs text-gray-500">Sua privacidade é protegida. Informações tratadas conforme LGPD.</p>
              </aside>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulário de contato">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors" aria-required="true" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors" aria-required="true" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors resize-y" aria-required="true" />
              </div>
              <button type="submit" disabled={isSubmitting} className={`w-full bg-gold hover:bg-gold-hover text-white py-4 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
