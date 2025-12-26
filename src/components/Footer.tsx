import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              Vertex Studio
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Building scalable software solutions that drive real business value.
            </p>
          </div>

          <div className="text-center">
            <p className="text-zinc-400 text-sm mb-2">Get in touch</p>
            <a
              href="mailto:hello@example.dev"
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              hello@example.dev
            </a>
          </div>

          <div className="flex gap-5 md:justify-end">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center text-zinc-600 text-sm">
          © {new Date().getFullYear()} Vertex Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
