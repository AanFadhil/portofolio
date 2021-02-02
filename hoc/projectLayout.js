import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title }) => {
    const padding = "px-4"
    const contentWrapperClass = "max-w-3xl mx-auto"
    return (
        <div className="">
            <Head>
                <title>{title} - Aan Fadhil</title>
            </Head>
            <section className={["mt-20", padding].join(' ')}>
                <div className={contentWrapperClass}><h1 className="font-semibold text-gray-800 text-3xl mb-7">{title}</h1></div>
            </section>
            <section className={["bg-white py-4 text-gray-500 shadow-md", padding].join(' ')}>
                <div className={contentWrapperClass}>
                    {children}
                </div>
            </section>
            <section className={["py-4 text-gray-600", padding].join(' ')}>
                <div className="mx-auto flex flex-row bg-white px-4 py-4 rounded-lg shadow-md max-w-md">
                    <div className="rounded-full h-16 w-h-16 md:h-24 md:w-24 bg-gray-200">
                        <img src="/potrait.png" className="rounded-full h-16 w-h-16 md:h-24 md:w-24 object-contain object-bottom" />
                    </div>
                    <div className="px-4">
                        <h3 className="font-semibold text-lg text-black">Aan Fadhil</h3>
                        <p className="italic">Interested to work with me ?</p>
                        <div className="flex flex-row mt-2">
                            <div className="bg-purple-700 w-44 text-sm text-center text-white py-0 font-semibold hover:bg-purple-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 ease-out duration-300 rounded-md">
                                <a href="https://www.upwork.com/freelancers/~0180f6fc8fef16432d">Hire me on Upwork</a>
                            </div>
                            <div className="text-sm ml-2">or  <Link href="/contact">Contact me</Link></div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )

}

export default Layout