import CustomerTable from "@/components/CustomerTable";
import { customers } from "@/lib/mock-data";

const apps = [
  {
    name: "Slack",
    logo: "/slack_logo.svg",
    accent: "accent-slack",
  },
  {
    name: "Notion",
    logo: "/notion_logo.svg",
    accent: "accent-notion",
  },
  {
    name: "Figma",
    logo: "/figma_logo.svg",
    accent: "accent-figma",
  },
  {
    name: "OpenAI",
    logo: "/openai_logo.svg",
    accent: "accent-openai",
  },
  {
    name: "Webflow",
    logo: "/webflow_logo.svg",
    accent: "accent-webflow",
  },
];

export default function Dashboard() {
  return (
    <main className="w-full">
      <form className="search-bar">
        <svg width="18" height="18" fill="none" viewBox="0 0 18 18" className="opacity-50 mr-2"><circle cx="8" cy="8" r="7" stroke="#A5A5A5" strokeWidth="1.5"/><path d="M17 17L13.5 13.5" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <input
          type="text"
          placeholder="Search for your apps"
          className="bg-transparent outline-none flex-1 text-[#A5A5A5] placeholder-[#A5A5A5]"
        />
      </form>
      <div className="dashboard-grid">
        {apps.map((app) => (
          <div key={app.name} className="app-card">
            <img src={app.logo} alt={app.name + ' logo'} className="app-card-logo" />
            <div className={`app-card-title ${app.accent}`}>{app.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
