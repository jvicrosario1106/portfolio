import type { StackGroup } from '../../types/content';
import { Chip } from '../ui/Chip';

interface StackGroupCardProps {
  group: StackGroup;
}

export function StackGroupCard({ group }: StackGroupCardProps) {
  const Icon = group.icon;

  return (
    <article className="stack-card">
      <div className="stack-card__header">
        <Icon size={30} aria-hidden="true" />
        <h2>{group.title}</h2>
      </div>
      {group.description ? <p className="stack-card__description">{group.description}</p> : null}
      <div className="stack-card__list">
        {group.items.map((item) => (
          <section className="stack-item" key={item.name}>
            <h3>{item.name}</h3>
            {item.tags ? (
              <div className="chip-list chip-list--small">
                {item.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}
