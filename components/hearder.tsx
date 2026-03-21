"use client"

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/theme-toggle';
import BackButton from './back-button';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { navItems, NavItem } from '@/lib/data';
import { smoothScrollTo } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { ArrowDownIcon, ChevronDownIcon } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='fixed inset-x-0 top-0 z-50 sm:px-3'>
      <nav className='flex max-w-4xl items-center justify-between p-3 sm:mt-6 mx-auto bg-background/75 backdrop-blur-sm sm:rounded-lg shadow-lg'>
        <div>
          <Link href='/' className='text-2xl font-bold'>
            {pathname !== '/' ? <BackButton/> : <div className='w-9'/>}
          </Link>
        </div>

        <ul className='flex items-center flex-wrap gap-x-1 text-base sm:gap-x-4'>
          {navItems.map((item) => (
            <li key={item.id}>
              {item.subItems ? (
                <NavDropdown item={item} />
              ) : (
                <Link
                  href={item.href || `/#${item.id}`}
                  onClick={(e) => {
                    if (pathname === '/') smoothScrollTo({ e, id: item.id });
                  }}
                >
                  <Button className='text-muted-foreground text-base' variant='ghost'>{item.name}</Button>
                </Link>
              )}
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

type NavDropdownProps = {
  item: NavItem;
}

function NavDropdown({ item }: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button className='text-muted-foreground text-base gap-2' variant='ghost'>
          {item.name}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='bg-background/75 backdrop-blur-sm'>
        <DropdownMenuItem className='text-base' asChild>
          <Link
            href={`/#${item.id}`}
            className='text-muted-foreground'
            onClick={(e) => {
              if (pathname === '/') {
                smoothScrollTo({ e, id: item.id });
                setOpen(false);
              }
            }}
          >
            {pathname === '/' && <ArrowDownIcon />}
            {item.name}
          </Link>
        </DropdownMenuItem>
        {item.subItems?.map((sub) => (
          <DropdownMenuItem key={sub.href} className='text-base' asChild>
            <Link href={sub.href} className='text-muted-foreground'>
              {sub.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}