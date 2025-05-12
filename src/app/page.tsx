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
    <main className="flex-1 px-8 py-10">
      <h1 className="text-3xl font-bold text-text-light mb-2 tracking-tight">Apps</h1>
      <p className="text-text-muted mb-8">Quick access to your connected tools</p>
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
