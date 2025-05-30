
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DocsLayout } from "./components/DocsLayout";
import DocsHome from "./pages/docs/DocsHome";
import QuickStart from "./pages/docs/QuickStart";
import Installation from "./pages/docs/Installation";
import ApiEndpoints from "./pages/docs/ApiEndpoints";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/docs" replace />} />
          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<DocsHome />} />
            <Route path="quickstart" element={<QuickStart />} />
            <Route path="installation" element={<Installation />} />
            <Route path="architecture" element={<div className="p-8 text-center text-slate-600">Architecture documentation coming soon...</div>} />
            <Route path="configuration" element={<div className="p-8 text-center text-slate-600">Configuration documentation coming soon...</div>} />
            <Route path="data-models" element={<div className="p-8 text-center text-slate-600">Data Models documentation coming soon...</div>} />
            <Route path="auth" element={<div className="p-8 text-center text-slate-600">Authentication documentation coming soon...</div>} />
            <Route path="endpoints" element={<ApiEndpoints />} />
            <Route path="webhooks" element={<div className="p-8 text-center text-slate-600">Webhooks documentation coming soon...</div>} />
            <Route path="best-practices" element={<div className="p-8 text-center text-slate-600">Best Practices documentation coming soon...</div>} />
            <Route path="troubleshooting" element={<div className="p-8 text-center text-slate-600">Troubleshooting documentation coming soon...</div>} />
            <Route path="examples" element={<div className="p-8 text-center text-slate-600">Examples documentation coming soon...</div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
