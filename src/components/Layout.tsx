import React, { useState } from 'react';
import { View, User } from '../types';
import { Icons } from './Icons';
import { MOCK_NOTIFICATIONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onNavigate: (view: View) => void;
  user: User;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate, user, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const NavItem = ({ view, icon: Icon, label }: { view: View; icon: any; label: string }) => (
    <button
      onClick={() => {
        onNavigate(view);
        setIsMobileMenuOpen(false);
      }}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
        currentView === view
          ? 'bg-emerald-800/50 text-amber-400 border-r-4 border-amber-400'
          : 'text-gray-300 hover:bg-emerald-800/30 hover:text-white'
      }`}
    >
      <Icon size={20} className={currentView === view ? 'text-amber-400' : 'text-gray-400 group-hover:text-white'} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-emerald-900 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
            <span className="font-bold text-emerald-900">B</span>
          </div>
          <span className="font-semibold text-lg">Barakah Bridge</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky md:top-0 h-screen w-64 bg-emerald-950 text-white flex-col shadow-2xl z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-emerald-800">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center shadow-lg shadow-amber-400/20">
              <span className="font-bold text-xl text-emerald-950">BB</span>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Barakah Bridge</h1>
              <p className="text-xs text-emerald-300/80">Reviving Amanah</p>
            </div>
          </div>
          
          <button 
            onClick={() => { onNavigate(View.PROFILE); setIsMobileMenuOpen(false); }}
            className="w-full flex items-center space-x-3 bg-emerald-900/50 p-3 rounded-xl border border-emerald-800/50 hover:bg-emerald-800 transition-colors text-left"
          >
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover border-2 border-amber-500/50" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate text-white">{user.name}</p>
              <p className="text-xs text-emerald-300 truncate">View Profile</p>
            </div>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <NavItem view={View.HOME} icon={Icons.Home} label="Home Feed" />
          <NavItem view={View.MESSAGES} icon={Icons.Message} label="Messages" />
          <div className="pt-4 pb-2 px-4 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            The Pillars
          </div>
          <NavItem view={View.NETWORK} icon={Icons.Network} label="The Network" />
          <NavItem view={View.SOUK} icon={Icons.Souk} label="The Souk" />
          <NavItem view={View.EXCHANGE} icon={Icons.Exchange} label="Salam Exchange" />
          <NavItem view={View.MAJLIS} icon={Icons.Majlis} label="The Majlis" />
          <NavItem view={View.FALAH} icon={Icons.Capital} label="Falah Capital" />
        </nav>

        <div className="p-4 border-t border-emerald-800">
           <button 
            onClick={onLogout}
            className="w-full py-2 px-4 text-sm text-emerald-300 hover:text-white hover:bg-emerald-900 rounded transition-colors text-left"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 md:h-screen md:overflow-y-auto relative">
        {/* Top Header (Desktop) */}
        <header className="hidden md:flex bg-white border-b border-gray-200 h-16 items-center justify-between px-8 sticky top-0 z-30">
          <div className="relative w-96">
            <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search specifically halal opportunities..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-emerald-500/20 text-sm"
            />
          </div>
          <div className="flex items-center space-x-6 relative">
            <button 
              onClick={() => onNavigate(View.MESSAGES)}
              className={`relative hover:text-emerald-700 transition-colors ${currentView === View.MESSAGES ? 'text-emerald-700' : 'text-gray-500'}`}
            >
              <Icons.Message size={22} />
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className={`relative hover:text-emerald-700 transition-colors ${isNotifOpen ? 'text-emerald-700' : 'text-gray-500'}`}
              >
                <Icons.Notification size={22} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {/* Notification Popover */}
              {isNotifOpen && (
                <div className="absolute right-0 top-10 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animation-fade-in">
                  <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                    <h4 className="font-bold text-gray-900">Notifications</h4>
                    <span className="text-xs text-emerald-700 font-medium cursor-pointer hover:underline">Mark all read</span>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {MOCK_NOTIFICATIONS.map(notif => (
                      <div key={notif.id} className={`p-4 hover:bg-gray-50 border-b border-gray-50 transition-colors flex items-start space-x-3 ${!notif.read ? 'bg-blue-50/30' : ''}`}>
                         {notif.actor ? (
                           <img src={notif.actor.avatar} alt="Actor" className="w-10 h-10 rounded-full object-cover" />
                         ) : (
                           <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600"><Icons.Notification size={18} /></div>
                         )}
                         <div>
                           <p className="text-sm text-gray-800">
                             <span className="font-bold">{notif.actor?.name}</span> {notif.content}
                           </p>
                           <p className="text-xs text-gray-400 mt-1">{notif.timestamp}</p>
                         </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 text-center bg-gray-50 border-t border-gray-100">
                    <button className="text-xs font-bold text-gray-500 hover:text-emerald-700">View All</button>
                  </div>
                </div>
              )}
            </div>

            <div className="h-8 w-px bg-gray-200"></div>
            <button className="text-sm font-medium text-emerald-800 bg-emerald-50 px-4 py-2 rounded-full hover:bg-emerald-100 transition-colors">
              Start a Majlis
            </button>
          </div>
        </header>
        
        {/* Click outside closer for Notifications */}
        {isNotifOpen && (
          <div className="fixed inset-0 z-20 cursor-default" onClick={() => setIsNotifOpen(false)}></div>
        )}

        <div className="p-4 md:p-8 max-w-7xl mx-auto relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
