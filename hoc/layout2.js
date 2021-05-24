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
        <div className={["min-h-screen relative bg-indigo-600"].join(' ')}>


            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="icon" href="/favicon.ico" />
                <title>Aan Fadhil</title>
            </Head>
            <header className="mb-4 md:mb-10 z-50 relative">
                <nav>
                    <ul className="flex flex-row place-content-center gap-x-4 pt-6  text-gray-200 ">
                        {
                            menu.map(menu => {
                                const className = router.pathname === menu.link ? "text-white font-semibold" : ''
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
                <img src="/Papercut.png" className="w-screen z-0" />
            </div>
            <footer className="absolute w-screen bottom-0 text-center text-gray-200 text-sm p-1">
                ©2021 built with NextJs. Powered by Vercel
            </footer>
        </div>
    )

}

export default Layout