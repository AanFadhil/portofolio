import Head from 'next/head';

const Layout = ({ children, title }) => {
    const padding = "md:px-80 sm:px-10"
    return (
        <div className="">
            <Head>
                <title>{title} - Aan Fadhil</title>
            </Head>
            <section className={["mt-20", padding].join(' ')}>
                <h1 className="font-semibold text-gray-800 text-3xl mb-7">{title}</h1>
            </section>
            <img />
            <section className={["bg-white py-4 text-gray-500 shadow-md", padding].join(' ')}>
                {children}
            </section>
            <section className={["py-4 text-gray-600", padding].join(' ')}>
                <div className="flex flex-row bg-white px-4 py-4 rounded-lg shadow-md">
                    <div className="rounded-full h-24 w-24 bg-gray-200">
                        <img src="/potrait.png" className="rounded-full h-24 w-24"/>
                    </div>
                    <div className="px-4">
                        <h3 className="font-semibold text-lg text-black">Aan Fadhil</h3>
                        <p>Interested to work with me ?</p>
                        <div className="bg-purple-700 w-44 text-sm text-center text-white mt-2 py-0 font-semibold hover:bg-purple-800 transition hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ease-out duration-300 rounded-md"><a href="#">Hire me on Upwork</a></div>
                    </div>
                    
                </div>
            </section>
        </div>
    )

}

export default Layout