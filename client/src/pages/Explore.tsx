import { POSTS } from "@/lib/data";

export default function Explore() {
  return (
    <div className="max-w-[935px] mx-auto pt-4 md:pt-8 px-0 pb-20">
      <div className="grid grid-cols-3 gap-1 md:gap-7">
        {/* Repeating posts to fill the grid for demo */}
        {[...POSTS, ...POSTS, ...POSTS].map((post, i) => {
          // Every 3rd item is larger in a real masonry, but keeping it simple grid for now
          // Could use CSS grid-row-span for specific indices to mimic Instagram's 1 big 2 small pattern
          const isBig = i % 10 === 0; 
          
          return (
            <div 
                key={`${post.id}-${i}`} 
                className={`relative group bg-secondary cursor-pointer overflow-hidden aspect-square ${isBig ? "row-span-2 col-span-2" : ""}`}
            >
                <img src={post.imageUrl} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 text-white font-bold transition-opacity">
                     <span className="flex items-center gap-2">❤️ {post.likes}</span>
                     <span className="flex items-center gap-2">💬 {post.comments.length}</span>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
