import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { STORIES } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export function Stories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full md:max-w-[630px] mx-auto py-6">
      
      {/* Left Arrow */}
      {canScrollLeft && (
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 rounded-full p-1 shadow-md opacity-90 hover:opacity-100 hidden md:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Stories Container */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="overflow-x-auto no-scrollbar touch-pan-x flex gap-4 px-4 md:px-0 scroll-smooth items-center"
      >
        {/* Current User Story Add */}
        <div className="flex flex-col items-center gap-1 min-w-[80px] cursor-pointer group">
          <div className="w-20 h-20 rounded-full p-[3px] relative">
             <Avatar className="w-full h-full border border-border">
                <AvatarImage src="/images/avatar_1.jpg" />
                <AvatarFallback>ME</AvatarFallback>
             </Avatar>
             <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center border-[3px] border-background text-white text-sm font-bold">+</div>
          </div>
          <span className="text-xs truncate w-20 text-center text-muted-foreground mt-1">Your story</span>
        </div>

        {STORIES.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1 min-w-[80px] cursor-pointer group">
            <div className={cn(
              "w-20 h-20 rounded-full p-[3px] transition-transform group-hover:scale-105",
              story.hasUnseen ? "story-ring" : "border border-border"
            )}>
              <Avatar className="w-full h-full story-ring-inner border-[3px] border-background">
                <AvatarImage src={story.user.avatar} />
                <AvatarFallback>{story.user.username[0]}</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-xs truncate w-20 text-center mt-1">{story.user.username}</span>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 rounded-full p-1 shadow-md opacity-90 hover:opacity-100 hidden md:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
