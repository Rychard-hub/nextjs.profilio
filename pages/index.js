import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styles from '../styles/global.css';
import Link from 'next/link';
import ProfilItem from '../components/profilio/ProfilItem';


const DUMMY_IMAGE = [
  {
    id: 'e1',
    title: 'Ferst Second',
    image: '/images/faces.jpg',
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create -NiceNext- App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico.jpg" />
      </Head>

      <main className={styles.main}>
  <section className={styles.code}>
          <ProfilItem meetups={DUMMY_IMAGE} />
          <p>{''}</p>
  </section>
 <section className={styles.right}>
          <h3>My Projects</h3>
        
          {''}
          <br></br>
          <footer className={styles.footer}>
            <h1 className={styles.title}>
              Go to<Link href="/posts/first-post">second page</Link>
            </h1>
          </footer>
        </section>
        
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
