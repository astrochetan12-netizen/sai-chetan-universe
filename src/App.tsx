import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import './animations.css';
import FloatingClouds from './components/FloatingClouds';
import Home from './components/Home';
import WidgetBoard from './components/WidgetBoard';
import Socials from './components/Socials';

import Anime from './pages/Anime';
import Manhwa from './pages/Manhwa';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Music from './pages/Music';
import Career from './pages/Career';
import Photography from './pages/Photography';
import WIP from './pages/WIP';

const Hub = () => (
  <div className="min-h-screen w-full relative bg-[#0b0c10] text-white overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay z-0" />
    <FloatingClouds />
    <div className="relative z-10 max-w-[1400px] mx-auto min-h-screen flex flex-col lg:flex-row items-start justify-center gap-12 p-4 lg:p-12 pt-20">
      <div className="w-full lg:w-[460px] shrink-0">
        <Home />
      </div>
      <div className="w-full lg:flex-1 max-w-2xl flex flex-col gap-8 mt-8 lg:mt-0">
        <WidgetBoard />
        <Socials />
      </div>
    </div>
  </div>
);

// Wrap routes in AnimatePresence for page transitions
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hub />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/manhwas" element={<Manhwa />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/music" element={<Music />} />
        <Route path="/writing" element={<WIP section="writing" />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/gym" element={<WIP section="gym" />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
