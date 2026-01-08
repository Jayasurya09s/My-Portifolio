import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Skills from "./pages/Skills";
import Glider from "./pages/Glider";
import EcoAI from "./pages/EcoAI";
import UniTech from "./pages/UniTech";
import StudyAI from "./pages/StudyAI";
import Roomigo from "./pages/Roomigo";
import Raahi from "./pages/Raahi";
import CropMentor from "./pages/CropMentor";
import CpuScheduler from "./pages/CpuScheduler";
import NeroBot from "./pages/NeroBot";
import NotFound from "./pages/NotFound";
import PCFR from "./pages/PCFR";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects/glider" element={<Glider />} />
          <Route path="/projects/ecoai" element={<EcoAI />} />
          <Route path="/projects/unitech" element={<UniTech />} />
          <Route path="/projects/studyai" element={<StudyAI />} />
          <Route path="/projects/roomigo" element={<Roomigo />} />
          <Route path="/projects/raahi" element={<Raahi />} />
          <Route path="/projects/cropmentor" element={<CropMentor />} />
          <Route path="/projects/cpu-scheduler" element={<CpuScheduler />} />
          <Route path="/projects/nerobot" element={<NeroBot />} />
          <Route path="/projects/pcfr" element={<PCFR />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
