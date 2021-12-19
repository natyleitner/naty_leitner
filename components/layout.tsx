import Head from 'next/head';
import Footer from './footer';
import NavBar from './navbar';

export const siteTitle: string = 'Naty Leitner';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    {/* TODO: how to have only 1 head? Probably in page file? */}
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Naty Leitner's personal website" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <header>
      <NavBar />
    </header>
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
