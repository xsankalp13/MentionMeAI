import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";

// Types based on expected Notion structure
interface BlogCardProps {
    post: any;
}

export function BlogCard({ post }: BlogCardProps) {
    // Extract data safely - checking both capitalized and lowercase variants to be safe
    const title = post.properties.Title?.title[0]?.plain_text || "Untitled Post";
    // User confirmed "slug" property in notion.ts is lowercase "slug"
    const slug = post.properties.slug?.rich_text[0]?.plain_text || post.properties.Slug?.rich_text[0]?.plain_text || post.id;
    const description = post.properties.Description?.rich_text[0]?.plain_text || post.properties.description?.rich_text[0]?.plain_text || "No description available.";
    const date = post.properties.Date?.date?.start || post.properties.date?.date?.start || post.created_time;
    const coverUrl = post.cover?.external?.url || post.cover?.file?.url || null;
    const tags = post.properties.Tags?.multi_select || post.properties.tags?.multi_select || [];

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <Link href={`/blog/${slug}`} className="group block h-full">
            <article className="flex flex-col h-full overflow-hidden rounded-2xl border border-black/5 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-black/10">
                {coverUrl && (
                    <div className="relative w-full aspect-video overflow-hidden border-b border-black/5">
                        <img
                            src={coverUrl}
                            alt={title}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                )}

                <div className="flex flex-col flex-1 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-gray-500 font-medium">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <time dateTime={date}>{formattedDate}</time>
                        </div>
                        {tags.length > 0 && (
                            <>
                                <span>•</span>
                                <div className="flex gap-2">
                                    {tags.slice(0, 2).map((tag: any) => (
                                        <span
                                            key={tag.id}
                                            className={cn(
                                                "px-2.5 py-0.5 rounded-full bg-gray-100/50 border border-gray-200 text-gray-700 font-medium text-[10px] uppercase tracking-wider",
                                                // Simplified tag colors for consistency with premium theme - sticking to monochrome/neutral
                                            )}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                    {tags.length > 2 && <span className="text-gray-400">+{tags.length - 2}</span>}
                                </div>
                            </>
                        )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-900 mb-3 group-hover:text-black transition-colors line-clamp-2 leading-tight">
                        {title}
                    </h3>

                    <p className="text-gray-500 line-clamp-3 mb-6 flex-1 text-sm md:text-base leading-relaxed">
                        {description}
                    </p>

                    <div className="flex items-center text-sm font-semibold text-gray-900 mt-auto group-hover:underline decoration-1 underline-offset-4">
                        Read article
                        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
