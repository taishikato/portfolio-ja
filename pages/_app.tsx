import Head from 'next/head';

import '../styles/globals.css';
import '../styles/tailwind.css';

import useScript from '../util/useScript';

const url = 'https://portfolio.taishikato.com/';
const description = '加藤大志のポートフォリオサイトでございます';
const title = '加藤大志のポートフォリオ';

function MyApp({ Component, pageProps }) {
  useScript('/js/myTimezone.js');
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>加藤 大志</title>
        <link rel="icon" href="/favicon.ico" />
        <link key="canonical" rel="canonical" href={url} />
        <meta key="description" name="description" content={description} />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta
          key="keywords"
          name="keywords"
          content="developer,web,javascript,react,Next.js,vue.js,nuxt.js,traveler,travel,adventure,portfolio"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:site_name" property="og:site_name" content={title} />
        <meta key="og:url" property="og:url" content={url} />
        <meta key="og:image" property="og:image" content="/og-image.png" />
        <meta
          key="twitter:site"
          property="twitter:site"
          content="@taishikat0"
        />
        <meta
          key="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />
      </Head>
      <div className="mx-8">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
