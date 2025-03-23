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
    <header className="w-full h-16 bg-white border-b border-primary-light flex items-center justify-between px-6">
      <div className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
          <Image 
            src="/profile.png"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>

      <nav className="flex items-center space-x-8">
        <NavLink href="/dashboard" isActive={true}>Dashboard</NavLink>
        <NavLink href="/planner">Planner</NavLink>
        <NavLink href="/messages">Messages</NavLink>
        <NavLink href="/settings">Settings</NavLink>
        <NavLink href="/help">Help Center</NavLink>
      </nav>
    </header>
  );
} 