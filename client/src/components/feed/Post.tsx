import { useState } from "react";
import { Link } from "wouter";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Post as PostType } from "@/lib/data";

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isSaved, setIsSaved] = useState(post.isSaved);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="border-b md:border md:rounded-lg border-border mb-4 bg-card md:max-w-[470px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <div className="story-ring p-[2px] rounded-full cursor-pointer hover:scale-105 transition-transform">
            <Avatar className="h-8 w-8 story-ring-inner border-2 border-background">
              <AvatarImage src={post.user.avatar} />
              <AvatarFallback>{post.user.username[0]}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-1">
                <span className="font-semibold text-sm cursor-pointer hover:opacity-70">{post.user.username}</span>
                {post.user.isVerified && <span className="text-blue-500 text-[10px]">Verify</span>}
                <span className="text-muted-foreground text-xs">• {post.timestamp}</span>
            </div>
            {post.location && <span className="text-xs text-muted-foreground cursor-pointer">{post.location}</span>}
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Image */}
      <div className="aspect-square w-full bg-muted overflow-hidden relative" onDoubleClick={handleLike}>
        <img 
            src={post.imageUrl} 
            alt={post.caption} 
            className="w-full h-full object-cover"
            loading="lazy"
        />
      </div>

      {/* Actions */}
      <div className="p-3 pb-1">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="hover:opacity-60 transition-opacity">
              <Heart 
                className={cn("h-6 w-6 transition-colors", isLiked ? "fill-red-500 stroke-red-500" : "stroke-current")} 
              />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <MessageCircle className="h-6 w-6 -rotate-90" />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <Send className="h-6 w-6" />
            </button>
          </div>
          <button onClick={() => setIsSaved(!isSaved)} className="hover:opacity-60 transition-opacity">
            <Bookmark className={cn("h-6 w-6", isSaved ? "fill-foreground" : "stroke-current")} />
          </button>
        </div>
        
        <div className="font-semibold text-sm mb-2">{likesCount.toLocaleString()} likes</div>
        
        <div className="text-sm mb-1">
          <span className="font-semibold mr-2 cursor-pointer hover:opacity-70">{post.user.username}</span>
          <span>{post.caption}</span>
        </div>
        
        {post.comments.length > 0 && (
          <button className="text-muted-foreground text-sm mb-1 hover:text-foreground">
            View all {post.comments.length} comments
          </button>
        )}
        
        <div className="flex items-center gap-2 mt-2">
           <input 
             type="text" 
             placeholder="Add a comment..." 
             className="text-sm w-full bg-transparent border-none focus:ring-0 p-0 placeholder:text-muted-foreground"
           />
           <button className="text-blue-500 font-semibold text-sm opacity-50 hover:opacity-100">Post</button>
        </div>
      </div>
    </div>
  );
}
