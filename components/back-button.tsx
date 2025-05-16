'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';

export default function BackButton() {
  return (
    <Button className='text-muted-foreground hover:text-foreground' size='sm' variant='ghost'>
        <ArrowLeftIcon/>
    </Button>
  )
}
