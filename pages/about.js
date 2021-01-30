import Head from 'next/head'
import Link from 'next/link'
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
            <ProjectLayout title="About">
                <Sub level={3}>Exprerience</Sub>
                    <P>I am a back-end specialist full-stack developer, currently based on Indonesia. able to learn the business. Worked in almost every stage of the software development cycle from requirement analysis to maintaining live product. I've dealt with many tech stack and integration requirement</P>
                    <P>Experienced in designing the code base to be efficient and flexible for the use case and surounding environment</P>
                    <P>Passionate to do the research needed for the project</P>
                    
                <Sub>My Stacks</Sub>
                <div className="grid grid-cols-2 mb-6">
                    <div>
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
                            <li>Redis</li>
                        </Ul>
                        <Sub level={4}>Infrastructure</Sub>
                        <Ul>
                            <li>Docker</li>
                            <li>Digital Ocean</li>
                            <li>IIS</li>
                        </Ul>
                    </div>
                    <div>
                        <Sub level={3}>Frontend</Sub>
                        <Sub level={4}>Framework</Sub>
                        <Ul>
                            <li>React Js</li>
                            <li>Redux</li>
                            <li>Next Js</li>
                        </Ul>
                        <Sub level={4}>Styling</Sub>
                        <Ul>
                            <li>Tailwind CSS</li>
                            <li>Bootstrap</li>
                            <li>Admin LTE</li>
                        </Ul>
                        <Sub level={4}>Concept</Sub>
                        <Ul>
                            <li>Progressive Web App</li>
                            <li>Single Page Application</li>
                        </Ul>
                    </div>
                </div>
            </ProjectLayout>
        </Layout>
    )
}

export default About