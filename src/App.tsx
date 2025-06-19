
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IllustrationProjects from "./pages/IllustrationProjects";
import WebDevelopmentProjects from "./pages/WebDevelopmentProjects";
import GraphicDesignProjects from "./pages/GraphicDesignProjects";
import ReactDevelopmentProjects from "./pages/ReactDevelopmentProjects";
import FullStackProjects from "./pages/FullStackProjects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/illustration" element={<IllustrationProjects />} />
            <Route path="/projects/web-development" element={<WebDevelopmentProjects />} />
            <Route path="/projects/graphic-design" element={<GraphicDesignProjects />} />
            <Route path="/projects/react-development" element={<ReactDevelopmentProjects />} />
            <Route path="/projects/full-stack" element={<FullStackProjects />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
