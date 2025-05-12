import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
};

const NavLink = ({ href, isActive, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "nav-link",
        isActive ? "nav-link-active" : "nav-link-inactive"
      )}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        Revelium <span className="font-frac tracking-wider">Studio</span><span className="ml-1 font-guise text-xs align-super">®</span>
      </div>
      <div className="navbar-search">
        <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="opacity-50"><circle cx="7" cy="7" r="6" stroke="#A5A5A5" strokeWidth="1.5"/><path d="M15 15L11.5 11.5" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <input
          type="text"
          placeholder="Search for your apps"
          className="bg-transparent outline-none flex-1 text-text-muted placeholder-text-muted"
        />
      </div>
    </header>
  );
} 