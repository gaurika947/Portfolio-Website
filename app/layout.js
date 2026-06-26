import './globals.css'

export const metadata = {
  title: 'Gaurika Pandey | AI Engineer & Frontend Developer',
  description: 'AI-focused portfolio of Gaurika Pandey, a CSE student building web and AI experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
