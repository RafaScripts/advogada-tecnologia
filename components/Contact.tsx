'use client'
import { useState } from 'react'
import { EnvelopeIcon, DevicePhoneMobileIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Erro:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contato" className="py-24 bg-background border-t border-border" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="bg-surface border border-gold p-12 relative overflow-hidden" role="alert">
            <CheckCircleIcon className="w-20 h-20 text-gold mx-auto mb-6" aria-hidden="true" />
            <h3 className="text-3xl font-display font-medium text-text mb-4">Recepção Confirmada</h3>
            <p className="text-text-secondary mb-10 text-lg font-light">Sua solicitação foi processada com segurança. Retornaremos o contato em até 24 horas úteis.</p>
            <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }) }} className="inline-block border border-gold text-gold hover:bg-gold hover:text-background px-8 py-3 font-semibold uppercase tracking-widest text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background">
              Nova Solicitação
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contato" className="py-24 bg-background border-t border-border" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 id="contact-heading" className="text-4xl lg:text-5xl font-display font-medium text-text mb-6">
                  Iniciar <span className="text-gold italic">Atendimento</span>
                </h2>
                <div className="h-1 w-16 bg-gold mb-6"></div>
                <p className="text-lg text-text-secondary font-light">
                  Agende uma consulta para alinhar as necessidades da sua empresa ou startup com nossas soluções jurídicas.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text uppercase tracking-widest text-sm mb-1">Email Direto</h3>
                    <a href="mailto:contato@advogadatech.com.br" className="text-link text-lg">contato@advogadatech.com.br</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center shrink-0">
                    <DevicePhoneMobileIcon className="w-6 h-6 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text uppercase tracking-widest text-sm mb-1">Telefone / Signal / WhatsApp</h3>
                    <a href="tel:+5511999999999" className="text-link text-lg">(11) 99999-9999</a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-surface border-l-2 border-gold mt-12">
                <p className="text-sm text-text-secondary font-light">
                  <strong className="text-text block mb-2 font-medium">Sigilo Profissional:</strong>
                  Todas as informações enviadas por este canal estão resguardadas por sigilo e são tratadas em conformidade estrita com a Lei Geral de Proteção de Dados (LGPD).
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-surface p-8 sm:p-10 border border-border space-y-8 shadow-card" aria-label="Formulário de solicitação de atendimento">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest font-semibold text-text mb-3">Nome Completo *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-4 bg-background border border-border text-text placeholder-text-secondary/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors rounded-none" aria-required="true" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-semibold text-text mb-3">Telefone corporativo</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-4 bg-background border border-border text-text placeholder-text-secondary/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors rounded-none" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold text-text mb-3">Email Profissional *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-4 bg-background border border-border text-text placeholder-text-secondary/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors rounded-none" aria-required="true" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold text-text mb-3">Descrição da Demanda *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-4 bg-background border border-border text-text placeholder-text-secondary/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-y rounded-none" aria-required="true" />
                </div>
                
                <button type="submit" disabled={isSubmitting} className={`w-full bg-gold hover:bg-gold-light text-background py-5 font-bold uppercase tracking-widest text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? 'Criptografando e Enviando...' : 'Solicitar Atendimento'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
