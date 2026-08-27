# Advogada de Tecnologia

Landing page para advogada especializada em direito da tecnologia, com foco em
**LGPD**, **Contratos Digitais** e **Mediação**, construída com **Next.js** e
alta conformidade com **WCAG 2.1 AA**.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** — paleta de cores com contraste ≥ 4.5:1
- **@heroicons/react** — ícones semânticos

## ♿ Acessibilidade (WCAG 2.1 AA)

Este projeto implementa diretrizes WCAG 2.1 Nível AA:

| Diretriz | Implementação |
|----------|--------------|
| **1.1.1 Conteúdo não textual** | Alt text em imagens, ícones decorativos com `aria-hidden` |
| **1.3.1 Info e relações** | Estrutura semântica (`main`, `nav`, `section`, `header`, `footer`) |
| **1.3.2 Ordem correta ao fazer foco** | Ordem lógica de tabulação, `tabIndex={-1}` no skip target |
| **1.4.3 Contraste (mínimo)** | Todas as combinações de cor ≥ 4.5:1 |
| **1.4.4 Redimensionar texto** | Widget de aumento de fonte (Normal → Grande → Extra Grande) |
| **2.1.1 Teclado** | Navegação 100% por teclado, `focus-visible` visível |
| **2.4.1 Bypassar blocos** | Skip link para pular para o conteúdo principal |
| **2.4.3 Foco sequencial** | Ordem de foco lógica e previsível |
| **2.4.6 Cabeçalhos** | Hierarquia clara de `h1` → `h2` → `h3` |
| **2.4.7 Foco visível** | Anel de foco customizado (3px, cor de contraste) |
| **2.5.5 Target de toque** | Mínimo 44×44px em dispositivos de toque |
| **3.1.1 Idioma da página** | `lang="pt-BR"` no `<html>` |
| **3.2.1 Em foco** | Nenhum contexto alterado inesperadamente ao receber foco |
| **3.3.1 Identificação** | Labels associados a inputs via `htmlFor` + `id` |
| **3.3.2 Rótulos | Descrições** | Todos os campos do formulário têm labels |
| **3.3.3 Sugerir correções** | Mensagens de erro específicas e anidadas |
| **4.1.2 Nome, função, valor** | Botões e controles com `aria-label`, `aria-pressed`, `aria-expanded` |

### Widget de Acessibilidade

O componente `AccessibilityWidget` (canto inferior direito) permite:

- **Alterar tamanho do texto** (Normal → Grande → Extra Grande)
- **Alternar alto contraste** (modo de contraste elevado)
- **Reduzir movimento** (ativação de animações reduzidas)

Preferências são salvas no `localStorage` e persistem entre visitas.

## 📋 Estrutura de Arquivos

```
advogada-tecnologia/
├── app/
│   ├── layout.tsx          # Layout raiz (semântico, skip link, lang="pt-BR")
│   ├── page.tsx            # Página principal (composição de componentes)
│   ├── globals.css         # Estilos base WCAG (focus, skip link, sr-only)
│   └── favicon.ico
├── components/
│   ├── Header.tsx          # Navegação responsiva com skip link
│   ├── Hero.tsx            # Seção introdutória com CTA
│   ├── Services.tsx        # Cards de LGPD, Contratos, Mediação
│   ├── About.tsx           # Biografia da advogada
│   ├── Contact.tsx         # Formulário acessível + info de contato
│   ├── Footer.tsx          # Rodapé com navegação
│   └── AccessibilityWidget.tsx  # Widget de acessibilidade (fonte, contraste)
├── public/                 # Imagens e favicon
├── tailwind.config.js      # Configuração com paleta acessível
├── postcss.config.js
├── next.config.js          # Headers de segurança e acessibilidade
├── .gitignore
└── package.json
```

## 🛠️ Como Executar

```bash
# Clonar e instalar dependências
git clone https://github.com/RafaScripts/advogada-tecnologia.git
cd advogada-tecnologia
npm install

# Desenvolvimento
npm run dev
# Acesse http://localhost:3000

# Build para produção
npm run build
npm run start
```

## 🏗️ Deploy

Recomendado para **Vercel** (hospedagem nativa do Next.js):

```bash
vercel --prod
```

## 📄 Licença

Este projeto é de uso livre para fins demonstrativos. Ajuste conforme sua necessidade.

---

**Conformidade WCAG 2.1 AA verificada.** Este site atende às diretrizes
de acessibilidade para pessoas com deficiência, incluindo navegação por teclado,
contraste adequado e suporte a leitores de tela.
