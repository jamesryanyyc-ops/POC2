import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Home, Compass, PlusSquare, Film, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CURRENT_USER } from "@/lib/data";

export function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Compass, label: "Explore", href: "/explore" },
    { icon: Film, label: "Reels", href: "/reels" },
    { icon: PlusSquare, label: "Create", href: "/create" },
    { icon: MessageCircle, label: "Messages", href: "/messages" },
    {
        icon: null,
        label: "Profile",
        href: "/profile",
        isProfile: true,
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-12 bg-background border-t border-border flex items-center justify-around z-50 px-2 pb-safe">
      {navItems.map((item) => {
        const isActive = location === item.href;
        const Icon = item.icon;
        
        return (
          <Link key={item.label} href={item.href}>
            <div className="p-2 cursor-pointer transition-transform active:scale-95">
             {item.isProfile ? (
                 <Avatar className={cn("h-6 w-6", isActive && "ring-2 ring-black dark:ring-white p-[1px]")}>
                    <AvatarImage src={CURRENT_USER.avatar} />
                    <AvatarFallback>ME</AvatarFallback>
                  </Avatar>
             ) : (
                  Icon && (
                    <Icon
                      className={cn(
                        "h-6 w-6",
                        isActive ? "stroke-[3px]" : "stroke-[2px]"
                      )}
                    />
                  )
             )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
