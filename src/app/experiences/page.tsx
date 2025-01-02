import { Experiences } from '@/components/blocks/experiences';
import { getExperiences } from '@/service/experience';

export default async function ExperiencesPage() {
	const experiences = await getExperiences();
	return (
		<Experiences experiences={experiences} />
	);
};