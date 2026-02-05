import React from 'react';
import { MOCK_USER, USER_EXPERIENCE } from '../constants';
import { Icons } from '../components/Icons';

const Profile: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Cover Image */}
        <div className="h-64 relative bg-gray-300">
            <img src={MOCK_USER.coverImage} alt="Cover" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                <Icons.Share size={20} />
            </button>
        </div>
        
        {/* Profile Info */}
        <div className="px-8 pb-8 relative">
            <div className="flex flex-col md:flex-row items-end -mt-16 mb-6">
                <div className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-white z-10 flex-shrink-0">
                    <img src={MOCK_USER.avatar} alt={MOCK_USER.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                        <h1 className="text-3xl font-bold text-gray-900">{MOCK_USER.name}</h1>
                        {MOCK_USER.isVerified && <Icons.Verified className="text-emerald-500 fill-current" size={24} />}
                    </div>
                    <p className="text-gray-600 font-medium mb-1 text-lg">{MOCK_USER.headline}</p>
                    <div className="flex items-center text-gray-400 text-sm space-x-4">
                        <span className="flex items-center"><Icons.Location size={14} className="mr-1" /> {MOCK_USER.location}</span>
                        <span className="flex items-center"><Icons.Network size={14} className="mr-1" /> 500+ Connections</span>
                    </div>
                </div>
                <div className="mt-6 md:mt-0 flex space-x-3">
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">Message</button>
                    <button className="px-6 py-2 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-900 shadow-md transition-colors">Connect</button>
                </div>
            </div>

            {/* Badges/Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gray-100 mb-8">
                <div className="text-center border-r border-gray-100 last:border-0">
                    <span className="block font-bold text-2xl text-emerald-800">12</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Bridges Built</span>
                </div>
                 <div className="text-center border-r border-gray-100 last:border-0">
                    <span className="block font-bold text-2xl text-emerald-800">8</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Majalis Hosted</span>
                </div>
                 <div className="text-center border-r border-gray-100 last:border-0">
                    <span className="block font-bold text-2xl text-emerald-800">100%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Halal Score</span>
                </div>
                 <div className="text-center">
                    <span className="block font-bold text-2xl text-amber-500">Top 5%</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Contributor</span>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: About & Experience */}
                <div className="md:col-span-2 space-y-8">
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {MOCK_USER.about}
                        </p>
                    </section>

                    <section>
                         <h3 className="text-xl font-bold text-gray-900 mb-4">Experience</h3>
                         <div className="space-y-6">
                            {USER_EXPERIENCE.map(exp => (
                                <div key={exp.id} className="flex space-x-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 bg-emerald-200 rounded-full border-2 border-emerald-500"></div>
                                        <div className="w-0.5 h-full bg-gray-200 my-2"></div>
                                    </div>
                                    <div className="pb-6">
                                        <h4 className="font-bold text-gray-900 text-lg">{exp.role}</h4>
                                        <p className="text-emerald-700 font-medium">{exp.company}</p>
                                        <p className="text-xs text-gray-400 mb-2">{exp.duration}</p>
                                        <p className="text-sm text-gray-600">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </section>
                </div>

                {/* Right Column: Sidebar */}
                <div className="space-y-6">
                    <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                        <h4 className="font-bold text-emerald-900 mb-3">Skills & Endorsements</h4>
                        <div className="flex flex-wrap gap-2">
                            {['Islamic Finance', 'React', 'Product Management', 'Ethical Marketing', 'Fiqh of Trade'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-white text-emerald-800 text-xs font-semibold rounded-md shadow-sm border border-emerald-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3">Portfolio</h4>
                         <div className="grid grid-cols-2 gap-2">
                            <div className="aspect-video bg-gray-100 rounded-lg"></div>
                            <div className="aspect-video bg-gray-100 rounded-lg"></div>
                         </div>
                         <button className="w-full mt-3 text-sm text-emerald-700 hover:underline font-medium">View All Projects</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
