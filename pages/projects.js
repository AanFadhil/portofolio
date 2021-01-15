import Head from 'next/head'
import Link from 'next/link'
import Layout from '../hoc/layout2'
import Card from '../components/card'
import Pills from '../components/pills'

const Projets = () => {
  return (
    <Layout>
      <Head>
        <title>Projects - Aan Fadhil</title>
      </Head>
      <section className="grid grid-cols-3 px-16 gap-x-6 gap-y-6">
        {
          [1, 2, 3, 4, 5].map(item => (
            <div className="p-2" key={item}>
              <Link href="/project/sample">
                <a>
                  <Card className="shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 ease-out hover:shadow-xl cursor-pointer">
                    <img src={"https://picsum.photos/300?random=" + item} className="object-cover w-full h-60 rounded-t-md object-center" />
                    <div className="px-4 py-2">
                      <h2 className="font-bold text-lg">Project Name</h2>
                      <h3 className="text-gray-600">Project Location, 2015-2020</h3>
                      <p className="text-sm mt-2 pb-4 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at urna sed arcu scelerisque aliquet a vitae orci. Integer ac.
                  </p>
                      <Pills className="mb-4" data={["react", "nodeJs", ".net core", "redux"]} pillsClass="bg-gray-200" />
                    </div>
                  </Card>
                </a>
              </Link>
            </div>
          ))

        }
      </section>
    </Layout>
  )
}

export default Projets

