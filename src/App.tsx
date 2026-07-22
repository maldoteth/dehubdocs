import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { SearchProvider } from "@/components/search/SearchProvider";
import { DocsChatBot } from "@/components/chat/DocsChatBot";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DocsLayout } from "./components/DocsLayout";
import ComingSoonPage from "./components/ComingSoonPage";

// Lazy load all documentation pages
const DocsHome = lazy(() => import("./pages/docs/DocsHome"));
const Overview = lazy(() => import("./pages/docs/Overview"));
const DePIN = lazy(() => import("./pages/docs/DePIN"));
const E2EEncryption = lazy(() => import("./pages/docs/E2EEncryption"));
const AIToolkits = lazy(() => import("./pages/docs/AIToolkits"));
const Advertising = lazy(() => import("./pages/docs/Advertising"));
const QuickStart = lazy(() => import("./pages/docs/QuickStart"));
const Installation = lazy(() => import("./pages/docs/Installation"));
const ApiEndpoints = lazy(() => import("./pages/docs/ApiEndpoints"));
const Team = lazy(() => import("./pages/docs/Team"));
const BrandGuidelines = lazy(() => import("./pages/docs/BrandGuidelines"));
const BrandAssets = lazy(() => import("./pages/docs/BrandAssets"));
const Dapp = lazy(() => import("./pages/docs/Dapp"));
const Games = lazy(() => import("./pages/docs/Games"));
const TokenEconomics = lazy(() => import("./pages/docs/TokenEconomics"));
const TokenUtility = lazy(() => import("./pages/docs/TokenUtility"));
const TokenWhereToBuy = lazy(() => import("./pages/docs/TokenWhereToBuy"));
const TokenGovernance = lazy(() => import("./pages/docs/TokenGovernance"));
const TokenSecurity = lazy(() => import("./pages/docs/TokenSecurity"));
const Terms = lazy(() => import("./pages/docs/Terms"));
const TermsOfService = lazy(() => import("./pages/docs/TermsOfService"));
const Contact = lazy(() => import("./pages/docs/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/docs/PrivacyPolicy"));
const TokenStake = lazy(() => import("./pages/docs/TokenStake"));
const TokenBridge = lazy(() => import("./pages/docs/TokenBridge"));
const Roadmap = lazy(() => import("./pages/docs/Roadmap"));
const Blog = lazy(() => import("./pages/docs/Blog"));
const BlogPost = lazy(() => import("./pages/docs/BlogPost"));
const FAQ = lazy(() => import("./pages/docs/FAQ"));
const Donate = lazy(() => import("./pages/docs/Donate"));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
      <p className="text-gray-700 text-sm">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <DocsChatBot />
        <BrowserRouter>
          <SearchProvider>
            <Routes>
              <Route path="*" element={<Index />} />
            </Routes>
          </SearchProvider>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
    </LanguageProvider>
  </ThemeProvider>
  </QueryClientProvider>
);

export default App;
