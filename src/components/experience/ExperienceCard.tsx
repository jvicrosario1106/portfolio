import type { Experience } from '../../types/content';
import { Chip } from '../ui/Chip';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <article className="timeline-item">
      <div className="timeline-item__node" aria-hidden="true" />
      <aside className="timeline-item__meta">
        <p>
          // {experience.startDate} - {experience.endDate}
        </p>
        <h2>{experience.company}</h2>
        <span>{experience.role}</span>
      </aside>
      <div className="timeline-item__panel">
        {experience.summary ? <p>{experience.summary}</p> : null}
        <div className="highlight-list">
          {experience.highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <section className="highlight" key={highlight.title}>
                <Icon size={24} aria-hidden="true" />
                <div>
                  <h3>{highlight.title}</h3>
                  <ul>
                    {highlight.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>
        <div className="chip-list timeline-item__chips" aria-label={`${experience.company} technologies`}>
          {experience.technologies.map((technology) => (
            <Chip key={`${experience.company}-${technology}`}>{technology}</Chip>
          ))}
        </div>
      </div>
      <span className="timeline-item__index">0{index + 1}</span>
    </article>
  );
}
