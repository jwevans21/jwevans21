import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import LeftArrow from '../../components/LeftArrow';
import RightArrow from '../../components/RightArrow';
import grid from '../../styles/Grid.module.scss';
import layout from '../../styles/Layout.module.scss';
import card from '../../styles/Card.module.scss';
import techStack from '../../styles/Tech.module.scss';

import toURL from '../../utils/toURL';

import projects from '../../data/projects.json';

type Props = {
   project: {
      name: string;
      description: string;
      github: string;
      website: string;
      techStack: string[];
   };
};

const Project: NextPage<Props> = ({ project }) => {
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
            <Link href='/projects'>
               <a className={layout.navLink}>
                  <LeftArrow />
                  <span>Projects</span>
               </a>
            </Link>
         </nav>
         <main className={layout.main}>
            <h1 className={layout.title}>{project.name}</h1>
            <p className={layout.subtitle}>{project.description}</p>
            <div className={techStack.stack}>
               {project.techStack.map((tech) => (
                  <span key={tech} className={techStack.item}>
                     {tech}
                  </span>
               ))}
            </div>
            <div className={grid.grid}>
               <a
                  href={project.github}
                  target='_blank'
                  rel='noreferrer'
                  className={card.card}>
                  <h2 className={card.title}>
                     <span>View on GitHub</span>
                     <RightArrow />
                  </h2>
               </a>
               <a
                  href={project.website}
                  target='_blank'
                  rel='noreferrer'
                  className={card.card}>
                  <h2 className={card.title}>
                     <span>View Deployed</span>
                     <RightArrow />
                  </h2>
               </a>
            </div>
         </main>
      </div>
   );
};

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: projects.map((project) => ({
         params: {
            project: toURL(project.name),
         },
      })),
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps = async (context) => {
   const project = context.params ? context.params.project || '' : '';
   return {
      props: {
         project: projects.find((p) => toURL(p.name) === project),
      },
   };
};

export default Project;
