import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navigation from '@/components/layout/Navigation';
import SmoothScrollWrapper from '@/components/layout/SmoothScroll';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy'; // Note: Ensure filename matches (Philosophy vs AboutDeepDive)
import ExpertiseDeepDive from '@/components/sections/ExpertiseDeepDive';
import Timeline from '@/components/sections/Timeline';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <main className="relative w-full min-h-screen bg-white">
        {/* Global UI Elements */}
        <div className="noise-overlay" />
        <CustomCursor />
        <ScrollProgress />
        <Navigation />

        {/* Content Sections */}
        <div id="hero">
          <Hero />
        </div>

        <div id="philosophy">
          <Philosophy />
        </div>

        <div id="expertise">
          <ExpertiseDeepDive />
        </div>

        <div id="timeline">
          <Timeline />
        </div>

        <div id="work">
          <ProjectShowcase />
        </div>

        <div id="contact">
          <Contact />
        </div>

        {/* Footer */}
        <footer className="py-12 bg-gray-900 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
            © 2026 Daniel Franc. Engineered in Prague.
          </p>
        </footer>
      </main>
    </SmoothScrollWrapper>
  );
}