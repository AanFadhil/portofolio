import Head from 'next/head'
import Image from 'next/image'
import Layout from '../hoc/layout2'
import { useState, useEffect } from 'react'

const Shade = ({ rotation, shade, active, duration }) => {
  const [init, setInit] = useState(false)
  useEffect(() => {
    setInit(true)
  }, [])
  return (
    <div style={{ width: "calc(100vw - 30rem)", transform: init && active ? `rotate(${rotation}deg)` : '', transitionDuration: active ? duration + "ms" : (700 - duration) + "ms" }} className={`top-4 sm:appearance-none mx-2 md:mx-60 shadow-md bg-purple-${shade} absolute transform transition duration-${duration} ease-out h-72 z-10 rounded-lg flex flex-col md:flex-row`}></div>
  )
}

const Home = () => {
  const [isCardHovered, setHovered] = useState(false)
  const duration = (new Date()).getFullYear() - 2015


  const shade = []

  for (let index = 1; index < 10; index++) {
    shade.push(
      <Shade key={index} rotation={index+1} active={isCardHovered} duration={(index*50)+50} shade={index*100} />
    )
  }

  return (
    <Layout>
      <div className="px-1 md:px-0 block mt-0 md:mt-24 align-text-bottom w-screen" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        
        {/* <Shade rotation={10} active={isCardHovered} duration={500} shade={900} />
        <Shade rotation={9} active={isCardHovered} duration={450} shade={800} />
        <Shade rotation={8} active={isCardHovered} duration={400} shade={700} />
        <Shade rotation={7} active={isCardHovered} duration={350} shade={600} />
        <Shade rotation={6} active={isCardHovered} duration={300} shade={500} />
        <Shade rotation={5} active={isCardHovered} duration={250} shade={400} />
        <Shade rotation={4} active={isCardHovered} duration={200} shade={300} />
        <Shade rotation={3} active={isCardHovered} duration={150} shade={200} />
        <Shade rotation={2} active={isCardHovered} duration={100} shade={100} /> */}
        <div className="max-w-2xl mx-auto shadow-lg bg-white rounded-lg rota flex flex-col md:flex-row">
          <div className="px-2 pt-2 bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none max-w-lg">
            <img src={"/potrait.png"} className="max-w-96 max-h-80 object-contain h-32 md:h-auto mt-auto max-w-lg" />
          </div>
          <div className="py-4 px-4 md:pt-10 md:pl-4 md:pr-9">
            <h1 className="text-3xl mb-2 font-semibold">Hi, I'm<span className="bg-purple-700 px-1 mx-1 text-white">Aan</span>Fadhil</h1>
            <p>a back-end specialist full-stack software engineer based in Indonesia. I've been working on various types of software development jobs for {duration} years, from an enterprise scale solutions to a small business spreadsheet automation.</p>
            <div className="bg-purple-700 mb-4 w-44 text-center text-white mt-6 py-2 font-semibold hover:bg-purple-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 ease-out duration-300 rounded-md">
              <a href="https://www.upwork.com/freelancers/~0180f6fc8fef16432d">Hire me on Upwork</a>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="mx-4 md:mx-60 text-center mt-4 md:mt-16 text-gray-500">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar nisl eget mauris suscipit, eu cursus ligula fringilla. Morbi feugiat commodo tortor at vestibulum. Aenean tempor nec mi a bibendum
        </p>
      </section> */}
    </Layout>
  )
}


export default Home 