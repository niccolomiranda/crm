"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import CustomerTable from "@/components/CustomerTable";
import { customers } from "@/lib/mock-data";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [slackInviteUrl, setSlackInviteUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    // Check for authentication from the main Revelium CRM site
    const checkAuth = async () => {
      try {
        // Try to get authentication tokens or cookies from the main site
        const authToken = Cookies.get('revelium_auth_token');
        const userEmailFromCookie = Cookies.get('revelium_user_email');
        
        // For testing without the cookies, you can manually set the email here
        // const userEmailFromCookie = "test@revelium.studio";
        
        if (!authToken && !userEmailFromCookie) {
          // If no authentication is found, redirect to the main login page
          window.location.href = 'https://revelium-crm.vercel.app/login';
          return;
        }
        
        if (userEmailFromCookie) {
          setUserEmail(userEmailFromCookie);
          generateSlackInviteLink(userEmailFromCookie);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Authentication error:", error);
        // In case of error, redirect to the main login page
        window.location.href = 'https://revelium-crm.vercel.app/login';
      }
    };
    
    checkAuth();
  }, []);
  
  const generateSlackInviteLink = async (email: string) => {
    // In a real implementation, this would call Slack's API:
    // https://api.slack.com/methods/admin.users.invite
    
    try {
      // In production, this would be an API call to your backend which has the Slack token
      // const response = await fetch('https://your-backend-api.com/generate-slack-invite', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      // const data = await response.json();
      // setSlackInviteUrl(data.inviteUrl);
      
      // For demo purposes we'll create a simulated URL
      const workspaceSlug = 'revelium-studio';
      
      // Simulate an invite token based on the email
      const mockInviteToken = btoa(`invite-${email}-${Date.now()}`).replace(/=/g, '');
      
      // Format like a real Slack invite URL
      const inviteUrl = `https://join.slack.com/t/${workspaceSlug}/shared_invite/${mockInviteToken}`;
      
      setSlackInviteUrl(inviteUrl);
    } catch (error) {
      console.error("Error generating Slack invite:", error);
    }
  };

const apps = [
  {
    name: "Slack",
    logo: "/slack_logo.svg",
      getUrl: () => slackInviteUrl || `https://join.slack.com/t/revelium-studio/signup?email=${encodeURIComponent(userEmail)}`
  },
  {
    name: "Notion",
    logo: "/notion_logo.svg",
      getUrl: () => `https://www.notion.so/login?email=${encodeURIComponent(userEmail)}`
  },
  {
    name: "Figma",
    logo: "/figma_logo.svg",
      getUrl: () => "https://www.figma.com/login"
  },
  {
    name: "OpenAI",
    logo: "/openai_logo.svg",
      getUrl: () => "https://platform.openai.com/login"
  },
  {
    name: "Webflow",
    logo: "/webflow_logo.svg",
      getUrl: () => "https://webflow.com/dashboard"
  },
];

  const filteredApps = apps.filter(app => 
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading-container">
          <img src="/revelium-logo.svg" alt="Revelium Studio" width={80} height={32} />
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

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
            value={searchTerm}
            onChange={handleSearch}
        />
        </div>
        <div className="menu_app">
          <div className="apps-icon">
            <img src="/apps-icon.svg" alt="Apps icon" width={20} height={20} />
          </div>
          <div className="apps-text">Apps</div>
        </div>
        {userEmail && (
          <div className="user-email">
            Logged in as: {userEmail}
          </div>
        )}
        <div className="copyright">
          2025. Revelium™ Studio, All Rights Reserved
        </div>
      </div>
      {/* Main content area */}
      <div className="apps_container">
        <div className="app_grid">
          {filteredApps.map((app) => (
            <a 
              key={app.name} 
              className="app_card" 
              href={app.getUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="app_logo">
                <img src={app.logo} alt={`${app.name} logo`} width={36} height={36} />
              </div>
              <div className="app_name">{app.name}</div>
            </a>
        ))}
        </div>
      </div>
    </div>
  );
}