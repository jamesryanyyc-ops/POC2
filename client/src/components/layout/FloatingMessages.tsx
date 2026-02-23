import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { USERS } from "@/lib/data";
import { useLocation } from "wouter";
import logoImage from "@assets/shape-98_1771532730970.png";

export function FloatingMessages() {
  const [location, navigate] = useLocation();
  const messageUsers = USERS.slice(0, 3); // Get first 3 users for the stack

  if (location === "/messages") return null;

  return (
    <div id="floating-messages" className="fixed bottom-10 right-10 z-[100] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div 
        className="bg-white dark:bg-zinc-900 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border py-3 px-4 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform min-w-[196px] justify-between"
        onClick={() => navigate("/messages")}
      >
        
        <div className="flex items-center gap-2">
            {/* Using the newly provided logo instead of the SVG icon */}
            <img src={logoImage} alt="Messages" className="h-4 w-4 dark:invert" />

            {/* Text */}
            <span className="font-bold text-sm">Messages</span>
        </div>

        {/* Avatar Stack */}
        <div className="flex items-center -space-x-3 pl-2">
          {messageUsers.map((user, i) => (
            <Avatar key={user.id} className="h-7 w-7 border-2 border-white dark:bg-zinc-900 dark:border-zinc-900 ring-1 ring-black/5 dark:ring-white/10">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.username[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>

      </div>
    </div>
  );
}
