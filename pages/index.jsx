import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import { get } from '@vercel/edge-config';

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const experience = await get('experience')
  return {
    props:{
      allPosts,
      experience
    }
  }
}

export default function Home({allPosts, experience}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Olá, Seja bem vindo ao meu portfólio! Me chamo Higor Tavares e atualmente trabalho como Engenheiro de software.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Experiência</h2>
        <ul className={utilStyles.list}>
        {experience.map(({ id, title, company, startDate, endDate }) => (
            <li className={utilStyles.listItem} key={id}>
              ({company}) {title}
              <br />
              <small className={utilStyles.lightText}>
                {startDate} - {endDate}
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}