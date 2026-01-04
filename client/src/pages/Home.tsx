import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { ArrowDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToContent = () => {
    const element = document.getElementById("work");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise selection:bg-white/20">
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center">
        <div className="text-sm font-display font-bold tracking-widest uppercase">
          Will Mercer
        </div>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#work" className="hover:text-white/60 transition-colors">Work</a>
          <a href="#about" className="hover:text-white/60 transition-colors">About</a>
          <a href="#contact" className="hover:text-white/60 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="px-6 md:px-12 max-w-7xl mx-auto">
        <section className="min-h-screen flex flex-col justify-center pt-20 relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light leading-[1.1] mb-8">
              Will is an early-stage venture strategist who partners with <span className="text-white/50">elite founders</span> to build companies with global scale and impact.
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-12">
              In the past 24 months startups he’s worked with have raised over $30m in funding, and have scaled their revenue to &gt;$10m.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-white/10">
              {[
                { label: "Web3", desc: "Digital Networks" },
                { label: "Place", desc: "Physical Spaces" },
                { label: "Creative", desc: "Collaborative Practices" },
                { label: "Social Impact", desc: "Equitable Society" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-white font-display mb-1">{item.label}</div>
                  <div className="text-sm text-white/40">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            onClick={scrollToContent}
            className="absolute bottom-12 left-0 animate-bounce cursor-pointer p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-white/50" />
          </motion.button>
        </section>

        {/* Current Projects */}
        <div id="work">
          <Section className="border-t border-white/10">
            <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-12">Current Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ProjectCard 
                title="WorldBuild"
                location="Global"
                description="An accelerator program for World’s 33m users."
                stats={[
                  "30 teams supported",
                  "$15m funding raised",
                  "600k daily active users"
                ]}
              />
              <ProjectCard 
                title="Driven"
                location="Los Angeles, USA"
                description="A social streaming platform for the 67m car fans worldwide. Public launch Q2 2026."
                stats={[
                  "App in beta",
                  "$1m funding closed",
                  "100 hours launch content"
                ]}
              />
              <ProjectCard 
                title="TrimTabs"
                location="Swansea, UK"
                description="Carbon Nanotubes super material driving exponential advances in computing and energy, from waste plastic."
                stats={[
                  "$15m raised",
                  "Partial acquisition",
                  "Pipeline >$10m"
                ]}
              />
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-white/5 rounded-lg bg-white/5">
                <h3 className="text-lg font-display mb-2">Hermanas</h3>
                <p className="text-white/60 text-sm">Pro Bono • Global</p>
              </div>
              <div className="p-6 border border-white/5 rounded-lg bg-white/5">
                <h3 className="text-lg font-display mb-2">Mamma Wellbeing</h3>
                <p className="text-white/60 text-sm">Pro Bono • London</p>
              </div>
            </div>
          </Section>
        </div>

        {/* Past Projects */}
        <Section className="border-t border-white/10">
          <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-12">Past Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Heph Technologies"
              year="2024"
              location="Global"
              description="Co-founded a commercial AI data labelling and model-training platform spun out of Human Protocol."
              stats={["$3m LOI pipeline", "7 pilots"]}
            />
            <ProjectCard 
              title="Human Protocol"
              year="2021–2024"
              role="Head of Strategy"
              location="Global, Cayman Islands"
              description="Web3 protocol for the tokenisation of work and decentralised task coordination."
              stats={["2.7bn tasks", "174k+ workers", "26m on-chain tx"]}
            />
            <ProjectCard 
              title="EO Incubator"
              year="2019–2024"
              role="Chief Mentor"
              location="Kyiv, Ukraine"
              description="Ukraine’s leading startup incubator."
              stats={["120+ startups advised", "$200m portfolio value"]}
            />
            <ProjectCard 
              title="Noma Collective"
              year="2021–2022"
              role="Founder"
              location="Belize → Global"
              description="Founded a digital nomad and co-living platform starting from a beachfront co-living space."
              stats={["World's largest nomad travel co", "30+ cities"]}
            />
            <ProjectCard 
              title="Zag"
              year="2018–2021"
              role="Venture Director"
              location="London"
              description="Venture Director at the early-stage investment arm of global creative agency BBH."
              stats={["$3m deployed", "8× value growth", "200+ founders"]}
            />
            <ProjectCard 
              title="Mission Led"
              year="2017–Present"
              role="Founder"
              location="Global"
              description="Startup ecosystem consultancy advising governments, investors, and venture builders."
              stats={["$50m USAID strategy", "20+ countries"]}
            />
          </div>
          
          <div className="mt-8 pt-8 border-t border-dashed border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-white/60">
            <div>
              <strong className="block text-white mb-1">Château de la Salle</strong>
              <span className="block text-xs mb-2">2017–2019 • Burgundy, France</span>
              Founded a residential work and event space. Hosted 170+ guests.
            </div>
            <div>
              <strong className="block text-white mb-1">The Trampery</strong>
              <span className="block text-xs mb-2">2015–2017 • London</span>
              Head of Strategy. Scaled to 5 workspaces, £2.3m EU funding.
            </div>
            <div>
              <strong className="block text-white mb-1">IAAM Adoption</strong>
              <span className="block text-xs mb-2">2014–2015 • UK</span>
              Social Impact Bond. Pioneering social finance model.
            </div>
            <div>
              <strong className="block text-white mb-1">Lloyds Banking Group</strong>
              <span className="block text-xs mb-2">2009–2013 • UK</span>
              Business turnarounds. £1.5bn+ debt restructuring.
            </div>
            <div>
              <strong className="block text-white mb-1">Independent Events</strong>
              <span className="block text-xs mb-2">2009–2020 • Europe</span>
              Curated music & cultural events.
            </div>
            <div>
              <strong className="block text-white mb-1">Bar Iguana</strong>
              <span className="block text-xs mb-2">2016–2018 • Reading, UK</span>
              Co-founded neighbourhood cultural venue.
            </div>
          </div>
        </Section>

        {/* Bio Section */}
        <div id="about">
          <Section className="border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest sticky top-32">Biography</h2>
            </div>
            <div className="md:col-span-8 text-lg text-white/80 space-y-8 leading-relaxed font-light">
              <p>
                Will is a venture strategist, serial founder, investor, and adviser to early-stage businesses. He partners with elite founders to build companies with global scale and impact, specialising in the intersection of commercial strategy, narrative-driven storytelling, and ecosystem design.
              </p>
              <p>
                Currently, Will is director at WorldBuild Labs, a venture studio that assembles top developer and founder talent to rapidly ideate, prototype, and launch breakthrough applications for the World ecosystem.
              </p>
              <p>
                Prior to this, Will founded Noma Collective, the world’s largest global digital nomad travel company, growing it from a 60-room co-living space in Belize to a global platform. As Venture Director at Zag, he deployed early-stage capital into 9 companies and helped shape narratives that led to 8× portfolio value growth.
              </p>
              <p>
                Will began his career at Lloyds Bank during the global financial crisis, working on complex business turnarounds. He holds a Master’s degree in Physics from the University of Reading and is a guest lecturer on the Creative MBA at ESCP Europe.
              </p>
            </div>
          </Section>
        </div>

        {/* Footer / Contact */}
        <footer id="contact" className="py-24 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">Let's connect.</h2>
              <div className="flex gap-6">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Will Mercer. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
