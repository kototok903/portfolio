import Link from 'next/link';
import ThemeToggle from '@/components/theme-toggle';
import BackButton from './back-button';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 sm:px-3'>
      <nav className='flex max-w-4xl items-center justify-between px-3 sm:py-3 py-5 sm:mt-6 mx-auto bg-background/75 backdrop-blur-sm sm:rounded-lg shadow-lg'>
        <div>
          <Link href='/' className='text-2xl font-bold'>
            {/* Back button */}
            <BackButton/>
            {/* No Title for now */}
          </Link>
        </div>

        <ul className='flex items-center flex-wrap gap-x-3 text-md sm:gap-x-10'>
          <li className='transition-colors'>
            <Link href='/#intro'>
              <Button className='text-muted-foreground hover:text-foreground text-md' variant='ghost'>About</Button>
            </Link>
          </li>
          <li className='transition-colors'>
            <Link href='/#projects'>
              <Button className='text-muted-foreground hover:text-foreground text-md' variant='ghost'>Projects</Button>
            </Link>
          </li>
          <li className='transition-colors'>
            <Link href='/#skills'>
              <Button className='text-muted-foreground hover:text-foreground text-md' variant='ghost'>Skills</Button>
            </Link>
          </li>
          <li className='transition-colors'>
            <Link href='/#contact-form'>
              <Button className='text-muted-foreground hover:text-foreground text-md' variant='ghost'>Contact</Button>
            </Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}