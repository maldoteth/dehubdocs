
import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Book, 
  ChevronRight, 
  Menu, 
  X, 
  Search,
  Home,
  FileText,
  Settings,
  Code,
  Database,
  Shield,
  Zap,
  Users,
  ExternalLink
} from 'lucide-react';

const menuItems = [
  {
    title: 'Main',
    items: [
      { title: 'Home', path: '/docs', icon: '🏠' },
      { title: 'Overview', path: '/docs/overview', icon: '📋' },
      { title: 'Dapps', path: '/docs/dapps', icon: '🖥️', hasSubmenu: true },
      { title: 'Token', path: '/docs/token', icon: '🪙', hasSubmenu: true },
      { title: 'DePIN', path: '/docs/depin', icon: '🔧' },
      { title: 'Team', path: '/docs/team', icon: '👥', hasSubmenu: true },
      { title: 'Roadmap', path: '/docs/roadmap', icon: '🗺️', hasSubmenu: true },
      { title: 'Brand Assets', path: '/docs/brand-assets', icon: '🏷️' },
    ]
  },
  {
    title: 'Key Links',
    items: [
      { title: 'Terms & Disclaimers', path: '/docs/terms', icon: '⚖️' },
      { title: 'Website', path: 'https://dehub.io/', icon: '🌐', external: true },
      { title: 'App', path: 'https://dehub.io/d', icon: '👤', external: true },
      { title: 'DeHub', path: '/docs/dehub', icon: '/lovable-uploads/361bb373-38ee-4888-a4b1-ab8239941261.png', external: true, isImage: true },
      { title: 'X', path: 'https://x.com/dehub_official', icon: '/lovable-uploads/4c5f32a0-dc0b-4846-a78d-cd3381206fa9.png', external: true, isImage: true },
      { title: 'Instagram', path: 'https://www.instagram.com/dehub_official/', icon: '📸', external: true },
    ]
  }
];

export const DocsLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/docs" className="flex items-center space-x-2 font-bold text-xl text-slate-800">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Book className="w-5 h-5 text-white" />
              </div>
              <span>Docs</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search docs..."
                className="pl-10 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
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
                {menuItems.map((section) => (
                  <div key={section.title}>
                    {section.title !== 'Main' && (
                      <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                    )}
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.path}>
                          {item.external && (item.path.startsWith('http') || item.path.startsWith('https')) ? (
                            <a
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            >
                              <div className="flex items-center space-x-3">
                                {item.isImage ? (
                                  <img 
                                    src={item.icon} 
                                    alt={item.title} 
                                    className="w-4 h-4 filter brightness-0" 
                                  />
                                ) : (
                                  <span className="text-base">{item.icon}</span>
                                )}
                                <span>{item.title}</span>
                              </div>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          ) : (
                            <Link
                              to={item.path}
                              onClick={() => setSidebarOpen(false)}
                              className={`
                                flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200
                                ${isActivePath(item.path)
                                  ? 'bg-blue-100 text-blue-700 font-medium border-l-4 border-blue-500 ml-0'
                                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }
                              `}
                            >
                              <div className="flex items-center space-x-3">
                                {item.isImage ? (
                                  <img 
                                    src={item.icon} 
                                    alt={item.title} 
                                    className="w-4 h-4 filter brightness-0" 
                                  />
                                ) : (
                                  <span className="text-base">{item.icon}</span>
                                )}
                                <span>{item.title}</span>
                              </div>
                              {item.hasSubmenu && (
                                <ChevronRight className="w-4 h-4 text-slate-400" />
                              )}
                              {item.external && (
                                <ExternalLink className="w-3 h-3 text-slate-400" />
                              )}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

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
