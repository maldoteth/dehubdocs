import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Book, ChevronRight, Menu, X, Search, Home, FileText, Settings, Code, Database, Shield, Zap, Users, ExternalLink, ChevronDown } from 'lucide-react';
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
    icon: '🪙',
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
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors">
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/docs" className="flex items-center space-x-2 font-bold text-xl text-slate-800">
              
              <span>Docs</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input type="text" placeholder="Search docs..." className="pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-30 w-80 bg-white/90 backdrop-blur-sm border-r border-slate-200 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-6">
              <nav className="px-4 space-y-6">
                {menuItems.map(section => <div key={section.title}>
                    {section.title !== 'Main' && <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>}
                    <ul className="space-y-1">
                      {section.items.map(item => <li key={item.path}>
                          {item.external && (item.path.startsWith('http') || item.path.startsWith('https')) ? <a href={item.path} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                              <div className="flex items-center space-x-3">
                                {item.isImage ? <img src={item.icon} alt={item.title} className="w-4 h-4 filter brightness-0" /> : <span className="text-base">{item.icon}</span>}
                                <span>{item.title}</span>
                              </div>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a> : <div>
                              {item.hasSubmenu && item.submenuItems ? <div>
                                  <button onClick={() => toggleSubmenu(item.title)} className={`
                                      w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200
                                      ${isActivePath(item.path) ? 'bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-500 ml-0' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                                    `}>
                                    <div className="flex items-center space-x-3">
                                      <span className="text-base">{item.icon}</span>
                                      <span>{item.title}</span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${expandedMenus[item.title] ? 'rotate-180' : ''}`} />
                                  </button>
                                  {expandedMenus[item.title] && <ul className="ml-6 mt-1 space-y-1">
                                      {item.submenuItems.map(subItem => <li key={subItem.path}>
                                          <Link to={subItem.path} onClick={() => setSidebarOpen(false)} className={`
                                              flex items-center px-3 py-2 rounded-lg text-sm transition-all duration-200
                                              ${isActivePath(subItem.path) ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                                            `}>
                                            <span>{subItem.title}</span>
                                          </Link>
                                        </li>)}
                                    </ul>}
                                </div> : <Link to={item.path} onClick={() => setSidebarOpen(false)} className={`
                                    flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200
                                    ${isActivePath(item.path) ? 'bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-500 ml-0' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                                  `}>
                                  <div className="flex items-center space-x-3">
                                    {item.isImage ? <img src={item.icon} alt={item.title} className="w-4 h-4 filter brightness-0" /> : <span className="text-base">{item.icon}</span>}
                                    <span>{item.title}</span>
                                  </div>
                                  {item.hasSubmenu && !item.submenuItems && <ChevronRight className="w-4 h-4 text-slate-400" />}
                                  {item.external && <ExternalLink className="w-3 h-3 text-slate-400" />}
                                </Link>}
                            </div>}
                        </li>)}
                    </ul>
                  </div>)}
              </nav>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />}

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>;
};
