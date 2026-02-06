import { CalendarEvent, ChatThread, Course, Experience, InvestmentOpportunity, Job, MajlisTopic, Notification, Post, Product, User } from "./types";

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Abdullah',
  headline: 'Halal Tech Innovator | Building the Digital Ummah',
  location: 'Dubai, UAE',
  avatar: 'https://picsum.photos/id/64/200/200',
  isVerified: true,
  role: 'Entrepreneur',
  about: 'Passionate about merging technology with Islamic values. Founder of Barakah Bridge and several other initiatives aimed at empowering the global Muslim economy. Believer in ethical finance and transparent trade.',
  coverImage: 'https://picsum.photos/id/1/1200/400'
};

export const USER_EXPERIENCE: Experience[] = [
  { id: 'e1', role: 'Founder & CEO', company: 'Barakah Bridge', duration: '2023 - Present', description: 'Leading the vision for a Shariah-compliant digital ecosystem.' },
  { id: 'e2', role: 'Product Manager', company: 'Tech for Good', duration: '2019 - 2023', description: 'Managed diverse teams to build social impact products.' }
];

export const NETWORK_SUGGESTIONS: User[] = [
  { id: 'n1', name: 'Dr. Rasuf Omandi', headline: 'Islamic Scholar', avatar: 'https://picsum.photos/id/33/200/200', location: 'Doha, QA', isVerified: true, role: 'Scholar' },
  { id: 'n2', name: 'Fatima Al-Fihri', headline: 'Education Activist', avatar: 'https://picsum.photos/id/44/200/200', location: 'Fes, MA', isVerified: true, role: 'Mentor' },
  { id: 'n3', name: 'Omar Suleiman', headline: 'Community Leader', avatar: 'https://picsum.photos/id/55/200/200', location: 'Dallas, US', isVerified: true, role: 'Scholar' },
  { id: 'n4', name: 'Yusuf Cat', headline: 'Nasheed Artist', avatar: 'https://picsum.photos/id/58/200/200', location: 'London, UK', isVerified: true, role: 'Creative' },
  { id: 'n5', name: 'Khadijah Ventures', headline: 'Angel Investor', avatar: 'https://picsum.photos/id/59/200/200', location: 'Riyadh, SA', isVerified: true, role: 'Investor' },
];

export const FEED_POSTS: Post[] = [
  {
    id: 'p1',
    author: {
      id: 'u2',
      name: 'Al Rosdi Pantaran',
      headline: 'Islamic Finance Consultant',
      avatar: 'https://picsum.photos/id/91/200/200',
      location: 'Kuala Lumpur, MY',
      isVerified: true,
      role: 'Scholar'
    },
    content: 'Alhamdulillah, just concluded a Mudarabah agreement using Barakah Bridge’s new smart contracts. Transparency and trust are the foundations of our trade. #IslamicFinance #HalalEconomy',
    likes: 142,
    comments: 23,
    timestamp: '2h ago',
  },
  {
    id: 'p2',
    author: {
      id: 'u3',
      name: 'Sarah Ahmed',
      headline: 'Modest Fashion Entrepreneur',
      avatar: 'https://picsum.photos/id/65/200/200',
      location: 'Istanbul, TR',
      isVerified: false,
      role: 'Entrepreneur'
    },
    content: 'Launching our new organic silk collection next week in The Souk! Every purchase contributes 5% to water wells in Africa. Stay tuned.',
    image: 'https://picsum.photos/id/20/800/400',
    likes: 89,
    comments: 12,
    timestamp: '5h ago',
  },
];

export const SOUK_PRODUCTS: Product[] = [
  { id: 'pr1', name: 'Premium Ajwa Dates', price: 25.00, seller: 'Madina Harvest', rating: 4.8, image: 'https://picsum.photos/id/75/300/300', isBarakahPurchase: true, category: 'Food', description: 'Authentic Ajwa dates from the farms of Madina. High quality, soft texture, and packed with nutrients. A sunnah superfood.' },
  { id: 'pr2', name: 'Handcrafted Prayer Mat', price: 45.00, seller: 'Artisan Turkey', rating: 4.9, image: 'https://picsum.photos/id/76/300/300', isBarakahPurchase: false, category: 'Art', description: 'Beautifully woven prayer mat featuring traditional Ottoman tulip designs. Soft velvet touch with non-slip backing.' },
  { id: 'pr3', name: 'Halal Investment Guide', price: 15.00, seller: 'Falah Books', rating: 4.5, image: 'https://picsum.photos/id/77/300/300', isBarakahPurchase: true, category: 'Books', description: 'Comprehensive guide to understanding Shariah-compliant investing in the modern age. Covers stocks, crypto, and real estate.' },
  { id: 'pr4', name: 'Organic Honey', price: 30.00, seller: 'Sunnah Superfoods', rating: 4.7, image: 'https://picsum.photos/id/78/300/300', isBarakahPurchase: false, category: 'Food', description: 'Raw, unfiltered Sidr honey. Known for its medicinal properties and exquisite taste. Harvested ethically.' },
  { id: 'pr5', name: 'Kufi Cap Set', price: 12.00, seller: 'Urban Sunnah', rating: 4.2, image: 'https://picsum.photos/id/88/300/300', isBarakahPurchase: false, category: 'Clothing', description: 'Set of 3 cotton kufi caps in black, white, and navy. Breathable fabric suitable for daily wear.' },
];

export const JOBS: Job[] = [
  { id: 'j1', title: 'Senior React Developer', company: 'Halal Booking', location: 'Remote', salary: '$4k - $6k / mo', type: 'Full-time', isHalalVerified: true, tags: ['Tech', 'No-Interest'], isRemote: true },
  { id: 'j2', title: 'Islamic Content Writer', company: 'Yaqeen Institute', location: 'Hybrid', salary: '$500 / project', type: 'Freelance', isHalalVerified: true, tags: ['Writing', 'Dawah'], isRemote: true },
  { id: 'j3', title: 'Ethical Marketing Specialist', company: 'Modanisa', location: 'Istanbul', salary: 'Competitive', type: 'Full-time', isHalalVerified: true, tags: ['Marketing', 'Fashion'], isRemote: false },
  { id: 'j4', title: 'Shariah Compliance Officer', company: 'Wahed Invest', location: 'London', salary: '£60k / yr', type: 'Full-time', isHalalVerified: true, tags: ['Finance', 'Legal'], isRemote: false },
];

export const MAJLIS_TOPICS: MajlisTopic[] = [
  { 
    id: 'm1', 
    title: 'The Fiqh of Crypto', 
    author: MOCK_USER, 
    category: 'Islamic Finance', 
    replies: 342, 
    isLive: true,
    coverImage: 'https://picsum.photos/id/10/800/400',
    members: 1205,
    description: 'Deep dive into blockchain ethics, coin vetting, and staking rulings.',
    posts: [
      { id: 'mp1', author: NETWORK_SUGGESTIONS[0], title: 'Is Staking Ethereum Halal?', content: 'Detailed breakdown of PoS vs PoW from a fiqh perspective. Please read the attached PDF.', category: 'General', likes: 45, comments: 12, timestamp: '1d ago', isPinned: true },
      { id: 'mp2', author: MOCK_USER, title: 'Question about leverage tokens', content: 'Salam everyone, I know margin is haram, but what about leveraged tokens on spot market?', category: 'Q&A', likes: 12, comments: 8, timestamp: '3h ago' }
    ]
  },
  { 
    id: 'm2', 
    title: 'Corporate Deen', 
    author: { ...MOCK_USER, name: 'Ahmed Ali' }, 
    category: 'Career', 
    replies: 89, 
    isLive: false,
    coverImage: 'https://picsum.photos/id/3/800/400',
    members: 850,
    description: 'Navigating corporate politics, prayer spaces, and ethical dilemmas.'
  },
  { 
    id: 'm3', 
    title: 'Muslim Startups', 
    author: { ...MOCK_USER, name: 'Zaynab Khan' }, 
    category: 'Business', 
    replies: 120, 
    isLive: false,
    coverImage: 'https://picsum.photos/id/20/800/400',
    members: 3200,
    description: 'Y-Combinator style discussions for the next generation of Muslim founders.'
  },
  { 
    id: 'm4', 
    title: 'Modern Marriage', 
    author: { ...MOCK_USER, name: 'Imam Zaid' }, 
    category: 'Family', 
    replies: 540, 
    isLive: true,
    coverImage: 'https://picsum.photos/id/42/800/400',
    members: 5400,
    description: 'Real talk about rights, responsibilities, and finding tranquility.'
  },
  { 
    id: 'm5', 
    title: 'Ethical Coding', 
    author: { ...MOCK_USER, name: 'Tech Muslimah' }, 
    category: 'Tech', 
    replies: 45, 
    isLive: false,
    coverImage: 'https://picsum.photos/id/60/800/400',
    members: 420,
    description: 'Open source projects that benefit the Ummah. Join the git repo.'
  },
  { 
    id: 'm6', 
    title: 'Quranic Journaling', 
    author: { ...MOCK_USER, name: 'Hafiz Omar' }, 
    category: 'Spirituality', 
    replies: 210, 
    isLive: false,
    coverImage: 'https://picsum.photos/id/24/800/400',
    members: 1800,
    description: 'Weekly reflection prompts and sharing sessions for spiritual growth.'
  },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: 'not1', type: 'connect', content: 'sent you a Bridge Request', timestamp: '2h ago', read: false, actor: NETWORK_SUGGESTIONS[0] },
  { id: 'not2', type: 'like', content: 'liked your post about "Ethical AI"', timestamp: '5h ago', read: false, actor: NETWORK_SUGGESTIONS[2] },
  { id: 'not3', type: 'system', content: 'Your listing "React Dev" has 3 new applicants', timestamp: '1d ago', read: true },
];

export const CHAT_THREADS: ChatThread[] = [
  { 
    id: 'c1', 
    participant: NETWORK_SUGGESTIONS[0], 
    lastMessage: 'JazakAllah Khair for the resource!', 
    lastMessageTime: '10:30 AM', 
    unreadCount: 1,
    messages: [
      { id: 'm1', senderId: 'n1', content: 'Assalamu Alaykum, brother.', timestamp: '10:00 AM' },
      { id: 'm2', senderId: 'u1', content: 'Wa alaykumu salam! How can I help?', timestamp: '10:05 AM' },
      { id: 'm3', senderId: 'n1', content: 'I saw your article on Zakat calculation API. It was very helpful.', timestamp: '10:25 AM' },
      { id: 'm4', senderId: 'n1', content: 'JazakAllah Khair for the resource!', timestamp: '10:30 AM' }
    ] 
  },
  { 
    id: 'c2', 
    participant: NETWORK_SUGGESTIONS[2], 
    lastMessage: 'Let’s schedule a call for next week.', 
    lastMessageTime: 'Yesterday', 
    unreadCount: 0,
    messages: [
      { id: 'm5', senderId: 'u1', content: 'Are you available for a quick sync?', timestamp: 'Yesterday' },
      { id: 'm6', senderId: 'n3', content: 'Let’s schedule a call for next week.', timestamp: 'Yesterday' }
    ] 
  }
];

export const MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Intro to Islamic Finance',
    instructor: 'Dr. Rasuf Omandi',
    thumbnail: 'https://picsum.photos/id/160/400/300',
    progress: 35,
    totalLessons: 12,
    lessons: [
      { id: 'l1', title: 'What is Riba?', duration: '15:00', isCompleted: true },
      { id: 'l2', title: 'Understanding Gharar', duration: '12:30', isCompleted: true },
      { id: 'l3', title: 'Mudarabah Explained', duration: '20:00', isCompleted: false },
      { id: 'l4', title: 'Musharakah in Practice', duration: '18:45', isCompleted: false },
    ]
  },
  {
    id: 'c2',
    title: 'Business Ethics in Islam',
    instructor: 'Mufti Menk',
    thumbnail: 'https://picsum.photos/id/180/400/300',
    progress: 0,
    totalLessons: 8,
    lessons: [
      { id: 'l1', title: 'Honesty in Trade', duration: '10:00', isCompleted: false },
      { id: 'l2', title: 'Rights of Employees', duration: '25:00', isCompleted: false },
    ]
  }
];

export const MOCK_EVENTS: CalendarEvent[] = [
  { id: 'ev1', title: 'Weekly Fiqh Q&A', date: 'Oct 25', time: '8:00 PM GMT', type: 'Webinar', attendees: 142 },
  { id: 'ev2', title: 'Muslim Founders Meetup', date: 'Oct 28', time: '6:00 PM EST', type: 'Meetup', attendees: 56 },
  { id: 'ev3', title: 'AMA with Halal Investor', date: 'Nov 01', time: '3:00 PM GMT', type: 'AMA', attendees: 890 },
];

export const MOCK_INVESTMENTS: InvestmentOpportunity[] = [
  { 
    id: 'inv1', 
    title: 'Eco-Friendly Halal Resort', 
    industry: 'Real Estate', 
    minInvestment: 5000, 
    targetRaise: 2000000, 
    currentRaise: 1450000, 
    shariahAdvisor: 'Amanah Advisors', 
    riskLevel: 'Medium', 
    returnRate: '12-15%', 
    daysLeft: 14,
    description: 'A luxury eco-resort in Lombok, fully compliant with Islamic principles. No alcohol, separate spa facilities, and prayer spaces in every villa.' 
  },
  { 
    id: 'inv2', 
    title: 'DeenTech Edu App', 
    industry: 'Technology', 
    minInvestment: 1000, 
    targetRaise: 500000, 
    currentRaise: 120000, 
    shariahAdvisor: 'Shariah Review Bureau', 
    riskLevel: 'High', 
    returnRate: '20% + Equity', 
    daysLeft: 45,
    description: 'Gamified Islamic education app for children aged 4-10. Subscription based model with high growth potential in western markets.' 
  }
];
