export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body id="outstatic">{children}</body>
    </html>
  )
}