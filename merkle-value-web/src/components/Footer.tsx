import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-slate-50 text-slate-800 pt-20 pb-10 font-sans border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-12">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16">
                    
                    {/* Left Section: Branding & Mission */}
                    <div className="md:col-span-5">
                        <Link to="/" className="inline-block mb-8">
                            <img 
                                src="/images/assets/logo_purple.svg" 
                                alt="Merkle Value" 
                                className="h-6 opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <h2 className="text-2xl font-serif mb-4 leading-relaxed text-slate-800">
                            Invest with <span className="italic text-merkle-purple">Clarity</span>. Grow with Confidence.
                        </h2>
                        <p className="text-slate-500 font-sans text-sm leading-relaxed max-w-sm">
                            We build secure, compliant exposure to the absolute scarcity of Bitcoin. A designed gateway merging traditional institutional discipline with next-generation digital assets.
                        </p>
                    </div>

                    {/* Middle Section: Business Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-8">
                            Business Overview
                        </h4>
                        <ul className="space-y-4 font-sans text-sm font-medium">
                            {[
                                { name: 'About Us', path: '/about' },
                                { name: 'How It Works', path: '/how-it-works' },
                                { name: 'Insights & Research', path: '/insights' },
                                { name: 'Contact Our Advisors', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.path} 
                                        className="text-slate-600 hover:text-merkle-purple transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Section: Contact Minimal */}
                    <div className="md:col-span-4">
                        <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-8">
                            Get in Touch
                        </h4>
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase mb-2">General Enquiries</h5>
                                <p className="text-base text-slate-800 font-medium">
                                    <a href="mailto:info@merklevalue.com" className="hover:text-merkle-purple transition-colors">info@merklevalue.com</a>
                                </p>
                            </div>
                            <div>
                                <h5 className="text-[10px] font-bold tracking-[0.1em] text-slate-400 uppercase mb-2">Phone</h5>
                                <p className="text-base text-slate-800 font-medium">+00 0000 0000 00</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Legal Bottom */}
                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-[10px] font-sans tracking-[0.1em] uppercase">
                        &copy; {new Date().getFullYear()} Merkle Value Trust. All rights reserved.
                    </p>
                    <p className="text-slate-400 text-[10px] font-sans tracking-[0.1em] uppercase">
                        Category III Alternative Investment Fund (Non-Retail Scheme)
                    </p>
                </div>

            </div>
        </footer>
    );
};
