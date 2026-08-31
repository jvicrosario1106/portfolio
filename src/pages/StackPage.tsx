import { StackGroupCard } from '../components/stack/StackGroupCard';
import { PageIntro } from '../components/ui/PageIntro';
import { stack } from '../content/stack';

export function StackPage() {
  return (
    <div className="page">
      <div className="container">
        <PageIntro
          eyebrow="Capability Matrix"
          title="Engineering"
          accent="Stack"
          description="A structured breakdown of the tools and platforms I use across frontend, backend, AI systems, cloud infrastructure, automation, and developer workflows."
        />
        <section className="stack-grid" aria-label="Technology stack groups">
          {stack.map((group) => (
            <StackGroupCard key={group.title} group={group} />
          ))}
        </section>
      </div>
    </div>
  );
}
