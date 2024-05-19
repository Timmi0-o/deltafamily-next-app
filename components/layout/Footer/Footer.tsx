import { Container } from '@/components/ui/Container'
import Link from 'next/link'

export const Footer = () => {
	return (
		<div className='flex justify-center items-center bg-[#ffe6d6]'>
			<Container gap='20px'>
				<p className='font-normal text-[14px] md:text-[20px] text-center leading-normal'>
					Фонд поддержки образовательных инициатив и социальных проектов
					&quot;Дельта-План&quot;, ИНН 1900004754, ОГРН 1211900004150 Адрес:
					Республика Хакасия, г. Абакан, ул. Чертыгашева, 69, 2 эт.
				</p>
				<div className='flex justify-center gap-[20px]'>
					{socialNetworks.map((net, i) => (
						<Link href={net.link} key={i}>
							<div className='flex justify-center items-center gap-[10px] bg-[#f5f5f5] hover:bg-[#dfdfdf] active:bg-[#dfdfdf8c] active:scale-[0.96] active:text-[#0000003c] rounded-[12px] py-[8px] px-[10px] md:py-[15px] md:px-[20px] duration-300 select-none cursor-pointer'>
								<p className='text-[12px] md:text-[16px]'>{net.title}</p>
								<div>{net.img}</div>
							</div>
						</Link>
					))}
				</div>
			</Container>
		</div>
	)
}

const socialNetworks = [
	{
		title: 'Мы в VK',
		img: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='#8B6ED7'
				viewBox='-2.5 0 32 32'
				version='1.1'
				className=' size-[24px] md:size-[32px]'
			>
				<title>vk</title>
				<path d='M16.563 15.75c-0.5-0.188-0.5-0.906-0.531-1.406-0.125-1.781 0.5-4.5-0.25-5.656-0.531-0.688-3.094-0.625-4.656-0.531-0.438 0.063-0.969 0.156-1.344 0.344s-0.75 0.5-0.75 0.781c0 0.406 0.938 0.344 1.281 0.875 0.375 0.563 0.375 1.781 0.375 2.781 0 1.156-0.188 2.688-0.656 2.75-0.719 0.031-1.125-0.688-1.5-1.219-0.75-1.031-1.5-2.313-2.063-3.563-0.281-0.656-0.438-1.375-0.844-1.656-0.625-0.438-1.75-0.469-2.844-0.438-1 0.031-2.438-0.094-2.719 0.5-0.219 0.656 0.25 1.281 0.5 1.813 1.281 2.781 2.656 5.219 4.344 7.531 1.563 2.156 3.031 3.875 5.906 4.781 0.813 0.25 4.375 0.969 5.094 0 0.25-0.375 0.188-1.219 0.313-1.844s0.281-1.25 0.875-1.281c0.5-0.031 0.781 0.406 1.094 0.719 0.344 0.344 0.625 0.625 0.875 0.938 0.594 0.594 1.219 1.406 1.969 1.719 1.031 0.438 2.625 0.313 4.125 0.25 1.219-0.031 2.094-0.281 2.188-1 0.063-0.563-0.563-1.375-0.938-1.844-0.938-1.156-1.375-1.5-2.438-2.563-0.469-0.469-1.063-0.969-1.063-1.531-0.031-0.344 0.25-0.656 0.5-1 1.094-1.625 2.188-2.781 3.188-4.469 0.281-0.5 0.938-1.656 0.688-2.219-0.281-0.625-1.844-0.438-2.813-0.438-1.25 0-2.875-0.094-3.188 0.156-0.594 0.406-0.844 1.063-1.125 1.688-0.625 1.438-1.469 2.906-2.344 4-0.313 0.375-0.906 1.156-1.25 1.031z' />
			</svg>
		),
		link: 'https://vk.com/deltaplan_abakan',
	},
	{
		title: 'Мы в Telegram',
		img: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='#8B6ED7'
				className=' size-[24px] md:size-[32px]'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z'
				/>
			</svg>
		),
		link: 'https://t.me/deltaplanabakan',
	},
]
