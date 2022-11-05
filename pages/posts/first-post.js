import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
      < >
    
      <Head>
        <title>First Post real</title>
      </Head>
        
       <header> 
      <div>
        <p>First Post is ReAl Deal</p>


        </div>

      </header>
  
    <h3>Back to <Link href="/"><a>At HOME</a></Link></h3>
   </ >
    );
}