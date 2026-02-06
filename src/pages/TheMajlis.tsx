import React, { useState } from 'react';
import { MAJLIS_TOPICS, MOCK_COURSES, MOCK_EVENTS } from '../constants';
import { Icons } from '../components/Icons';
import { Course, MajlisTopic } from '../types';

const TheMajlis: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<MajlisTopic | null>(null);

  // Community View State
  const [activeTab, setActiveTab] = useState<'Community' | 'Classroom' | 'Calendar' | 'Members'>('Community');
  
  // Classroom State
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  
  // Removed activeVideoUrl state because it was unused in the code
  
  const filters = [
    { name: 'All', icon: null },
    { name: 'Islamic Finance', icon: '💰' },
    { name: 'Business', icon: '🚀' },
    { name: 'Spirituality', icon: '🤲' },
    { name: 'Tech', icon: '💻' },
    { name: 'Family', icon: '🏡' },
    { name: 'Career', icon: '👔' },
    { name: 'Health', icon: '🍎' },
  ];

  const filteredTopics = MAJLIS_TOPICS.filter(topic => {
    const matchesFilter = activeFilter === 'All' || topic.category === activeFilter;
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          topic.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const renderTabContent = () => {
    switch(activeTab) {
      case 'Community':
        return (
          <div className="space-y-4">
            {/* Filter Bar for Feed */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 pb-2">
                <span className="text-gray-900 bg-gray-200 px-3 py-1 rounded-full cursor-pointer">Latest</span>
                <span className="hover:bg-gray-100 px-3 py-1 rounded-full cursor-pointer">Popular</span>
                <span className="hover:bg-gray-100 px-3 py-1 rounded-full cursor-pointer">Unanswered</span>
            </div>

            {selectedTopic?.posts?.map(post => (
              <div key={post.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-emerald-300 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{post.author.name}</h4>
                      <p className="text-xs text-gray-500">{post.timestamp} in <span className="text-emerald-700 font-medium">{post.category}</span></p>
                    </div>
                  </div>
                  {post.isPinned && <Icons.Location size={16} className="text-emerald-600 rotate-45" />}
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{post.content}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 pt-4 border-t border-gray-50">
                  <button className="flex items-center space-x-2 hover:text-emerald-600 transition-colors">
                    <Icons.Like size={18} />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-emerald-600 transition-colors">
                    <Icons.Message size={18} />
                    <span>{post.comments} Comments</span>
                  </button>
                </div>
              </div>
            ))}

            {!selectedTopic?.posts && (
              <div className="text-center py-10 text-gray-400">
                <p>No discussions yet. Be the first to post!</p>
              </div>
            )}
          </div>
        );
      case 'Classroom':
        if (activeCourse) {
          return (
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
               <div className="p-4 border-b border-gray-100 flex items-center space-x-2">
                 <button onClick={() => setActiveCourse(null)} className="text-gray-500 hover:text-emerald-700">
                   <Icons.Close size={20} className="rotate-45" />
                 </button>
                 <span className="font-bold text-gray-800">{activeCourse.title}</span>
               </div>
               
               <div className="grid grid-cols-1 lg:grid-cols-3">
                 <div className="lg:col-span-2 bg-black min-h-[300px] flex items-center justify-center relative group">
                    {/* Mock Video Player */}
                    <div className="text-white text-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-2 cursor-pointer hover:scale-110 transition-transform">
                          <Icons.Majlis size={32} className="ml-1 fill-white" />
                        </div>
                        <p className="text-sm font-medium">Click to Play Lesson</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                      <div className="h-full bg-red-500 w-1/3"></div>
                    </div>
                 </div>
                 <div className="border-l border-gray-200 bg-gray-50 max-h-[400px] overflow-y-auto">
                    <div className="p-4">
                      <h4 className="font-bold text-gray-900 mb-4">Course Content</h4>
                      <div className="space-y-2">
                        {activeCourse.lessons.map((lesson, idx) => (
                          <div key={lesson.id} className={`p-3 rounded-lg flex items-center justify-between cursor-pointer ${idx === 0 ? 'bg-emerald-100 text-emerald-900' : 'bg-white hover:bg-gray-100'}`}>
                             <div className="flex items-center space-x-3">
                               <div className="text-xs font-bold opacity-50">{idx + 1}</div>
                               <div>
                                 <p className="text-sm font-medium leading-tight">{lesson.title}</p>
                                 <p className="text-xs opacity-70 mt-1">{lesson.duration}</p>
                               </div>
                             </div>
                             {lesson.isCompleted ? <Icons.Verified size={16} className="text-emerald-600" /> : <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>}
                          </div>
                        ))}
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          );
        }

        return (
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Available Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_COURSES.map(course => (
                <div key={course.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow group">
                  <div className="h-40 relative bg-gray-200">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <button 
                        onClick={() => setActiveCourse(course)}
                        className="bg-white text-emerald-900 px-4 py-2 rounded-full font-bold text-sm transform translate-y-2 group-hover:translate-y-0 transition-transform"
                       >
                         Start Learning
                       </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="font-bold text-gray-900 line-clamp-1">{course.title}</h4>
                       <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-medium">{course.totalLessons} Lessons</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">Instructor: {course.instructor}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
                      <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                    <p className="text-xs text-right text-gray-400">{course.progress}% Complete</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Calendar':
        return (
          <div className="space-y-4">
             <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-900 text-lg">Upcoming Events</h3>
                <button className="text-sm text-emerald-700 font-medium hover:underline">+ Add Event</button>
             </div>
             
             {MOCK_EVENTS.map(ev => (
               <div key={ev.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center space-x-4 hover:border-emerald-300 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-emerald-50 rounded-xl flex flex-col items-center justify-center text-emerald-800 border border-emerald-100">
                     <span className="text-xs font-bold uppercase">{ev.date.split(' ')[0]}</span>
                     <span className="text-xl font-bold">{ev.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex-1">
                     <div className="flex justify-between items-start">
                        <h4 className="font-bold text-gray-900">{ev.title}</h4>
                        <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">{ev.type}</span>
                     </div>
                     <p className="text-sm text-gray-500 mt-1">{ev.time} • {ev.attendees} Attending</p>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                    RSVP
                  </button>
               </div>
             ))}

             <div className="bg-blue-50 p-4 rounded-xl flex items-start space-x-3">
               <Icons.Majlis className="text-blue-600 flex-shrink-0" size={20} />
               <div>
                 <p className="text-sm font-bold text-blue-900">Host your own session?</p>
                 <p className="text-xs text-blue-700 mt-1">Majlis leaders can schedule live streams or Zoom meetings directly in this calendar.</p>
               </div>
             </div>
          </div>
        );
      case 'Members':
        return (
          <div className="grid grid-cols-2 gap-4">
             {[1,2,3,4,5,6].map(i => (
               <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center space-x-3">
                 <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                 <div>
                   <p className="font-bold text-sm text-gray-800">Community Member</p>
                   <p className="text-xs text-gray-500">Joined 2 days ago</p>
                 </div>
               </div>
             ))}
          </div>
        );
      default:
        return <div>Content</div>;
    }
  };

  // Render Inner Community View
  if (selectedTopic) {
    return (
      <div className="space-y-6">
        {/* Breadcrumb Back Button */}
        <button 
          onClick={() => setSelectedTopic(null)}
          className="flex items-center text-gray-500 hover:text-emerald-700 font-medium text-sm transition-colors mb-4"
        >
          <Icons.Close className="mr-2 rotate-45" size={16} /> Back to Discovery
        </button>

        {/* Community Header Banner */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
           <div className="h-48 md:h-64 relative bg-gray-100">
             <img src={selectedTopic.coverImage} alt={selectedTopic.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/20"></div>
           </div>
           <div className="px-6 md:px-8 pb-0 relative">
             <div className="flex flex-col md:flex-row items-start md:items-end -mt-10 mb-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl border-4 border-white shadow-lg overflow-hidden bg-white mr-6 flex-shrink-0">
                  <img src={selectedTopic.author.avatar} alt="Host" className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 md:mt-0 flex-1 pb-4">
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">{selectedTopic.title}</h1>
                  <p className="text-gray-500 text-sm font-medium">{selectedTopic.isLive ? 'Private Group' : 'Public Community'} • {selectedTopic.members?.toLocaleString()} Members</p>
                </div>
                <div className="mt-4 md:mt-0 mb-6 flex space-x-3">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                    <Icons.Share size={18} />
                  </button>
                  <button className="px-6 py-2 bg-emerald-800 text-white font-bold rounded-lg hover:bg-emerald-900 shadow-md transition-colors">
                    Join Group
                  </button>
                </div>
             </div>

             {/* Navigation Tabs */}
             <div className="flex space-x-8 border-t border-gray-100 pt-1 overflow-x-auto no-scrollbar">
                {['Community', 'Classroom', 'Calendar', 'Members'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`py-4 font-medium text-sm whitespace-nowrap transition-colors border-b-2 relative -mb-[2px] ${
                      activeTab === tab 
                        ? 'text-emerald-800 border-emerald-800' 
                        : 'text-gray-500 border-transparent hover:text-gray-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
             </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post Input only on Community Tab */}
            {activeTab === 'Community' && (
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex space-x-4 cursor-text hover:shadow-md transition-shadow">
                 <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold flex-shrink-0">
                    U
                 </div>
                 <div className="flex-1">
                   <input 
                    type="text" 
                    placeholder="Write something to the community..." 
                    className="w-full h-10 bg-gray-50 rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 mb-3 transition-colors hover:bg-gray-100 focus:bg-white"
                   />
                   <div className="flex justify-between items-center text-gray-400">
                      <div className="flex space-x-4 text-xs font-semibold">
                        <span className="hover:text-emerald-700 cursor-pointer flex items-center transition-colors"><Icons.Souk size={14} className="mr-1"/> Photo</span>
                        <span className="hover:text-emerald-700 cursor-pointer flex items-center transition-colors"><Icons.TrendingUp size={14} className="mr-1"/> Poll</span>
                      </div>
                      <button className="bg-gray-200 text-gray-500 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-emerald-800 hover:text-white transition-colors">Post</button>
                   </div>
                 </div>
              </div>
            )}
            
            {renderTabContent()}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
               <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">About this Majlis</h4>
               <p className="text-sm text-gray-600 mb-4 leading-relaxed">{selectedTopic.description}</p>
               <div className="space-y-3 text-sm">
                 <div className="flex items-center text-gray-500">
                   <Icons.Globe size={16} className="mr-3 text-emerald-600" />
                   <span>Public Group</span>
                 </div>
                 <div className="flex items-center text-gray-500">
                   <Icons.Network size={16} className="mr-3 text-emerald-600" />
                   <span>{selectedTopic.members?.toLocaleString()} Members</span>
                 </div>
                 <div className="flex items-center text-gray-500">
                   <Icons.Verified size={16} className="mr-3 text-emerald-600" />
                   <span>Created by {selectedTopic.author.name}</span>
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
               <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Top Contributors</h4>
               <div className="space-y-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="flex items-center justify-between">
                     <div className="flex items-center space-x-2">
                       <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                       <span className="text-sm font-medium text-gray-700">Member Name</span>
                     </div>
                     <span className="text-xs font-bold text-emerald-600">Lvl {10-i}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Directory View (Existing Logic)
  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <div className="text-center space-y-6 pt-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Discover Majalis</h1>
          <p className="text-gray-500 text-lg">or <button className="text-emerald-700 hover:underline font-semibold">create your own circle</button></p>
        </div>

        {/* Big Search Bar */}
        <div className="max-w-2xl mx-auto relative group">
          <Icons.Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-emerald-600 transition-colors" size={24} />
          <input 
            type="text" 
            placeholder="Search for topics, scholars, or discussions..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-4 rounded-full border border-gray-200 shadow-sm focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none text-lg transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center flex-wrap gap-3 max-w-4xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center space-x-2 border ${
                activeFilter === filter.name
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-md transform scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              {filter.icon && <span>{filter.icon}</span>}
              <span>{filter.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {filteredTopics.map((topic, index) => (
          <div 
            key={topic.id} 
            onClick={() => setSelectedTopic(topic)}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          >
            {/* Cover Image Area */}
            <div className="h-40 relative overflow-hidden bg-gray-100">
              <img 
                src={topic.coverImage} 
                alt={topic.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              
              {/* Rank Badge */}
              <div className="absolute top-3 left-3 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/20">
                #{index + 1}
              </div>

              {/* Live Badge */}
              {topic.isLive && (
                <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-pulse flex items-center shadow-lg">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
                  LIVE
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="px-5 pb-5 pt-12 relative">
              {/* Overlapping Avatar Logo */}
              <div className="absolute -top-8 left-5">
                <div className="w-16 h-16 rounded-xl border-4 border-white shadow-md overflow-hidden bg-white">
                  <img src={topic.author.avatar} alt={topic.author.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="flex justify-between items-start mb-1">
                 <h3 className="font-bold text-xl text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-1">{topic.title}</h3>
              </div>
              
              <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{topic.category}</span>
                <span>•</span>
                <span>{topic.members?.toLocaleString()} Members</span>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2 mb-4 h-10">
                {topic.description}
              </p>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-gray-400 text-xs font-medium">
                 <div className="flex items-center hover:text-emerald-600 transition-colors">
                   <Icons.Message size={14} className="mr-1" />
                   {topic.replies} Discussions
                 </div>
                 <div className="flex items-center group/author hover:text-gray-700">
                   <span>by {topic.author.name}</span>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheMajlis;
