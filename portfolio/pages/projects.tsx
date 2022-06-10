import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import LeftArrow from '../components/LeftArrow';
import RightArrow from '../components/RightArrow';
import grid from '../styles/Grid.module.scss';
import layout from '../styles/Layout.module.scss';
import card from '../styles/Card.module.scss';

import toURL from '../utils/toURL';

import projectsFile from '../data/projects.json';

type Props = {
   projects: {
      name: string;
      description: string;
      github: string;
      website: string;
      techStack: string[];
   }[];
};

const Projects: NextPage<Props> = ({ projects }) => {
   return (
      <div className={layout.container}>
         <Head>
            <title>{"Projects - Jacob Evans' Portfolio"}</title>
            <meta
               name='description'
               content="Jacob Evans' portfolio projects"
            />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <nav className={layout.nav}>
            <Link href='/'>
               <a className={layout.navLink}>
                  <LeftArrow />
                  <span>Home</span>
               </a>
            </Link>
         </nav>
         <main className={layout.main}>
            <h1 className={layout.title}>Projects</h1>
            <p className={layout.subtitle}>
               {"Here are some of the projects I've worked on."}
            </p>
            <div className={grid.grid}>
               {projects.map((project) => (
                  <Link
                     key={project.name}
                     href={`/projects/${toURL(project.name)}`}>
                     <a className={card.card}>
                        <h2 className={card.title}>
                           <span>{project.name}</span>
                           <RightArrow />
                        </h2>
                        <p>{project.description}</p>
                     </a>
                  </Link>
               ))}
               {/* <a href='/projects/1' className={card.card}>
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
               </a> */}
            </div>
         </main>
      </div>
   );
};

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: {
         projects: [...projectsFile],
      },
   };
};

export default Projects;
