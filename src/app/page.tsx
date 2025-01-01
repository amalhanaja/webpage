import { Hero, HeroProps } from '@/components/sections/hero';
import { Testimonials } from '@/components/sections/testimonials';
import { ExperienceContent, Experiences } from '@/components/sections/experiences';
import ddt from '../../public/company/ddt.png';
import moladin from '../../public/company/moladin.svg';
import linkaja from '../../public/company/linkaja.png';
import fazz from '../../public/company/fazz.png';

const getWordings = (repeatCount: number) => {
	const wordList = [
		'SOFTWAREENGINEER',
		'ANDROIDDEVELOPER',
		'MOBILEDEVELOPER',
		'BACKENDDEVELOPER',
		'FRONTENDDEVELOPER',
		'WEBDEVELOPER',
		'TECHENTHUSIAST'
	];
	const results: string[] = [];
	for (let i = 0; i < repeatCount; i++) {
		results.push(...wordList);
	}
	return results;
};

const experiences: ExperienceContent[] = [
	{
		jobTitle: 'Sofware Engineer - Android',
		location: 'Jakarta, Indonesia (Hybrid)',
		company: 'Digital Daya Teknologi',
		workingRange: 'Mar 2023 - Present',
		logo: ddt,
		links: [
			{
				label: 'ddt.id',
				href: 'https://ddt.id/'
			},
			{
				label: 'nobu Go (Android)',
				href: 'https://play.google.com/store/apps/details?id=com.nobubank.now'
			}
		],
		description: `
		Drove successful delivery of Android projects through strong leadership and 
		technical expertise. Streamlined development processes, improved team efficiency, 
		and ensured high-quality outcomes.`
	},
	{
		jobTitle: 'Senior Android Developer',
		location: 'Jakarta, Indonesia (Remote)',
		company: 'Moladin',
		logo: moladin,
		links: [
			{
				label: 'moladin.com',
				href: 'https://moladin.com/'
			},
			{
				label: 'Moladin Agen (Android)',
				href: 'https://play.google.com/store/apps/details?id=com.moladin.moladinagent'
			}
		],
		workingRange: 'Jun 2022 - Mar 2023',
		description: `Played a key role in developing the Warehouse Management System for Moladin Agent
		 Android App. Led initiatives to improve team knowledge and efficiency, including establishing 
		 an Android guild and driving DevOps adoption.`
	},
	{
		jobTitle: 'Senior Android Developer',
		location: 'Jakarta, Indonesia (Remote)',
		company: 'LinkAja',
		logo: linkaja,
		links: [
			{
				label: 'linkaja.com',
				href: 'https://linkaja.com/'
			},
			{
				label: 'LinkAja (Android)',
				href: 'https://play.google.com/store/apps/details?id=com.telkom.mwallet'
			}
		],
		workingRange: 'Oct 2020 - May 2022',
		description: `
		Streamlined development by developing and enhancing the LinkAja UI Kit & Toolkit. Drove 
		successful architecture migration, ensuring seamless user experience. Contributed to team 
		growth through technical interviews and mentorship. Collaborated effectively with designers to 
		build a robust design system, improving development efficiency and product quality.
`
	},
	{
		jobTitle: 'Android Engineer',
		location: 'Jakarta, Indonesia',
		company: 'Fazz Agen',
		logo: fazz,
		links: [
			{
				label: 'fazz.com',
				href: 'https://fazz.com/'
			},
			{
				label: 'Fazz Agen (Android)',
				href: 'https://play.google.com/store/apps/details?id=com.payfazz.android'
			}
		],
		workingRange: 'Jan 2018 - Jun 2020',
		description: `
		Contributed to the development of high-performing Android applications using best practices and 
		modern technologies like Kotlin, Java, and a range of tools. Collaborated effectively with 
		cross-functional teams to achieve project goals and deliver exceptional user experiences.
		`
	},
	{
		jobTitle: 'Android Engineer',
		location: 'Jakarta, Indonesia',
		company: 'CV. Sarana Komunikasi Indonesia',
		workingRange: 'Feb 2017 - Jan 2018',
		links: [{
			label: 'CV. Sarana Komunikasi Indonesia',
			href: 'https://www.linkedin.com/company/sarana-komunikasi-indonesia-cv/\''
		}],
		description: `
		Drove the development of the iPayKiOS Android application from the ground up. 
		Built and maintained critical business intelligence tools. Ensured application quality through 
		rigorous manual testing on diverse Android devices. Proficient in Java, Retrofit, and OkHttp.
		`
	}
];

export default function Home() {
	const heroProps = {
		name: 'Alfian Akmal Hanantio',
		title: 'Software Engineer',
		imageProfileWordList: getWordings(20).join('')
	} satisfies HeroProps;
	return (
		<>
			<Hero {...heroProps} />
			<Testimonials />
			<Experiences experiences={experiences} />
		</>
	);
}
