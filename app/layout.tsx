import './css/style.css'

import { Nothing_You_Could_Do } from 'next/font/google'
import localFont from 'next/font/local'
import Theme from './theme-provider'
import AppProvider from './app-provider'
import Image from 'next/image'
import Illustration from '@/public/images/hero-illustration.svg'
import Header from '@/components/ui/header'
import Sidebar from '@/components/ui/sidebar'

const nycd = Nothing_You_Could_Do({
  subsets: ['latin'],
  variable: '--font-nycd',
  weight: '400',
  display: 'swap'
})

const aspekta = localFont({
  src: [
    {
      path: '../public/fonts/Aspekta-350.woff2',
      weight: '350',
    },
    {
      path: '../public/fonts/Aspekta-400.woff2',
      weight: '400',
    },    
    {
      path: '../public/fonts/Aspekta-500.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Aspekta-650.woff2',
      weight: '650',
    },
  ],
  variable: '--font-aspekta',
  display: 'swap',
})

export const metadata = {
  title: 'Loom AI Documentation',
  description: 'Everything there is to know about Loom AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>{/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body className={`${nycd.variable} ${aspekta.variable} font-aspekta antialiased text-slate-800 font-[350] bg-white`}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css" integrity="sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib" crossOrigin="anonymous"></link>
      <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.js" integrity="sha384-Rma6DA2IPUwhNxmrB/7S3Tno0YY7sFu9WSYMCuulLhIqYSGZ2gKCJWIqhBWqMQfh" crossOrigin="anonymous"></script>
        <Theme>
          <AppProvider>
            <div className="flex flex-col min-h-screen overflow-hidden">

              <Header />

              {/*  Page content */}
              <main className="grow">
                <section className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10">
                    <Image className="max-w-none" src={Illustration} priority alt="Page illustration" aria-hidden="true" />
                  </div>

                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Main content */}
                    <div>
                      {/* Sidebar */}
                      <Sidebar />

                      {/* Page container */}
                      <div className="md:grow md:pl-64 lg:pr-6 xl:pr-0">
                        <div className="pt-24 md:pt-28 pb-8 md:pl-6 lg:pl-12">
                          {children}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>

            </div>
          </AppProvider>
        </Theme>
      </body>
    </html>
  )
}
