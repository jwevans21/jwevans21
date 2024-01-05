export default function Resume() {
   return (
      <main className='flex min-h-screen flex-col items-center justify-center p-24 gap-16'>
         <div className=''>
            <h1 className='text-8xl font-bold'>Resume</h1>
         </div>
         <div className='flex flex-row gap-4 p-8 w-1/2 bg-slate-700 rounded-lg'>
            <h2 className='text-2xl font-bold m-4'>Education</h2>
            <div className='flex flex-col gap-4 p-4 w-full bg-slate-500 rounded-lg'>
               <div className='flex flex-row justify-between'>
                  <h3 className='text-xl font-bold'>Oregon State University</h3>
                  <h3 className='font-bold'>
                     September 2021 {'\u2014'} Present
                  </h3>
               </div>
               <div className='flex flex-row justify-between'>
                  <h4 className='font-bold'>
                     Bachelor of Science in Computer Science
                  </h4>
                  <h4 className='font-bold'>GPA: 3.86</h4>
               </div>
            </div>
         </div>
         <div className='flex flex-row gap-4 p-8 w-1/2 bg-slate-700 rounded-lg'>
            <h2 className='text-2xl font-bold m-4'>Experience</h2>
            <div className='flex flex-col gap-4 p-4 w-full bg-slate-500 rounded-lg'>
               <div className='flex flex-row justify-between'>
                  <h3 className='text-xl font-bold'>
                     EECS and COE Undergraduate Learning Assistant
                  </h3>
               </div>
               <div className='flex flex-row justify-between'>
                  <h4 className='font-bold'>Oregon State University</h4>
                  <h4 className='font-bold'>
                     September 2023 {'\u2014'} Present
                  </h4>
               </div>
               <div className='flex flex-col justify-between m-2 ml-6'>
                  <ul className='list-disc'>
                     <li>
                        Assist approximately 75 students a term with hands-on
                        learning assignments in a laboratory setting
                     </li>
                     <li>
                        Hold 3+ office hours a week to assist students with the
                        course material and assignments
                     </li>
                     <li>
                        Graded programming and design oriented assignments to
                        direct students learning
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className='flex flex-row gap-4 p-8 w-1/2 bg-slate-700 rounded-lg'>
            <h2 className='text-2xl font-bold m-4'>Skills</h2>
            <div className='flex flex-col gap-4 p-4 w-full bg-slate-500 rounded-lg'>
               <div className='flex flex-col justify-between m-2 ml-6'>
                  <ul className='list-disc'>
                     <li>Languages: C, C++, Rust, Python, JavaScript, Bash, Zig, Lua, HTML, CSS</li>
                     <li>Frameworks: React, Next.js, Node.js, Express</li>
                     <li>Developer Tools: Git, GitHub, CMake, Google Test, Makefile, VS Code, Neovim/Vim</li>
                     <li>Software: Windows, Linux, Microsoft Office 365</li>
                     <li>Other: Scrum, Teamwork, Conflict Management, Communication</li>
                  </ul>
               </div>
            </div>
         </div>
      </main>
   );
}
