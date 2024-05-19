'use client'
import { FlyingSquares } from '@/components/ui/FlyingSquares/FlyingSquares'
import { useState } from 'react'

export const FAQ = () => {
	const [faqIndex, setFaqIndex] = useState<number | null>(null)

	const onOpen = (i: number) => {
		if (faqIndex === i) {
			setFaqIndex(null)
		} else {
			setFaqIndex(i)
		}
	}

	return (
		<div>
			{faqQest.map((qest, i) => (
				<div
					className={`duration-300 mb-[20px] pt-[20px] mx-[10px] md:mx-0 ${
						faqIndex !== null && 'pb-[1px] md:pb-[10px]'
					}  bg-[#f4f4f4] rounded-[12px]`}
					key={i}
					onClick={() => onOpen(i)}
				>
					<div className='flex justify-between px-[15px] select-none cursor-pointer'>
						<p className='text-[16px] sm:text-[28px] xl:text-[28px] text-left font-normal max-w-[300px] md:max-w-[1200px]'>
							{qest.title}
						</p>
						<svg
							className={`${
								faqIndex === i ? 'rotate-180' : 'rotate-0'
							} duration-[400ms] size-[24px] md:size-[32px]`}
							viewBox='0 0 24 24'
						>
							<path d='M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17'></path>
						</svg>
					</div>
					<div
						className={`${
							faqIndex === i
								? 'opacity-100 mt-[25px] mb-[20px] mx-[10px] md:mx-[20px] max-w-[1300px] max-h-[800px] border-r-[1px] border-b-[1px] border-[#8c6ed72b] shadow-[#8c6ed713] shadow-xl'
								: 'opacity-0 mt-0 max-h-[0px] border-r-[1px] border-b-[1px] border-transparent'
						} relative p-[10px] rounded-[12px] duration-[400ms] overflow-hidden`}
					>
						<FlyingSquares sqBg='#5c8dbd3f' />
						<p className='leading-normal text-[14px] sm:text-[18px]'>
							{qest.description}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

const faqQest = [
	{
		title: 'Что это значит?',
		description:
			'Это значит, что если к нам пришел второклассник с нечитаемым почерком и не усвоенными элементарными понятиями математики, то мы не будем давать ему программу второго класса, накапливая неуспешность и непонимание материала, как снежный ком, а будем работать над письмом и счетом в пределах десятка. До тех пор, пока ребенок не сможет двигаться дальше. Кроме базовых академических знаний для нас очень важна психологическая атмосфера и среда, в которой формируется психологически здоровая личность.',
	},
	{
		title: 'Как мы это делаем?',
		description:
			'Мы создаем не просто место, куда дети приходят послушать учителя и выполнить его задания, не болтая на занятиях с одноклассниками. Мы создаем сообщество детей, педагогов и родителей, в котором дружат, поддерживают, учат принимать особенности каждого. Мы внимательно следим за психологическим состоянием каждого ребенка и его поведением в группе. Всегда открыты к диалогу, обратной связи и пожеланиям родителей. День мы начинаем с познавательной, но веселой подЗАРЯДки, которая сближает детей. Возле школы есть безопасная детская площадка, где ребята дельтаплановцы активно носятся на переменках. Мы вкладываемся в семейные выезды, образовательные поездки, мероприятия, которые организуют сами дети.',
	},
	{
		title:
			'Как можно следить за результатами ребенка, если не нужно делать домашку?',
		description:
			'По каждому предмету для каждого ребенка разработан учебный навигатор. Это документ, в котором достаточно кратко и ёмко отражены не только темы ФГОСа, но и навыки, умения, которые должны быть освоены. Ребенок работает с навигатором, самостоятельно оценивая степень освоения знаний, затем это же оценивает педагог. Если есть существенный разрыв в этих оценках – это предмет для разговора с наставником и нахождения консенсуса. Также регулярно проводятся контрольные недели, на которых результаты оценивает методист.',
	},
	{
		title:
			'Как ребенок получит документ об образовании, если у Дельта-плана нет лицензии?',
		description:
			'Наши дети официально переведены на семейную форму обучения, а для сдачи промежуточной аттестации они прикрепляются к государственным школам. После годовых контрольных, которые они сдают на базе школы прикрепления, дети получают документ (справку) об освоении программы за свой класс и о переводе в следующий. То есть по итогам учебного года у вас будет документ, подтверждающий освоение учебной программы, с которым вы сможете обратиться в любую школу России и продолжить обучение. ',
	},
]
