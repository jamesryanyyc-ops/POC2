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
    <div className="hidden md:flex flex-col h-full w-[72px] lg:w-[244px] border-r border-sidebar-border bg-sidebar text-sidebar-foreground fixed left-0 top-0 p-3 pt-8 pb-5 z-50 transition-all">
      <div className="px-3 mb-8">
        <h1 className="font-serif text-2xl font-bold tracking-tight hidden lg:block select-none cursor-pointer">Instagram</h1>
        <Instagram className="h-6 w-6 lg:hidden mx-auto lg:mx-0 transition-all hover:scale-105" />
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          const Icon = item.icon;
          
          return (
            <Link key={item.label} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-4 p-3 rounded-md transition-colors hover:bg-sidebar-accent cursor-pointer group",
                  isActive && "font-bold"
                )}
              >
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
                <span className="hidden lg:block text-base">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-3">
        <button className="flex items-center gap-4 p-3 w-full rounded-md hover:bg-sidebar-accent text-left group">
          <Menu className="h-6 w-6 transition-transform group-hover:scale-105 stroke-[2px]" />
          <span className="hidden lg:block text-base">More</span>
        </button>
      </div>
    </div>
  );
}
