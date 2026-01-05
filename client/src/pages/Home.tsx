import { Section } from "@/components/ui/section";
import { ProjectCard } from "@/components/ui/project-card";
import { ExpandableSection } from "@/components/ui/expandable-section";
import { ArrowDown, Instagram, Linkedin, Twitter, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import profileImg from "@assets/IMG_0283_1767509196887.jpeg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContent = () => {
    const element = document.getElementById("work");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground bg-noise selection:bg-white/20">
      {/* Navigation / Header */}
      <header className="absolute top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center">
        <div className="text-sm font-display font-bold tracking-widest uppercase">
          Will Mercer
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white/60 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Button */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-12"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="text-3xl font-display font-light hover:text-white/60 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-6 pt-12 border-t border-white/10 w-48 justify-center">
              <a href="https://linkedin.com/in/willsmercer" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/willsmercer" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/willsmercer" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Will is an early-stage <span className="text-white/50">venture strategist</span> who partners with <span className="text-white/50">elite founders</span> to build companies with <span className="text-white/50">global</span> scale and <span className="text-white/50">impact</span>.
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-12">
              In the past 24 months, startups he’s worked with have raised over $30m in funding and have scaled their revenue to &gt;$10m.
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
            className="absolute bottom-12 right-0 animate-bounce cursor-pointer p-2 hover:bg-white/5 rounded-full transition-colors"
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
                Will spends his time making <span className="text-white">inspirational physical and digital environments</span> that help founders connect with their purpose and flourish.
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
                href="https://worldbuildlabs.com"
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
                href="https://getdriven.co"
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
                href="https://trimtabs.co"
                description="TrimTabs makes Carbon Nanotubes, a super material driving exponential advances in computing and energy, from waste plastic."
                stats={[
                  "$15m raised",
                  "Partial acquisition",
                  "Pipeline >$10m"
                ]}
              />
            </div>
          </ExpandableSection>
        </div>

        <ExpandableSection title="Past Projects" subtitle="Archive of Previous Ventures & Consultancy" defaultOpen={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Heph Technologies"
              year="2024"
              location="Global"
              href="https://heph.ai"
              description="Co-founded a commercial AI data labelling and model-training platform spun out of Human Protocol. Success stats: Built a $3m LOI pipeline across 7 pilots and opened a funding round that was 50%+ committed within weeks."
              stats={["$3m LOI pipeline", "7 pilots"]}
            />
            <ProjectCard 
              title="Human Protocol"
              year="2021–2024"
              role="Head of Strategy"
              location="Global, Cayman Islands"
              href="https://hmt.ai"
              description="Head of Strategy at a Web3 protocol for the tokenisation of work and decentralised task coordination. Success stats: Supported a network distributing 2.7bn tasks to 174k+ workers with 26m on-chain transactions and deployed $1m+ in ecosystem grants."
              stats={["2.7bn tasks", "174k+ workers", "26m on-chain tx"]}
            />
            <ProjectCard 
              title="EO Incubator"
              year="2019–2024"
              role="Chief Mentor"
              location="Kyiv, Ukraine"
              href="https://eo.in.ua"
              description="Chief Mentor and advisor for Ukraine’s leading startup incubator. Success stats: Advised over 120 startups, created over $200m in portfolio value."
              stats={["120+ startups advised", "$200m portfolio value"]}
            />
            <ProjectCard 
              title="Noma Collective"
              year="2021–2022"
              role="Founder"
              location="Belize → Global"
              href="https://noma-collective.com"
              description="Founded a digital nomad and co-living platform starting from a beachfront co-living space in Belize. Success stats: Scaled into the world’s largest global digital nomad travel company, with revenues doubling annually and operations across 30+ cities worldwide."
              stats={["World's largest nomad travel co", "30+ cities", ">2k customers"]}
            />
            <ProjectCard 
              title="Zag"
              year="2018–2021"
              role="Venture Director"
              location="London"
              href="https://wearezag.com"
              description="Venture Director at the early-stage investment arm of global creative agency BBH. Success stats: Deployed ~$3m across 9 startups, analysed 400+ pitches, worked with 200+ founders in 25+ countries, and helped build a portfolio achieving up to 8× value growth."
              stats={["$3m deployed", "8× value growth", "200+ founders"]}
            />
            <ProjectCard 
              title="Mission Led"
              year="2017–Present"
              role="Founder"
              location="Global"
              description="Founded a startup ecosystem consultancy advising governments, investors, and venture builders on entrepreneurship and impact. Success stats: Advised USAID on a $50m national entrepreneurship strategy, supported programmes in 20+ countries, and contributed strategy for a 64,000 km² district in Shanghai."
              stats={["$50m USAID strategy", "20+ countries"]}
            />
            <ProjectCard 
              title="Château de la Salle"
              year="2017–2019"
              location="Burgundy, France"
              description="Founded a residential work and event space on a historic château estate focused on creative collaboration and deep work. Success stats: Hosted 170+ guests, curated multiple international events, built a 1,400-person mailing list, and converted 600 sqm into accommodation."
            />
            <ProjectCard 
              title="The Trampery"
              year="2015–2017"
              role="Head of Strategy"
              location="London"
              description="Head of Strategy at a leading coworking and incubator platform supporting early-stage startups and creative businesses. Success stats: Scaled to 5 workspaces, supported 200+ startups, grew occupancy from 60% to 95%, launched 5 incubator programmes, and secured £2.3m in EU funding."
            />
            <ProjectCard 
              title="IAAM Adoption"
              year="2014–2015"
              location="United Kingdom"
              description="Operated an adoption charity funded via a pioneering Social Impact Bond, overseeing operations, governance, and reporting. Success stats: Contributed to one of the UK’s early large-scale outcomes-based social finance models."
            />
            <ProjectCard 
              title="Lloyds Banking Group"
              year="2009–2013"
              location="United Kingdom"
              description="Worked on complex business turnarounds and restructuring projects during the global financial crisis. Success stats: Delivered multi-million-pound change programmes, restructured corporates with £1.5bn+ debt exposure, and led a £4.4m transformation project."
            />
            <ProjectCard 
              title="Music & Cultural Events"
              year="2009–2020"
              location="UK & Europe"
              description="Curated and produced independent music, cultural, and community-led events bringing together artists, founders, and creative technologists. Success stats: Delivered dozens of sold-out events, built repeat audiences across cities, and contributed to the early growth of multiple creative communities."
            />
            <ProjectCard 
              title="Bar Iguana"
              year="2016–2018"
              location="Reading, UK"
              description="Co-founded and operated a neighbourhood bar and cultural venue serving as a hub for music, art, and local community events. Success stats: Established a profitable hospitality venue with a strong local following, regular live music and DJ programming."
            />
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
                    className="object-cover w-full h-full opacity-90"
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
                    Will began his career at Lloyds Bank during the global financial crisis, working on complex business turnarounds and restructuring projects across multinational and regional businesses. He holds a Master’s degree in Physics from the University of Reading and a diploma in Finance and Organisational Management from the London Institute of Banking and Finance. Will is a guest lecturer on the Creative MBA at ESCP Europe, hosts a show on Soho Radio, loves playing beach volleyball and climbing anything made of rock.
                  </p>
                </div>
              </div>
            </div>
          </ExpandableSection>
        </div>

        <ExpandableSection title="Other Interests" subtitle="Passion Projects & Community" defaultOpen={false}>
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-4xl text-left px-0">
              <div className="space-y-8 text-lg md:text-xl text-white/80 leading-relaxed font-light w-full">
                <p className="text-left w-full">
                  I spend my spare time working on passion projects. Reach out if you want to collab on any of the below:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 pt-8 w-full">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-start gap-3">
                      <h3 className="text-white font-display text-lg">BringDem</h3>
                      <a href="https://bringdem.co" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">bringdem.co</a>
                    </div>
                    <p className="text-base text-white/60 text-left leading-relaxed">
                      I love to play music; playing the occasional DJ set. I host a regular show on Radio Al Hara, you can find them on <a href="https://soundcloud.com/bring_dem" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">soundcloud</a>.
                    </p>
                  </div>

                  <div className="space-y-3 text-left">
                    <h3 className="text-white font-display text-lg">Talks & Lectures</h3>
                    <p className="text-base text-white/60 text-left leading-relaxed">I give talks and lectures on startup finance and business strategy for undergrad to MBA students at universities such as ESCP (France), Kharkiv (Ukraine), Monterrey (Mexico) & Swansea (UK).</p>
                  </div>

                  <div className="space-y-3 text-left">
                    <h3 className="text-white font-display text-lg">Beach Volleyball</h3>
                    <p className="text-base text-white/60 text-left leading-relaxed">I host a meetup group that plays in Mexico City every Saturday, reach out if you play and are passing through.</p>
                  </div>

                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-start gap-3">
                      <h3 className="text-white font-display text-lg">Founder Retreats</h3>
                      <a href="https://FindMusa.mx" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors">FindMusa.mx</a>
                    </div>
                    <p className="text-base text-white/60 text-left leading-relaxed">I host founder retreats at MUSA, a stunning 300 acre beachfront resort on Mexico's Pacific coast.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>

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
                <a href="mailto:will@willsmercer.com" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/willsmercer" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/willsmercer" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/willsmercer" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
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
