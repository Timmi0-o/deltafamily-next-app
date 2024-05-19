'use client'
import { ReactNode, useState } from 'react'
import './Button.scss'

interface ButtonProps {
	children: ReactNode
	width?: string
	height?: string
}

export const Button = ({ children, width, height }: ButtonProps) => {
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
			className={`bg-[#8B6ED7] text-[16px] rounded-[12px] font-medium text-[#ffffffdf] active:text-[#ffffff48] active:scale-[0.96] duration-300 bubbly-button ${borderAnimate}`}
			style={{ width: width || '180px', height: height || '40px' }}
		>
			{children}
		</button>
	)
}
