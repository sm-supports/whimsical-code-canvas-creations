import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import React, { Suspense } from "react";
import Loading from "@/components/Loading";

const Index = React.lazy(() => import("./pages/Index"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const WebDevelopmentProjects = React.lazy(() => import("./pages/WebDevelopmentProjects"));
const ReactDevelopmentProjects = React.lazy(() => import("./pages/ReactDevelopmentProjects"));
const GraphicDesignProjects = React.lazy(() => import("./pages/GraphicDesignProjects"));
const IllustrationProjects = React.lazy(() => import("./pages/IllustrationProjects"));

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <Suspense fallback={<Loading size="lg" className="fixed inset-0 z-50 bg-background" />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/web-development" element={<WebDevelopmentProjects />} />
        <Route path="/projects/react-development" element={<ReactDevelopmentProjects />} />
        <Route path="/projects/graphic-design" element={<GraphicDesignProjects />} />
        <Route path="/projects/illustration" element={<IllustrationProjects />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
