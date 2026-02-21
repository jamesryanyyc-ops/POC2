
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
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
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
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop",
    isVerified: true,
  },
  {
    id: "u2",
    username: "creative_studio",
    fullName: "Creative Studio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: "u3",
    username: "travel_diary",
    fullName: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1000&q=80&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1484723091791-c0e7e14a1db5?w=1000&q=80&fit=crop",
    caption: "Sunday brunch is the best brunch 🥞",
    likes: 210,
    timestamp: "1d ago",
    comments: [],
  },
  {
    id: "p5",
    user: USERS[4],
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&q=80&fit=crop",
    caption: "The view from the top makes it all worth it 🏔️",
    likes: 1542,
    timestamp: "2d ago",
    location: "Rocky Mountains",
    isLiked: false,
    comments: [],
  },
];
