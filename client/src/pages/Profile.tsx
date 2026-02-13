import { CURRENT_USER, POSTS } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings, Grid3X3, Bookmark, UserSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="max-w-[935px] mx-auto pt-8 px-4 md:px-0 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-24 mb-12">
        <div className="mb-6 md:mb-0">
          <Avatar className="h-20 w-20 md:h-[150px] md:w-[150px] border border-border cursor-pointer">
            <AvatarImage src={CURRENT_USER.avatar} />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-1 w-full md:w-auto">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <h1 className="text-xl font-normal">{CURRENT_USER.username}</h1>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="font-semibold px-4 h-8">Edit profile</Button>
              <Button variant="secondary" size="sm" className="font-semibold px-4 h-8">View archive</Button>
              <Button variant="ghost" size="icon" className="h-8 w-8"><Settings className="h-6 w-6" /></Button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex justify-around md:justify-start md:gap-10 mb-6 text-sm md:text-base border-t md:border-none pt-4 md:pt-0 w-full">
            <div className="text-center md:text-left"><span className="font-bold">{CURRENT_USER.postsCount}</span> posts</div>
            <div className="text-center md:text-left"><span className="font-bold">{CURRENT_USER.followers}</span> followers</div>
            <div className="text-center md:text-left"><span className="font-bold">{CURRENT_USER.following}</span> following</div>
          </div>

          {/* Bio Row */}
          <div className="text-sm hidden md:block">
            <div className="font-semibold">{CURRENT_USER.fullName}</div>
            <div className="whitespace-pre-line">{CURRENT_USER.bio}</div>
          </div>
        </div>
      </div>
      
      {/* Bio Mobile */}
      <div className="text-sm md:hidden px-2 mb-8">
        <div className="font-semibold">{CURRENT_USER.fullName}</div>
        <div className="whitespace-pre-line">{CURRENT_USER.bio}</div>
      </div>

      {/* Stories/Highlights Placeholder */}
      <div className="flex gap-4 mb-12 overflow-x-auto no-scrollbar px-2">
         {[1,2,3].map(i => (
             <div key={i} className="flex flex-col items-center gap-2 min-w-[70px]">
                 <div className="w-[77px] h-[77px] rounded-full border border-border bg-secondary flex items-center justify-center">
                 </div>
                 <span className="text-xs font-semibold">Highlight</span>
             </div>
         ))}
      </div>

      {/* Tabs */}
      <div className="border-t border-border flex justify-center gap-16 mb-4">
        <button 
            onClick={() => setActiveTab("posts")}
            className={cn("flex items-center gap-2 py-4 border-t-2 text-xs font-semibold tracking-widest uppercase transition-colors", activeTab === "posts" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground")}
        >
            <Grid3X3 className="h-3 w-3" /> Posts
        </button>
        <button 
            onClick={() => setActiveTab("saved")}
            className={cn("flex items-center gap-2 py-4 border-t-2 text-xs font-semibold tracking-widest uppercase transition-colors", activeTab === "saved" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground")}
        >
            <Bookmark className="h-3 w-3" /> Saved
        </button>
        <button 
            onClick={() => setActiveTab("tagged")}
            className={cn("flex items-center gap-2 py-4 border-t-2 text-xs font-semibold tracking-widest uppercase transition-colors", activeTab === "tagged" ? "border-foreground text-foreground" : "border-transparent text-muted-foreground")}
        >
            <UserSquare className="h-3 w-3" /> Tagged
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1 md:gap-7">
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
