import React, { useState } from 'react';
import { Icons } from '../components/Icons';
import { MOCK_INVESTMENTS } from '../constants';
import { InvestmentOpportunity } from '../types';

const FalahCapital: React.FC = () => {
  const [selectedInvestment, setSelectedInvestment] = useState<InvestmentOpportunity | null>(null);

  if (selectedInvestment) {
    const progress = (selectedInvestment.currentRaise / selectedInvestment.targetRaise) * 100;
    
    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <button 
          onClick={() => setSelectedInvestment(null)}
          className="flex items-center text-gray-500 hover:text-emerald-700 font-medium text-sm transition-colors"
        >
          <Icons.Close className="mr-2 rotate-45" size={16} /> Back to Deal Flow
        </button>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="h-64 bg-emerald-900 relative p-8 text-white flex flex-col justify-end">
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-2">
                   <span className="bg-amber-400 text-emerald-950 px-3 py-1 rounded font-bold text-xs uppercase">{selectedInvestment.industry}</span>
                   <span className="bg-white/20 backdrop-blur px-3 py-1 rounded font-bold text-xs text-white border border-white/30 flex items-center">
                     <Icons.Shield size={12} className="mr-1" /> Shariah Certified
                   </span>
                </div>
                <h1 className="text-4xl font-bold mb-2">{selectedInvestment.title}</h1>
                <p className="text-emerald-100 opacity-90 text-lg">Certified by {selectedInvestment.shariahAdvisor}</p>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
             <div className="lg:col-span-2 p-8 border-r border-gray-100">
                <h3 className="font-bold text-gray-900 text-xl mb-4">Investment Opportunity</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedInvestment.description}</p>
                
                <h4 className="font-bold text-gray-900 text-lg mb-3">Documents</h4>
                <div className="space-y-2">
                   {['Pitch Deck', 'Shariah Certificate', 'Financial Projections'].map(doc => (
                     <div key={doc} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                       <div className="flex items-center">
                          <Icons.Majlis size={20} className="text-gray-400 mr-3" />
                          <span className="text-sm font-medium text-gray-700">{doc}.pdf</span>
                       </div>
                       <button className="text-emerald-700 text-xs font-bold hover:underline">Download</button>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="p-8 bg-gray-50">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                   <div className="mb-4">
                     <div className="flex justify-between items-end mb-1">
                       <span className="text-3xl font-bold text-emerald-900">${(selectedInvestment.currentRaise / 1000).toFixed(0)}k</span>
                       <span className="text-sm text-gray-500 font-medium">of ${(selectedInvestment.targetRaise / 1000).toFixed(0)}k goal</span>
                     </div>
                     <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                     </div>
                     <p className="text-xs text-gray-400 mt-2 text-right">{selectedInvestment.daysLeft} Days Left</p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500 uppercase">Min Ticket</p>
                        <p className="font-bold text-gray-900">${selectedInvestment.minInvestment}</p>
                      </div>
                      <div className="p-2 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500 uppercase">Risk</p>
                        <p className="font-bold text-amber-600">{selectedInvestment.riskLevel}</p>
                      </div>
                   </div>

                   <button className="w-full py-3 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-900 shadow-lg transition-colors">
                     Commit Capital
                   </button>
                   <p className="text-[10px] text-center text-gray-400 mt-3">
                     Capital at risk. Please read the Prospectus carefully.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center py-10 bg-white rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-emerald-500 to-amber-400"></div>
        <div className="mx-auto w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
          <Icons.Capital size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Falah Capital</h2>
        <p className="text-gray-500 max-w-lg mx-auto">The halal hub for partnerships, acquisitions, and business growth with Barakah.</p>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
          <Icons.TrendingUp className="mr-2 text-emerald-600" />
          Live Deal Flow
        </h3>
        <div className="flex space-x-2">
           <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Filter</button>
           <button className="px-4 py-2 bg-emerald-800 text-white rounded-lg text-sm font-medium hover:bg-emerald-900">List Your Business</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {MOCK_INVESTMENTS.map(inv => (
           <div 
             key={inv.id} 
             onClick={() => setSelectedInvestment(inv)}
             className="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-emerald-400 transition-all cursor-pointer group"
           >
             <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                   <div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded uppercase tracking-wide mb-2 inline-block">
                        {inv.industry}
                      </span>
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-emerald-700 transition-colors">{inv.title}</h3>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                      <Icons.Capital size={20} />
                   </div>
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-2 mb-6">{inv.description}</p>

                <div className="grid grid-cols-3 gap-2 text-center mb-4 text-sm">
                   <div className="bg-gray-50 p-2 rounded">
                      <span className="block text-xs text-gray-400">Target</span>
                      <span className="font-bold text-gray-800">${(inv.targetRaise / 1000).toFixed(0)}k</span>
                   </div>
                   <div className="bg-gray-50 p-2 rounded">
                      <span className="block text-xs text-gray-400">Min Ticket</span>
                      <span className="font-bold text-gray-800">${inv.minInvestment}</span>
                   </div>
                   <div className="bg-gray-50 p-2 rounded">
                      <span className="block text-xs text-gray-400">Proj. ROI</span>
                      <span className="font-bold text-emerald-600">{inv.returnRate}</span>
                   </div>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                   <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${(inv.currentRaise/inv.targetRaise)*100}%` }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                   <span>{((inv.currentRaise/inv.targetRaise)*100).toFixed(0)}% Funded</span>
                   <span>{inv.daysLeft} days left</span>
                </div>
             </div>
             <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 rounded-b-xl">
                <span className="flex items-center"><Icons.Shield size={12} className="mr-1 text-emerald-600"/> Shariah Certified</span>
                <span className="font-medium text-gray-900 group-hover:underline">View Details &rarr;</span>
             </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default FalahCapital;
