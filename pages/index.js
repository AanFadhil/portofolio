import Head from 'next/head'
import Image from 'next/image'
import Layout from '../hoc/layout2';
import styles from './index.module.css';
const Home = () => {

  return (
    <Layout>
      <section className={styles.main}>
        <div>
          <div className={styles.photo}>
            <img src={"/potrait.png"} />
          </div>
          <div className={styles.desc}>
            <h1>Hi, I'm<span>Aan</span> Fadhil</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar nisl eget mauris suscipit, eu cursus ligula fringilla. Duis blandit sollicitudin dolor eu ullamcorper. Proin dignissim eros mattis purus volutpat, in sagittis mauris imperdiet. Morbi feugiat commodo tortor at vestibulum. Aenean tempor nec mi a bibendum</p>
            <div className={styles.upwork}><a href="#">Hire me on Upwork</a></div>
          </div>
        </div>
      </section>
      <section></section>
    </Layout>
  )
}


export default Home 