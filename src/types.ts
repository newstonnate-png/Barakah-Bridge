export enum View {
  AUTH = 'AUTH',
  HOME = 'HOME',
  NETWORK = 'NETWORK',
  SOUK = 'SOUK',
  EXCHANGE = 'EXCHANGE',
  MAJLIS = 'MAJLIS',
  FALAH = 'FALAH',
  PROFILE = 'PROFILE',
  MESSAGES = 'MESSAGES',
}

export interface User {
  id: string;
  name: string;
  headline: string;
  avatar: string;
  location: string;
  isVerified: boolean;
  role?: string;
  about?: string;
  coverImage?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  likes: number; // "Barakahs"
  comments: number;
  timestamp: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  type: 'Full-time' | 'Freelance' | 'Project';
  salary: string;
  location: string;
  isHalalVerified: boolean;
  tags: string[];
  isRemote?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  seller: string;
  rating: number;
  isBarakahPurchase: boolean; // Part goes to Sadaqah
  category?: string;
  description?: string;
}

export interface MajlisPost {
  id: string;
  author: User;
  title: string;
  content: string;
  category: string;
  likes: number;
  comments: number;
  timestamp: string;
  isPinned?: boolean;
}

export interface MajlisTopic {
  id: string;
  title: string;
  author: User;
  category: string;
  replies: number;
  isLive: boolean;
  coverImage?: string;
  members?: number;
  description?: string;
  posts?: MajlisPost[];
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'connect' | 'system';
  content: string;
  timestamp: string;
  read: boolean;
  actor?: User;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}

export interface ChatThread {
  id: string;
  participant: User;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  progress: number;
  totalLessons: number;
  lessons: Lesson[];
}

export interface InvestmentOpportunity {
  id: string;
  title: string;
  industry: string;
  minInvestment: number;
  targetRaise: number;
  currentRaise: number;
  shariahAdvisor: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  returnRate: string; // Projected ROI
  description: string;
  daysLeft: number;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'Webinar' | 'Meetup' | 'AMA';
  attendees: number;
}
