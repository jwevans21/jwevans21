import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import RightArrow from '../components/RightArrow';
import grid from '../styles/Grid.module.scss';
import layout from '../styles/Layout.module.scss';
import card from '../styles/Card.module.scss';
import Socials from '../components/Socials';

const Home: NextPage = () => {
   return (
      <div className={layout.container}>
         <Head>
            <title>{"Jacob Evans' Portfolio"}</title>
            <meta name='description' content="Jacob Evans' portfolio" />
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <main className={layout.main}>
            <h1 className={layout.title}>Jacob Evans</h1>

            <p className={layout.subtitle}>
               Get started by editing{' '}
               <code className={grid.code}>pages/index.tsx</code>
            </p>
            <Socials />

            <div className={grid.grid}>
               <a href='https://nextjs.org/docs' className={card.card}>
                  <h2 className={card.title}>
                     <span>Documentation</span>
                     <RightArrow />
                  </h2>
                  <p>
                     Find in-depth information about Next.js features and API.
                  </p>
               </a>

               <a href='https://nextjs.org/learn' className={card.card}>
                  <h2 className={card.title}>
                     <span>Learn</span>
                     <RightArrow />
                  </h2>
                  <p>
                     Learn about Next.js in an interactive course with quizzes!
                  </p>
               </a>

               <a
                  href='https://github.com/vercel/next.js/tree/canary/examples'
                  className={card.card}>
                  <h2 className={card.title}>
                     <span>Examples</span>
                     <RightArrow />
                  </h2>
                  <p>
                     Discover and deploy boilerplate example Next.js projects.
                  </p>
               </a>

               <a
                  href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                  className={card.card}>
                  <h2 className={card.title}>
                     <span>Deploy</span>
                     <RightArrow />
                  </h2>
                  <p>
                     Instantly deploy your Next.js site to a public URL with
                     Vercel.
                  </p>
               </a>
            </div>
         </main>
      </div>
   );
};

export default Home;
