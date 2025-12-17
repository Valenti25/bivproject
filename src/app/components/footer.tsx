'use client';

// import Image from 'next/image';
import Link from 'next/link';
type FooterLink = { label: string; href: string; external?: boolean };

const products: FooterLink[] = [
    { label: 'Codelabs Data Platform', href: '/products/data-platform' },
    { label: 'Codelabs Platform-AI', href: '/products/platform-ai' },
];

const caseStudies: FooterLink[] = [
    { label: 'Partner', href: '/partners' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
];

const pricing: FooterLink[] = [
    { label: 'Monthly', href: '/pricing#monthly' },
    { label: 'Yearly', href: '/pricing#yearly' },
];

const resources: FooterLink[] = [
    { label: 'About', href: '/about' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Blog', href: '/blog' },
];

const legal: FooterLink[] = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookies Settings', href: '/cookies' },
];

export default function Footer() {
    return (
        <footer className="relative mt-3 w-full overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        {/* <Link href="/" className="block">
                            <Image src="/images/codelabs-logo1.png" alt="codelabs ai" width={150} height={30} className="h-auto w-[120px] md:w-[160px]" priority />
                        </Link> */}
                        <p className="mt-2 text-xs leading-relaxed font-semibold text-black">
                            Codelabs AI empowers businesses to turn raw data into intelligent insights — making decisions faster, smarter, and easier to act on.
                        </p>
                    </div>

                    <div className="ml-auto grid grid-cols-2 gap-5 gap-x-11 text-sm font-semibold md:grid-cols-4 md:gap-0 lg:col-span-8 lg:-mr-14 lg:max-w-xl lg:text-xs">
                        <div className="w-[200px] md:-ml-12 md:w-[200px]">
                            <FooterColumn title="Products" links={products} />
                        </div>
                        <FooterColumn title="Case Studies" links={caseStudies} />
                        <FooterColumn title="Pricing" links={pricing} />
                        <FooterColumn title="Resources" links={resources} />
                    </div>
                </div>

                <hr className="my-10 opacity-20 md:my-12" />
                <div className="flex flex-col items-start justify-between gap-4 text-sm font-semibold text-black md:flex-row">
                    <p>© 2025 codelabs ai. All rights reserved.</p>

                    <nav className="flex flex-wrap items-center gap-3 md:gap-x-6 md:gap-y-2">
                        {legal.map((l) => (
                            <FooterLegalLink key={l.label} {...l} />
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
    return (
        <div>
            <h4 className="mb-4 text-sm font-semibold text-black">{title}</h4>
            <ul>
                {links.map((item) => (
                    <li key={item.label}>
                        <FooterNavLink {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FooterNavLink({ label, href, external }: FooterLink) {
    const base = 'text-[13px] text-[#676767]';
    if (external) {
        return (
            <a href={href} className={base} target="_blank" rel="noopener noreferrer">
                {label}
            </a>
        );
    }
    return (
        <Link href={href} className={base}>
            {label}
        </Link>
    );
}

function FooterLegalLink({ label, href, external }: FooterLink) {
    const base = 'text-[#676767]';
    if (external) {
        return (
            <a href={href} className={base} target="_blank" rel="noopener noreferrer">
                {label}
            </a>
        );
    }
    return (
        <Link href={href} className={base}>
            {label}
        </Link>
    );
}