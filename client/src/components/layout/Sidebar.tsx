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
  Instagram,
  Settings,
  Activity,
  Bookmark,
  Sun,
  LogOut
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CURRENT_USER } from "@/lib/data";

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
      <div className="px-3 mb-8 h-8 flex items-center">
        {/* Full Logo - visible on hover */}
        <div className="hidden group-hover/sidebar:block w-full transition-opacity duration-300 animate-in fade-in zoom-in-95">
           {/* Simple text SVG logo replacement */}
           <svg viewBox="0 0 103 29" className="h-8 w-auto fill-foreground">
              <path d="M50.4 3.7c-5.8 0-10.4 4.5-10.4 10.2s4.6 10.2 10.4 10.2 10.4-4.5 10.4-10.2-4.6-10.2-10.4-10.2zm0 18.2c-4.5 0-8.1-3.6-8.1-8s3.6-8 8.1-8 8.1 3.6 8.1 8-3.6 8-8.1 8zm-22.9 8V18.6h2.8v11.3h2.6V18.6h2.9v-2.3H27.5v13.6h-2.9zm57.2-10c0-1.8-.7-2.9-2.2-2.9-1.2 0-2 .7-2.4 1.7v-1.5h-2.4v9.8h2.4v-5.6c0-1.2.6-2 1.5-2 .9 0 1.4.6 1.4 1.6v6h2.4v-6.3c0-1.9-1-2.9-2.6-2.9-.8 0-1.5.3-2.1.8V15h-2.1l-.3 1.5h2.4v9.8h2.4v-6.4zM10.7 29.9h-2.4v-1.9c-.7 1.4-2.1 2.2-4 2.2-3.3 0-5.8-2.6-5.8-6.1 0-3.4 2.5-6.1 5.8-6.1 1.9 0 3.3.8 4 2.1v-1.9h2.4v11.7zm-6.2-2.1c2 0 3.8-1.6 3.8-3.9 0-2.4-1.7-4-3.8-4-2 0-3.8 1.6-3.8 4 0 2.3 1.7 3.9 3.8 3.9zm13.1 2.1H15v-1.9c-.7 1.4-2.1 2.2-4 2.2-3.3 0-5.8-2.6-5.8-6.1 0-3.4 2.5-6.1 5.8-6.1 1.9 0 3.3.8 4 2.1v-1.9h2.4v11.7zm-6.1-2.1c2 0 3.8-1.6 3.8-3.9 0-2.4-1.7-4-3.8-4-2 0-3.8 1.6-3.8 4 0 2.3 1.7 3.9 3.8 3.9zm67.1-2.7v-2.1h-4.6v1.4c0 .9.6 1.4 1.9 1.4 1.1 0 1.8-.3 1.8-.9 0-.4-.3-.7-1.1-.9l-1.6-.4c-1.8-.5-2.7-1.3-2.7-2.7 0-1.7 1.5-2.9 3.8-2.9 2.2 0 3.7 1.2 3.8 3h-2.3c-.1-.7-.6-1.1-1.6-1.1-1 0-1.5.5-1.5 1 0 .4.3.7 1.1.9l1.6.4c1.9.5 2.8 1.4 2.8 2.8 0 1.8-1.5 3-3.9 3-2.4 0-4-1.2-4.1-3.1h2.3c.1.9.8 1.3 1.9 1.3 1 0 1.5-.4 1.5-1.1zM65.7 18.6h4.6v2.2H68v7.6h-2.3v-7.6h-1.6v-2.2zM88.8 30l-2.7-7.6h-2.7L80.7 30h2.6l.5-1.5h3.4l.5 1.5h2.6zm-4.3-3.4l1.2-3.6 1.2 3.6h-2.4z"/>
           </svg>
        </div>
        
        {/* Icon Logo - visible by default, hidden on hover */}
        <div className="block group-hover/sidebar:hidden mx-auto transition-opacity duration-300 absolute left-3 right-3 flex justify-center">
            <Instagram className="h-6 w-6 transition-transform hover:scale-105" />
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
