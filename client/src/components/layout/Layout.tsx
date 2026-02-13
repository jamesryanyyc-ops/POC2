import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      <main className="flex-1 md:ml-[72px] lg:ml-[244px] pb-12 md:pb-0 w-full max-w-full overflow-x-hidden">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
