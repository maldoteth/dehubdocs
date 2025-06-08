
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Book, Zap, Gamepad2, Coins, Users, Calendar, Mail, Palette, Shield, FileText, Cpu, Bot } from "lucide-react";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
  const location = useLocation();

  const navigationItems = [
    {
      title: "Getting Started",
      items: [
        { name: "Overview", href: "/docs/overview", icon: Home },
        { name: "Quick Start", href: "/docs/quickstart", icon: Zap },
        { name: "Installation", href: "/docs/installation", icon: Book },
      ],
    },
    {
      title: "Platform",
      items: [
        { name: "DApp", href: "/docs/dapps", icon: Zap },
        { name: "DePIN", href: "/docs/depin", icon: Cpu },
        { name: "AI Toolkits", href: "/docs/ai-toolkits", icon: Bot },
        { name: "Games", href: "/docs/games", icon: Gamepad2 },
      ],
    },
    {
      title: "Token",
      items: [
        { name: "Economics", href: "/docs/token-economics", icon: Coins },
        { name: "Utility", href: "/docs/token-utility", icon: Zap },
        { name: "Governance", href: "/docs/token-governance", icon: Users },
        { name: "Security", href: "/docs/token-security", icon: Shield },
        { name: "Staking", href: "/docs/token-stake", icon: Coins },
        { name: "Where to Buy", href: "/docs/token-where-to-buy", icon: Coins },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "Team", href: "/docs/team", icon: Users },
        { name: "Roadmap", href: "/docs/roadmap", icon: Calendar },
        { name: "Contact", href: "/docs/contact", icon: Mail },
      ],
    },
    {
      title: "Brand",
      items: [
        { name: "Guidelines", href: "/docs/brand-guidelines", icon: Palette },
        { name: "Assets", href: "/docs/brand-assets", icon: Palette },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Terms of Service", href: "/docs/terms-of-service", icon: FileText },
        { name: "Privacy Policy", href: "/docs/privacy-policy", icon: Shield },
        { name: "Terms", href: "/docs/terms", icon: FileText },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r bg-muted/50 min-h-screen p-6">
          <Link to="/docs" className="flex items-center gap-2 mb-8">
            <Home className="h-6 w-6" />
            <span className="font-semibold text-lg">Documentation</span>
          </Link>

          <nav className="space-y-6">
            {navigationItems.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                            location.pathname === item.href
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;
