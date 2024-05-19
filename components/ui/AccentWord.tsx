import { ReactNode } from 'react'

interface AccentWordProps {
	children: ReactNode
}

export const AccentWord = ({ children }: AccentWordProps) => {
	return <span className='text-[#843cff]'>{children}</span>
}
