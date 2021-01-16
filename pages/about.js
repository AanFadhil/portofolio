import Head from 'next/head'
import P from '../components/paragraph'
import Sub from '../components/subTitle'
import Layout from '../hoc/layout2'
import ProjectLayout from '../hoc/projectLayout'

const Ul = ({ children }) => {
    return (
        <ul className="list-disc list-inside">
            {children}
        </ul>
    )
}

const About = ({ }) => {
    return (
        <Layout>
            <Head>
                <title>About - Aan Fadhil</title>
            </Head>
            <ProjectLayout title="About">
                <Sub>What I do ?</Sub>
                <P>
                    As a full stack programmer, I was involved in almost every stage of the software development, from defining business specifications, software requirements, scrum planning, server setup for deployment and continues integration, product design and the implementation which includes coding and testing.
                </P>
                <P>
                    If you think we can work together on your project, although it’s still just an Idea. Please, don’t hesitate to contact me.
                </P>
                <Sub>My Stacks</Sub>
                <Sub level={3}>Backend</Sub>
                <Sub level={4}>Language</Sub>
                <Ul>
                    <li>C#</li>
                    <li>Javascript</li>
                </Ul>
                <Sub level={4}>Runtime</Sub>
                <Ul>
                    <li>.Net Framework</li>
                    <li>NodeJs</li>
                </Ul>
                <Sub level={4}>Framework</Sub>
                <Ul>
                    <li>.Net Framework (WinForm, ASP)</li>
                    <li>ExpressJs</li>
                </Ul>
                <Sub level={4}>Database</Sub>
                <Ul>
                    <li>PostgreSQL</li>
                    <li>Ms SQL Server</li>
                    <li>MongoDB</li>
                </Ul>
                <Sub level={4}>Infrastructure</Sub>
                <Ul>
                    <li>PostgreSQL</li>
                    <li>Ms SQL Server</li>
                    <li>MongoDB</li>
                </Ul>

            </ProjectLayout>
        </Layout>
    )
}

export default About