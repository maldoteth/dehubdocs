import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { SearchProvider } from "@/components/search/SearchProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DocsLayout } from "./components/DocsLayout";
import ComingSoonPage from "./components/ComingSoonPage";

// Lazy load all documentation pages
const DocsHome = lazy(() => import("./pages/docs/DocsHome"));
const Overview = lazy(() => import("./pages/docs/Overview"));
const DePIN = lazy(() => import("./pages/docs/DePIN"));
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

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-8 h-8 border-4 border-sky-blue/20 border-t-middle-blue rounded-full animate-spin"></div>
      <p className="text-royal-blue/70 text-sm">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SearchProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/docs" replace />} />
              <Route path="/docs" element={<DocsLayout />}>
                <Route index element={
                  <Suspense fallback={<PageLoader />}>
                    <DocsHome />
                  </Suspense>
                } />
                <Route path="overview" element={
                  <Suspense fallback={<PageLoader />}>
                    <Overview />
                  </Suspense>
                } />
                <Route path="dapps" element={
                  <Suspense fallback={<PageLoader />}>
                    <Dapp />
                  </Suspense>
                } />
                <Route path="games" element={
                  <Suspense fallback={<PageLoader />}>
                    <Games />
                  </Suspense>
                } />
                <Route path="token" element={<ComingSoonPage title="Token Documentation" description="Comprehensive information about DeHub tokens and tokenomics." />} />
                <Route path="token/economics" element={
                  <Suspense fallback={<PageLoader />}>
                    <TokenEconomics />
                  </Suspense>
                } />
                <Route path="token/utility" element={
                  <Suspense fallback={<PageLoader />}>
                    <TokenUtility />
                  </Suspense>
                } />
                <Route path="token/where-to-buy" element={
                  <Suspense fallback={<PageLoader />}>
                    <TokenWhereToBuy />
                  </Suspense>
                } />
                <Route path="token/governance" element={
                  <Suspense fallback={<PageLoader />}>
                    <TokenGovernance />
                  </Suspense>
                } />
                <Route path="token/stake" element={
                  <Suspense fallback={<PageLoader />}>
                    <TokenStake />
                  </Suspense>
                } />
                <Route path="token/bridge" element={
                  <Suspense fallback={<PageLoader />}>
                    <TokenBridge />
                  </Suspense>
                } />
                <Route path="depin" element={
                  <Suspense fallback={<PageLoader />}>
                    <DePIN />
                  </Suspense>
                } />
                <Route path="ai-toolkits" element={
                  <Suspense fallback={<PageLoader />}>
                    <AIToolkits />
                  </Suspense>
                } />
                <Route path="advertising" element={
                  <Suspense fallback={<PageLoader />}>
                    <Advertising />
                  </Suspense>
                } />
                <Route path="team" element={
                  <Suspense fallback={<PageLoader />}>
                    <Team />
                  </Suspense>
                } />
                <Route path="security" element={
                  <Suspense fallback={<PageLoader />}>
                    <TokenSecurity />
                  </Suspense>
                } />
                <Route path="roadmap" element={
                  <Suspense fallback={<PageLoader />}>
                    <Roadmap />
                  </Suspense>
                } />
                <Route path="contact" element={
                  <Suspense fallback={<PageLoader />}>
                    <Contact />
                  </Suspense>
                } />
                <Route path="terms" element={
                  <Suspense fallback={<PageLoader />}>
                    <Terms />
                  </Suspense>
                } />
                <Route path="terms-of-service" element={
                  <Suspense fallback={<PageLoader />}>
                    <TermsOfService />
                  </Suspense>
                } />
                <Route path="privacy" element={
                  <Suspense fallback={<PageLoader />}>
                    <PrivacyPolicy />
                  </Suspense>
                } />
                <Route path="website" element={<ComingSoonPage title="Website Documentation" description="Learn about our website features and capabilities." />} />
                <Route path="app" element={<ComingSoonPage title="App Documentation" description="Mobile and desktop application guides and features." />} />
                <Route path="dehub" element={<ComingSoonPage title="DeHub Platform" description="Complete guide to using the DeHub decentralized platform." />} />
                <Route path="x" element={<ComingSoonPage title="X Integration" description="Social media integration and X platform features." />} />
                <Route path="instagram" element={<ComingSoonPage title="Instagram Integration" description="Instagram connectivity and social features." />} />
                <Route path="brand-assets" element={
                  <Suspense fallback={<PageLoader />}>
                    <BrandAssets />
                  </Suspense>
                } />
                <Route path="brand-guidelines" element={
                  <Suspense fallback={<PageLoader />}>
                    <BrandGuidelines />
                  </Suspense>
                } />
                <Route path="quickstart" element={
                  <Suspense fallback={<PageLoader />}>
                    <QuickStart />
                  </Suspense>
                } />
                <Route path="installation" element={
                  <Suspense fallback={<PageLoader />}>
                    <Installation />
                  </Suspense>
                } />
                <Route path="architecture" element={<ComingSoonPage title="Architecture" description="System architecture and technical infrastructure details." />} />
                <Route path="configuration" element={<ComingSoonPage title="Configuration" description="Setup and configuration guides for developers." />} />
                <Route path="data-models" element={<ComingSoonPage title="Data Models" description="Database schemas and data structure documentation." />} />
                <Route path="auth" element={<ComingSoonPage title="Authentication" description="Security protocols and authentication methods." />} />
                <Route path="endpoints" element={
                  <Suspense fallback={<PageLoader />}>
                    <ApiEndpoints />
                  </Suspense>
                } />
                <Route path="webhooks" element={<ComingSoonPage title="Webhooks" description="Real-time notifications and webhook integration guides." />} />
                <Route path="best-practices" element={<ComingSoonPage title="Best Practices" description="Recommended approaches and coding standards." />} />
                <Route path="troubleshooting" element={<ComingSoonPage title="Troubleshooting" description="Common issues and solutions for developers." />} />
                <Route path="examples" element={<ComingSoonPage title="Examples" description="Code examples and implementation samples." />} />
                <Route path="blog" element={
                  <Suspense fallback={<PageLoader />}>
                    <Blog />
                  </Suspense>
                } />
                <Route path="blog/:slug" element={
                  <Suspense fallback={<PageLoader />}>
                    <BlogPost />
                  </Suspense>
                } />
                <Route path="/docs/faq" element={<FAQ />} />
              </Route>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SearchProvider>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
