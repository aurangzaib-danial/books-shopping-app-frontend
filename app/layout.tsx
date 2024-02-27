import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/ui/header';
import NextTopLoader from 'nextjs-toploader';

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
        <div className="py-6 wrapper">
          <NextTopLoader />
          <Header />
          {children}
          <footer className='text-center mt-5'>
            <p className='text-gray-500'>Personal portfolio project by <a href='https://aurangzaib-danial.github.io/' className='underline'>Aurangzaib Khan</a></p>
          </footer>
        </div>
      </body>
    </html>
  )
}
