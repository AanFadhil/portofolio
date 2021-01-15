import Head from 'next/head'
import Layout from '../../hoc/layout2'
import ProjectLayout from '../../hoc/projectLayout'

const Sub = ({children}) => {
    return(
        <h2 className="font-bold text-gray-800 text-xl mb-2">{children}</h2>
    )
}

const P = ({children}) => {
    return(
        <p className="mb-4">{children}</p>
    )
}

const Stack = ({children}) => {
    return (
        <span className="bg-gray-200 px-2 rounded-lg text-xs leading-5 font-medium text-gray-700 text-center">
            {children}
        </span>
    )
}

const Sample = () => {
    return (
        <Layout>
            <Head>
                <title>Projects - Aan Fadhil</title>
            </Head>
            <ProjectLayout title="Sample Project">
                <Sub>Overview</Sub>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dolor ut nibh <Stack>React</Stack> pharetra luctus tristique arcu. Integer vel sagittis est, sit amet consequat velit. Nam accumsan sit amet lorem at imperdiet. In lacinia orci non dolor elementum sollicitudin. Vestibulum bibendum sapien quis lorem semper, id sagittis velit ultrices. Phasellus vulputate luctus tristique. Donec euismod velit at luctus convallis. Nam commodo, nulla eu elementum dictum, urna odio tempus lorem, sit amet lobortis tellus dolor vitae orci. Phasellus mollis hendrerit elit, in interdum nisl facilisis eu.</P>
                <Sub>Overview</Sub>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec <Stack>Docker</Stack> dolor ut nibh semper pharetra luctus tristique arcu. Integer vel sagittis est, sit amet consequat velit. Nam accumsan sit amet lorem at imperdiet. In lacinia orci non dolor elementum sollicitudin. Vestibulum bibendum sapien quis lorem semper, id sagittis velit ultrices. Phasellus vulputate luctus tristique. Donec euismod velit at luctus convallis. Nam commodo, nulla eu elementum dictum, urna odio tempus lorem, sit amet lobortis tellus dolor vitae orci. Phasellus mollis hendrerit elit, in interdum nisl facilisis eu.</P>
                <P>Lorem ipsum dolor sit amet, consectetur <Stack>ExpressJs</Stack> elit. Donec vel dolor ut nibh semper pharetra luctus tristique arcu. Integer vel sagittis est, sit amet consequat velit. Nam accumsan sit amet lorem at imperdiet. In lacinia orci non dolor elementum sollicitudin. Vestibulum bibendum sapien quis lorem semper, id sagittis velit ultrices. Phasellus vulputate luctus tristique. Donec euismod velit at luctus convallis. Nam commodo, nulla eu elementum dictum, urna odio tempus lorem, sit amet lobortis tellus dolor vitae orci. Phasellus mollis hendrerit elit, in interdum nisl facilisis eu.</P>
                <Sub>Overview</Sub>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel dolor ut nibh semper pharetra luctus tristique arcu. Integer vel sagittis est, sit amet consequat velit. Nam accumsan sit amet lorem at imperdiet. In lacinia orci non dolor elementum sollicitudin. Vestibulum bibendum sapien quis lorem semper, id sagittis velit ultrices. Phasellus vulputate luctus tristique. Donec euismod velit at luctus convallis. Nam commodo, nulla eu elementum dictum, urna odio tempus lorem, sit amet lobortis tellus dolor vitae orci. Phasellus mollis hendrerit elit, in interdum nisl facilisis eu.</P>
                <P>Lorem ipsum dolor sit amet, <Stack>NGINX</Stack> adipiscing elit. Donec vel dolor ut nibh semper pharetra luctus tristique arcu. Integer vel sagittis est, sit amet consequat velit. Nam accumsan sit amet lorem at imperdiet. In lacinia orci non dolor elementum sollicitudin. Vestibulum bibendum sapien quis lorem semper, id sagittis velit ultrices. Phasellus vulputate luctus tristique. Donec euismod velit at luctus convallis. Nam commodo, nulla eu elementum dictum, urna odio tempus lorem, sit amet lobortis tellus dolor vitae orci. Phasellus mollis hendrerit elit, in interdum nisl facilisis eu.</P>
            </ProjectLayout>
        </Layout>
    )
}

export default Sample

