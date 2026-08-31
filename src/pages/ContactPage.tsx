import { Code2, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { contact } from '../content/contact';

const socialIcons = {
  GitHub: Code2,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function ContactPage() {
  return (
    <div className="page contact-page">
      <div className="container contact-grid">
        <section className="contact-copy">
          <div className="section-kicker">
            <span />
            <p>{contact.eyebrow}</p>
          </div>
          <h1>{contact.title}</h1>
          <p>{contact.subtitle}</p>

          <div className="status-card">
            <span aria-hidden="true" />
            <div>
              <h2>{contact.statusTitle}</h2>
              <p>{contact.statusText}</p>
              <div className="status-bars" aria-hidden="true">
                {[20, 42, 82, 60, 30, 90, 70, 40].map((height) => (
                  <i key={height} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="contact-facts">
            <p>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>
              <MapPin size={18} aria-hidden="true" />
              {contact.location}
            </p>
          </div>

          <div className="social-cluster" aria-label="Network nodes">
            <h2>Network</h2>
            <div>
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? Code2;

                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    <Icon size={18} aria-hidden="true" />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact-panel" aria-labelledby="contact-form-title">
          <form action={`mailto:${contact.email}`} method="post" encType="text/plain">
            <div>
              <h2 id="contact-form-title">Let's Connect</h2>
              <p>Have an idea, a project, or just want to talk tech? I'd love to hear from you.</p>
            </div>
            <label>
              <span>Your Name</span>
              <input name="name" type="text" placeholder="What's your name?" autoComplete="name" required />
            </label>
            <label>
              <span>Your Email</span>
              <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            </label>
            <label>
              <span>Your Message</span>
              <textarea name="message" rows={5} placeholder="Tell me a little about what you're working on..." required />
            </label>
            <button type="submit">
              <Send size={18} aria-hidden="true" />
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
