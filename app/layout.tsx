import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata: Metadata = {
  title: {
    default: 'Fellype Kenned | Desenvolvedor FullStack',
    template: '%s | Fellype Kenned',
  },
  description: 'Portfolio profissional de Fellype Kenned. Especialista em desenvolvimento web, criando aplicações robustas, escaláveis e de alta performance com React, Next.js, Node.js e TypeScript.',
  keywords: [
    'Fellype Kenned',
    'Desenvolvedor FullStack',
    'Desenvolvedor Web',
    'Engenheiro de Software',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Portfolio Desenvolvimento Web'
  ],
  authors: [{ name: 'Fellype Kenned' }],
  creator: 'Fellype Kenned',
  publisher: 'Fellype Kenned',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Fellype Kenned | Desenvolvedor FullStack',
    description: 'Portfolio profissional de Fellype Kenned. Especialista em criar aplicações web modernas e de alta performance com foco na experiência do usuário.',
    siteName: 'Portfolio Fellype Kenned',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fellype Kenned | Desenvolvedor FullStack',
    description: 'Portfolio profissional especializado em desenvolvimento web FullStack com React, Next.js, Node.js e TypeScript.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icons/favicon_io/android-chrome-512x512.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
