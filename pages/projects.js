import Head from 'next/head'
import Link from 'next/link'
import Layout from '../hoc/layout2'
import Card from '../components/card'
import Pills from '../components/pills'
import projects from '../projects.json';

const Projets = () => {
  return (
    <Layout>
      <Head>
        <title>Projects - Aan Fadhil</title>
      </Head>
      <section className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-16 gap-x-6 gap-y-2 md:gap-y-6">
        {
          projects.map(({ id, desc, link, name, subtitle, stack, thumbnail }) => (
            <div className="p-2" key={id}>
              {/* <Link href={link}> */}
                <a>
                  <Card className="group shadow-lg overflow-hidden transition duration-300 transform hover:-translate-y-1 hover:scale-105 ease-out hover:shadow-xl">
                    <div className="overflow-hidden">
                      <img src={thumbnail ? thumbnail : ("https://picsum.photos/300?random=" + id)}
                        className="object-cover w-full h-52 md:h-60 rounded-t-md object-center transform scale-110 group-hover:scale-100 transition duration-300 -translate-y-1 group-hover:translate-y-0 ease-out" />
                    </div>
                    <div className="px-4 py-2">
                      <h2 className="font-bold text-lg">{name}</h2>
                      <h3 className="text-gray-600">{subtitle}</h3>
                      <p className="text-sm mt-2 pb-4 text-gray-500">
                        {desc}
                      </p>
                      <Pills className="mb-4" data={stack} pillsClass="bg-gray-200" />
                    </div>
                  </Card>
                </a>
              {/* </Link> */}
            </div>
          ))

        }
      </section>
    </Layout>
  )
}

export default Projets

