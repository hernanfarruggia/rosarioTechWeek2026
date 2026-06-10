/* =====================================================================
   Rosario TechWeek 2026 — capa de contenido
   Datos estructurados que alimentan las secciones del landing.
   ===================================================================== */

export type Stat = { value: string; label: string; accent?: boolean };
export type Sponsor = { name: string; img: string };
export type TeamMember = { name: string; role: string; img: string };
export type Social = { name: string; href: string };

export const meta = {
  edition: "2da Edición",
  dates: "19–23 Octubre 2026",
  location: "Rosario, Argentina",
  luma: "https://lu.ma/rosariotechweek",
};

/* Stats de la edición inaugural 2025 (métricas de resultado, sin pricing) */
export const stats2025: Stat[] = [
  { value: "32", label: "Eventos" },
  { value: "14", label: "Locaciones" },
  { value: "40", label: "Empresas" },
  { value: "+1.500", label: "Inscriptos", accent: true },
  { value: "15", label: "Menciones en prensa" },
  { value: "+$125M", label: "Impacto económico", accent: true },
];

/* Marcas que acompañaron 2025 — rutas reales en /public/sponsors/* */
export const sponsors2025: Sponsor[] = [
  { name: "InnLab", img: "/sponsors/main/innlab.png" },
  { name: "Universe", img: "/sponsors/main/universe.png" },
  { name: "Renaiss", img: "/sponsors/main/renaiss.png" },
  { name: "The Hybrid", img: "/sponsors/main/the-hybrid.png" },
  { name: "Banco Municipal", img: "/sponsors/main/banco-municipal.png" },
  { name: "Mepad", img: "/sponsors/main/mepad.png" },
  { name: "Kadre", img: "/sponsors/community/kadre.png" },
  { name: "Teramot", img: "/sponsors/community/teramot.png" },
  { name: "CREA", img: "/sponsors/community/crea.png" },
  { name: "Fullfoto", img: "/sponsors/community/fullfoto.png" },
  { name: "EkosLab", img: "/sponsors/community/ekoslab.png" },
  { name: "Golosetti", img: "/sponsors/community/golosetti.png" },
];

/* Fotos de eventos pasados — /public/past-events/*.jpg (se croppean a 16:9) */
export const pastEvents: string[] = [
  "/past-events/1.jpg", "/past-events/2.jpg", "/past-events/3.jpg", "/past-events/4.jpg",
  "/past-events/5.jpg", "/past-events/6.jpg", "/past-events/7.jpg", "/past-events/8.jpg",
  "/past-events/9.jpg", "/past-events/10.jpg", "/past-events/11.jpg", "/past-events/12.jpg",
  "/past-events/13.jpg", "/past-events/14.jpg", "/past-events/15.jpg", "/past-events/16.jpg",
  "/past-events/17.jpg", "/past-events/18.jpg", "/past-events/19.jpg", "/past-events/20.jpg",
  "/past-events/22.jpg", "/past-events/23.jpg", "/past-events/24.jpg",
];

export const team: TeamMember[] = [
  { name: "Luisina Gala Golosetti", role: "CEO @ Golosetti Abogados", img: "/team/luisina.jpeg" },
  { name: "Gaspar Rodriguez", role: "Co-Founder @ Fullfoto & Overboost", img: "/team/gaspar.jpeg" },
  { name: "Nicolas Davobe", role: "Co-Founder @ We Are Ginkgo", img: "/team/nicolas.jpeg" },
  { name: "Gabriela Giorgio", role: "Growth & Marketing Consultant", img: "/team/gabriela.jpeg" },
  { name: "Hernán Farruggia", role: "Software Engineer & AI Consultant", img: "/team/hernan.jpeg" },
  { name: "Bruno Ruyu", role: "Co-Founder & CEO @ Teramot", img: "/team/bruno.jpeg" },
  { name: "Damian Silva", role: "Innovation & R+D @ CREA", img: "/team/damian.jpeg" },
  { name: "Sol Ariaca", role: "Product & Innovation Strategist", img: "/team/sol.jpeg" },
];

export const socials: Social[] = [
  { name: "Twitter", href: "https://x.com/rosariotechweek" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/rosario-tech-week" },
  { name: "Instagram", href: "https://www.instagram.com/rosariotechweek" },
  { name: "WhatsApp", href: "https://docs.google.com/forms/d/e/1FAIpQLSdo9yMIaoqnwnLhGsBHmKPdS37GsQQSDMalqi1Ulpzh_S3s2Q/viewform" },
];
