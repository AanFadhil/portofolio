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
    return (
        <div className={styles.container}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
                <title>Aan Fadhil</title>
            </Head>
            <header>
                <nav className={styles.menu}>
                    <ul>
                        {
                            menu.map(menu => {
                                const className = router.pathname === menu.link ? styles.active : ''
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

            <main className={styles.content}>

                {children}
            </main>

            <footer className={styles.footer}>
                built with NextJs
            </footer>
            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
                a {color:inherit;text-decoration:none;}         
                a:visited {color:inherit;} 
                a:hover {color:inherit;}   
                a:active {color:inherit;}
            `}</style>
        </div>
    )

}

export default Layout