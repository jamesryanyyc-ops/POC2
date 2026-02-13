import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { STORIES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Stories() {
  return (
    <div className="w-full md:max-w-[630px] mx-auto py-4 overflow-x-auto no-scrollbar touch-pan-x flex gap-4 px-4 md:px-0">
      {/* Current User Story Add */}
      <div className="flex flex-col items-center gap-1 min-w-[64px] cursor-pointer group">
        <div className="w-16 h-16 rounded-full p-[2px] relative">
           <Avatar className="w-full h-full border border-border">
              <AvatarImage src="/images/avatar_1.jpg" />
              <AvatarFallback>ME</AvatarFallback>
           </Avatar>
           <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center border-2 border-background text-white text-xs font-bold">+</div>
        </div>
        <span className="text-xs truncate w-16 text-center text-muted-foreground">Your story</span>
      </div>

      {STORIES.map((story) => (
        <div key={story.id} className="flex flex-col items-center gap-1 min-w-[64px] cursor-pointer group">
          <div className={cn(
            "w-16 h-16 rounded-full p-[2px] transition-transform group-hover:scale-105",
            story.hasUnseen ? "story-ring" : "border border-border"
          )}>
            <Avatar className="w-full h-full story-ring-inner border-2 border-background">
              <AvatarImage src={story.user.avatar} />
              <AvatarFallback>{story.user.username[0]}</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-xs truncate w-16 text-center">{story.user.username}</span>
        </div>
      ))}
    </div>
  );
}
