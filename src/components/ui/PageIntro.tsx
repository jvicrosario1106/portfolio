interface PageIntroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  centered?: boolean;
}

export function PageIntro({ eyebrow, title, accent, description, centered = false }: PageIntroProps) {
  return (
    <section className={centered ? 'page-intro page-intro--centered' : 'page-intro'}>
      <div className="section-kicker">
        <span />
        <p>{eyebrow}</p>
      </div>
      <h1>
        {title}
        {accent ? (
          <>
            <br />
            <span>{accent}</span>
          </>
        ) : null}
      </h1>
      <p>{description}</p>
    </section>
  );
}
