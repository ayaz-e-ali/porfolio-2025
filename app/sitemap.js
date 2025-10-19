import data from '@/data.json'

/**
 * 
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default function sitemap() {
    const projectsEntries = data.projects.map(project => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${project.id}`,
    }))

    return [
        {
            url: process.env.NEXT_PUBLIC_BASE_URL,
            lastModified: new Date()
        },
        ...projectsEntries
    ]
}