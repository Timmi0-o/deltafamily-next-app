import { AboutAs } from '@/components/layout/AboutAs/AboutAs'
import { FAQ } from '@/components/layout/FAQ/FAQ'
import { SchoolGrades } from '@/components/layout/SchoolGrades/SchoolGrades'
import { Container } from '@/components/ui/Container'

export default function Home() {
	return (
		<div className='min-h-[100vh]'>
			<Container>
				<AboutAs />
			</Container>
			<SchoolGrades />
			<Container>
				<FAQ />
			</Container>
		</div>
	)
}
