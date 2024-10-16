import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  return {
    props:{
      allPosts
    }
  }
}

export default function Home({allPosts}) {
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
            <li className={utilStyles.listItem}>
              OLX: Engenheiro de Software Pleno
              <br />
              <smal>Fevereiro de 2020 - Atual</smal>
            </li>
            <li className={utilStyles.listItem}>
              Grupo Portfolio: Desenvolvedor de Software
              <br />
              <smal>Novembro de 2020 - Julho de 2021</smal>
            </li>
            <li className={utilStyles.listItem}>
              Elevar commerce: Desenvolvedor de software
              <br />
              <smal>Julho de 2018 - Junho de 2020</smal>
            </li>
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