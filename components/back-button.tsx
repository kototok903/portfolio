'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';

export default function BackButton() {
  const pathname = usePathname();

  if (pathname === '/') return;

  return (
    <Button className='text-muted-foreground hover:text-foreground' size='sm' variant='ghost'>
        <ArrowLeftIcon/>
    </Button>
  )
}
