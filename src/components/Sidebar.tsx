import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SidebarLinkProps = {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
};

const SidebarLink = ({ href, isActive, children }: SidebarLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "sidebar-link",
        isActive ? "sidebar-link-active" : "sidebar-link-inactive"
      )}
    >
      {children}
    </Link>
  );
};

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-dark flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-background-blue uppercase">CRM agent</h1>
      </div>
      
      <div className="mt-12 px-6 flex flex-col space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold uppercase text-background-blue">Menu</h2>
          <nav className="flex flex-col space-y-6">
            <SidebarLink href="/analytics">Analytics</SidebarLink>
            <SidebarLink href="/customers" isActive={true}>Customers</SidebarLink>
            <SidebarLink href="/sales-report">Sales Report</SidebarLink>
            <SidebarLink href="/calendar">Calendar</SidebarLink>
            <SidebarLink href="/tasks">Tasks</SidebarLink>
          </nav>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold uppercase text-background-blue">Members</h2>
          <nav className="flex flex-col space-y-6">
            <SidebarLink href="/members/chris">Chris</SidebarLink>
            <SidebarLink href="/members/tasha">Tasha</SidebarLink>
            <SidebarLink href="/members/julius">Julius</SidebarLink>
            <SidebarLink href="/members/janice">Janice</SidebarLink>
            <SidebarLink href="/members/greg">Greg</SidebarLink>
          </nav>
        </div>
      </div>
    </aside>
  );
} 