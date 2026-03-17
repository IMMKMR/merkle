import { motion } from 'framer-motion';

const partners = [
    {
        role: "Fund Management Entity",
        number: "01",
        name: "Caravella Asset Management",
        subname: "(IFSC) Private Limited",
        description: "The designated investment manager overseeing fund operations and strategy from GIFT City, India's premier international financial hub.",
        logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQFXVGNx3GPQVQ/company-logo_200_200/company-logo_200_200/0/1688038249025/caravella_asset_management_logo?e=2147483647&v=beta&t=gRvg5dEfmzl6X4JC5F3ND8XsHklG0Y6C5VHqWU8Bglw",
        initials: "CA",
        website: "#",
        accentHex: "#f59e0b",
    },
    {
        role: "Trustee",
        number: "02",
        name: "Axis Trustee Services Limited",
        subname: "GIFT City Branch",
        description: "Independent trustee providing fiduciary oversight and ensuring regulatory compliance at every stage of the fund's operations.",
        logoUrl: "https://axistrustee.in/wp-content/uploads/2022/03/axis-trustee-logo.png",
        initials: "AT",
        website: "https://axistrustee.in",
        accentHex: "#f59e0b",
    },
    {
        role: "Legal Advisor",
        number: "03",
        name: "Cyril Amarchand Mangaldas",
        subname: "CAPC practice group",
        description: "India's premier full-service law firm advising on regulatory frameworks, structural matters, and ongoing legal compliance for the fund.",
        logoUrl: "https://cyrilshroff.com/wp-content/themes/cam/images/logo.png",
        initials: "CAM",
        website: "https://cyrilshroff.com",
        accentHex: "#f59e0b",
    },
    {
        role: "Tax Advisor",
        number: "04",
        name: "Dhruva Advisors LLP",
        subname: "",
        description: "A leading tax advisory firm providing strategic tax structuring, planning, and advisory services for the fund and its investors.",
        logoUrl: "https://dhruvaadvisors.com/wp-content/uploads/2021/04/logo.png",
        initials: "DA",
        website: "https://dhruvaadvisors.com",
        accentHex: "#f59e0b",
    },
];

const PartnerCard = ({ partner, idx }: { partner: typeof partners[0]; idx: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="group relative bg-white/[0.04] border border-white/10 rounded-3xl p-10 flex flex-col gap-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 overflow-hidden"
    >
        {/* Subtle gradient glow in corner */}
        <div
            className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl"
            style={{ background: partner.accentHex }}
        />

        {/* Top row: number + role */}
        <div className="flex items-center justify-between">
            <span className="font-sans font-black text-[60px] leading-none text-white/[0.06] select-none -ml-1">
                {partner.number}
            </span>
            <span
                className="inline-block px-4 py-1.5 font-sans font-bold text-[11px] tracking-[0.18em] uppercase rounded-full border"
                style={{
                    color: partner.accentHex,
                    borderColor: partner.accentHex + '40',
                    background: partner.accentHex + '12',
                }}
            >
                {partner.role}
            </span>
        </div>

        {/* Logo */}
        <div className="w-20 h-14 flex items-center">
            <img
                src={partner.logoUrl}
                alt={partner.name}
                className="max-h-12 max-w-full object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                        parent.innerHTML = `<div style="
                            background: ${partner.accentHex}20;
                            border: 1.5px solid ${partner.accentHex}40;
                            border-radius: 10px;
                            width: 56px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-family: sans-serif;
                            font-weight: 800;
                            font-size: 13px;
                            letter-spacing: 0.04em;
                            color: ${partner.accentHex};
                        ">${partner.initials}</div>`;
                    }
                }}
            />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/8" />

        {/* Name + description */}
        <div className="flex flex-col gap-3">
            <div>
                <h3 className="font-sans font-bold text-white text-2xl leading-tight">
                    {partner.name}
                </h3>
                {partner.subname && (
                    <p className="font-sans text-white/40 text-sm mt-1 tracking-wide">{partner.subname}</p>
                )}
            </div>
            <p className="font-serif text-white/60 text-[15px] leading-relaxed">
                {partner.description}
            </p>
        </div>
    </motion.div>
);

export const InsightsPartnersSection = () => {
    return (
        <section className="bg-merkle-purple-dark py-28 lg:py-36 relative overflow-hidden">
            {/* Subtle radial backdrop */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-merkle-purple/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-merkle-purple-light/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20"
                >
                    <div className="max-w-xl">
                        <p className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-white/40 mb-5">
                            Our Ecosystem
                        </p>
                        <h2 className="text-5xl lg:text-6xl font-sans font-bold text-white leading-[1.05] tracking-tight">
                            Trusted by<br />
                            <span className="font-serif italic font-normal text-white">India's Best.</span>
                        </h2>
                    </div>
                    <p className="font-serif text-white/50 leading-relaxed text-lg max-w-sm lg:text-right">
                        Merkle Value is backed by an institutional-grade ecosystem of specialists in fund management, trusteeship, legal, and tax advisory.
                    </p>
                </motion.div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {partners.map((partner, idx) => (
                        <PartnerCard key={idx} partner={partner} idx={idx} />
                    ))}
                </div>

                {/* Bottom line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="mt-16 text-center font-sans text-white/25 text-sm tracking-widest uppercase"
                >
                    All partners are independently governed and regulated institutions
                </motion.p>
            </div>
        </section>
    );
};
