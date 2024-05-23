'use client'
import { Button } from '@/components/ui/Button/Button'
import { ProgressBar } from '@/components/ui/ProgressBar'
import Link from 'next/link'
import './InfoBanner.scss'

export const InfoBanner = () => {
	return (
		<div className='fixed top-0 left-0 z-[10] flex items-center justify-center w-full h-[64px] bg-[#ffe6d6] shadow-lg'>
			<div className='flex justify-between items-center w-[600px] md:w-[1220px] px-[20px]'>
				<span className='hidden md:block md:text-[23px] lg:text-[24px] xl:text-[28px] text-[#4f4f4f] select-none'>
					Семейный лагерь в Хакасии с 29 июня по 7 июля
				</span>
				<span className='block text-[24px] md:hidden text-[#4f4f4f] select-none'>
					Семейный лагерь
				</span>
				<Link href='https://sites.google.com/view/deltaplan19/family/famcamp19'>
					<Button size='block md:hidden w-[100px] h-[40px] text-[14px]'>
						Подробности
					</Button>
					<Button size='hidden md:block w-[160px] h-[40px] text-[14px]'>
						Узнать подробности
					</Button>
				</Link>
			</div>
			<ProgressBar />
		</div>
	)
}
