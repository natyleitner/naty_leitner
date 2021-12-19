import Head from 'next/head';
import NavBar from '../components/navbar';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About me</title>
        <meta name="description" content="About Naty Leitner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <NavBar /> */}
        <h1>about</h1>
      </main>
    </div>
  );
}
