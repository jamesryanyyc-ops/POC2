import { CURRENT_USER, POSTS, USERS } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, Grid3X3, Bookmark, UserSquare, ChevronLeft, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useRoute, Link } from "wouter";

export default function Profile() {
  const [match, params] = useRoute("/profile/:username");
  const [activeTab, setActiveTab] = useState("posts");
  
  const isCurrentUser = !match || params?.username === CURRENT_USER.username;
  const user = isCurrentUser 
    ? CURRENT_USER 
    : USERS.find(u => u.username === params?.username) || CURRENT_USER;

  return (
    <div className="max-w-[935px] mx-auto pt-4 md:pt-8 pb-20 bg-background">
      {/* Mobile Top Nav */}
      <div className="flex md:hidden items-center justify-between px-4 pb-2 border-b border-border mb-6">
        {!isCurrentUser ? (
            <Link href="/">
                <a className="p-1 -ml-1"><ChevronLeft className="h-6 w-6" /></a>
            </Link>
        ) : (
            <div className="w-6" /> // spacer
        )}
        <div className="font-bold text-base flex items-center gap-1">
            {user.username}
            {user.isVerified && (
              <svg aria-label="Verified" className="h-3.5 w-3.5 text-blue-500 fill-current" viewBox="0 0 24 24">
                <path d="M12.001 2.01l-2.02 1.082L7.698 2.07l-1.33 2.015-2.222.684.27 2.302-1.745 1.52 1.11 2.046-.576 2.247 1.93 1.258.46 2.26 2.193.753 1.05 2.036 2.268-.426 1.77 1.488 1.905-1.29 2.18.57 1.23-1.95 2.24-.62.38-2.28 1.83-1.42-.98-2.09 1.43-1.84-2.12-1.02-.16-2.3-2.28-.5-1.18-1.98-2.19.92z" fill="#0095F6"></path>
                <path d="M10.17 15.65c-.24 0-.48-.09-.66-.27L6.8 12.67c-.37-.36-.37-.96 0-1.33.37-.36.96-.36 1.33 0l2.04 2.05 5.71-5.71c.37-.36.96-.36 1.33 0 .37.36.37.96 0 1.33l-6.38 6.38c-.18.18-.42.27-.66.27z" fill="white"></path>
              </svg>
            )}
        </div>
        <div className="p-1 -mr-1">
            {isCurrentUser ? <Settings className="h-6 w-6" /> : <MoreHorizontal className="h-6 w-6" />}
        </div>
      </div>

      {/* Header */}
      <div className="flex px-4 md:px-0 md:flex-row items-center md:items-start md:gap-24 mb-6 md:mb-12">
        <div className="mr-6 md:mr-0">
          <div className="story-ring p-[3px] rounded-full">
            <Avatar className="h-[77px] w-[77px] md:h-[150px] md:w-[150px] story-ring-inner border-2 md:border-4 border-background cursor-pointer">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.username[0]}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="flex-1 w-full md:w-auto">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-6">
            <div className="flex items-center gap-2">
                <h1 className="text-xl md:text-2xl font-normal">{user.username}</h1>
                {user.isVerified && (
                <svg aria-label="Verified" className="h-4 w-4 text-blue-500 fill-current mt-1" viewBox="0 0 24 24">
                    <path d="M12.001 2.01l-2.02 1.082L7.698 2.07l-1.33 2.015-2.222.684.27 2.302-1.745 1.52 1.11 2.046-.576 2.247 1.93 1.258.46 2.26 2.193.753 1.05 2.036 2.268-.426 1.77 1.488 1.905-1.29 2.18.57 1.23-1.95 2.24-.62.38-2.28 1.83-1.42-.98-2.09 1.43-1.84-2.12-1.02-.16-2.3-2.28-.5-1.18-1.98-2.19.92z" fill="#0095F6"></path>
                    <path d="M10.17 15.65c-.24 0-.48-.09-.66-.27L6.8 12.67c-.37-.36-.37-.96 0-1.33.37-.36.96-.36 1.33 0l2.04 2.05 5.71-5.71c.37-.36.96-.36 1.33 0 .37.36.37.96 0 1.33l-6.38 6.38c-.18.18-.42.27-.66.27z" fill="white"></path>
                </svg>
                )}
            </div>
            <div className="flex gap-2">
              {isCurrentUser ? (
                  <>
                    <Button variant="secondary" size="sm" className="font-semibold px-4 h-8 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-foreground">Edit profile</Button>
                    <Button variant="secondary" size="sm" className="font-semibold px-4 h-8 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-foreground">View archive</Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hidden md:flex"><Settings className="h-6 w-6" /></Button>
                  </>
              ) : (
                  <>
                    <Button size="sm" className="font-semibold px-6 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Follow</Button>
                    <Button variant="secondary" size="sm" className="font-semibold px-6 h-8 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-foreground rounded-lg">Message</Button>
                    <Button variant="secondary" size="sm" className="font-semibold px-3 h-8 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-foreground rounded-lg">
                        <svg aria-label="Similar accounts" className="h-4 w-4" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M19.006 8.252H21.33v3.013h2.38v2.24h-2.38v3.023h-2.324V13.5h-2.392v-2.24h2.392V8.252zm-12.028 3.513c2.32 0 4.223-1.892 4.223-4.225C11.201 5.21 9.298 3.318 6.978 3.318S2.755 5.21 2.755 7.54c0 2.333 1.903 4.225 4.223 4.225zm0-6.953c1.514 0 2.723 1.22 2.723 2.728 0 1.51-1.21 2.725-2.723 2.725-1.51 0-2.72-1.215-2.72-2.725 0-1.508 1.21-2.728 2.72-2.728zm10.748 15.35c0-1.464-1.867-2.673-5.267-3.085-1.026-.123-2.126-.184-3.26-.184s-2.234.06-3.26.184c-3.4.412-5.267 1.62-5.267 3.085v1.204h17.054V20.16zm-15.554.492v-.492c0-.528 1.135-1.396 3.99-1.787 1.013-.14 2.1-.212 3.208-.212s2.245.072 3.258.212c2.855.39 3.99 1.26 3.99 1.787v.492H1.424z"></path></svg>
                    </Button>
                  </>
              )}
            </div>
          </div>

          {/* Stats Row Desktop */}
          <div className="hidden md:flex gap-10 mb-6 text-base">
            <div><span className="font-semibold">{user.postsCount || POSTS.length}</span> posts</div>
            <div className="cursor-pointer"><span className="font-semibold">{user.followers?.toLocaleString() || "10.4K"}</span> followers</div>
            <div className="cursor-pointer"><span className="font-semibold">{user.following?.toLocaleString() || "540"}</span> following</div>
          </div>

          {/* Bio Row Desktop */}
          <div className="text-sm hidden md:block">
            <div className="font-semibold">{user.fullName}</div>
            <div className="whitespace-pre-line text-sm mt-1">{user.bio || "Digital creator\nMaking things for the internet"}</div>
            <div className="text-xs font-semibold text-muted-foreground mt-2">Followed by some_user, another_user + 5 more</div>
          </div>
        </div>
      </div>
      
      {/* Bio Mobile */}
      <div className="text-sm md:hidden px-4 mb-4">
        <div className="font-semibold">{user.fullName}</div>
        <div className="whitespace-pre-line text-sm mt-1">{user.bio || "Digital creator\nMaking things for the internet"}</div>
        <div className="text-xs font-semibold text-muted-foreground mt-2">Followed by some_user, another_user + 5 more</div>
      </div>

      {/* Stories/Highlights Placeholder */}
      <div className="flex gap-4 mb-6 md:mb-12 overflow-x-auto no-scrollbar px-4 md:px-0">
         {[1,2,3].map(i => (
             <div key={i} className="flex flex-col items-center gap-2 min-w-[64px] md:min-w-[85px] cursor-pointer group">
                 <div className="w-[64px] h-[64px] md:w-[85px] md:h-[85px] rounded-full border border-border bg-secondary flex items-center justify-center p-[3px]">
                    <div className="w-full h-full rounded-full bg-zinc-200 dark:bg-zinc-800 border-[3px] border-background flex items-center justify-center overflow-hidden">
                        <img src={[`https://images.unsplash.com/photo-1511367461989-f85701d4c2e2?w=150&h=150&fit=crop`, `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop`, `https://images.unsplash.com/photo-1506744626753-14c183e25d41?w=150&h=150&fit=crop`][i-1]} className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <span className="text-xs font-medium">Highlight {i}</span>
             </div>
         ))}
      </div>

      {/* Stats Row Mobile */}
      <div className="flex md:hidden justify-around border-t border-border py-3 text-sm">
        <div className="flex flex-col items-center"><span className="font-semibold">{user.postsCount || POSTS.length}</span> <span className="text-muted-foreground">posts</span></div>
        <div className="flex flex-col items-center cursor-pointer"><span className="font-semibold">{user.followers?.toLocaleString() || "10.4K"}</span> <span className="text-muted-foreground">followers</span></div>
        <div className="flex flex-col items-center cursor-pointer"><span className="font-semibold">{user.following?.toLocaleString() || "540"}</span> <span className="text-muted-foreground">following</span></div>
      </div>

      {/* Tabs */}
      <div className="border-t border-border flex justify-center gap-16 md:gap-16 mb-0 md:mb-4">
        <button 
            onClick={() => setActiveTab("posts")}
            className={cn("flex items-center gap-2 py-3 md:py-4 border-t-2 text-xs font-semibold tracking-widest uppercase transition-colors h-full", activeTab === "posts" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")}
        >
            <Grid3X3 className="h-4 w-4 md:h-3 md:w-3" /> <span className="hidden md:inline">Posts</span>
        </button>
        <button 
            onClick={() => setActiveTab("reels")}
            className={cn("flex items-center gap-2 py-3 md:py-4 border-t-2 text-xs font-semibold tracking-widest uppercase transition-colors h-full", activeTab === "reels" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")}
        >
            <svg aria-label="Reels" className="h-4 w-4 md:h-3 md:w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.206 22.5 1.5 17.794 1.5 12S6.206 1.5 12 1.5 22.5 6.206 22.5 12 17.794 22.5 12 22.5zm5.5-12.5l-8-5v10l8-5z"></path></svg> <span className="hidden md:inline">Reels</span>
        </button>
        <button 
            onClick={() => setActiveTab("saved")}
            className={cn("flex items-center gap-2 py-3 md:py-4 border-t-2 text-xs font-semibold tracking-widest uppercase transition-colors h-full", activeTab === "saved" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")}
        >
            <Bookmark className="h-4 w-4 md:h-3 md:w-3" /> <span className="hidden md:inline">Saved</span>
        </button>
        <button 
            onClick={() => setActiveTab("tagged")}
            className={cn("flex items-center gap-2 py-3 md:py-4 border-t-2 text-xs font-semibold tracking-widest uppercase transition-colors h-full", activeTab === "tagged" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")}
        >
            <UserSquare className="h-4 w-4 md:h-3 md:w-3" /> <span className="hidden md:inline">Tagged</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[2px] md:gap-1 lg:gap-7">
        {[...POSTS, ...POSTS].map((post, i) => (
            <div key={`${post.id}-${i}`} className="aspect-square relative group bg-secondary cursor-pointer overflow-hidden">
                <img src={post.imageUrl} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 text-white font-bold transition-opacity">
                    <span className="flex items-center gap-2"><div className="fill-white">❤️</div> {post.likes}</span>
                    <span className="flex items-center gap-2"><div className="fill-white md:scale-x-[-1]">💬</div> {post.comments.length}</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
