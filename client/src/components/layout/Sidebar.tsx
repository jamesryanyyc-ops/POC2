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
  XCircle,
  Search as SearchIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CURRENT_USER, USERS } from "@/lib/data";
import logoImage from "@assets/shape-98_1771532730970.png";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export function Sidebar() {
  const [location] = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setIsNotificationsOpen(false);
  };

  const handleNotificationsClick = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (!isNotificationsOpen) setIsSearchOpen(false);
  };

  const isAnyPaneOpen = isSearchOpen || isNotificationsOpen;

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", action: handleSearchClick },
    { icon: Compass, label: "Explore", href: "/explore" },
    { icon: Film, label: "Reels", href: "/reels" },
    { icon: MessageCircle, label: "Messages", href: "/messages" },
    { icon: Heart, label: "Notifications", action: handleNotificationsClick },
    { icon: PlusSquare, label: "Create", href: "/create" },
    {
      icon: null, // Special case for profile
      label: "Profile",
      href: "/profile",
      isProfile: true,
    },
  ];

  // Filter users based on search
  const filteredUsers = USERS.filter((user) => 
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (user.fullName && user.fullName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <div 
        className={cn(
          "hidden md:flex flex-col h-full border-r border-sidebar-border bg-sidebar text-sidebar-foreground fixed left-0 top-0 p-3 pt-8 pb-5 z-50 transition-all duration-300 ease-in-out overflow-hidden",
          isAnyPaneOpen ? "w-[72px]" : "w-[72px] hover:w-[244px] group/sidebar"
        )}
      >
        <div className="px-3 mb-8 h-8 flex items-center relative">
          {/* Full Logo - visible on hover (only if no pane is open) */}
          <div className={cn(
            "hidden w-full items-center gap-3 transition-opacity duration-300 animate-in fade-in zoom-in-95",
            !isAnyPaneOpen && "group-hover/sidebar:flex"
          )}>
            <img src={logoImage} alt="Logo" className="h-8 w-auto dark:invert" />
            <span className="font-sans text-xl font-semibold tracking-tight select-none">InstaVibe</span>
          </div>
          
          {/* Icon Logo - visible by default, hidden on hover if no pane is open */}
          <div className={cn(
            "block mx-auto transition-opacity duration-300 absolute left-0 right-0 flex justify-center",
            !isAnyPaneOpen && "group-hover/sidebar:hidden"
          )}>
              <img src={logoImage} alt="Logo" className="h-8 w-8 object-contain transition-transform hover:scale-105 dark:invert" />
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = location === item.href || (item.label === "Search" && isSearchOpen) || (item.label === "Notifications" && isNotificationsOpen);
            const Icon = item.icon;
            
            const content = (
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
                            isActive && !isAnyPaneOpen ? "stroke-[3px]" : "stroke-[2px]",
                            ((isSearchOpen && item.label === "Search") || (isNotificationsOpen && item.label === "Notifications")) && "stroke-[3px]"
                        )}
                        />
                    )
                    )}
                </div>
                {/* Text - hidden by default, visible on hover only if no pane is open */}
                <span className={cn(
                  "opacity-0 transition-opacity duration-200 delay-75 whitespace-nowrap text-base",
                  !isAnyPaneOpen && "group-hover/sidebar:opacity-100"
                )}>
                    {item.label}
                </span>
              </div>
            );

            return (
              <div key={item.label} className="w-full block">
                {item.action ? (
                  <button onClick={item.action} className="w-full text-left block">
                    {content}
                  </button>
                ) : (
                  <Link href={item.href || "#"}>
                    <a className="block w-full">{content}</a>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="mt-auto px-3">
          <button className="flex items-center gap-4 p-3 w-full rounded-md hover:bg-sidebar-accent text-left group overflow-hidden">
            <div className="min-w-[24px] flex justify-center">
               <Menu className="h-6 w-6 transition-transform group-hover:scale-105 stroke-[2px]" />
            </div>
            <span className={cn(
              "opacity-0 transition-opacity duration-200 delay-75 whitespace-nowrap text-base",
              !isAnyPaneOpen && "group-hover/sidebar:opacity-100"
            )}>
                More
            </span>
          </button>
        </div>
      </div>

      {/* Search Panel Slide-out */}
      <div 
        className={cn(
          "fixed top-0 bottom-0 left-[72px] w-[396px] bg-background border-r border-border shadow-[4px_0_24px_rgba(0,0,0,0.05)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)] z-40 transition-transform duration-300 ease-in-out flex flex-col overflow-hidden",
          isSearchOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 pt-8 pb-4 relative">
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-8 right-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            <XCircle className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-semibold mb-8">Search</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-lg py-2.5 px-4 pr-10 text-sm outline-none focus:bg-zinc-200 dark:focus:bg-zinc-700 transition-colors"
              autoFocus={isSearchOpen}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <XCircle className="h-4 w-4 fill-muted-foreground text-zinc-100 dark:text-zinc-800" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-4">
          {searchQuery ? (
            <>
              {/* Search Suggestions */}
              <div className="px-6 space-y-1 py-2">
                <button className="flex items-center gap-4 w-full p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg">
                  <div className="flex items-center justify-center h-11 w-11 rounded-full border border-border">
                    <SearchIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">{searchQuery} profile</span>
                </button>
                <button className="flex items-center gap-4 w-full p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg">
                  <div className="flex items-center justify-center h-11 w-11 rounded-full border border-border">
                    <SearchIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">{searchQuery} friends</span>
                </button>
                <button className="flex items-center gap-4 w-full p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg">
                  <div className="flex items-center justify-center h-11 w-11 rounded-full border border-border">
                    <SearchIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">{searchQuery} you</span>
                </button>
              </div>

              <div className="mx-6 border-t border-border my-2"></div>

              {/* User Results */}
              <div className="px-4">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <Link key={user.id} href={`/profile/${user.username}`}>
                      <a className="flex items-center gap-3 w-full p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg">
                        <div className="story-ring p-[2px] rounded-full flex-shrink-0">
                          <Avatar className="h-11 w-11 story-ring-inner border-2 border-background">
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.username[0]}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex flex-col text-left overflow-hidden">
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-bold truncate">{user.username}</span>
                            {user.isVerified && (
                              <svg aria-label="Verified" className="h-3 w-3 text-blue-500 fill-current flex-shrink-0" viewBox="0 0 24 24">
                                <path d="M12.001 2.01l-2.02 1.082L7.698 2.07l-1.33 2.015-2.222.684.27 2.302-1.745 1.52 1.11 2.046-.576 2.247 1.93 1.258.46 2.26 2.193.753 1.05 2.036 2.268-.426 1.77 1.488 1.905-1.29 2.18.57 1.23-1.95 2.24-.62.38-2.28 1.83-1.42-.98-2.09 1.43-1.84-2.12-1.02-.16-2.3-2.28-.5-1.18-1.98-2.19.92z" fill="#0095F6"></path>
                                <path d="M10.17 15.65c-.24 0-.48-.09-.66-.27L6.8 12.67c-.37-.36-.37-.96 0-1.33.37-.36.96-.36 1.33 0l2.04 2.05 5.71-5.71c.37-.36.96-.36 1.33 0 .37.36.37.96 0 1.33l-6.38 6.38c-.18.18-.42.27-.66.27z" fill="white"></path>
                              </svg>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground truncate">
                            {user.fullName} {user.followers ? `• ${user.followers.toLocaleString()} followers` : ""}
                          </span>
                        </div>
                      </a>
                    </Link>
                  ))
                ) : (
                  <div className="p-4 text-center text-sm text-muted-foreground">
                    No results found.
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="px-6 pt-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Recent</h3>
                <button className="text-sm font-semibold text-blue-500 hover:text-foreground">Clear all</button>
              </div>
              <div className="text-sm text-muted-foreground text-center py-8">
                No recent searches.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Notifications Panel Slide-out */}
      <div 
        className={cn(
          "fixed top-0 bottom-0 left-[72px] w-[396px] bg-background border-r border-border shadow-[4px_0_24px_rgba(0,0,0,0.05)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)] z-40 transition-transform duration-300 ease-in-out flex flex-col overflow-hidden",
          isNotificationsOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 pt-8 pb-4 relative">
          <button 
            onClick={() => setIsNotificationsOpen(false)}
            className="absolute top-8 right-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            <XCircle className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-semibold mb-6">Notifications</h2>
        </div>
        <div className="flex-1 overflow-y-auto px-6 pb-6">
           <div className="font-semibold mb-4 text-base">This Month</div>
           
           {/* Notification items */}
           <div className="space-y-4">
             <div className="flex items-center gap-3 w-full cursor-pointer group">
               <div className="story-ring p-[2px] rounded-full flex-shrink-0">
                 <Avatar className="h-11 w-11 story-ring-inner border-2 border-background">
                   <AvatarImage src={USERS[1].avatar} />
                   <AvatarFallback>{USERS[1].username[0]}</AvatarFallback>
                 </Avatar>
               </div>
               <div className="flex-1 text-sm text-left">
                 <span className="font-bold">{USERS[1].username}</span> started following you. <span className="text-muted-foreground">2w</span>
               </div>
               <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-4 rounded-lg text-sm transition-colors">
                 Follow
               </button>
             </div>
             
             <div className="flex items-center gap-3 w-full cursor-pointer group">
               <div className="p-[2px] rounded-full flex-shrink-0">
                 <Avatar className="h-11 w-11 border-2 border-background">
                   <AvatarImage src={USERS[2].avatar} />
                   <AvatarFallback>{USERS[2].username[0]}</AvatarFallback>
                 </Avatar>
               </div>
               <div className="flex-1 text-sm text-left">
                 <span className="font-bold">{USERS[2].username}</span> liked your post. <span className="text-muted-foreground">3w</span>
               </div>
               <div className="h-11 w-11 flex-shrink-0">
                 <img src="/images/post_1.jpg" alt="Post" className="h-full w-full object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" />
               </div>
             </div>

             <div className="flex items-center gap-3 w-full cursor-pointer group">
               <div className="p-[2px] rounded-full flex-shrink-0">
                 <Avatar className="h-11 w-11 border-2 border-background">
                   <AvatarImage src={USERS[3].avatar} />
                   <AvatarFallback>{USERS[3].username[0]}</AvatarFallback>
                 </Avatar>
               </div>
               <div className="flex-1 text-sm text-left">
                 <span className="font-bold">{USERS[3].username}</span> mentioned you in a comment: "@design.engineer love this work!" <span className="text-muted-foreground">4w</span>
               </div>
               <div className="h-11 w-11 flex-shrink-0">
                 <img src="/images/post_2.jpg" alt="Post" className="h-full w-full object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity" />
               </div>
             </div>
             
             <div className="flex items-center gap-3 w-full cursor-pointer group">
               <div className="p-[2px] rounded-full flex-shrink-0">
                 <Avatar className="h-11 w-11 border-2 border-background">
                   <AvatarImage src={USERS[4].avatar} />
                   <AvatarFallback>{USERS[4].username[0]}</AvatarFallback>
                 </Avatar>
               </div>
               <div className="flex-1 text-sm text-left">
                 <span className="font-bold">{USERS[4].username}</span> started following you. <span className="text-muted-foreground">4w</span>
               </div>
               <button className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-foreground font-semibold py-1.5 px-4 rounded-lg text-sm transition-colors">
                 Following
               </button>
             </div>
           </div>
        </div>
      </div>
    </>
  );
}
