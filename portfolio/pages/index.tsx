import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import RightArrow from '../components/RightArrow';
import grid from '../styles/Grid.module.scss';
import layout from '../styles/Layout.module.scss';
import card from '../styles/Card.module.scss';
import Socials from '../components/Socials';
import Link from 'next/link';

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
               {'A computer science student at Oregon State University.'}
            </p>
            <Socials />

            <div className={grid.grid}>
               <Link href='/projects'>
                  <a className={card.card}>
                     <h2 className={card.title}>
                        <span>Projects</span>
                        <RightArrow />
                     </h2>
                     <p>View my projects</p>
                  </a>
               </Link>
               <Link href='/resume'>
                  <a className={card.card}>
                     <h2 className={card.title}>
                        <span>Resume</span>
                        <RightArrow />
                     </h2>
                     <p>View my resume</p>
                  </a>
               </Link>
            </div>
         </main>
      </div>
   );
};

export default Home;
