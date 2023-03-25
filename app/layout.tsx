import Header from './components/header/header'
import './globals.css'

export const metadata = {
  title: 'Ralf Dewrich - Software Engineer',
  description: 'Ralf Dewrich Ferreira Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
