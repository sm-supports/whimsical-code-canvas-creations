import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import React, { Suspense } from "react";

const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const IllustrationProjects = React.lazy(() => import("./pages/IllustrationProjects"));
const WebDevelopmentProjects = React.lazy(() => import("./pages/WebDevelopmentProjects"));
const GraphicDesignProjects = React.lazy(() => import("./pages/GraphicDesignProjects"));
const ReactDevelopmentProjects = React.lazy(() => import("./pages/ReactDevelopmentProjects"));
const FullStackProjects = React.lazy(() => import("./pages/FullStackProjects"));

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
