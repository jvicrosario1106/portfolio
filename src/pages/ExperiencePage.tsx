import { ExperienceCard } from '../components/experience/ExperienceCard';
import { PageIntro } from '../components/ui/PageIntro';
import { experiences } from '../content/experience';

export function ExperiencePage() {
  return (
    <div className="page page--timeline">
      <div className="trajectory-hero">
        <PageIntro
          eyebrow="Trajectory"
          title="Evolution"
          description="Building intelligent systems and seamless interfaces across the modern tech stack."
          centered
        />
      </div>
      <section className="container timeline" aria-label="Professional experience">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`${experience.company}-${experience.role}`} experience={experience} index={index} />
        ))}
      </section>
    </div>
  );
}
