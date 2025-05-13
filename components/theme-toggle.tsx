'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'

export default function ThemeTogle() {
	const {setTheme, resolvedTheme} = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

  return (
    <Button
			className='text-muted-foreground hover:text-foreground'
			size='sm'
			variant='ghost'
			onClick={() => {
				setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
			}}
		>
			{resolvedTheme === 'dark' ? (
				<MoonIcon className='size-4' />
			) : (
				<SunIcon className='size-4' />
			)}

			<span className="sr-only">Toggle theme</span>
		</Button>
  )
}