import { redirect } from 'next/navigation';
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

export default function Home() {
  redirect('/dashboard');
  return null;
}
