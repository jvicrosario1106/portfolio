import { ArrowRight, Download } from 'lucide-react';
import { ButtonLink } from '../components/ui/ButtonLink';
import { home } from '../content/home';
import { site } from '../content/site';

export function HomePage() {
  return (
    <section className="home-hero">
      <div className="neural-grid" aria-hidden="true" />
      <div className="container home-hero__inner">
        <div className="home-hero__copy">
          <div className="status-pill">
            <span />
            {home.eyebrow}
          </div>
          <p className="home-hero__name">{home.name}</p>
          <h1>{home.title}</h1>
          <p className="home-hero__subtitle">{home.subtitle}</p>
          <p className="home-hero__description">{home.description}</p>
          <div className="home-hero__actions">
            <ButtonLink href={home.primaryCta.href} icon={<ArrowRight size={18} aria-hidden="true" />}>
              {home.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={home.secondaryCta.href} icon={<Download size={18} aria-hidden="true" />} variant="secondary">
              {home.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Profile visual">
          <div className="portrait-stage__backdrop" />
          <div className="portrait-stage__frame">
            <img src={site.profileImage} alt="JV Rosario profile photo" />
            <div className="portrait-stage__overlay">
              <strong>{home.status}</strong>
              <span>{home.visualCaption}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
