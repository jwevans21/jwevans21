import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import RightArrow from '../components/RightArrow';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
   return (
      <div className={styles.container}>
         <Head>
            <title>Create Next App</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <main className={styles.main}>
            <h1 className={styles.title}>Jacob Evans</h1>

            <p className={styles.subtitle}>
               Get started by editing{' '}
               <code className={styles.code}>pages/index.tsx</code>
            </p>
            <div className={styles.socials}>
               <a
                  href='https://github.com/jwevans21'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.social}>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     width='16'
                     height='16'
                     fill='currentColor'
                     className='bi bi-github'
                     viewBox='0 0 16 16'>
                     <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                  </svg>
                  <span>GitHub</span>
               </a>
               <a
                  href='https://www.linkedin.com/in/jwevans21'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.social}>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     width='16'
                     height='16'
                     fill='currentColor'
                     className='bi bi-linkedin'
                     viewBox='0 0 16 16'>
                     <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                  </svg>
                  <span>LinkedIn</span>
               </a>
               <a
                  href='mailto:jacob@jwevans.dev'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.social}>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     width='16'
                     height='16'
                     fill='currentColor'
                     className='bi bi-envelope-fill'
                     viewBox='0 0 16 16'>
                     <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
                  </svg>
                  <span>Email</span>
               </a>
            </div>

            <div className={styles.grid}>
               <a href='https://nextjs.org/docs' className={styles.card}>
                  <h2 className={styles['card-title']}>
                     <span>Documentation</span>
                     <RightArrow />
                  </h2>
                  <p>
                     Find in-depth information about Next.js features and API.
                  </p>
               </a>

               <a href='https://nextjs.org/learn' className={styles.card}>
                  <h2 className={styles['card-title']}>
                     <span>Learn</span>
                     <RightArrow />
                  </h2>
                  <p>
                     Learn about Next.js in an interactive course with quizzes!
                  </p>
               </a>

               <a
                  href='https://github.com/vercel/next.js/tree/canary/examples'
                  className={styles.card}>
                  <h2 className={styles['card-title']}>
                     <span>Examples</span>
                     <RightArrow />
                  </h2>
                  <p>
                     Discover and deploy boilerplate example Next.js projects.
                  </p>
               </a>

               <a
                  href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                  className={styles.card}>
                  <h2 className={styles['card-title']}>
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
