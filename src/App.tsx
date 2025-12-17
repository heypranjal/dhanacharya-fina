import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import WhatWeDo from "./pages/WhatWeDo";
import EquityFundRaising from "./pages/EquityFundRaising";
import OurTeam from "./pages/OurTeam";
import Ethics from "./pages/Ethics";
import Careers from "./pages/Careers";
import MutualFunds from "./pages/MutualFunds";
import Calculator from "./pages/Calculator";
import StartYourBusiness from "./pages/StartYourBusiness";
import AuditingAssurance from "./pages/AuditingAssurance";
import TaxationAdvisory from "./pages/TaxationAdvisory";
import RegulatoryCompliance from "./pages/RegulatoryCompliance";
import RegistrationLicenses from "./pages/RegistrationLicenses";
import IntellectualProperty from "./pages/IntellectualProperty";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

// SEO Pages - Pre-IPO & Unlisted Shares
import PreIPOUnlistedSharesInvestment from "./pages/seo/PreIPOUnlistedSharesInvestment";
import HowToBuyPreIPOShares from "./pages/seo/HowToBuyPreIPOShares";
import SellUnlistedShares from "./pages/seo/SellUnlistedShares";
import UnlistedSharePriceValuation from "./pages/seo/UnlistedSharePriceValuation";
import PreIPOvsIPOPrice from "./pages/seo/PreIPOvsIPOPrice";
import PreIPOInvestmentAdvisory from "./pages/seo/PreIPOInvestmentAdvisory";
import UnlistedShareBrokers from "./pages/seo/UnlistedShareBrokers";
import BestPreIPOOpportunities from "./pages/seo/BestPreIPOOpportunities";
import InvestInUnicornStartups from "./pages/seo/InvestInUnicornStartups";
import DhanacharyaPreIPOSpecialists from "./pages/seo/DhanacharyaPreIPOSpecialists";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mediacoverage" element={<Media />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/equityfundraising" element={<EquityFundRaising />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/mutualfunds" element={<MutualFunds />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/start-your-business" element={<StartYourBusiness />} />
            <Route path="/auditing-assurance" element={<AuditingAssurance />} />
            <Route path="/taxation-advisory" element={<TaxationAdvisory />} />
            <Route path="/regulatory-compliance" element={<RegulatoryCompliance />} />
            <Route path="/registration-licenses" element={<RegistrationLicenses />} />
            <Route path="/intellectual-property" element={<IntellectualProperty />} />

            {/* SEO Pages - Pre-IPO & Unlisted Shares Pillar-Cluster */}
            <Route path="/pre-ipo-unlisted-shares-investment-india" element={<PreIPOUnlistedSharesInvestment />} />
            <Route path="/how-to-buy-pre-ipo-shares-india" element={<HowToBuyPreIPOShares />} />
            <Route path="/sell-unlisted-shares-india" element={<SellUnlistedShares />} />
            <Route path="/unlisted-share-price-pre-ipo-valuation" element={<UnlistedSharePriceValuation />} />
            <Route path="/pre-ipo-price-vs-ipo-price" element={<PreIPOvsIPOPrice />} />
            <Route path="/pre-ipo-investment-advisory-india" element={<PreIPOInvestmentAdvisory />} />
            <Route path="/unlisted-share-brokers-india" element={<UnlistedShareBrokers />} />
            <Route path="/best-pre-ipo-opportunities-india" element={<BestPreIPOOpportunities />} />
            <Route path="/invest-in-unicorn-startups-pre-ipo" element={<InvestInUnicornStartups />} />
            <Route path="/dhanacharya-advisors-pre-ipo-specialists" element={<DhanacharyaPreIPOSpecialists />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
