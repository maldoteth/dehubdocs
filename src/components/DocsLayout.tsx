import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Book, ChevronRight, Menu, X, Search, Home, FileText, Settings, Code, Database, Shield, Zap, Users, ExternalLink, ChevronDown, Coins } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const menuItems = [{
  title: 'Main',
  items: [{
    title: 'Home',
    path: '/docs',
    icon: '🏠'
  }, {
    title: 'Overview',
    path: '/docs/overview',
    icon: '📋'
  }, {
    title: 'Dapp',
    path: '/docs/dapps',
    icon: '🖥️',
    hasSubmenu: true
  }, {
    title: 'Token',
    path: '/docs/token',
    iconComponent: Coins,
    hasSubmenu: true,
    submenuItems: [{
      title: 'Economics & Emissions',
      path: '/docs/token/economics'
    }, {
      title: 'Utility / Holder Benefits',
      path: '/docs/token/utility'
    }, {
      title: 'Where to Buy',
      path: '/docs/token/where-to-buy'
    }, {
      title: 'Governance',
      path: '/docs/token/governance'
    }]
  }, {
    title: 'DePIN',
    path: '/docs/depin',
    icon: '🔧'
  }, {
    title: 'Team',
    path: '/docs/team',
    icon: '👥'
  }, {
    title: 'Security',
    path: '/docs/security',
    icon: '🔒'
  }, {
    title: 'Bugs',
    path: '/docs/bugs',
    icon: '🐛'
  }, {
    title: 'Roadmap',
    path: '/docs/roadmap',
    icon: '🗺️',
    hasSubmenu: true
  }, {
    title: 'Brand Assets',
    path: '/docs/brand-assets',
    icon: '🏷️'
  }]
}, {
  title: 'Key Links',
  items: [{
    title: 'Terms & Disclaimers',
    path: '/docs/terms',
    icon: '⚖️'
  }, {
    title: 'Website',
    path: 'https://dehub.io/',
    icon: '🌐',
    external: true
  }, {
    title: 'App',
    path: 'https://dehub.io/d',
    icon: '👤',
    external: true
  }, {
    title: 'X',
    path: 'https://x.com/dehub_official',
    icon: '/lovable-uploads/4c5f32a0-dc0b-4846-a78d-cd3381206fa9.png',
    external: true,
    isImage: true
  }, {
    title: 'Instagram',
    path: 'https://www.instagram.com/dehub_official/',
    icon: '📸',
    external: true
  }]
}];

export const DocsLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{
    [key: string]: boolean;
  }>({});
  const location = useLocation();
  
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };
  
  const toggleSubmenu = (itemTitle: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [itemTitle]: !prev[itemTitle]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue/10 to-middle-blue/10">
      {/* Header */}
      <header className="bg-plain-white/90 backdrop-blur-sm border-b border-sky-blue/20 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-md hover:bg-sky-blue/10 transition-colors">
              <Menu className="w-5 h-5 text-royal-blue" />
            </button>
            <Link to="/docs" className="flex items-center space-x-2 font-bold text-xl text-royal-blue">
              <span>Docs</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-royal-blue/60 w-4 h-4" />
              <input type="text" placeholder="Search docs..." className="pl-10 pr-4 py-2 bg-sky-blue/10 border border-sky-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-middle-blue focus:border-transparent w-64" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky lg:top-16 inset-y-0 lg:inset-y-auto left-0 z-30 w-80 h-screen lg:h-[calc(100vh-4rem)] bg-plain-white/95 backdrop-blur-sm border-r border-sky-blue/20 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <ScrollArea className="h-full">
            <div className="py-6">
              <nav className="px-4 space-y-6">
                {menuItems.map(section => (
                  <div key={section.title}>
                    {section.title !== 'Main' && (
                      <h3 className="text-sm font-semibold text-royal-blue/70 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                    )}
                    <ul className="space-y-1">
                      {section.items.map(item => (
                        <li key={item.path}>
                          {item.external && (item.path.startsWith('http') || item.path.startsWith('https')) ? (
                            <a href={item.path} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 text-royal-blue/80 hover:bg-sky-blue/10 hover:text-royal-blue">
                              <div className="flex items-center space-x-3">
                                {item.isImage ? (
                                  <img src={item.icon} alt={item.title} className="w-4 h-4 filter brightness-0" />
                                ) : (
                                  <span className="text-base">{item.icon}</span>
                                )}
                                <span>{item.title}</span>
                              </div>
                              <ExternalLink className="w-3 h-3 text-royal-blue/50" />
                            </a>
                          ) : (
                            <div>
                              {item.hasSubmenu && item.submenuItems ? (
                                <div>
                                  <button onClick={() => toggleSubmenu(item.title)} className={`
                                      w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200
                                      ${isActivePath(item.path) ? 'bg-middle-blue/20 text-royal-blue font-medium border-l-4 border-middle-blue ml-0' : 'text-royal-blue/80 hover:bg-sky-blue/10 hover:text-royal-blue'}
                                    `}>
                                    <div className="flex items-center space-x-3">
                                      {item.iconComponent ? (
                                        <item.iconComponent className="w-4 h-4 text-royal-blue/70" />
                                      ) : (
                                        <span className="text-base">{item.icon}</span>
                                      )}
                                      <span>{item.title}</span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-royal-blue/50 transition-transform duration-200 ${expandedMenus[item.title] ? 'rotate-180' : ''}`} />
                                  </button>
                                  {expandedMenus[item.title] && (
                                    <ul className="ml-6 mt-1 space-y-1">
                                      {item.submenuItems.map(subItem => (
                                        <li key={subItem.path}>
                                          <Link to={subItem.path} onClick={() => setSidebarOpen(false)} className={`
                                              flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200
                                              ${isActivePath(subItem.path) ? 'bg-sky-blue/20 text-royal-blue font-medium' : 'text-royal-blue/80 hover:bg-sky-blue/10 hover:text-royal-blue'}
                                            `}>
                                            <span>{subItem.title}</span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ) : (
                                <Link to={item.path} onClick={() => setSidebarOpen(false)} className={`
                                    flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200
                                    ${isActivePath(item.path) ? 'bg-middle-blue/20 text-royal-blue font-medium border-l-4 border-middle-blue ml-0' : 'text-royal-blue/80 hover:bg-sky-blue/10 hover:text-royal-blue'}
                                  `}>
                                  <div className="flex items-center space-x-3">
                                    {item.iconComponent ? (
                                      <item.iconComponent className="w-4 h-4 text-royal-blue/70" />
                                    ) : item.isImage ? (
                                      <img src={item.icon} alt={item.title} className="w-4 h-4 filter brightness-0" />
                                    ) : (
                                      <span className="text-base">{item.icon}</span>
                                    )}
                                    <span>{item.title}</span>
                                  </div>
                                  {item.hasSubmenu && !item.submenuItems && <ChevronRight className="w-4 h-4 text-royal-blue/50" />}
                                  {item.external && <ExternalLink className="w-3 h-3 text-royal-blue/50" />}
                                </Link>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </ScrollArea>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && <div className="fixed inset-0 bg-jet-black bg-opacity-50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />}

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
