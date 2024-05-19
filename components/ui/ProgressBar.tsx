'use client'
import { useEffect, useState } from 'react'

export const ProgressBar = () => {
	const [scrollRatio, setScrollRatio] = useState(0)

	const handleScroll = () => {
		const documentHeight = document.documentElement.scrollHeight
		const windowHeight = window.innerHeight
		const scrollTop = window.scrollY || document.documentElement.scrollTop

		const ratio = (scrollTop / (documentHeight - windowHeight)) * 100
		setScrollRatio(ratio)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className='z-[1000] fixed top-[64px] left-0 w-full h-[3px]'>
			<div
				className='bg-[#8B6ED7] h-full'
				style={{ width: `${scrollRatio}%` }}
			></div>
		</div>
	)
}
