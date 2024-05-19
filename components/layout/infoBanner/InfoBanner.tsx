'use client'
import { Button } from '@/components/ui/Button/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'
import Link from 'next/link'
import './InfoBanner.scss'

export const InfoBanner = () => {
	return (
		<div className='fixed top-0 left-0 z-[10] flex items-center justify-center w-full h-[64px] bg-[#ffe6d6] shadow-lg'>
			<div className='flex justify-between w-[1220px]'>
				<span className='text-[28px] text-[#4f4f4f] select-none'>
					Семейный лагерь в Хакасии с 29 июня по 7 июля
				</span>
				<Link href='https://sites.google.com/view/deltaplan19/family/famcamp19'>
					<Button>Узнать подробности</Button>
				</Link>
			</div>
			<ProgressBar />
		</div>
	)
}
