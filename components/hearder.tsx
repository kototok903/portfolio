"use client"

import Link from 'next/link';
import ThemeToggle from '@/components/theme-toggle';
import BackButton from './back-button';
import { Button } from './ui/button';
import { sections } from '@/lib/data';
import { smoothScrollTo } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='fixed inset-x-0 top-0 z-50 sm:px-3'>
      <nav className='flex max-w-4xl items-center justify-between p-3 sm:mt-6 mx-auto bg-background/75 backdrop-blur-sm sm:rounded-lg shadow-lg'>
        <div>
          <Link href='/' className='text-2xl font-bold'>
            {/* Back button */}
            {pathname !== '/' && (
              <BackButton/>
            )}
            {/* No Title for now */}
          </Link>
        </div>

        <ul className='flex items-center flex-wrap gap-x-3 text-md sm:gap-x-10'>
          {sections.map(({name, id}) => (
            <li className='transition-colors' key={id}>
              <Link 
                href={`/#${id}`}
                // href={id}
                onClick={(e) => {
                  if (pathname === '/') smoothScrollTo({ e, id });
                }}
              >
                <Button className='text-muted-foreground hover:text-foreground text-md' variant='ghost'>{name}</Button>
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}