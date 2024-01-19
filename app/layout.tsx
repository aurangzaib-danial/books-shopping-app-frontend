import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/ui/header';

export const metadata: Metadata = {
  title: 'eBooks Shopping',
  description: 'An online store for buying eBooks',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <div className="py-6">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
