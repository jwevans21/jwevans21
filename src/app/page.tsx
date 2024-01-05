import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
   return (
      <main className='flex min-h-screen flex-col items-center justify-center p-24'>
         <div className=''>
            <h1 className='text-8xl font-bold'>Jacob Evans</h1>
         </div>
         <div className='flex flex-row justify-between items-center gap-10 p-12 w-1/2'>
            <a
               className='bg-indigo-500 p-4 rounded-md grow text-center font-bold'
               href='https://github.com/jwevans21'
               target='_blank'
               rel='noreferrer'
            >
               Github
            </a>
            <a
               className='bg-indigo-500 p-4 rounded-md grow text-center font-bold'
               href='https://www.linkedin.com/in/jwevans21/'
               target='_blank'
               rel='noreferrer'
            >
               LinkedIn
            </a>
            <a
               className='bg-indigo-500 p-4 rounded-md grow text-center font-bold'
               href='mailto:jacob@jwevans.dev'
               target='_blank'
               rel='noreferrer'
            >
               Email
            </a>
         </div>
         <div className='flex flex-row justify-between items-center gap-10 p-12 w-1/2'>
            <Link
               className='bg-indigo-500 p-4 rounded-md grow text-center font-bold'
               href='/resume'
            >
               Resume
            </Link>
         </div>
      </main>
   );
}
