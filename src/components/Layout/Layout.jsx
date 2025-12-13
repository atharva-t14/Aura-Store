import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
            <Header />
            <main className="flex-1 container-max pt-20 pb-12">{children}</main>
            <Footer />
        </div>
    )
}
