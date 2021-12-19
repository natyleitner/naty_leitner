import Head from 'next/head';
import NavBar from './navbar';

export const siteTitle: string = 'Naty Leitner';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Naty Leitner personal website" />
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
    {/* <Footer> </Footer> */}
  </div>
);

export default Layout;
