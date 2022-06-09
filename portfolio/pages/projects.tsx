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
            <title>{"Projects - Jacob Evans' Portfolio"}</title>
            <meta name='description' content="Jacob Evans' portfolio projects" />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <main className={layout.main}>
            <h1 className={layout.title}>Projects</h1>
            <p className={layout.subtitle}>
               {'Here are some of the projects I\'ve worked on.'}
            </p>
            <div className={grid.grid}>
               <a href='/projects/1' className={card.card}>
                  <h2 className={card.title}>
                     <span>Project 1</span>
                     <RightArrow />
                  </h2>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
               </a>
               <a href='/projects/2' className={card.card}>
                  <h2 className={card.title}>
                     <span>Project 2</span>
                     <RightArrow />
                  </h2>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
               </a>
            </div>
         </main>
      </div>
   );
};
export default Home;
