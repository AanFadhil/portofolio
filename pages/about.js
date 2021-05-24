import Head from 'next/head'
import Link from 'next/link'
import P from '../components/paragraph'
import Sub from '../components/subTitle'
import Layout from '../hoc/layout2'
import ProjectLayout from '../hoc/projectLayout'

const Ul = ({ children }) => {
    return (
        <ul className="list-disc list-inside mb-1">
            {children}
        </ul>
    )
}

const About = ({ }) => {
    return (
        <Layout>
            <ProjectLayout title="About Me">
                <P>a back-end specialist full-stack developer, currently located in Indonesia. able to learn the business behind a project. Worked in almost every stage of the software development cycle from requirement analysis to maintaining live product. I've dealt with many tech stack and integration requirement</P>
                <P>Experienced in designing a code base to be efficient and flexible for the use case and surounding environment</P>
                <P>Passionate to do the research needed for a project</P>

                <Sub level={2}>My Stacks</Sub>
                <hr />
                <br />
                <div className="grid grid-cols-2 mb-6">
                    <div>
                        <Sub level={3}>Backend</Sub>
                        <Sub level={5}>Language</Sub>
                        <Ul>
                            <li>C#</li>
                            <li>Javascript</li>
                        </Ul>
                        <Sub level={5}>Runtime</Sub>
                        <Ul>
                            <li>.Net Framework</li>
                            <li>NodeJs</li>
                        </Ul>
                        <Sub level={5}>Framework</Sub>
                        <Ul>
                            <li>.Net Framework (WinForm, ASP)</li>
                            <li>ExpressJs</li>
                        </Ul>
                        <Sub level={5}>Database</Sub>
                        <Ul>
                            <li>PostgreSQL</li>
                            <li>Ms SQL Server</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                        </Ul>
                        <Sub level={5}>Infrastructure</Sub>
                        <Ul>
                            <li>Docker</li>
                            <li>Digital Ocean</li>
                            <li>IIS</li>
                        </Ul>
                    </div>
                    <div>
                        <Sub level={3}>Frontend</Sub>
                        <Sub level={5}>Framework</Sub>
                        <Ul>
                            <li>React Js</li>
                            <li>Redux</li>
                            <li>Next Js</li>
                        </Ul>
                        <Sub level={5}>Styling</Sub>
                        <Ul>
                            <li>Tailwind CSS</li>
                            <li>Bootstrap</li>
                            <li>Admin LTE</li>
                        </Ul>
                        <Sub level={5}>Concept</Sub>
                        <Ul>
                            <li>Progressive Web App</li>
                            <li>Single Page Application</li>
                        </Ul>
                    </div>
                </div>

                <Sub level={2}>Work Experience</Sub>
                <hr />
                <br />
                <div className="md:ml-4">
                    <Sub level={3}>NodeJs Developer</Sub>
                    <P className="mb-1 font-semibold">Scopic Software (2021 - Present)</P>
                    <P>Responsible for Building NodeJs library and application, create task breakdown and doing the research needed for a task</P>

                    <Sub level={3}>Technical Lead</Sub>
                    <P className="mb-1 font-semibold">Hitamedia (2020 - 2021)</P>
                    <P>Responsible for Building website and internal project management systems using NodeJs and ReactJs, providing a google sheet solution for finance and marketing data</P>

                    <Sub level={3}>Technical Lead</Sub>
                    <P className="mb-1 font-semibold">Suitmedia (2018 - 2020)</P>
                    <P>Responsible for leading a team of developers and developing web application on .Net environment. Writing a code base and doing the research needed for a project</P>

                    <Sub level={3}>Fullstack .Net Developer</Sub>
                    <P className="mb-1 font-semibold">PT. Kairos Utama Indonesia (2016 - 2018)</P>
                    <P>Responsible for developing web application using asp.net webform, MVC, Web API and Sql Server. including enhancing and bug fixing existing application</P>


                    <Sub level={3}>Internship .Net Developer</Sub>
                    <P className="mb-1 font-semibold">AMIKOM Innovation Center (2015 - 2016)</P>
                    <P>Developing a RFID attendance system using .Net WinForm and Web API</P>
                </div>
            </ProjectLayout>
        </Layout>
    )
}

export default About