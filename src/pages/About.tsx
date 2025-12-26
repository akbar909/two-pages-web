import { Code2, Database, Brain, Server, Palette, Shield, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-zinc-950 text-white">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-zinc-950 to-emerald-950/20" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                About Vertex Studio
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Building reliable software,
                <span className="block text-emerald-400">one partnership at a time</span>
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                We started Vertex Studio with a simple belief: great software comes from deep collaboration, technical excellence, and genuine commitment to our clients' success.
              </p>
              <p className="text-xl text-zinc-400 leading-relaxed">
                We're not a factory churning out templates. We're a studio that takes ownership of every project, treats your goals as our own, and builds solutions designed to last and evolve with your business.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-12 border border-zinc-800">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Shield size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Responsibility First</h3>
                      <p className="text-zinc-400">
                        We take full accountability for outcomes, timelines, and quality. Your trust is earned through consistent delivery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Code2 size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
                      <p className="text-zinc-400">
                        Modern architecture, clean code, and best practices aren't optional—they're the foundation of everything we build.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Brain size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Strategic Partnership</h3>
                      <p className="text-zinc-400">
                        We think beyond the immediate scope, helping you make decisions that compound value over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-emerald-400">Services</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Comprehensive solutions that cover every aspect of modern software development and intelligent systems.
            </p>
          </div>

          <div className="space-y-8">
            <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-10 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <Code2 size={32} className="text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">Frontend & Backend Development</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                    Full-stack expertise in modern JavaScript ecosystems. We build responsive, performant web applications using React for dynamic user interfaces and Node.js for robust server-side logic.
                  </p>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    From real-time collaboration tools to complex e-commerce platforms, we architect systems that handle scale gracefully while maintaining clean, maintainable codebases. RESTful APIs, GraphQL, microservices—we choose the right tools for your specific needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-10 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <Database size={32} className="text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">Data Analysis & Visualization</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                    Transform your data into strategic assets. We design and build custom analytics platforms that pull insights from multiple sources, apply sophisticated analysis, and present findings through intuitive dashboards.
                  </p>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Whether you need real-time business intelligence, customer behavior analysis, or operational metrics, we create visualization systems that empower teams to make data-driven decisions quickly and confidently. SQL, MongoDB, ETL pipelines, and beautiful D3.js visualizations—all optimized for performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-10 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                  <Brain size={32} className="text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">Machine Learning & Intelligent Systems</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                    Harness the power of AI to automate processes, predict outcomes, and unlock new capabilities. We build practical ML solutions using Python, TensorFlow, and PyTorch—from recommendation engines to predictive analytics and natural language processing.
                  </p>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Our approach focuses on delivering tangible ROI: automating repetitive tasks, enhancing customer experiences with personalization, and surfacing insights that would be impossible to find manually. We handle everything from model training and deployment to monitoring and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMzIzMjMiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0wIDMwaC0yVjMwaDJ2MzB6TTAgMzZ2LTJoMzB2Mkgwem0zMCAwdjJoMzB2LTJIMzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-emerald-400">Tech Stack</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Modern, battle-tested technologies chosen for reliability, performance, and developer experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'React', icon: Code2, color: 'cyan' },
              { name: 'Node.js', icon: Server, color: 'emerald' },
              { name: 'TypeScript', icon: Code2, color: 'cyan' },
              { name: 'MongoDB', icon: Database, color: 'emerald' },
              { name: 'PostgreSQL', icon: Database, color: 'cyan' },
              { name: 'Python', icon: Brain, color: 'emerald' },
              { name: 'TensorFlow', icon: Brain, color: 'cyan' },
              { name: 'Tailwind CSS', icon: Palette, color: 'emerald' },
            ].map((tech) => {
              const Icon = tech.icon;
              const colorClass =
                tech.color === 'cyan'
                  ? 'border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10'
                  : 'border-emerald-500/50 bg-emerald-500/5 hover:bg-emerald-500/10';
              const iconColor = tech.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400';

              return (
                <div
                  key={tech.name}
                  className={`group rounded-xl p-6 border ${colorClass} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <Icon size={32} className={`${iconColor} mb-3 mx-auto`} />
                  <p className="text-center font-semibold text-white">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-emerald-950/30 via-zinc-950 to-cyan-950/30 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-zinc-800/50 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Valuable Together
              </span>
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're launching a new product, scaling an existing platform, or exploring AI capabilities, we're here to help turn your vision into reality.
            </p>
            <button className="group px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-1 text-lg flex items-center gap-3 mx-auto">
              Get Started Today
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-zinc-500 mt-6">
              Typical response time: Less than 24 hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
