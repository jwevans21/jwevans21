import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import LeftArrow from '../components/LeftArrow';

import layout from '../styles/Layout.module.scss';
import resumeGrid from '../styles/ResumeGrid.module.scss';
import resumeCard from '../styles/ResumeCard.module.scss';
import educationCard from '../styles/EducationCard.module.scss';
import skillsCard from '../styles/SkillsCard.module.scss';
import awardsCard from '../styles/AwardsCard.module.scss';

import resumeData from '../data/resume.json';
import Image from 'next/image';

type Props = {
   education: {
      school: string;
      degree: string;
      concentration: string;
      specialization: string;
      minor: string;
      dates: string;
      gpa: string;
      classes: {
         name: string;
         number: string;
         title: string;
         description: string;
         grade: string;
      }[];
   }[];
   skills: {
      name: string;
      icon: string;
      url: string;
      invertDark?: boolean;
      invertLight?: boolean;
   }[];
   awards: {
      name: string;
      dates: string;
      description: string;
   }[];
};

const Resume: NextPage<Props> = ({ education, skills, awards }) => {
   return (
      <div className={layout.container}>
         <Head>
            <title>{"Jacob Evans' Resume"}</title>
            <meta name='description' content="Jacob Evans' resume" />
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
            <h1 className={layout.title}>Resume</h1>

            <div className={resumeGrid.grid}>
               <div className={resumeCard.card}>
                  <h2 className={resumeCard.title}>
                     <span>Education</span>
                  </h2>
                  <div className={resumeCard.content}>
                     {education.map((school) => (
                        <div key={school.school} className={educationCard.item}>
                           <h3 className={educationCard.institution}>
                              <span>{school.school}</span>
                              <span className={educationCard.dates}>
                                 {school.dates}
                              </span>
                           </h3>
                           <p className={educationCard.degree}>
                              <span>
                                 {school.degree} in {school.concentration}
                              </span>
                              <span>GPA: {school.gpa}</span>
                           </p>
                           {school.specialization && (
                              <p className={educationCard.specialization}>
                                 Specialization: {school.specialization}
                              </p>
                           )}
                           {school.minor && (
                              <p className={educationCard.minor}>
                                 Minor: {school.minor}
                              </p>
                           )}
                           <p className={educationCard.classListHeader}>
                              Classes:
                           </p>
                           <ul className={educationCard.classList}>
                              {school.classes.map((classInfo, idx) => (
                                 <li key={idx}>
                                    <span>
                                       {classInfo.name}
                                       {classInfo.number}: {classInfo.title}
                                    </span>
                                    <span>
                                       Grade Received: {classInfo.grade}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
               <div className={resumeCard.card}>
                  <h2 className={resumeCard.title}>
                     <span>Skills</span>
                  </h2>
                  <div className={resumeCard.content}>
                     <ul className={skillsCard.list}>
                        {skills.map((skill, idx) => (
                           <li key={idx} className={skillsCard.item}>
                              <Image
                                 src={skill.icon}
                                 alt={skill.name}
                                 width={24}
                                 height={24}
                                 className={`${skillsCard.icon} ${
                                    skill.invertDark
                                       ? skillsCard.invertDark
                                       : ''
                                 } ${
                                    skill.invertLight
                                       ? skillsCard.invertLight
                                       : ''
                                 }`}
                              />
                              <span className={skillsCard.skill}>
                                 {skill.name}
                              </span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className={resumeCard.card}>
                  <h2 className={resumeCard.title}>
                     <span>Awards</span>
                  </h2>
                  <div className={resumeCard.content}>
                     {awards.map((award, idx) => (
                        <div key={idx} className={awardsCard.item}>
                           <h3 className={awardsCard.name}>
                              <span>{award.name}</span>
                              <span className={awardsCard.dates}>
                                 {award.dates}
                              </span>
                           </h3>
                           <p className={awardsCard.description}>
                              {award.description}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
};

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: { ...resumeData },
   };
};

export default Resume;
