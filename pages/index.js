import Head from 'next/head'
import Image from 'next/image'
import Layout from '../hoc/layout2';

const Home = () => {

  return (
    <Layout>
      <section className="px-1 md:px-0">
        <div className="mx-2 md:mx-60 shadow-lg bg-white rounded-lg flex flex-col md:flex-row">
          <div className="px-2 pt-2 bg-gray-900 rounded-t-lg md:rounded-l-lg md:rounded-t-none">
            <img src={"/potrait.png"} className="w-full object-contain h-32 md:h-auto mt-auto" />
          </div>
          <div className="py-4 px-4 md:pt-10 md:pl-4 md:pr-9">
            <h1 className="text-3xl mb-2 font-semibold">Hi, I'm<span className="bg-purple-700 px-1 mx-1 text-white">Aan</span>Fadhil</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar nisl eget mauris suscipit, eu cursus ligula fringilla. Duis blandit sollicitudin dolor eu ullamcorper. Proin dignissim eros mattis purus volutpat, in sagittis mauris imperdiet. Morbi feugiat commodo tortor at vestibulum. Aenean tempor nec mi a bibendum</p>
            <div className="bg-purple-700 mb-4 w-44 text-center text-white mt-4 py-1 font-semibold hover:bg-purple-800 transition hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ease-out duration-300 rounded-md">
              <a href="#">Hire me on Upwork</a>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-4 md:mx-60 text-center mt-4 md:mt-16 text-gray-500">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar nisl eget mauris suscipit, eu cursus ligula fringilla. Morbi feugiat commodo tortor at vestibulum. Aenean tempor nec mi a bibendum
        </p>
      </section>
    </Layout>
  )
}


export default Home 