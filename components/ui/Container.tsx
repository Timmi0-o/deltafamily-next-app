import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
	gap?: string
}

export const Container = ({ children, gap }: ContainerProps) => {
	return (
		<div
			className={`flex flex-col max-w-[1300px] mx-auto px-[40px] my-[60px]`}
			style={{ gap: gap || '60px' }}
		>
			{children}
		</div>
	)
}