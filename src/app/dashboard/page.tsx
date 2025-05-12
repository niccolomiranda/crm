import CustomerTable from "@/components/CustomerTable";
import { customers } from "@/lib/mock-data";

export default function Dashboard() {
  const apps = [
    {
      name: "Slack",
      logo: "/slack_logo.svg",
    },
    {
      name: "Notion",
      logo: "/notion_logo.svg",
    },
    {
      name: "Figma",
      logo: "/figma_logo.svg",
    },
    {
      name: "OpenAI",
      logo: "/openai_logo.svg",
    },
    {
      name: "Webflow",
      logo: "/webflow_logo.svg",
    },
  ];

  return (
    <div className="dashboard">
      {/* Left sidebar */}
      <div className="side_menu">
        <div className="logo">
          <img src="/revelium-logo.svg" alt="Revelium Studio" width={80} height={32} />
        </div>
        <div className="search_bar">
          <div className="search_icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7" cy="7" r="6.25" stroke="#A5A5A5" strokeWidth="1.5"/>
              <path d="M15 15L11.5 11.5" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search for your apps" 
            className="search_input"
          />
        </div>
        <div className="menu_app">
          <div className="apps-icon">
            <img src="/apps-icon.svg" alt="Apps icon" width={20} height={20} />
          </div>
          <div className="apps-text">Apps</div>
        </div>
        <div className="copyright">
          2025. Revelium™ Studio, All Rights Reserved
        </div>
      </div>
      {/* Main content area */}
      <div className="apps_container">
        <div className="app_grid">
          {apps.map((app) => (
            <div key={app.name} className="app_card">
              <div className="app_logo">
                <img src={app.logo} alt={`${app.name} logo`} width={36} height={36} />
              </div>
              <div className="app_name">{app.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
