"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground overflow-x-hidden selection:bg-orange-100 relative">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 grow w-full">
        <div className="flex flex-col gap-24">
            <section className="text-center space-y-8 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 tracking-tight leading-[1.1]"
                >
                    About <span className="font-sans font-bold">MentionMeAI</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
                >
                    We help brands become the top recommendation in the new era of AI-driven search.
                </motion.p>
            </section>

            <div className="w-full border-b border-gray-200" />

            <section className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
                        The Shift to <span className="italic">AI Search</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Traditional search engines are being replaced by AI models like Perplexity, ChatGPT, and Claude. Users no longer just search for links; they ask for answers.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        This shift requires a new approach: <strong>Generative Engine Optimization (GEO)</strong>. Unlike SEO, which focuses on ranking links, GEO focuses on ensuring your brand is cited, recommended, and trusted by AI models.
                    </p>
                </div>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    <div className="text-center relative z-10">
                        <span className="block text-7xl mb-4">🔍</span>
                        <span className="text-lg font-medium text-gray-500">From Keywords to Context</span>
                    </div>
                </div>
            </section>

             <section className="grid md:grid-cols-2 gap-16 items-center">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 min-h-[300px] flex items-center justify-center order-2 md:order-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                    <div className="text-center relative z-10">
                        <span className="block text-7xl mb-4">🎯</span>
                        <span className="text-lg font-medium text-gray-500">Precision Targeting</span>
                    </div>
                </div>
                <div className="space-y-6 order-1 md:order-2">
                    <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
                        Our <span className="italic">Mission</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        At MentionMeAI, our mission is to empower businesses to navigate this technological shift. We provide the tools and strategies needed to analyze AI intent, create GEO-optimized content, and track brand mentions across the AI ecosystem.
                    </p>
                     <p className="text-lg text-gray-600 leading-relaxed">
                        We believe that in the future, the most successful brands will be those that are best understood by AI.
                    </p>
                </div>
            </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
