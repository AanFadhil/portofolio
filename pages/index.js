import Head from 'next/head'
import Image from 'next/image'
import Layout from '../hoc/layout2';
const Home = () => {

  return (
    <Layout>
      <section className="">
        <div className="mx-60 shadow-2xl bg-white rounded-lg flex flex-row">
          <div className="px-2 pt-2">
            <img src={"/potrait.png"}  className="w-full object-contain"/>
          </div>
          <div className="pt-10 pl-4 pr-9">
            <h1 className="text-3xl mb-2 font-semibold">Hi, I'm<span className="bg-purple-700 px-1 mx-1 text-white">Aan</span>Fadhil</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar nisl eget mauris suscipit, eu cursus ligula fringilla. Duis blandit sollicitudin dolor eu ullamcorper. Proin dignissim eros mattis purus volutpat, in sagittis mauris imperdiet. Morbi feugiat commodo tortor at vestibulum. Aenean tempor nec mi a bibendum</p>
            <div className="bg-purple-700 w-44 text-center text-white mt-4 py-1 font-semibold hover:bg-purple-800 transition hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 ease-out duration-300 rounded-md"><a href="#">Hire me on Upwork</a></div>
          </div>
        </div>
      </section>
      <section className="mx-60 text-center mt-12 text-purple-800">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar nisl eget mauris suscipit, eu cursus ligula fringilla. Morbi feugiat commodo tortor at vestibulum. Aenean tempor nec mi a bibendum
        </p>
      </section>
    </Layout>
  )
}


export default Home 