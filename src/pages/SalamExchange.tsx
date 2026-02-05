import React, { useState } from 'react';
import { JOBS } from '../constants';
import { Icons } from '../components/Icons';

const SalamExchange: React.FC = () => {
  const [viewMode, setViewMode] = useState<'Jobs' | 'Freelance'>('Jobs');
  const [applyingJobId, setApplyingJobId] = useState<string | null>(null);

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-4 gap-4">
        <div>
           <h2 className="text-2xl font-bold text-gray-900 flex items-center">
             <Icons.Exchange className="mr-2 text-emerald-600" />
             The Salam Exchange
           </h2>
           <p className="text-gray-500 text-sm mt-1">Career & Freelance Hub built on Dignity.</p>
        </div>
        
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button 
            onClick={() => setViewMode('Jobs')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${viewMode === 'Jobs' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-500'}`}
          >
            Find Jobs
          </button>
          <button 
            onClick={() => setViewMode('Freelance')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${viewMode === 'Freelance' ? 'bg-white text-emerald-800 shadow-sm' : 'text-gray-500'}`}
          >
            Freelance Gigs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Filters Panel */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 h-fit">
          <h3 className="font-bold text-gray-800 mb-4">Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase">Location</label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                  <span>Remote</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                  <span>On-site</span>
                </label>
              </div>
            </div>
            <hr className="border-gray-100" />
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase">Halal Policy</label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input type="checkbox" defaultChecked className="rounded text-emerald-600 focus:ring-emerald-500" />
                  <span>Verified Halal Employer</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input type="checkbox" defaultChecked className="rounded text-emerald-600 focus:ring-emerald-500" />
                  <span>Prayer Breaks Guaranteed</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="lg:col-span-2 space-y-4">
          {JOBS.filter(j => viewMode === 'Jobs' ? j.type === 'Full-time' : j.type !== 'Full-time').map(job => (
            <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-emerald-300 transition-colors cursor-pointer group relative">
               {job.isHalalVerified && (
                 <div className="absolute top-0 right-0 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl border-l border-b border-emerald-100 flex items-center">
                   <Icons.Shield size={10} className="mr-1" />
                   VERIFIED ETHICAL
                 </div>
               )}
               
               <div className="flex justify-between items-start mb-2">
                 <div>
                   <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-700 transition-colors">{job.title}</h3>
                   <p className="text-gray-600 font-medium">{job.company}</p>
                 </div>
                 <div className="h-10 w-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                   <Icons.Exchange size={20} />
                 </div>
               </div>

               <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                 <span className="flex items-center"><Icons.Location size={14} className="mr-1" /> {job.location}</span>
                 <span>•</span>
                 <span>{job.salary}</span>
                 <span>•</span>
                 <span>{job.type}</span>
               </div>

               <div className="flex justify-between items-center">
                 <div className="flex gap-2">
                   {job.tags.map(tag => (
                     <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-md border border-gray-100">{tag}</span>
                   ))}
                 </div>
                 <button 
                  onClick={(e) => { e.stopPropagation(); setApplyingJobId(job.id); }}
                  className="text-sm font-semibold text-emerald-700 hover:underline"
                 >
                   Apply Now &rarr;
                 </button>
               </div>
            </div>
          ))}
          {JOBS.filter(j => viewMode === 'Jobs' ? j.type === 'Full-time' : j.type !== 'Full-time').length === 0 && (
             <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-12 text-center text-gray-500">
               <p>No listings found for this category yet.</p>
               <button className="mt-4 text-emerald-700 font-semibold hover:underline">Post an Opportunity</button>
             </div>
          )}
        </div>
      </div>

      {/* Simple Application Modal */}
      {applyingJobId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setApplyingJobId(null)}></div>
           <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md relative z-10 animation-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Easy Apply</h3>
                <button onClick={() => setApplyingJobId(null)} className="text-gray-400 hover:text-gray-600"><Icons.Close size={20}/></button>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Applying to <span className="font-bold text-emerald-700">{JOBS.find(j => j.id === applyingJobId)?.company}</span> via Barakah Bridge profile.
              </p>
              <div className="space-y-4">
                 <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">Use Profile: Bai Justine</span>
                    <Icons.Verified size={16} className="text-emerald-600" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Note (Optional)</label>
                    <textarea className="w-full border border-gray-300 rounded-lg p-2 text-sm h-24 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Explain why you are a good fit..."></textarea>
                 </div>
                 <button 
                  onClick={() => setApplyingJobId(null)}
                  className="w-full py-3 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-900 transition-colors"
                 >
                   Submit Application
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default SalamExchange;
