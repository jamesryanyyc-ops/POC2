import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, Image as ImageIcon, Video, MapPin, Smile, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CURRENT_USER } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Create() {
  const [location, setLocation] = useLocation();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create a preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleShare = () => {
    // In a real app, this would upload the file and create a post.
    // For the mockup, we'll just redirect to home and pretend it worked.
    console.log("Sharing post with caption:", caption);
    if (selectedFile) {
      console.log("File:", selectedFile.name);
    }
    
    // Redirect to home page
    setLocation("/");
  };

  return (
    <div className="flex flex-col h-full w-full max-w-[800px] mx-auto bg-background md:pt-8 md:px-4">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border md:rounded-t-xl bg-background z-10 sticky top-0">
        <button onClick={() => setLocation("/")} className="p-1 -ml-1">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-bold">Create new post</h1>
        {previewUrl ? (
          <button 
            onClick={handleShare}
            className="text-blue-500 font-semibold text-sm hover:text-blue-600 transition-colors"
          >
            Share
          </button>
        ) : (
          <div className="w-8"></div> /* Spacer for alignment */
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden border-x border-b border-border md:rounded-b-xl bg-background">
        
        {/* Left Side: Image Upload / Preview */}
        <div className="flex-1 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 border-r border-border min-h-[400px]">
          {previewUrl ? (
            <div className="w-full h-full flex items-center justify-center p-4 bg-black">
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center p-8 text-center space-y-6">
              <div className="w-24 h-24 flex items-center justify-center">
                <svg aria-label="Icon to represent media such as images or videos" className="h-24 w-24 text-foreground" viewBox="0 0 97.6 77.3">
                  <path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path>
                  <path d="M84.7 18.4L58.6 12.2C54.4 11.2 50 14 49 18.2l-5.2 24.3c-.9 4.1 1.8 8.4 5.9 9.4l26.1 5.6c4.1.9 8.4-1.8 9.4-5.9l5.2-24.3c.9-4-1.9-8.1-5.7-8.9zM72.2 46.4l-15.1-3.2c-.8-.2-1.2-1.1-1-1.9l.4-1.9c.2-.8 1.1-1.2 1.9-1l15.1 3.2c.8.2 1.2 1.1 1 1.9l-.4 1.9c-.2.8-1.1 1.2-1.9 1zm2.4-11l-15.1-3.2c-.8-.2-1.2-1.1-1-1.9l.4-1.9c.2-.8 1.1-1.2 1.9-1l15.1 3.2c.8.2 1.2 1.1 1 1.9l-.4 1.9c-.2.8-1.1 1.2-1.9 1zm4.6-11.1l-15.1-3.2c-.8-.2-1.2-1.1-1-1.9l.4-1.9c.2-.8 1.1-1.2 1.9-1l15.1 3.2c.8.2 1.2 1.1 1 1.9l-.4 1.9c-.2.8-1.1 1.2-1.9 1z" fill="currentColor"></path>
                  <path d="M18.2 59.5h44.5c2.6 0 4.7-2.1 4.7-4.7s-2.1-4.7-4.7-4.7H18.2c-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7z" fill="currentColor"></path>
                  <path d="M83.8 5H18.2C10.9 5 5 10.9 5 18.2v44.5C5 70 10.9 75.9 18.2 75.9h44.5c7.3 0 13.2-5.9 13.2-13.2V60c0-2.6-2.1-4.7-4.7-4.7s-4.7 2.1-4.7 4.7v2.7c0 2.1-1.7 3.8-3.8 3.8H18.2c-2.1 0-3.8-1.7-3.8-3.8V18.2c0-2.1 1.7-3.8 3.8-3.8h44.5c2.1 0 3.8 1.7 3.8 3.8v7.2c0 2.6 2.1 4.7 4.7 4.7s4.7-2.1 4.7-4.7v-7.2C75.9 10.9 70 5 62.7 5H18.2c-7.3 0-13.2 5.9-13.2 13.2v44.5c0 7.3 5.9 13.2 13.2 13.2h44.5c7.3 0 13.2-5.9 13.2-13.2V60c0-5.2-4.2-9.4-9.4-9.4H18.2c-5.2 0-9.4 4.2-9.4 9.4s4.2 9.4 9.4 9.4h44.5c5.2 0 9.4-4.2 9.4-9.4V18.2C83.8 10.9 77.9 5 70.6 5h-7.9z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-xl font-normal">Drag photos and videos here</h2>
              <Button 
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-6"
              >
                Select from computer
              </Button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileSelect} 
                accept="image/*,video/*" 
                className="hidden" 
              />
            </div>
          )}
        </div>

        {/* Right Side: Caption & Settings (Only visible after file selected on mobile, always visible on desktop) */}
        <div className={cn(
          "w-full md:w-[340px] flex flex-col bg-background",
          !previewUrl && "hidden md:flex opacity-50 pointer-events-none"
        )}>
          {/* User Profile */}
          <div className="flex items-center gap-3 p-4">
            <Avatar className="h-7 w-7">
              <AvatarImage src={CURRENT_USER.avatar} />
              <AvatarFallback>{CURRENT_USER.username[0]}</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-sm">{CURRENT_USER.username}</span>
          </div>

          {/* Caption Input */}
          <div className="px-4 pb-2 border-b border-border">
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write a caption..."
              className="w-full h-32 resize-none outline-none bg-transparent placeholder:text-muted-foreground"
              maxLength={2200}
            />
            <div className="flex justify-between items-center pt-2">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Smile className="h-5 w-5" />
              </button>
              <span className="text-xs text-muted-foreground">
                {caption.length}/2200
              </span>
            </div>
          </div>

          {/* Additional Settings */}
          <div className="flex flex-col">
            <button className="flex items-center justify-between px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900 border-b border-border">
              <span className="text-base">Add location</span>
              <MapPin className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="flex items-center justify-between px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900 border-b border-border">
              <span className="text-base">Accessibility</span>
              <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="flex items-center justify-between px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900 border-b border-border">
              <span className="text-base">Advanced settings</span>
              <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}