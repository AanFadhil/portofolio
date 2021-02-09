import Head from 'next/head'
import Layout from '../../hoc/layout2'
import ProjectLayout from '../../hoc/projectLayout'
import P from '../../components/paragraph'
import Sub from '../../components/subTitle'
import Stack from '../../components/stack'

const Attendance = () => {
    return (
        <Layout>
            <Head>
                <title>Attendance - Aan Fadhil</title>
            </Head>
            <ProjectLayout title="RFID Attendance System">
                <Sub>Overview</Sub>
                <P>Reengineering of attendance system using RFID card reader for students in
                    Amikom University as a replacement for the old one using magnetic stripe</P>
                <P>The reengineering was almost abandoned because at that time, the internal team didn't have the time to research the RFID read and write system</P>

                <Sub>Responsibilities</Sub>
                <P>As an intern, my main responsibilities was to research
                    how to write and read custom data to the RFID card using <Stack>HID Omnikey RFID Reader</Stack> and implement it as a desktop application system using <Stack>.Net</Stack> <Stack>WinForm</Stack></P>
                <P>The desktop application then integrated to the backend
                    Web API using <Stack>RestSharp</Stack></P>
                <Sub>Challenges</Sub>
                <P>This project was my first real project after a .Net bootcamp for a month. doing the research, reading the sample code and studied the documentation was pretty challenghing</P>
                <P>It took me almost 2 month just to implement the read and write feature to the RFID card</P>
                <P>But this project played a big role for my development career because I learned a lot about researching and reading documentation which is a big part of a software development</P>
            </ProjectLayout>
        </Layout>
    )
}

export default Attendance