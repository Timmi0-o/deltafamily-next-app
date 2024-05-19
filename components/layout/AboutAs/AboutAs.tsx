'use client'
import { AccentWord } from '@/components/ui/AccentWord'
import { FlyingSquares } from '@/components/ui/FlyingSquares/FlyingSquares'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import './AboutAs.scss'

export const AboutAs = () => {
	const words = ['Delta Plan', 'The Best School', "Abakan'e"]

	const [nowWord, setNowWord] = useState(words[0])
	let [wordIndex, setWordUndex] = useState(0)

	const [wordAnimate, setWordAnimate] = useState('')

	useEffect(() => {
		if (wordIndex === 3) {
			setWordUndex(0)
		}

		setTimeout(() => {
			setWordAnimate('translate-y-[40px] opacity-[0]')
			setNowWord(words[wordIndex])
			setWordUndex(wordIndex + 1)
			setTimeout(() => {
				setWordAnimate('translate-y-[0px] opacity-80')
			}, 150)
		}, 3000)
	}, [wordIndex])

	return (
		<div className='flex flex-col items-center gap-[60px]'>
			<div>
				<p className='logo text-[150px] mt-[60px] select-none'>Дельта-План</p>
			</div>
			<div className='flex gap-[5px] select-none'>
				<span className='text-[56px]'>Семейная школа в</span>
				<div className='flex items-center w-[480px] text-[56px] font-medium dropping-texts'>
					<p className={`text-[#843cff] duration-300 ${wordAnimate}`}>
						{`[ ${nowWord} ]`}
					</p>
				</div>
			</div>
			<div className='flex justify-between'>
				<div className='rounded-[12px] border-[1px] border-[#843cff] max-w-[1000px]'>
					<Image
						className='rounded-[12px]'
						src={'/group.jpg'}
						width={800}
						height={400}
						alt=''
					/>
				</div>
				<div className='flex justify-center items-center pl-[40px] w-[500px]'>
					<p className='text-[42px] font-medium text-[#000000ce] leading-normal'>
						Дельта-План - школа, которая <AccentWord>успевает </AccentWord>
						меняться вместе с<AccentWord> миром</AccentWord> вокруг!
					</p>
				</div>
			</div>
			<div className='relative text-[28px] font-medium w-full'>
				<FlyingSquares />
				{proposition.map((text, i) => (
					<div
						key={i}
						className={`flex mb-[60px] w-full ${
							i % 2 !== 0 ? 'justify-end' : 'justify-start'
						}`}
					>
						<p className={`max-w-[800px] leading-normal`}>{text}</p>
					</div>
				))}
				<div className='absolute bottom-0 left-0 w-full shadow-up'></div>
			</div>
		</div>
	)
}

const proposition = [
	'Умение учиться – один из главных навыков успешного человека. Мы влюбляем в школу детей с 1 по 9 класс. Создаем пространство, где учиться – это радостный труд в доброжелательной, но требовательной атмосфере.',
	'Используем инновационные подходы в обучении и развитии детей. Так, в Дельта-Плане нет внешней оценки, но есть планирование урока вместе с детьми и рефлексия (подведение итогов) в конце, ребёнок взращивает внутреннюю самооценку и самомотивацию, работая с индивидуальными учебными навигаторами.',
	'Группа не более 10-12 человек, потому что только в таких условиях возможен действительно индивидуальный подход.',
	'Развивающее поддерживающее пространство для педагогов, которые имеют возможность оставаться в ресурсе, несмотря на сложную работу с детьми.',
]
