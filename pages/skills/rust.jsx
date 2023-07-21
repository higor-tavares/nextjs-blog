import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function Rust() {
    return (
    <Layout>
        <Head>
            <title>Rust Programing Language</title>
        </Head>
        <h1>Rust Programing Language</h1>
        <p>
            Rust is a complied programing language that is focused on performance and security
            you can learn more about rust in <a href="https://doc.rust-lang.org/book/" target='blank'>their website</a>
        </p>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
    </Layout>
    );
}