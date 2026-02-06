import React, { useState } from 'react';
import Layout from './components/Layout';
import Auth from './pages/Auth';
import Home from './pages/Home';
import TheNetwork from './pages/TheNetwork';
import TheSouk from './pages/TheSouk';
import SalamExchange from './pages/SalamExchange';
import TheMajlis from './pages/TheMajlis';
import FalahCapital from './pages/FalahCapital';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import { View } from './types';
import { MOCK_USER } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.AUTH);
  // Removed setUser because it was unused
  const [user] = useState(MOCK_USER);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return <Home />;
      case View.NETWORK:
        return <TheNetwork />;
      case View.SOUK:
        return <TheSouk />;
      case View.EXCHANGE:
        return <SalamExchange />;
      case View.MAJLIS:
        return <TheMajlis />;
      case View.FALAH:
        return <FalahCapital />;
      case View.PROFILE:
        return <Profile />;
      case View.MESSAGES:
        return <Messages />;
      default:
        return <Home />;
    }
  };

  if (currentView === View.AUTH) {
    return <Auth onLogin={() => setCurrentView(View.HOME)} />;
  }

  return (
    <Layout 
      currentView={currentView} 
      onNavigate={setCurrentView}
      user={user}
      onLogout={() => setCurrentView(View.AUTH)}
    >
      {renderView()}
    </Layout>
  );
};

export default App;
