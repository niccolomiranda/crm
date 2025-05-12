import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Apps", active: true },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-title">Revelium <span className="font-frac tracking-wider">Studio</span><span className="ml-1 font-guise text-xs align-super">®</span></div>
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "sidebar-link",
                link.active && "sidebar-link-active"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <footer className="mt-12 text-xs text-text-light opacity-60">
        2025. Revelium™ Studio, All Rights Reserved
      </footer>
    </aside>
  );
} 