import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  Home,
  Search,
  Compass,
  Film,
  MessageCircle,
  Heart,
  PlusSquare,
  Menu,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CURRENT_USER } from "@/lib/data";
import logoImage from "@assets/shape-98_1771532730970.png";

export function Sidebar() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Compass, label: "Explore", href: "/explore" },
    { icon: Film, label: "Reels", href: "/reels" },
    { icon: MessageCircle, label: "Messages", href: "/messages" },
    { icon: Heart, label: "Notifications", href: "/notifications" },
    { icon: PlusSquare, label: "Create", href: "/create" },
    {
      icon: null, // Special case for profile
      label: "Profile",
      href: "/profile",
      isProfile: true,
    },
  ];

  return (
    <div className="hidden md:flex flex-col h-full w-[72px] hover:w-[244px] border-r border-sidebar-border bg-sidebar text-sidebar-foreground fixed left-0 top-0 p-3 pt-8 pb-5 z-50 transition-all duration-300 ease-in-out group/sidebar overflow-hidden">
      <div className="px-3 mb-8 h-8 flex items-center relative">
        {/* Full Logo - visible on hover */}
        <div className="hidden group-hover/sidebar:flex w-full items-center gap-3 transition-opacity duration-300 animate-in fade-in zoom-in-95">
           <img src={logoImage} alt="Logo" className="h-8 w-auto dark:invert" />
           <span className="font-serif text-xl font-bold tracking-tight select-none">Messages</span>
        </div>
        
        {/* Icon Logo - visible by default, hidden on hover */}
        <div className="block group-hover/sidebar:hidden mx-auto transition-opacity duration-300 absolute left-0 right-0 flex justify-center">
            <img src={logoImage} alt="Logo" className="h-8 w-8 object-contain transition-transform hover:scale-105 dark:invert" />
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          const Icon = item.icon;
          
          return (
            <Link key={item.label} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-4 p-3 rounded-md transition-colors hover:bg-sidebar-accent cursor-pointer group relative overflow-hidden",
                  isActive && "font-bold"
                )}
              >
                <div className="min-w-[24px] flex justify-center">
                    {item.isProfile ? (
                    <Avatar className={cn("h-6 w-6", isActive && "ring-2 ring-black dark:ring-white p-[1px]")}>
                        <AvatarImage src={CURRENT_USER.avatar} />
                        <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                    ) : (
                    Icon && (
                        <Icon
                        className={cn(
                            "h-6 w-6 transition-transform group-hover:scale-105",
                            isActive ? "stroke-[3px]" : "stroke-[2px]"
                        )}
                        />
                    )
                    )}
                </div>
                {/* Text - hidden by default, visible on hover */}
                <span className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-200 delay-75 whitespace-nowrap text-base">
                    {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-3">
        <button className="flex items-center gap-4 p-3 w-full rounded-md hover:bg-sidebar-accent text-left group overflow-hidden">
          <div className="min-w-[24px] flex justify-center">
             <Menu className="h-6 w-6 transition-transform group-hover:scale-105 stroke-[2px]" />
          </div>
          <span className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-200 delay-75 whitespace-nowrap text-base">
              More
          </span>
        </button>
      </div>
    </div>
  );
}
