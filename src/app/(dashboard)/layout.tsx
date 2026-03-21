import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="bg-accent/20">
                {children}
                <Toaster />
            </SidebarInset>
        </SidebarProvider>
    );
};
export default Layout;