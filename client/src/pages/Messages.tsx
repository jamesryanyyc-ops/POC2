import { USERS, CURRENT_USER } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, Phone, Video, Info, Smile, Image as ImageIcon, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Messages() {
  const [activeChat, setActiveChat] = useState<string | null>("u2");

  return (
    <div className="max-w-[935px] mx-auto h-[calc(100vh-80px)] md:h-screen md:pt-5 pb-20 md:pb-5">
      <div className="bg-background md:border border-border rounded-lg h-full flex overflow-hidden">
        
        {/* Chat List */}
        <div className={cn("w-full md:w-[350px] border-r border-border flex flex-col", activeChat ? "hidden md:flex" : "flex")}>
           <div className="h-16 px-5 flex items-center justify-between border-b border-border">
              <div className="font-bold text-lg flex items-center gap-1 cursor-pointer">
                  {CURRENT_USER.username} <span className="text-xs">▼</span>
              </div>
              <Edit className="h-6 w-6 cursor-pointer" />
           </div>
           
           <div className="p-4 flex items-center justify-between">
              <span className="font-bold">Messages</span>
              <span className="text-muted-foreground font-semibold text-sm">Requests</span>
           </div>

           <div className="flex-1 overflow-y-auto">
              {USERS.map((user) => (
                  <div 
                    key={user.id}
                    onClick={() => setActiveChat(user.id)}
                    className={cn(
                        "flex items-center gap-3 px-5 py-3 cursor-pointer hover:bg-muted/50",
                        activeChat === user.id && "bg-muted"
                    )}
                  >
                      <Avatar className="h-14 w-14">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.username[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                          <div className="truncate">{user.fullName || user.username}</div>
                          <div className="text-sm text-muted-foreground flex gap-1">
                              <span className="truncate">Sent a reel by instagram_creators</span>
                              <span>• 2h</span>
                          </div>
                      </div>
                  </div>
              ))}
           </div>
        </div>

        {/* Chat Window */}
        <div className={cn("flex-1 flex flex-col bg-background h-full", !activeChat ? "hidden md:flex" : "flex")}>
           {activeChat ? (
               <>
                 {/* Header */}
                 <div className="h-16 px-4 md:px-6 flex items-center justify-between border-b border-border">
                    <div className="flex items-center gap-3">
                         <button onClick={() => setActiveChat(null)} className="md:hidden text-2xl mr-2">←</button>
                         <Avatar className="h-8 w-8">
                            <AvatarImage src={USERS.find(u => u.id === activeChat)?.avatar} />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold">{USERS.find(u => u.id === activeChat)?.fullName}</span>
                    </div>
                    <div className="flex gap-4">
                        <Phone className="h-6 w-6 cursor-pointer" />
                        <Video className="h-6 w-6 cursor-pointer" />
                        <Info className="h-6 w-6 cursor-pointer" />
                    </div>
                 </div>

                 {/* Messages */}
                 <div className="flex-1 overflow-y-auto p-4 space-y-4">
                     {/* Demo Messages */}
                     <div className="flex justify-center text-xs text-muted-foreground my-4">Today 9:41 AM</div>
                     
                     <div className="flex justify-end">
                         <div className="bg-[#3797f0] text-white px-4 py-2 rounded-2xl rounded-br-none max-w-[70%]">
                             Hey! Did you see that new coffee shop downtown?
                         </div>
                     </div>

                     <div className="flex justify-start items-end gap-2">
                        <Avatar className="h-7 w-7 mb-1">
                            <AvatarImage src={USERS.find(u => u.id === activeChat)?.avatar} />
                        </Avatar>
                         <div className="bg-muted text-foreground px-4 py-2 rounded-2xl rounded-bl-none max-w-[70%]">
                             Yes! I was just looking at it. We should go this weekend! ☕️
                         </div>
                     </div>
                 </div>

                 {/* Input */}
                 <div className="p-4 bg-background">
                     <div className="border border-border rounded-full p-1 pl-4 flex items-center gap-2 min-h-[44px]">
                        <Smile className="h-6 w-6 cursor-pointer text-foreground" />
                        <input type="text" placeholder="Message..." className="flex-1 bg-transparent border-none outline-none focus:ring-0" />
                        {/* If typing show send, else images/heart */}
                        <div className="flex items-center gap-2 pr-2">
                             <ImageIcon className="h-6 w-6 cursor-pointer" />
                             <Heart className="h-6 w-6 cursor-pointer" />
                        </div>
                     </div>
                 </div>
               </>
           ) : (
               <div className="h-full flex flex-col items-center justify-center text-center p-8">
                   <div className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center mb-4">
                       <div className="text-4xl -rotate-12">📨</div>
                   </div>
                   <h2 className="text-xl font-normal mb-2">Your Messages</h2>
                   <p className="text-muted-foreground mb-4">Send private photos and messages to a friend or group.</p>
                   <button className="bg-[#0095f6] text-white font-semibold py-1.5 px-4 rounded-md">Send Message</button>
               </div>
           )}
        </div>

      </div>
    </div>
  );
}
