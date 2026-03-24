
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
  username: "cipher.flow",
  fullName: "Cipher Flow",
  avatar: "https://picsum.photos/seed/user1/150/150",
  bio: "Creating digital experiences 🎨\n📍 San Francisco",
  followers: 1240,
  following: 450,
  postsCount: 12,
};

export const USERS: User[] = [
  {
    id: "u1",
    username: "nova_spark",
    fullName: "Nova Spark",
    avatar: "https://picsum.photos/seed/user2/150/150",
    isVerified: true,
  },
  {
    id: "u2",
    username: "chroma.shift",
    fullName: "Chroma Shift",
    avatar: "https://picsum.photos/seed/user3/150/150",
  },
  {
    id: "u3",
    username: "pixel.dust",
    fullName: "Pixel Dust",
    avatar: "https://picsum.photos/seed/user4/150/150",
  },
  {
    id: "u4",
    username: "neon_horizon",
    fullName: "Neon Horizon",
    avatar: "https://picsum.photos/seed/user5/150/150",
  },
  {
    id: "u5",
    username: "echo.wave",
    fullName: "Echo Wave",
    avatar: "https://picsum.photos/seed/user6/150/150",
  },
  {
    id: "u6",
    username: "cyber_pulse",
    fullName: "Cyber Pulse",
    avatar: "https://picsum.photos/seed/user7/150/150",
    isVerified: true,
  },
  {
    id: "u7",
    username: "luna.flare",
    fullName: "Luna Flare",
    avatar: "https://picsum.photos/seed/user8/150/150",
  },
  {
    id: "u8",
    username: "vertex_glow",
    fullName: "Vertex Glow",
    avatar: "https://picsum.photos/seed/user9/150/150",
  },
  {
    id: "u9",
    username: "quantum.leap",
    fullName: "Quantum Leap",
    avatar: "https://picsum.photos/seed/user10/150/150",
  },
  {
    id: "u10",
    username: "zenith_drift",
    fullName: "Zenith Drift",
    avatar: "https://picsum.photos/seed/user11/150/150",
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
    imageUrl: "https://picsum.photos/seed/post1/1000/1000",
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
    imageUrl: "https://picsum.photos/seed/post2/1000/1000",
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
    imageUrl: "https://picsum.photos/seed/post3/1000/1000",
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
    imageUrl: "https://picsum.photos/seed/post4/1000/1000",
    caption: "Sunday brunch is the best brunch 🥞",
    likes: 210,
    timestamp: "1d ago",
    comments: [],
  },
  {
    id: "p5",
    user: USERS[4],
    imageUrl: "https://picsum.photos/seed/post5/1000/1000",
    caption: "The view from the top makes it all worth it 🏔️",
    likes: 1542,
    timestamp: "2d ago",
    location: "Rocky Mountains",
    isLiked: false,
    comments: [],
  },
];
