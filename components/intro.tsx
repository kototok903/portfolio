import Image from 'next/image'
import authorImage from '@/public/images/author/stas_3to4.jpg'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Intro() {
  return (
    <section 
      id='intro' 
      className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center max-w-4xl scroll-mt-32'
    >
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title'>Hey, I&#39;m Stas.</h1>
        <p className='mt-3 text-muted-foreground'>
          I&#39;m a computer science major, studying at Iowa State University. I&#39;m
          passionate about turning ideas into reality and sharing knowledge with
          others.
        </p>
        <div className="flex flex-row items-center gap-x-2 gap-y-2 mt-8">
          <Link href="/resume">
            <Button>Resume</Button>
          </Link>
          {/* Github button */}
          <Link href="https://github.com/kototok903" target="_blank">
            <Button variant="secondary" size="icon">
              <svg fill='currentColor' viewBox='0 0 24 24'>
                <path
                  fillRule='evenodd'
                  d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                  clipRule='evenodd'
                />
              </svg>
            </Button>
          </Link>
          {/* LinkedIn button */}
          <Link href="https://www.linkedin.com/in/sbronevskiy/" target="_blank">
            <Button variant='secondary' size='icon'>
              <svg fill='currentColor' viewBox='0 0 448 512'>
                <path
                  fill='currentColor'
                  d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
      
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}