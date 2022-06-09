import type { NextPage } from 'next';
import Head from 'next/head';
import layout from '../styles/Layout.module.scss';
import link from '../styles/Link.module.scss';
const NotFound: NextPage = () => {
   return (
      <div className={layout.container}>
         <Head>
            <title>{'404 - Page Not Found'}</title>
            <meta name='description' content='Page not found' />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <main className={layout.main}>
            <h1 className={layout.title}>404</h1>
            <p className={layout.subtitle}>
               Page not found. <a className={link.link} href='/'>Go back to the homepage.</a>
            </p>
         </main>
      </div>
   );
};

export default NotFound;
