import { Link } from "wouter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { STORIES, CURRENT_USER } from "@/lib/data";
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
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 rounded-full p-1 shadow-md opacity-90 hover:opacity-100 hidden md:flex scale-75"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {/* Stories Container */}
      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="overflow-x-auto overflow-y-visible no-scrollbar touch-pan-x flex gap-[10px] px-4 py-2 md:px-0 scroll-smooth items-center max-w-[630px] mx-auto w-full justify-between"
      >
        {STORIES.slice(0, 6).map((story) => (
          <Link key={story.id} href={`/profile/${story.user.username}`}>
            <a className="flex flex-col items-center gap-1 cursor-pointer group min-w-[90px] w-[90px]">
              <div className="w-[90px] h-[90px] rounded-full p-[3px] transition-transform group-hover:scale-105 story-ring">
                <Avatar className="w-full h-full story-ring-inner border-[3px] border-background">
                  <AvatarImage src={story.user.avatar} />
                  <AvatarFallback>{story.user.username[0]}</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs truncate w-[90px] text-center mt-1">{story.user.username}</span>
            </a>
          </Link>
        ))}
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-zinc-800 rounded-full p-1 shadow-md opacity-90 hover:opacity-100 hidden md:flex scale-75"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
