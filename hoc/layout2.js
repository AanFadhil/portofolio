import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'
import styles from './layout.module.css';

const menu = [
    { link: '/', label: 'Home' },
    { link: '/projects', label: 'Projets' },
    { link: '/about', label: 'About' },
    { link: '/contact', label: 'Contact' }
]

const Layout = ({ children }) => {
    const router = useRouter()
    const svgClass = "fixed z-0"
    const svgPathClass = "shadow-md"
    return (
        <div className={["min-h-screen relative bg-indigo-100"].join(' ')}>


            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
                <title>Aan Fadhil</title>
            </Head>
            <header className="mb-4 md:mb-10 z-50 relative">
                <nav>
                    <ul className="flex flex-row place-content-center gap-x-4 pt-6 font-semibold text-gray-500 ">
                        {
                            menu.map(menu => {
                                const className = router.pathname === menu.link ? "text-purple-800" : ''
                                return <li key={menu.label} className={[className, ' z-50'].join(' ')}>
                                    <Link href={menu.link}>
                                        {menu.label}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </nav>
            </header>

            <main className="pb-12 w-screen relative z-50">
                {children}
                
            </main>


            <div className="fixed w-screen bottom-0 top-60 md:bottom-0 md:top-auto z-0">
                <img src="/Papercut2.png" className="w-screen z-0" />
            </div>
            <footer className="absolute w-screen bottom-0 text-center text-gray-500 text-sm p-1">
                ©2021 built with NextJs. Powered by Vercel
            </footer>
        </div>
    )

}

export default Layout