import { MetadataRoute } from 'next'
import { fetchPages } from '@/lib/notion'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await fetchPages();

    const blogEntries: MetadataRoute.Sitemap = posts.map((post: any) => ({
        url: `https://mentionmeai.com/blog/${post.properties.slug?.rich_text[0]?.plain_text || ''}`,
        lastModified: new Date(post.last_edited_time),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    return [
        {
            url: 'https://mentionmeai.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://mentionmeai.com/blog',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        ...blogEntries,
    ]
}
