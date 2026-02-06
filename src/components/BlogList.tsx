"use client";

import { useState, useEffect } from "react";
import { BlogCard } from "@/components/BlogCard";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface BlogListProps {
    initialPosts: any[];
}

export function BlogList({ initialPosts }: BlogListProps) {
    const [query, setQuery] = useState("");
    const [filteredPosts, setFilteredPosts] = useState(initialPosts);
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!query) {
            setFilteredPosts(initialPosts);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filtered = initialPosts.filter((post) => {
            const title = (
                post.properties.Title?.title[0]?.plain_text ||
                ""
            ).toLowerCase();
            const description = (
                post.properties.Description?.rich_text[0]?.plain_text ||
                post.properties.description?.rich_text[0]?.plain_text ||
                ""
            ).toLowerCase();
            const slug = (
                post.properties.slug?.rich_text[0]?.plain_text ||
                post.properties.Slug?.rich_text[0]?.plain_text ||
                ""
            ).toLowerCase();
            const tags = (
                post.properties.Tags?.multi_select ||
                post.properties.tags?.multi_select ||
                []
            )
                .map((t: any) => t.name.toLowerCase())
                .join(" ");

            return (
                title.includes(lowerQuery) ||
                description.includes(lowerQuery) ||
                tags.includes(lowerQuery) ||
                slug.includes(lowerQuery)
            );
        });
        setFilteredPosts(filtered);
    }, [query, initialPosts]);

    if (!mounted) return null;

    return (
        <div className="space-y-16">
            <div className="flex flex-col items-center space-y-6 max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl mb-6 text-gray-900 leading-[1.1]">
                        Our <span className="italic">Insights</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
                        Thoughts, strategies, and updates on Generative Engine Optimization.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative w-full max-w-md w-full group"
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Search className="h-5 w-5 group-focus-within:text-gray-900 transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="flex h-14 w-full rounded-full border border-black/10 bg-white pl-11 pr-6 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/5 focus-visible:ring-offset-2 transition-all shadow-sm hover:shadow-md hover:border-black/20"
                        placeholder="Search articles..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <p className="text-xl font-medium text-gray-900">No results found for "{query}"</p>
                        <p className="mt-2 text-gray-500">Try adjusting your search terms.</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
