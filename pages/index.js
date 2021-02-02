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
      <Shade key={index} rotation={index + 1} active={isCardHovered} duration={(index * 50) + 50} shade={index * 100} />
    )
  }

  return (
    <Layout>
      <div className="px-2 md:px-0 block mt-0 md:mt-24 align-text-bottom w-screen" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className="max-w-3xl mx-auto bg-gray-50 shadow-lg flex flex-col border-none md:border-solid md:border-2 md:border-gray-700 overflow-hidden md:flex-row rounded-sm md:rounded-full transition duration-300 transform hover:-translate-y-2 hover:scale-105 ease-out hover:shadow-2xl">
          <img src={"/potrait.png"} className="w-full md:w-80 md:h-80 object-contain shadow-none md:shadow-md bg-gray-200 rounded-none md:rounded-full h-32 mx-auto md:mx-0 mt-auto md:mt-0 max-w-lg" />
          <div className="py-4 px-4 my-auto md:pl-10 md:pr-14 rounded-lg">
            <h1 className="text-3xl mb-2 font-semibold">Hi, I'm<span className="bg-purple-700 px-1 mx-1 text-white rounded">Aan</span>Fadhil</h1>
            <p>a back-end specialist full-stack software engineer based in Indonesia. I've been working on various types of software development jobs for {duration} years, from an enterprise scale solutions to a small business spreadsheet automation.</p>
            <div className="bg-purple-700 mb-4 w-44 text-center text-white mt-6 py-2 font-semibold hover:bg-purple-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 ease-out duration-300 rounded-md">
              <a href="https://www.upwork.com/freelancers/~0180f6fc8fef16432d">Hire me on Upwork</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default Home 