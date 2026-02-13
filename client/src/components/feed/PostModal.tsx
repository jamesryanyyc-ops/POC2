import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Post as PostType } from "@/lib/data";
import { useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";


interface PostModalProps {
  post: PostType;
  children: React.ReactNode;
  isLiked: boolean;
  isSaved: boolean;
  onLike: () => void;
  onSave: () => void;
  likesCount: number;
}

export function PostModal({ post, children, isLiked, isSaved, onLike, onSave, likesCount }: PostModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[60vw] h-[90vh] max-w-none p-0 gap-0 overflow-hidden flex flex-col md:flex-row border-none bg-background rounded-r-lg">
        <VisuallyHidden.Root>
            <DialogTitle>Post by {post.user.username}</DialogTitle>
            <DialogDescription>{post.caption}</DialogDescription>
        </VisuallyHidden.Root>

        {/* Left: Image */}
        <div className="hidden md:flex flex-1 bg-black items-center justify-center relative">
          <img 
            src={post.imageUrl} 
            alt={post.caption} 
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Right: Comments & Details */}
        <div className="w-full md:w-[400px] lg:w-[500px] flex flex-col h-full bg-background border-l border-border">
          
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="story-ring p-[2px] rounded-full cursor-pointer hover:scale-105 transition-transform">
                <Avatar className="h-8 w-8 story-ring-inner border-2 border-background">
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback>{post.user.username[0]}</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-semibold cursor-pointer hover:opacity-70">{post.user.username}</span>
                {post.location && <span className="text-xs text-muted-foreground">{post.location}</span>}
              </div>
            </div>
            <MoreHorizontal className="h-5 w-5 cursor-pointer" />
          </div>

          {/* Comments Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Caption as first comment */}
            <div className="flex gap-3">
              <div className="story-ring p-[2px] rounded-full h-fit flex-shrink-0">
                <Avatar className="h-8 w-8 story-ring-inner border-2 border-background">
                    <AvatarImage src={post.user.avatar} />
                    <AvatarFallback>{post.user.username[0]}</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-sm flex-1">
                <span className="font-bold mr-2">{post.user.username}</span>
                <span>{post.caption}</span>
                <div className="text-xs text-muted-foreground mt-2">{post.timestamp}</div>
              </div>
            </div>

            {/* Comments List */}
            {post.comments.map(comment => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar className="h-8 w-8 flex-shrink-0 cursor-pointer">
                    <AvatarImage src={comment.user.avatar} />
                    <AvatarFallback>{comment.user.username[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm flex-1">
                    <div className="flex items-baseline">
                        <span className="font-bold mr-2 hover:opacity-70 cursor-pointer">{comment.user.username}</span>
                        <span>{comment.text}</span>
                    </div>
                    <div className="flex gap-3 text-xs text-muted-foreground mt-1 items-center">
                        <span>{comment.timestamp}</span>
                        {comment.likes > 0 && <span>{comment.likes} likes</span>}
                        <span className="cursor-pointer hover:text-foreground">Reply</span>
                    </div>
                  </div>
                  <Heart className="h-3 w-3 mt-2 cursor-pointer hover:opacity-50" />
                </div>
            ))}

          </div>

          {/* Actions & Input Footer */}
          <div className="p-3 border-t border-border bg-background">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                    <button onClick={onLike} className="hover:opacity-60 transition-opacity">
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
                <button onClick={onSave} className="hover:opacity-60 transition-opacity">
                    <Bookmark className={cn("h-6 w-6", isSaved ? "fill-foreground" : "stroke-current")} />
                </button>
            </div>
            <div className="font-semibold text-sm mb-2">{likesCount.toLocaleString()} likes</div>
            <div className="text-[10px] text-muted-foreground uppercase mb-3">{post.timestamp}</div>

            <div className="flex items-center gap-2 border-t border-border pt-3">
                <Smile className="h-6 w-6 cursor-pointer text-foreground" />
                <input 
                    type="text" 
                    placeholder="Add a comment..." 
                    className="text-sm w-full bg-transparent border-none focus:ring-0 p-0 placeholder:text-muted-foreground"
                />
                <button className="text-blue-500 font-semibold text-sm opacity-50 hover:opacity-100">Post</button>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
