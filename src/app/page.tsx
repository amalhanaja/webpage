import { Hero, HeroProps } from '@/components/sections/hero';

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

export default function Home() {
	const heroProps = {
		name: 'Alfian Akmal Hanantio',
		title: 'Software Engineer',
		imageProfileWordList: getWordings(20).join('')
	} satisfies HeroProps;
	return (
		<>
			<Hero {...heroProps} />
		</>
	);
}
