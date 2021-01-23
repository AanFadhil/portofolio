import {useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import TextBox from '../components/forms/textBox';
import Layout from '../hoc/layout2';
import kwesforms from 'kwesforms';


const Contact = () => {
    useEffect(() => {
        kwesforms.init()
    },[])
    return (
        <Layout>
            <Head>
                <title>Contact - Aan Fadhil</title>
            </Head>
            <section className="px-4 md:px-0">
                <div className="w-full md:w-1/3 mx-auto p-4 shadow-lg bg-white rounded-lg flex flex-col">
                    <h1 className="font-bold text-lg mb-4">Contact Me</h1>
                    <form className="flex flex-col w-full kwes-form" action={process.env.NEXT_PUBLIC_KWES_ACTION_URL}>
                        <TextBox required max={30} label="What is your name ?" type="text" name="name" />
                        <TextBox required max={50} label="Where should I contact you ?" type="text" name="contact" />
                        <TextBox required max={100} label="How can I Help You ?" type="text" name="bussiness" />
                        <button type="submit" className="bg-purple-700 text-center text-white mt-2 py-2 md:w-1/3 font-semibold hover:bg-purple-800 transition hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ease-out duration-300 rounded-md">Send</button>
                    </form>
                </div>
            </section>
        </Layout>
    )
}


export default Contact 