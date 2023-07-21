import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi. My name is Higor Tavares and I am a Software Enginner on Olx Brasil! 
          I am focused on backEnd and also am learnign frontEnd for fun :3</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2>Programing Skills</h2>
        <p>
        <Link href="/skills/rust">Rust</Link>
        </p>
      </section>
    </Layout>
  );
}