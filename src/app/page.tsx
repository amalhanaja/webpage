import {Testimonials, TestimonialsMarquee} from '@/components/blocks/testimonials';
import {Greetings} from '@/components/blocks/greetings';
import {ImageProfile} from '@/components/blocks/image-profile';
import {Tools} from '@/components/blocks/tools';
import {GithubContributions} from '@/components/blocks/github-contributions';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {ExperienceSummary} from '@/components/blocks/experience-summary';
import {Socials} from '@/components/blocks/socials';
import {HeroHighlight} from '@/components/ui/hero-highlight';
import {getExperiences} from '@/service/experience';

export default async function Home() {

    const name = 'Alfian Akmal Hanantio';
    const title = 'Software Engineer';
    const experiencesResult = await getExperiences();
    const experiences = experiencesResult.slice(0, 3);
    return (
        <HeroHighlight containerClassName="py-16 sm:py-20 px-4">
            <div className="grid mx-auto max-w-screen-xl grid-cols-12 gap-2">
                <Greetings name={name} title={title}/>
                <ImageProfile alt={name}/>
                <Tools/>
                <GithubContributions/>
                <Testimonials />
                <ExperienceSummary experiences={experiences}/>
                <Socials/>
            </div>
        </HeroHighlight>
    );
}
