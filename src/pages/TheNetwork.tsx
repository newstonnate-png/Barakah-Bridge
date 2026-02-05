import React, { useState } from 'react';
import { NETWORK_SUGGESTIONS } from '../constants';
import { Icons } from '../components/Icons';

const TheNetwork: React.FC = () => {
  const [bridgeStatus, setBridgeStatus] = useState<Record<string, string>>({});

  const handleBridgeRequest = (id: string, type: 'Job' | 'Collab') => {
    setBridgeStatus(prev => ({
      ...prev,
      [id]: `Pending: ${type}`
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-2xl p-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-2">The Halal Network</h2>
        <p className="text-emerald-100 max-w-2xl">
          Connect with purpose. Your network is halal, your net worth is halal. Build bridges based on Iman, Ethics, and Integrity.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex space-x-3 overflow-x-auto no-scrollbar pb-2">
        {['All', 'Halal Tech', 'Scholars', 'Entrepreneurs', 'Investors', 'Mentors'].map((filter, i) => (
          <button 
            key={filter} 
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              i === 0 
                ? 'bg-amber-400 text-emerald-950 shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-500 hover:text-emerald-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Bridges of Opportunity Grid */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Icons.Globe className="mr-2 text-emerald-600" size={24}/>
          Bridges of Opportunity
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NETWORK_SUGGESTIONS.map(user => (
            <div key={user.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-amber-400 to-emerald-500">
                   <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover border-4 border-white" />
                </div>
                {user.isVerified && (
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-sm">
                    <Icons.Verified size={20} className="text-emerald-500 fill-current" />
                  </div>
                )}
              </div>
              
              <h4 className="text-lg font-bold text-gray-900">{user.name}</h4>
              <p className="text-sm text-emerald-600 font-medium mb-1">{user.headline}</p>
              <div className="flex items-center text-gray-400 text-xs mb-6">
                <Icons.Location size={12} className="mr-1" />
                {user.location}
              </div>

              <div className="mt-auto w-full space-y-2">
                {bridgeStatus[user.id] ? (
                  <button disabled className="w-full py-2 rounded-lg bg-gray-100 text-gray-500 text-sm font-medium cursor-default">
                    {bridgeStatus[user.id]}
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => handleBridgeRequest(user.id, 'Job')}
                      className="py-2 px-2 rounded-lg border border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-xs font-semibold transition-colors"
                    >
                      Bridge: Job
                    </button>
                    <button 
                      onClick={() => handleBridgeRequest(user.id, 'Collab')}
                      className="py-2 px-2 rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 text-xs font-semibold transition-colors shadow-sm"
                    >
                      Bridge: Collab
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheNetwork;
