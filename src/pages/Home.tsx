import { Code2, BarChart3, Brain, ArrowRight, Sparkles, Target, Rocket, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-zinc-950 to-cyan-950/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 animate-pulse">
            <Sparkles size={16} />
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Building scalable software
            <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              that drives results
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Full-stack development, data analytics, and AI solutions designed to transform your business operations and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 flex items-center gap-2">
              Start a Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We <span className="text-emerald-400">Build</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              End-to-end solutions that combine technical excellence with strategic thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <Code2 size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Full Stack Web Development</h3>
              <p className="text-zinc-400 leading-relaxed">
                Modern, responsive web applications built with React, Node.js, and cloud infrastructure. We create seamless experiences that scale with your business.
              </p>
            </div>

            <div className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <BarChart3 size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Data Analytics & Dashboards</h3>
              <p className="text-zinc-400 leading-relaxed">
                Transform raw data into actionable insights with custom analytics platforms and real-time dashboards that empower better decision-making.
              </p>
            </div>

            <div className="group relative bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <Brain size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI & Machine Learning Solutions</h3>
              <p className="text-zinc-400 leading-relaxed">
                Intelligent systems that automate processes, predict outcomes, and unlock new capabilities through machine learning and AI integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMzIzMjMiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0wIDMwaC0yVjMwaDJ2MzB6TTAgMzZ2LTJoMzB2Mkgwem0zMCAwdjJoMzB2LTJIMzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Partner With <span className="text-emerald-400">Vertex</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Target size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Built for the Long Term</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    We don't just deliver projects—we build lasting partnerships. Our solutions are architected for maintainability, scalability, and future growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Rocket size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ownership & Accountability</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    From discovery to deployment and beyond, we take full ownership of outcomes. Your success is our success, and we're invested in delivering measurable results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <TrendingUp size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Quality That Compounds</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Every line of code, every design decision, every integration is crafted with precision. We believe in doing things right the first time, building foundations that enable rapid iteration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-emerald-400">Process</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A proven methodology that delivers consistent results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl font-bold text-emerald-500/10">01</div>
              <div className="relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-emerald-400">Discover</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Deep dive into your business goals, technical requirements, and success metrics to align on vision.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl font-bold text-cyan-500/10">02</div>
              <div className="relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">Design</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Architect scalable solutions and create intuitive interfaces that users love and systems support.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl font-bold text-emerald-500/10">03</div>
              <div className="relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-emerald-400">Build</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Agile development with continuous feedback, rigorous testing, and transparent communication.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl font-bold text-cyan-500/10">04</div>
              <div className="relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">Scale</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Launch, monitor, optimize, and evolve. We support growth with ongoing improvements and expansions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-emerald-950/30 via-zinc-950 to-cyan-950/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to build something exceptional?
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Let's discuss how we can help accelerate your business with powerful software solutions.
          </p>
          <button className="group px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 text-lg flex items-center gap-3 mx-auto">
            Start the Conversation
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
