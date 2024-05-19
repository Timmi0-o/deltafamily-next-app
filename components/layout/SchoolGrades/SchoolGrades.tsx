import { Container } from '@/components/ui/Container'
import Image from 'next/image'

export const SchoolGrades = () => {
	return (
		<>
			{schoolSections.map((section, i) => (
				<div
					key={i}
					className={`w-full  ${
						schoolSections.length !== i + 1 ? 'mb-[60px]' : 'mb-0'
					}`}
				>
					<div className='flex justify-center py-[16px] text-[24px] md:text-[52px] text-[#272727] bg-[#FFB273]'>
						{section.title}{' '}
						<span className='ml-[20px] bg-[#f0f0f0] rounded-[12px] px-[5px]'>
							{section.accent}
						</span>
					</div>
					<Container>
						<div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
							<div className='rounded-[12px] border-[1px] border-[#843cff] max-w-[350px] md:max-w-[1000px]'>
								<Image
									className='rounded-[12px]'
									src={section.img}
									height={400}
									width={700}
									alt=''
								/>
							</div>
							<p className='max-w-[350px] md:max-w-[700px] md:pl-[40px] mt-[10px] text-[18px] md:text-[26px] leading-normal font-normal'>
								{section.description}
							</p>
						</div>
					</Container>
				</div>
			))}
		</>
	)
}

const schoolSections = [
	{
		title: 'Начальное звено',
		accent: '1 - 4 класс',
		img: '/1-4Grades.jpg',
		description:
			'Здесь закладываются базовые знания по предметам - то есть фундамент. И он должен быть надежным! Наша задача – не просто подготовиться к аттестации по школьной программе, заучив все, что написано в тематических планах, а добиться качественного усвоения необходимых знаний и навыков.',
	},
	// {
	// 	title: 'Среднее звено',
	// 	accent: '5 - 9 класс',
	// 	img: 'https://goo.su/gPobg',
	// 	description:
	// 		'Здесь учащиеся углубляют свои знания по основным предметам, развивают критическое мышление и аналитические способности. Мы стремимся к тому, чтобы наши ученики не только успешно сдавали экзамены, но и понимали и применяли полученные знания на практике. Основное внимание уделяется всестороннему развитию личности, навыкам самостоятельного мышления и подготовке к дальнейшему обучению.',
	// },
]
