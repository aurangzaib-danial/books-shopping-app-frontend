import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Books Shopping App',
  description: 'An online store for buying books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
