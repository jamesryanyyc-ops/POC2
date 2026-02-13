import { MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { USERS } from "@/lib/data";

export function FloatingMessages() {
  const messageUsers = USERS.slice(0, 3); // Get first 3 users for the stack

  return (
    <div className="fixed bottom-10 right-10 z-[100] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white dark:bg-zinc-900 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border py-4 px-6 flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform min-w-[280px] justify-between">
        
        <div className="flex items-center gap-3">
            {/* Icon - Using the Send/Paper Plane icon style from Instagram */}
            <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-6 w-6"
            >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>

            {/* Text */}
            <span className="font-bold text-lg">Messages</span>
        </div>

        {/* Avatar Stack */}
        <div className="flex items-center -space-x-4 pl-2">
          {messageUsers.map((user, i) => (
            <Avatar key={user.id} className="h-10 w-10 border-2 border-white dark:border-zinc-900 ring-1 ring-black/5 dark:ring-white/10">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.username[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>

      </div>
    </div>
  );
}
