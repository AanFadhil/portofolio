import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'

const menu = [
    { link: '/', label: 'Home' },
    { link: '/projects', label: 'Projets' },
    { link: '/about', label: 'About' },
    { link: '/contact', label: 'Contact' }
]

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <div className="bg-indigo-100 min-h-screen relative">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
                <title>Aan Fadhil</title>
            </Head>
            <header className="mb-4 md:mb-10">
                <nav>
                    <ul className="flex flex-row place-content-center gap-x-4 pt-6 font-semibold text-gray-500">
                        {
                            menu.map(menu => {
                                const className = router.pathname === menu.link ? "text-purple-800" : ''
                                return <li key={menu.label} className={className}>
                                    <Link href={menu.link}>
                                        {menu.label}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </nav>
            </header>

            <main className="pb-12">
                {children}
            </main>

            <footer className="absolute w-screen bottom-0 text-center text-gray-500 text-sm p-1">
                built with NextJs
            </footer>
        </div>
    )

}

export default Layout