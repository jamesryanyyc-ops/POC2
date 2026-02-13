import { Stories } from "@/components/feed/Stories";
import { Post } from "@/components/feed/Post";
import { POSTS, USERS, CURRENT_USER } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Home() {
  const suggestions = USERS.slice(0, 5);

  return (
    <div className="flex justify-center max-w-[1024px] mx-auto pt-4 md:pt-8 gap-16">
      {/* Main Feed */}
      <div className="w-full md:w-[630px] flex flex-col px-0 md:px-4">
        <Stories />
        <div className="mt-4 pb-20 md:pb-0">
          {POSTS.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Right Sidebar (Desktop Only) */}
      <div className="hidden lg:block w-[320px] pt-4">
        {/* Current User */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 cursor-pointer">
            <Avatar className="h-12 w-12 border border-border">
              <AvatarImage src={CURRENT_USER.avatar} />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm">
              <span className="font-semibold">{CURRENT_USER.username}</span>
              <span className="text-muted-foreground">{CURRENT_USER.fullName}</span>
            </div>
          </div>
          <Button variant="link" className="text-blue-500 font-semibold text-xs p-0 h-auto">Switch</Button>
        </div>

        {/* Suggestions Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-muted-foreground font-semibold text-sm">Suggested for you</span>
          <Button variant="link" className="text-foreground font-semibold text-xs p-0 h-auto hover:text-muted-foreground">See All</Button>
        </div>

        {/* Suggestions List */}
        <div className="space-y-4">
          {suggestions.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3 cursor-pointer">
                <Avatar className="h-8 w-8 border border-border">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.username[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-xs">
                  <span className="font-semibold hover:underline">{user.username}</span>
                  <span className="text-muted-foreground">Suggested for you</span>
                </div>
              </div>
              <Button variant="link" className="text-blue-500 font-semibold text-xs p-0 h-auto hover:text-foreground">Follow</Button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-xs text-muted-foreground/50 leading-5">
            <p>About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language • Meta Verified</p>
            <p className="mt-4">© 2026 INSTAGRAM FROM META</p>
        </div>
      </div>
    </div>
  );
}
