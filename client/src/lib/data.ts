
export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  bio?: string;
  followers?: number;
  following?: number;
  postsCount?: number;
  isVerified?: boolean;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  timestamp: string;
  likes: number;
}

export interface Post {
  id: string;
  user: User;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
  location?: string;
  isLiked?: boolean;
  isSaved?: boolean;
}

export interface Story {
  id: string;
  user: User;
  hasUnseen: boolean;
}

// Mock Users
export const CURRENT_USER: User = {
  id: "me",
  username: "design.engineer",
  fullName: "Design Engineer",
  avatar: "/images/avatar_1.jpg",
  bio: "Creating digital experiences 🎨\n📍 San Francisco",
  followers: 1240,
  following: 450,
  postsCount: 12,
};

export const USERS: User[] = [
  {
    id: "u1",
    username: "alex_photos",
    fullName: "Alex Rivera",
    avatar: "/images/avatar_1.jpg",
    isVerified: true,
  },
  {
    id: "u2",
    username: "creative_studio",
    fullName: "Creative Studio",
    avatar: "/images/avatar_2.jpg",
  },
  {
    id: "u3",
    username: "travel_diary",
    fullName: "Sarah Jenkins",
    avatar: "/images/avatar_3.jpg",
  },
  {
    id: "u4",
    username: "urban_life",
    fullName: "Urban Life",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
  {
    id: "u5",
    username: "nature_lover",
    fullName: "Mike Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    id: "u6",
    username: "tech_insider",
    fullName: "Tech Insider",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    isVerified: true,
  },
  {
    id: "u7",
    username: "fitness_guru",
    fullName: "Jessica Fit",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: "u8",
    username: "foodie_adventures",
    fullName: "Tom Cooks",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
  },
  {
    id: "u9",
    username: "art_gallery",
    fullName: "Modern Art",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: "u10",
    username: "music_vibes",
    fullName: "DJ Beats",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop",
  },
];

// Mock Stories
export const STORIES: Story[] = [
  { id: "s1", user: USERS[0], hasUnseen: true },
  { id: "s2", user: USERS[1], hasUnseen: true },
  { id: "s3", user: USERS[2], hasUnseen: false },
  { id: "s4", user: USERS[3], hasUnseen: true },
  { id: "s5", user: USERS[4], hasUnseen: false },
  { id: "s6", user: USERS[5], hasUnseen: true },
  { id: "s7", user: USERS[6], hasUnseen: true },
  { id: "s8", user: USERS[7], hasUnseen: false },
  { id: "s9", user: USERS[8], hasUnseen: true },
  { id: "s10", user: USERS[9], hasUnseen: false },
];

// Mock Posts
export const POSTS: Post[] = [
  {
    id: "p1",
    user: USERS[0],
    imageUrl: "/images/post_1.jpg",
    caption: "Morning coffee vibes ☕️ #morning #coffee #aesthetic",
    likes: 124,
    timestamp: "2h ago",
    location: "Blue Bottle Coffee",
    isLiked: false,
    comments: [
      {
        id: "c1",
        user: USERS[2],
        text: "Love this spot!",
        timestamp: "1h ago",
        likes: 2,
      },
      {
        id: "c2",
        user: USERS[5],
        text: "The best coffee in town! 🔥",
        timestamp: "45m ago",
        likes: 5,
      },
      {
        id: "c3",
        user: USERS[6],
        text: "Need to go there ASAP",
        timestamp: "30m ago",
        likes: 1,
      },
    ],
  },
  {
    id: "p2",
    user: USERS[2],
    imageUrl: "/images/post_2.jpg",
    caption: "Chasing sunsets along the coast 🌊",
    likes: 853,
    timestamp: "5h ago",
    location: "Pacific Coast Highway",
    isLiked: true,
    comments: [],
  },
  {
    id: "p3",
    user: USERS[1],
    imageUrl: "/images/post_3.jpg",
    caption: "New architecture project coming together nicely. Can't wait to share more details soon!",
    likes: 432,
    timestamp: "8h ago",
    location: "Downtown",
    isLiked: false,
    comments: [],
  },
  {
    id: "p4",
    user: USERS[3],
    imageUrl: "/images/post_4.jpg",
    caption: "Sunday brunch is the best brunch 🥞",
    likes: 210,
    timestamp: "1d ago",
    comments: [],
  },
  {
    id: "p5",
    user: USERS[4],
    imageUrl: "/images/post_5.jpg",
    caption: "The view from the top makes it all worth it 🏔️",
    likes: 1542,
    timestamp: "2d ago",
    location: "Rocky Mountains",
    isLiked: false,
    comments: [],
  },
];
