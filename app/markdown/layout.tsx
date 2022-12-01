import '../../styles/globals.css'
// import MarkdownEdit from './MarkdownEdit'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex">
      <div>
        {/* @ts-ignore */}
        {/* <MarkdownEdit /> */}
      </div>
      <div className="flex-1">{children}</div>
    </main>
  )
}
