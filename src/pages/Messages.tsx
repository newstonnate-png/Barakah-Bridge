import React, { useState } from 'react';
import { CHAT_THREADS, MOCK_USER } from '../constants';
import { Icons } from '../components/Icons';

const Messages: React.FC = () => {
  const [activeThreadId, setActiveThreadId] = useState(CHAT_THREADS[0].id);
  const [inputText, setInputText] = useState('');

  const activeThread = CHAT_THREADS.find(t => t.id === activeThreadId);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 h-[calc(100vh-8rem)] flex overflow-hidden">
      {/* Sidebar: Chat List */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <h2 className="font-bold text-lg text-gray-800">Messages</h2>
          <button className="text-emerald-700 hover:bg-emerald-100 p-2 rounded-full transition-colors">
            <Icons.Exchange size={18} />
          </button>
        </div>
        <div className="p-3">
          <div className="relative">
            <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {CHAT_THREADS.map(thread => (
            <div 
              key={thread.id} 
              onClick={() => setActiveThreadId(thread.id)}
              className={`p-4 flex items-center space-x-3 cursor-pointer transition-colors border-l-4 ${
                activeThreadId === thread.id 
                  ? 'bg-emerald-50 border-emerald-600' 
                  : 'bg-white border-transparent hover:bg-gray-50'
              }`}
            >
              <div className="relative">
                <img src={thread.participant.avatar} alt={thread.participant.name} className="w-12 h-12 rounded-full object-cover" />
                {thread.unreadCount > 0 && (
                   <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                     {thread.unreadCount}
                   </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className={`text-sm truncate ${thread.unreadCount > 0 ? 'font-bold text-gray-900' : 'font-semibold text-gray-700'}`}>
                    {thread.participant.name}
                  </h4>
                  <span className="text-[10px] text-gray-400">{thread.lastMessageTime}</span>
                </div>
                <p className={`text-xs truncate ${thread.unreadCount > 0 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                  {thread.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      {activeThread ? (
        <div className="flex-1 flex flex-col bg-white">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={activeThread.participant.avatar} alt="User" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-bold text-gray-900">{activeThread.participant.name}</h3>
                <p className="text-xs text-gray-500">{activeThread.participant.headline}</p>
              </div>
            </div>
            <div className="flex space-x-2 text-gray-400">
              <Icons.Search size={20} className="hover:text-gray-600 cursor-pointer" />
              <Icons.Shield size={20} className="hover:text-emerald-600 cursor-pointer" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
             {activeThread.messages.map(msg => {
               const isMe = msg.senderId === MOCK_USER.id;
               return (
                 <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                   <div className={`max-w-[70%] rounded-2xl px-4 py-3 shadow-sm ${
                     isMe 
                       ? 'bg-emerald-800 text-white rounded-tr-sm' 
                       : 'bg-white text-gray-800 border border-gray-100 rounded-tl-sm'
                   }`}>
                     <p className="text-sm leading-relaxed">{msg.content}</p>
                     <p className={`text-[10px] mt-1 text-right ${isMe ? 'text-emerald-200' : 'text-gray-400'}`}>
                       {msg.timestamp}
                     </p>
                   </div>
                 </div>
               );
             })}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-end space-x-3 bg-gray-50 rounded-xl p-2 border border-gray-200 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-400 transition-all">
               <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                 <Icons.Souk size={20} />
               </button>
               <textarea 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type a message..." 
                className="flex-1 bg-transparent border-none focus:ring-0 resize-none max-h-32 text-sm py-2"
                rows={1}
               />
               <button className={`p-2 rounded-lg transition-all ${inputText.trim() ? 'bg-emerald-800 text-white shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
                 <Icons.Share className={inputText.trim() ? '' : 'opacity-50'} size={20} />
               </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
          <Icons.Message size={64} className="mb-4 opacity-20" />
          <p>Select a conversation to start chatting</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
