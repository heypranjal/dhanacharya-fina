import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
