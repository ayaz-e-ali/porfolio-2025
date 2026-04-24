import { getData } from '@/actions/data';

/**
 * 
 * @returns {import('next').MetadataRoute.Sitemap}
 */
export default async function sitemap() {
    const data = await getData();
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