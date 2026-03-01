// app/layout.tsx
import "./globals.css"

export const metadata = {
  title: "Tiến Dung Group",
  description: "Gạch đá cao cấp"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  )
}