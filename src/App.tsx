import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WidgetBoard from './components/WidgetBoard';

// Placeholders for pages
import Layout from './components/Layout';
const Placeholder = ({ title }: { title: string }) => (
  <Layout title={title}>
    <div className="h-64 flex flex-col items-center justify-center border border-white/10 rounded-2xl bg-white/5">
      <h2 className="text-2xl font-bold text-white/50">Work in Progress</h2>
      <p className="mt-2 text-white/30">Just wait, I'm cooking...</p>
    </div>
  </Layout>
);

const Hub = () => (
  <div className="min-h-screen w-full relative bg-darkBase">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>
    <div className="flex flex-col min-h-screen relative z-10">
      <Home />
      <WidgetBoard />
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/anime" element={<Placeholder title="Anime Picks" />} />
        <Route path="/manhwas" element={<Placeholder title="Manhwas & Manga" />} />
        <Route path="/movies" element={<Placeholder title="Movies" />} />
        <Route path="/shows" element={<Placeholder title="Shows" />} />
        <Route path="/music" element={<Placeholder title="Music Vibes" />} />
        <Route path="/writing" element={<Placeholder title="Writing" />} />
        <Route path="/photography" element={<Placeholder title="Photography" />} />
        <Route path="/gym" element={<Placeholder title="Gym" />} />
        <Route path="/career" element={<Placeholder title="Career & Projects" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
