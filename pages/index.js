import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Picture from './posts/picture';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create -NiceNext- App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico.jpg" />
      </Head>

      <main className={styles.main}>
  <section>

    <Picture />
      <p> Hey guys , I am RycharDson , i'm like this course.
        Thanks for enrolling in this course!</p>



  </section>



        <h1 className={styles.title}>
           Come Bact to <Link href="/posts/first-post">Home!</Link>
        </h1> 
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
