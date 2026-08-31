import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { navigation, site } from '../../content/site';

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink className="brand" to="/" aria-label="Home">
          <img src={site.logo} alt="" className="brand__mark" />
          <span>{site.label}</span>
        </NavLink>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => (isActive ? 'primary-nav__link is-active' : 'primary-nav__link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <button className="icon-button icon-button--mobile" type="button" aria-label="Open menu">
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
