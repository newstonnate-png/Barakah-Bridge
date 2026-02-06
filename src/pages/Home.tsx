import React from 'react';
import { MAJLIS_TOPICS, JOBS, SOUK_PRODUCTS } from '../constants';
import { Icons } from '../components/Icons';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 1. Dashboard Hero: Welcome & Daily Wisdom */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-50 rounded-full translate-x-20 -translate-y-20 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">As-salamu alaykum, Justine.</h1>
            <p className="text-gray-500 mb-6 max-w-md">Your network is active. You have <span className="text-emerald-700 font-bold cursor-pointer hover:underline">3 pending bridge requests</span> and <span className="text-emerald-700 font-bold cursor-pointer hover:underline">5 new alerts</span>.</p>
            
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center space-x-2 bg-emerald-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg">
                <Icons.Search size={18} />
                <span>Find Opportunity</span>
              </button>
              <button className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:border-emerald-500 hover:text-emerald-700 transition-all">
                <Icons.Majlis size={18} />
                <span>Start a Majlis</span>
              </button>
            </div>
          </div>
        </div>

        {/* Daily Wisdom Card */}
        <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-2xl p-8 text-white flex flex-col justify-center relative shadow-lg">
          <Icons.Majlis className="absolute top-4 right-4 text-emerald-700 opacity-20" size={80} />
          <h2 className="text-amber-400 font-serif uppercase tracking-widest text-xs font-bold mb-3">Daily Wisdom</h2>
          <p className="text-xl font-light italic leading-relaxed mb-4">
            "The honest and trustworthy merchant will be with the prophets, the truthful, and the martyrs."
          </p>
          <div className="flex items-center space-x-2 text-emerald-300 text-sm font-medium">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            <span>Tirmidhi</span>
          </div>
        </div>
      </div>

      {/* 2. Quick Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Network Reach', value: '1.2k', icon: Icons.Network, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Profile Views', value: '84', icon: Icons.TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Barakah Score', value: '92', icon: Icons.Star, color: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'Open Gigs', value: '3', icon: Icons.Exchange, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Ecosystem Pulse (Split Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Activity Feed (Majlis & Exchange) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Recent Discussions */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <Icons.Message className="mr-2 text-emerald-600" size={20} />
                Trending Discussions
              </h3>
              <button className="text-sm text-emerald-700 hover:underline">View All</button>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-100">
              {MAJLIS_TOPICS.slice(0, 3).map(topic => (
                <div key={topic.id} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-3">
                      <div className="mt-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">{topic.title}</h4>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{topic.description}</p>
                        <div className="mt-2 flex items-center space-x-3 text-xs text-gray-400">
                          <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{topic.category}</span>
                          <span>• {topic.replies} replies</span>
                          <span>• {topic.author.name}</span>
                        </div>
                      </div>
                    </div>
                    {topic.isLive && <span className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">LIVE</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* New Jobs */}
          <section>
             <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center">
                <Icons.Exchange className="mr-2 text-emerald-600" size={20} />
                New Opportunities
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {JOBS.slice(0, 2).map(job => (
                <div key={job.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-emerald-300 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">{job.title}</h4>
                    {job.isHalalVerified && <Icons.Shield size={16} className="text-emerald-500" />}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{job.company}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">{job.type}</span>
                    <span>{job.salary}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Col: Souk & Widgets */}
        <div className="space-y-8">
           
           {/* Souk Spotlight */}
           <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                  <Icons.Souk className="mr-2 text-emerald-600" size={20} />
                  Souk Spotlight
                </h3>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                <div className="space-y-4">
                  {SOUK_PRODUCTS.slice(0, 3).map(product => (
                    <div key={product.id} className="flex space-x-3 group cursor-pointer">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-emerald-700">{product.name}</h4>
                        <div className="flex items-center text-xs text-amber-500 mb-1">
                          <Icons.Star size={10} className="fill-current" />
                          <span className="ml-1 text-gray-500">{product.rating}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-gray-900">${product.price}</span>
                          <button className="p-1.5 rounded-full bg-gray-50 hover:bg-emerald-100 text-emerald-700 transition-colors">
                            <Icons.Souk size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-sm text-center text-gray-500 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  Visit The Souk
                </button>
              </div>
           </section>

           {/* Quick Announcement */}
           <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
             <h4 className="font-bold text-amber-800 mb-2 text-sm">Upcoming Webinar</h4>
             <p className="text-xs text-amber-700 mb-3">
               "Ethical Investing for Beginners" with Sheikh Yusuf. Tomorrow at 8 PM.
             </p>
             <button className="text-xs font-bold text-white bg-amber-500 px-3 py-1.5 rounded-md hover:bg-amber-600 w-full transition-colors">
               Register Free
             </button>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
