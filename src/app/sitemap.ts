import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rosariotechweek.com'
  const lastModified = new Date()

  const sections = ['que-es', 'pilares', 'edicion-2025', 'sponsors', 'anfitriones', 'prensa', 'equipo', 'contacto']

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...sections.map((id) => ({
      url: `${baseUrl}/#${id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
