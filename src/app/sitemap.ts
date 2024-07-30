import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://julianrojasdev.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      alternates: {
        languages: {
          es: 'https://acme.com/es',
          en: 'https://acme.com/en',
        },
      },
      priority: 1,
    },
  ]
}