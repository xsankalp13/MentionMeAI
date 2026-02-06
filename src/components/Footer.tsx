import { Instagram, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer id="contact" className="py-12 px-6 bg-[#FDFCF8] border-t border-gray-200 text-sm">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                <div className="col-span-2">
                    <div className="leading-none text-2xl tracking-tight text-gray-900">
                        <span className="font-serif italic">MentionMe</span>
                        <span className="font-sans font-bold">AI.</span>
                    </div>
                    <p className="text-gray-500 max-w-xs mt-4">
                        Search behavior has shifted to AI. Ensure your brand is the top recommendation.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-gray-900 uppercase text-xs tracking-wider">
                        Company
                    </h4>
                    <ul className="space-y-3 text-gray-500">
                        <li>
                            <a href="#" className="hover:text-black">
                                Book a Call
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black">
                                Careers
                            </a>
                        </li>
                    </ul>

                    <h4 className="font-bold mt-8 mb-4 text-gray-900 uppercase text-xs tracking-wider">
                        Socials
                    </h4>
                    <div className="flex gap-4 text-gray-500">
                        <a
                            href="https://www.instagram.com/mentionmeai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-400 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="hover:text-red-500 transition-colors">
                            <Youtube size={20} />
                        </a>
                        <a href="#" className="hover:text-[#0a66a2] transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-gray-900 uppercase text-xs tracking-wider">
                        Contact
                    </h4>
                    <ul className="space-y-3 text-gray-500">
                        <li>
                            <a href="mailto:sales@mentionmeai.com" className="hover:text-black">
                                sales@mentionmeai.com
                            </a>
                        </li>
                        <li>
                            <a href="mailto:support@mentionmeai.com" className="hover:text-black">
                                support@mentionmeai.com
                            </a>
                        </li>
                    </ul>

                    <h4 className="font-bold mt-8 mb-4 text-gray-900 uppercase text-xs tracking-wider">
                        Legal
                    </h4>
                    <ul className="space-y-3 text-gray-500">
                        <li>
                            <Link href="/privacy-policy" className="hover:text-black">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-of-use" className="hover:text-black">
                                Terms of Use
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 text-gray-400 text-xs">
                &copy; 2026 MentionMeAI, Inc.
            </div>
        </footer>
    );
};

export default Footer;
