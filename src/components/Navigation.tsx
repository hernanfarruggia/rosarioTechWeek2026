'use client';

import { useEffect, useState } from 'react';
import { meta } from '@/content/site';

const navItems = [
  { name: '¿Qué es?', href: '#que-es' },
  { name: 'Pilares', href: '#pilares' },
  { name: 'Edición 2025', href: '#edicion-2025' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'Anfitriones', href: '#anfitriones' },
  { name: 'Prensa', href: '#prensa' },
  { name: 'Equipo', href: '#equipo' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" aria-label="Rosario TechWeek — inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Rosario TechWeek" />
        </a>
        <div className={`nav-links${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
        <a href={meta.luma} target="_blank" rel="noopener noreferrer" className="btn btn-solid btn-sm nav-cta">
          Registrate
        </a>
        <button
          className="nav-burger"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
