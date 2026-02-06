"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled
                ? "bg-[#FDFCF8]/50 backdrop-blur-md py-3 border-gray-200"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 cursor-pointer group">
                    <div className="leading-none text-2xl tracking-tight text-gray-900">
                        <span className="font-serif italic">MentionMe</span>
                        <span className="font-sans font-bold">AI.</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/#home"
                        className="text-sm font-medium hover:text-black/70 transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about-us"
                        className="text-sm font-medium hover:text-black/70 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/#faq"
                        className="text-sm font-medium hover:text-black/70 transition-colors"
                    >
                        FAQ
                    </Link>
                    <Link
                        href="/#contact"
                        className="text-sm font-medium hover:text-black/70 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/blog">
                        <Button className="rounded-full">Read Blogs</Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
                    <Link href="/#home" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/about-us" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="/#faq" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                        FAQ
                    </Link>
                    <Link href="/#contact" className="text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                        Contact Us
                    </Link>
                    <hr />
                    <Link href="/blog" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full rounded-full">Read Blogs</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
