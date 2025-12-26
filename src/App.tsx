import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'home' ? <Home /> : <About />}
      <Footer />
    </div>
  );
}

export default App;
