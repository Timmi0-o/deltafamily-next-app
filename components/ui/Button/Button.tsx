'use client'
import { ReactNode, useState } from 'react'
import './Button.scss'

interface ButtonProps {
	children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
	const [borderAnimate, setBorderAnimate] = useState('')

	const handleAnimate = () => {
		setBorderAnimate('animate')
		setTimeout(() => {
			setBorderAnimate('')
		}, 500)
	}

	return (
		<button
			onClick={() => handleAnimate()}
			className={`w-[180px] h-[40px] bg-[#8B6ED7] text-[16px] rounded-[12px] font-medium text-[#ffffffdf] active:text-[#ffffff48] active:scale-[0.96] duration-300 bubbly-button ${borderAnimate}`}
		>
			{children}
		</button>
	)
}
