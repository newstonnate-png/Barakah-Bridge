import React, { useState } from 'react';
import { Icons } from '../components/Icons';

interface AuthProps {
  onLogin: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-emerald-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-400 blur-3xl"></div>
         <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-400 blur-3xl"></div>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl mx-auto flex items-center justify-center shadow-lg mb-4">
            <span className="text-3xl font-bold text-white">B</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Barakah Bridge</h1>
          <p className="text-gray-500 mt-2">Where your network is Halal</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="e.g. Bilal Ahmed" />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="••••••••" />
          </div>

          <button 
            type="submit" 
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold py-3.5 rounded-lg transition-all transform active:scale-95 shadow-lg shadow-emerald-900/20 flex items-center justify-center space-x-2"
          >
            <span>{isLogin ? 'Sign In to Your Account' : 'Join the Ummah'}</span>
            <Icons.Network size={18} />
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account yet?" : "Already a member?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="font-semibold text-emerald-700 hover:text-emerald-900 hover:underline"
            >
              {isLogin ? 'Create Account' : 'Sign In'}
            </button>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400 italic">"Trust (Amanah) is the foundation of our trade."</p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
