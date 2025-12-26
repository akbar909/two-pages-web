import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent hover:from-emerald-300 hover:to-cyan-300 transition-all duration-300"
          >
            Vertex Studio
          </button>

          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors duration-300 ${
                currentPage === 'home'
                  ? 'text-emerald-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-sm font-medium transition-colors duration-300 ${
                currentPage === 'about'
                  ? 'text-emerald-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              About & Services
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5"
            >
              Start a Project
            </button>
          </div>

          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-zinc-800/50">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-base font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-emerald-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left text-base font-medium transition-colors ${
                currentPage === 'about'
                  ? 'text-emerald-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              About & Services
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-lg transition-all duration-300"
            >
              Start a Project
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
