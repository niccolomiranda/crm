import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Apps", active: true, icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect width="8" height="8" x="2" y="2" rx="2" fill="#fff" fillOpacity="0.7"/><rect width="8" height="8" x="10" y="2" rx="2" fill="#fff" fillOpacity="0.7"/><rect width="8" height="8" x="2" y="10" rx="2" fill="#fff" fillOpacity="0.7"/><rect width="8" height="8" x="10" y="10" rx="2" fill="#fff" fillOpacity="0.7"/></svg>
  ) },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="sidebar-title">Revelium <span className="font-frac tracking-wider">Studio</span><span className="ml-1 font-guise text-xs align-super">®</span></div>
          <nav className="flex flex-col gap-8 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "sidebar-link",
                  link.active && "sidebar-link-active"
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <footer className="sidebar-footer">
          2025. Revelium™ Studio, All Rights Reserved
        </footer>
      </div>
    </aside>
  );
} 