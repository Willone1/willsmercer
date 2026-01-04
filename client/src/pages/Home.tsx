import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { ExpandableSection } from "@/components/ui/expandable-section";
import { ArrowDown, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@assets/stock_images/portrait_of_professi_0f56662a.jpg";

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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light leading-[1.1] mb-8 text-balance">
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

        {/* Philosophy & Approach */}
        <Section className="border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest">Philosophy</h2>
            </div>
            <div className="md:col-span-8 space-y-12">
              <p className="text-2xl md:text-3xl font-display font-light leading-snug text-white/90">
                Will spends his time thinking about how we can make <span className="text-white">perfect physical and digital environments</span> that help people connect with their purpose and flourish.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h3 className="text-white font-display mb-3">Accelerator Programs</h3>
                  <p className="text-white/60 leading-relaxed">
                    When not working on a bilateral basis, Will runs accelerator programs and gatherings for top tier founders, fostering environments for radical growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-display mb-3">Strategic Thematics</h3>
                  <p className="text-white/60 leading-relaxed">
                    His work converges at the intersection of Web3, physical spaces, creative collaboration, and social impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Expandable Content Sections */}
        <div id="work">
          <ExpandableSection title="Current Projects" subtitle="Active Engagements & Ventures" defaultOpen={false}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ProjectCard 
                title="WorldBuild"
                location="Global"
                description="An accelerator program for World’s 33m users. 30 teams supported, $15m funding raised and 600k daily active users across the first two cohorts."
                stats={[
                  "30 teams supported",
                  "$15m funding raised",
                  "600k daily active users"
                ]}
              />
              <ProjectCard 
                title="Driven"
                location="Los Angeles, USA"
                description="Driven is a social streaming platform for the 67m car fans worldwide. Hired team, app in beta, $1m in funding closed, 100 hours of launch content acquired. Public launch Q2 2026"
                stats={[
                  "App in beta",
                  "$1m funding closed",
                  "100 hours launch content"
                ]}
              />
              <ProjectCard 
                title="TrimTabs"
                location="Swansea, UK"
                description="TrimTabs makes Carbon Nanotubes, a super material driving exponential advances in computing and energy, from waste plastic."
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
          </ExpandableSection>
        </div>

        <ExpandableSection title="Past Projects" subtitle="Archive of Previous Ventures & Consultancy" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Heph Technologies"
              year="2024"
              location="Global"
              description="Co-founded a commercial AI data labelling and model-training platform spun out of Human Protocol. Built a $3m LOI pipeline across 7 pilots and opened a funding round that was 50%+ committed within weeks."
              stats={["$3m LOI pipeline", "7 pilots"]}
            />
            <ProjectCard 
              title="Human Protocol"
              year="2021–2024"
              role="Head of Strategy"
              location="Global, Cayman Islands"
              description="Head of Strategy at a Web3 protocol for the tokenisation of work and decentralised task coordination. Supported a network distributing 2.7bn tasks to 174k+ workers with 26m on-chain transactions."
              stats={["2.7bn tasks", "174k+ workers", "26m on-chain tx"]}
            />
            <ProjectCard 
              title="EO Incubator"
              year="2019–2024"
              role="Chief Mentor"
              location="Kyiv, Ukraine"
              description="Chief Mentor and advisor for Ukraine’s leading startup incubator. Advised over 120 startups, created over $200m in portfolio value."
              stats={["120+ startups advised", "$200m portfolio value"]}
            />
            <ProjectCard 
              title="Noma Collective"
              year="2021–2022"
              role="Founder"
              location="Belize → Global"
              description="Founded a digital nomad and co-living platform starting from a beachfront co-living space in Belize. Scaled into the world’s largest global digital nomad travel company."
              stats={["World's largest nomad travel co", "30+ cities"]}
            />
            <ProjectCard 
              title="Zag"
              year="2018–2021"
              role="Venture Director"
              location="London"
              description="Venture Director at the early-stage investment arm of global creative agency BBH. Deployed ~$3m across 9 startups, analysed 400+ pitches, worked with 200+ founders."
              stats={["$3m deployed", "8× value growth", "200+ founders"]}
            />
            <ProjectCard 
              title="Mission Led"
              year="2017–Present"
              role="Founder"
              location="Global"
              description="Founded a startup ecosystem consultancy advising governments, investors, and venture builders on entrepreneurship and impact. Advised USAID on a $50m national entrepreneurship strategy."
              stats={["$50m USAID strategy", "20+ countries"]}
            />
          </div>
          
          <div className="mt-8 pt-8 border-t border-dashed border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-white/60">
            <div>
              <strong className="block text-white mb-1">Château de la Salle</strong>
              <span className="block text-xs mb-2">2017–2019 • Burgundy, France</span>
              Founded a residential work and event space on a historic château estate focused on creative collaboration and deep work. Hosted 170+ guests.
            </div>
            <div>
              <strong className="block text-white mb-1">The Trampery</strong>
              <span className="block text-xs mb-2">2015–2017 • London</span>
              Head of Strategy at a leading coworking and incubator platform. Scaled to 5 workspaces, grew occupancy from 60% to 95%, secured £2.3m in EU funding.
            </div>
            <div>
              <strong className="block text-white mb-1">IAAM Adoption</strong>
              <span className="block text-xs mb-2">2014–2015 • UK</span>
              Operated an adoption charity funded via a pioneering Social Impact Bond. Contributed to one of the UK’s early large-scale outcomes-based social finance models.
            </div>
            <div>
              <strong className="block text-white mb-1">Lloyds Banking Group</strong>
              <span className="block text-xs mb-2">2009–2013 • UK</span>
              Worked on complex business turnarounds and restructuring projects during the global financial crisis. Restructured corporates with £1.5bn+ debt exposure.
            </div>
            <div>
              <strong className="block text-white mb-1">Independent Events</strong>
              <span className="block text-xs mb-2">2009–2020 • UK & Europe</span>
              Curated and produced independent music, cultural, and community-led events bringing together artists, founders, and creative technologists.
            </div>
            <div>
              <strong className="block text-white mb-1">Bar Iguana</strong>
              <span className="block text-xs mb-2">2016–2018 • Reading, UK</span>
              Co-founded and operated a neighbourhood bar and cultural venue serving as a hub for music, art, and local community events.
            </div>
          </div>
        </ExpandableSection>

        <div id="about">
          <ExpandableSection title="Biography" subtitle="Background & Experience" defaultOpen={false}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-12 space-y-8">
                <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl bg-white/5 mb-12">
                  <img 
                    src={profileImg} 
                    alt="Will Mercer" 
                    className="object-cover w-full h-full opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                
                <div className="text-lg md:text-xl text-white/80 space-y-8 leading-relaxed font-light">
                  <p>
                    Will is a venture strategist, serial founder, investor, and adviser to early-stage businesses. He partners with elite founders to build companies with global scale and impact, specialising in the intersection of commercial strategy, narrative-driven storytelling, and ecosystem design. His work focuses on helping founders raise capital, land early customers, and build sustainable businesses that can scale from first traction to global relevance.
                  </p>
                  <p>
                    Will is director at WorldBuild Labs, a venture studio that assembles top developer and founder talent to rapidly ideate, prototype, and launch breakthrough applications for the World ecosystem. WorldBuild has already attracted applications from 300+ founders and those admitted to our program have collectively unlocked $11m in venture funding, and 600k+ daily active users across their apps in under six months.
                  </p>
                  <p>
                    Prior to this, Will founded Noma Collective, the world’s largest global digital nomad travel company. Noma started as a 60 room co-living space on a paradise beach in Belize, growing to 92% occupancy in under 2 months with 70% of new business coming from referrals and over 50% of guests extending their stay. From those beginnings, Noma Collective scaled into evolving into a fully distributed platform for location-independent founders and creatives, operating in 30+ cities worldwide.
                  </p>
                  <p>
                    From 2018-2020, Will was Venture Director at Zag, the VC fund of global creative agency BBH. He deployed early-stage capital into 9 companies, analysed 400+ startup pitches, and worked directly with 200+ founders from 15+ countries. The portfolio grew in value by 8× during his tenure with roughly 50% of companies raising follow-on funding using narratives and decks he helped shape.
                  </p>
                  <p>
                    In 2017, Will founded Mission Led, a startup ecosystem consultancy working with governments, investors, and venture builders to create entrepreneurial communities. Through Mission Led, he advised USAID on a $50m national entrepreneurship strategy in Ukraine, contributed strategic recommendations for a newly built 64km² district in Shanghai and provided the strategy to create the European Creative Hubs Network.
                  </p>
                  <p>
                    From 2014-2017 Will was Head of Strategy at The Trampery, where he helped scale one of London’s leading coworking spaces into a back bone of London’s startup community. He oversaw a portfolio of 5 workspaces supporting 200+ startups, launched 5 sector-focused incubator programmes, and helped secure £2.3m in EU funding.
                  </p>
                  <p>
                    Will began his career at Lloyds Bank during the global financial crisis, working on complex business turnarounds and restructuring projects across multinational and regional businesses. He holds a Master’s degree in Physics from the University of Reading and a diploma in Finance and Organisational Management from the London Institute of Banking and Finance. Will is a guest lecturer on the Creative MBA at ESCP Europe, hosts a show on Soho Radio, and loves playing volleyball.
                  </p>
                </div>
              </div>
            </div>
          </ExpandableSection>
        </div>

        {/* Footer / Contact */}
        <footer id="contact" className="py-24 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">Let's connect.</h2>
              <a 
                href="mailto:will@willsmercer.com" 
                className="text-xl md:text-2xl text-white/60 hover:text-white transition-colors block mb-8 font-light"
              >
                will@willsmercer.com
              </a>
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
