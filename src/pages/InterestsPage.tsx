import { BrainCircuit, Code, LucideIcon, MapPin } from 'lucide-react';
import { Chip } from '../components/ui/Chip';
import { interests } from '../content/interests';

export function InterestsPage() {

  const iconMap: Record<string, LucideIcon> = {
    BrainCircuit,
    Code,
    MapPin,
  };

  return (
    <div className="page interests-page">
      <section className="container interests-hero">
        <h1>
          Beyond the <span>Code</span>
        </h1>
        <p>
          Exploring the intersection of AI, software engineering, and creativity—building intelligent systems, experimenting with emerging technologies, and turning ideas into meaningful digital experiences.
        </p>
      </section>

      <div className="container interest-stack">
        {interests.map((interest, index) => {
          const Icon = iconMap[interest.icon ?? 'Brain'];

          return (
            <section
              className={
                index % 2 === 1
                  ? 'interest-row interest-row--reverse'
                  : 'interest-row'
              }
              key={interest.kicker}
            >
              <div className="interest-row__copy">
                <div className="interest-heading">
                  <span>{interest.section}</span>
                  <i />
                  <h2>{interest.kicker}</h2>
                </div>

                <h3>{interest.title}</h3>

                <p>{interest.description}</p>

                <div className="chip-list">
                  {interest.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </div>

              <div className="interest-row__visual">
                <div className="signal-visual" aria-hidden="true">
                  <Icon size={240} />
                  <span>// {interest.kicker.toUpperCase()}</span>
                </div>

                {interest.metrics ? (
                  <div className="metric-strip">
                    {interest.metrics.map((metric) => (
                      <div key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
