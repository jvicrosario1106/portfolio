import { site, socials } from '../../content/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <img src={site.logo} alt="" className="site-footer__mark" />
        <div className="site-footer__links">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
        <p>{site.copyright}</p>
      </div>
    </footer>
  );
}
