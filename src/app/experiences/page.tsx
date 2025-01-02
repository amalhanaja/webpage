import { Experiences } from '@/components/blocks/experiences';
import { getExperiences } from '@/service/experience';

export default function ExperiencesPage() {
	const experiences = getExperiences();
	return (
		<Experiences experiences={experiences} />
	);
};