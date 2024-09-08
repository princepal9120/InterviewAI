import Link from "next/link";

// Reusable Component for Footer Links
function FooterLink({ href, label }) {
  return (
    <Link href={href} className="text-muted-foreground hover:text-foreground" prefetch={false}>
      {label}
    </Link>
  );
}

// Reusable Component for Footer Section
function FooterSection({ title, links }) {
  return (
    <div className="grid gap-4">
      <h3 className="text-lg font-bold">{title}</h3>
      {links.map((link, index) => (
        <FooterLink key={index} href={link.href} label={link.label} />
      ))}
    </div>
  );
}

export default function Footer() {
  const companyLinks = [
    { href: "#", label: "About" },
    { href: "#", label: "Team" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Contact" },
  ];

  const productLinks = [
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Integrations" },
    { href: "#", label: "Roadmap" },
  ];

  const resourcesLinks = [
    { href: "#", label: "Documentation" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Guides" },
    { href: "#", label: "Support" },
  ];

  const legalLinks = [
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Cookie Policy" },
    { href: "#", label: "Disclaimer" },
  ];

  return (
    <footer className="w-full bg-muted py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <FooterSection title="Company" links={companyLinks} />
          <FooterSection title="Product" links={productLinks} />
          <FooterSection title="Resources" links={resourcesLinks} />
          <FooterSection title="Legal" links={legalLinks} />
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          &copy; 2023 InterviewAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
