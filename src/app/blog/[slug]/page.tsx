import { fetchBySlug, fetchPageBlogs, notion } from '@/lib/notion';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from '@notion-render/hljs-plugin';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostSchema from '@/components/BlogPostSchema';

type PageProps = {
    params: Promise<{
        slug: string
    }>
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params
    const post = await fetchBySlug(slug)

    if (!post) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="min-h-screen bg-[#FDFCF8] flex flex-col items-center justify-center p-4 text-center flex-1">
                    <h1 className="font-serif text-4xl font-medium text-gray-900 mb-4">No Page Found</h1>
                    <Link href="/blog" className="text-gray-600 hover:text-black hover:underline underline-offset-4">
                        Return to Blog
                    </Link>
                </div>
                <Footer />
            </div>
        )
    }

    const blocks = await fetchPageBlogs(post.id)

    const renderer = new NotionRenderer({ client: notion })
    renderer.use(hljsPlugin({}))
    renderer.use(bookmarkPlugin(undefined))

    const html = await renderer.render(...blocks)

    // Extract metadata
    // @ts-ignore
    const title = post.properties.Title?.title[0]?.plain_text || "Untitled Post"
    // @ts-ignore
    const date = post.properties.Date?.date?.start || post.properties.date?.date?.start || post.created_time
    // @ts-ignore
    const coverUrl = post.cover?.external?.url || post.cover?.file?.url || null
    // @ts-ignore
    const description = post.properties.Description?.rich_text[0]?.plain_text || post.properties.description?.rich_text[0]?.plain_text || "Read this article on MentionMeAI."
    // @ts-ignore
    const author = post.properties.Author?.rich_text[0]?.plain_text || post.properties.author?.rich_text[0]?.plain_text || "MentionMeAI Team"

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        weekday: 'long',
        month: "long",
        day: "numeric",
        year: "numeric",
    })

    return (
        <div className="flex flex-col min-h-screen">
            <BlogPostSchema
                headline={title}
                description={description}
                publishedTime={date}
                modifiedTime={post.last_edited_time}
                url={`https://mentionmeai.com/blog/${slug}`}
                image={coverUrl || "https://mentionmeai.com/logo.png"}
                author={author}
            />
            <Navbar />
            <div className="bg-[#FDFCF8] py-24 md:py-32 flex-1">
                <main className="w-full max-w-4xl mx-auto px-6 animate-in fade-in duration-700 slide-in-from-bottom-4">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to all posts
                    </Link>

                    <article>
                        <header className="mb-14 text-center space-y-6">
                            <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={date}>{formattedDate}</time>
                            </div>

                            <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1] max-w-4xl mx-auto">
                                {title}
                            </h1>

                            {coverUrl && (
                                <div className="relative w-full aspect-video md:aspect-21/9 mt-10 overflow-hidden rounded-2xl border border-black/5 bg-gray-50 shadow-sm">
                                    <img
                                        src={coverUrl}
                                        alt={title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            )}
                        </header>

                        <div
                            className="prose prose-lg prose-gray max-w-none 
                        prose-headings:font-serif prose-headings:font-medium prose-headings:text-gray-900 
                        prose-p:text-gray-600 prose-p:leading-relaxed 
                        prose-a:text-black prose-a:font-medium prose-a:underline-offset-4 hover:prose-a:text-gray-600 
                        prose-strong:text-gray-900 prose-strong:font-semibold
                        prose-code:text-black prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-normal
                        prose-img:rounded-2xl prose-img:border prose-img:border-black/5 prose-img:shadow-sm"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </article>
                </main>
            </div>
            <Footer />
        </div>
    )
}
