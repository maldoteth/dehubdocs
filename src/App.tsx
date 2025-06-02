import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DocsLayout } from "./components/DocsLayout";
import DocsHome from "./pages/docs/DocsHome";
import Overview from "./pages/docs/Overview";
import DePIN from "./pages/docs/DePIN";
import QuickStart from "./pages/docs/QuickStart";
import Installation from "./pages/docs/Installation";
import ApiEndpoints from "./pages/docs/ApiEndpoints";
import Team from "./pages/docs/Team";
import BrandGuidelines from "./pages/docs/BrandGuidelines";
import BrandAssets from "./pages/docs/BrandAssets";
import Dapp from "./pages/docs/Dapp";
import Games from "./pages/docs/Games";
import TokenEconomics from "./pages/docs/TokenEconomics";
import TokenUtility from "./pages/docs/TokenUtility";
import TokenWhereToBuy from "./pages/docs/TokenWhereToBuy";
import TokenGovernance from "./pages/docs/TokenGovernance";
import TokenSecurity from "./pages/docs/TokenSecurity";
import Terms from "./pages/docs/Terms";
import Contact from "./pages/docs/Contact";
import ComingSoonPage from "./components/ComingSoonPage";
import PrivacyPolicy from "./pages/docs/PrivacyPolicy";

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
            <Route path="overview" element={<Overview />} />
            <Route path="dapps" element={<Dapp />} />
            <Route path="games" element={<Games />} />
            <Route path="token" element={<ComingSoonPage title="Token Documentation" description="Comprehensive information about DeHub tokens and tokenomics." />} />
            <Route path="token/economics" element={<TokenEconomics />} />
            <Route path="token/utility" element={<TokenUtility />} />
            <Route path="token/where-to-buy" element={<TokenWhereToBuy />} />
            <Route path="token/governance" element={<TokenGovernance />} />
            <Route path="depin" element={<DePIN />} />
            <Route path="team" element={<Team />} />
            <Route path="security" element={<TokenSecurity />} />
            <Route path="roadmap" element={
              <ComingSoonPage 
                title="Roadmap" 
                description="Our new roadmap is in the works. The original core development roadmap with all the features set out to build in 2021 was completed. So check back soon for updates!" 
                additionalNote={
                  <p className="text-royal-blue/60 font-exo text-sm">
                    Find our old roadmap here: <a href="https://dehub.gitbook.io" target="_blank" rel="noopener noreferrer" className="text-middle-blue hover:text-royal-blue underline">dehub.gitbook.io</a>
                  </p>
                }
              />
            } />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="website" element={<ComingSoonPage title="Website Documentation" description="Learn about our website features and capabilities." />} />
            <Route path="app" element={<ComingSoonPage title="App Documentation" description="Mobile and desktop application guides and features." />} />
            <Route path="dehub" element={<ComingSoonPage title="DeHub Platform" description="Complete guide to using the DeHub decentralized platform." />} />
            <Route path="x" element={<ComingSoonPage title="X Integration" description="Social media integration and X platform features." />} />
            <Route path="instagram" element={<ComingSoonPage title="Instagram Integration" description="Instagram connectivity and social features." />} />
            <Route path="brand-assets" element={<BrandAssets />} />
            <Route path="brand-guidelines" element={<BrandGuidelines />} />
            <Route path="quickstart" element={<QuickStart />} />
            <Route path="installation" element={<Installation />} />
            <Route path="architecture" element={<ComingSoonPage title="Architecture" description="System architecture and technical infrastructure details." />} />
            <Route path="configuration" element={<ComingSoonPage title="Configuration" description="Setup and configuration guides for developers." />} />
            <Route path="data-models" element={<ComingSoonPage title="Data Models" description="Database schemas and data structure documentation." />} />
            <Route path="auth" element={<ComingSoonPage title="Authentication" description="Security protocols and authentication methods." />} />
            <Route path="endpoints" element={<ApiEndpoints />} />
            <Route path="webhooks" element={<ComingSoonPage title="Webhooks" description="Real-time notifications and webhook integration guides." />} />
            <Route path="best-practices" element={<ComingSoonPage title="Best Practices" description="Recommended approaches and coding standards." />} />
            <Route path="troubleshooting" element={<ComingSoonPage title="Troubleshooting" description="Common issues and solutions for developers." />} />
            <Route path="examples" element={<ComingSoonPage title="Examples" description="Code examples and implementation samples." />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
