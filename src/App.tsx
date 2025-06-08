
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComingSoonPage from "./components/ComingSoonPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DocsHome from "./pages/docs/DocsHome";
import Overview from "./pages/docs/Overview";
import QuickStart from "./pages/docs/QuickStart";
import Installation from "./pages/docs/Installation";
import ApiEndpoints from "./pages/docs/ApiEndpoints";
import Dapp from "./pages/docs/Dapp";
import DePIN from "./pages/docs/DePIN";
import AIToolkits from "./pages/docs/AIToolkits";
import Games from "./pages/docs/Games";
import TokenEconomics from "./pages/docs/TokenEconomics";
import TokenUtility from "./pages/docs/TokenUtility";
import TokenGovernance from "./pages/docs/TokenGovernance";
import TokenSecurity from "./pages/docs/TokenSecurity";
import TokenStake from "./pages/docs/TokenStake";
import TokenWhereToBuy from "./pages/docs/TokenWhereToBuy";
import Team from "./pages/docs/Team";
import Roadmap from "./pages/docs/Roadmap";
import Contact from "./pages/docs/Contact";
import BrandGuidelines from "./pages/docs/BrandGuidelines";
import BrandAssets from "./pages/docs/BrandAssets";
import TermsOfService from "./pages/docs/TermsOfService";
import PrivacyPolicy from "./pages/docs/PrivacyPolicy";
import Terms from "./pages/docs/Terms";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/docs" element={<DocsHome />} />
            <Route path="/docs/overview" element={<Overview />} />
            <Route path="/docs/quickstart" element={<QuickStart />} />
            <Route path="/docs/installation" element={<Installation />} />
            <Route path="/docs/api-endpoints" element={<ApiEndpoints />} />
            <Route path="/docs/dapps" element={<Dapp />} />
            <Route path="/docs/depin" element={<DePIN />} />
            <Route path="/docs/ai-toolkits" element={<AIToolkits />} />
            <Route path="/docs/games" element={<Games />} />
            <Route path="/docs/token-economics" element={<TokenEconomics />} />
            <Route path="/docs/token-utility" element={<TokenUtility />} />
            <Route path="/docs/token-governance" element={<TokenGovernance />} />
            <Route path="/docs/token-security" element={<TokenSecurity />} />
            <Route path="/docs/token-stake" element={<TokenStake />} />
            <Route path="/docs/token-where-to-buy" element={<TokenWhereToBuy />} />
            <Route path="/docs/team" element={<Team />} />
            <Route path="/docs/roadmap" element={<Roadmap />} />
            <Route path="/docs/contact" element={<Contact />} />
            <Route path="/docs/brand-guidelines" element={<BrandGuidelines />} />
            <Route path="/docs/brand-assets" element={<BrandAssets />} />
            <Route path="/docs/terms-of-service" element={<TermsOfService />} />
            <Route path="/docs/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/docs/terms" element={<Terms />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
