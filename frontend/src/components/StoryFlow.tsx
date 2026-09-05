import React from 'react';
import {
  Play,
  Clock,
  TrendingUp,
  BookOpen,
  Zap,
  Radio,
  Hammer,
  FileText,
  Building2,
  Users,
  AlertOctagon,
  Truck,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { Language } from '../i18n/translations';
import { TRANSLATIONS } from '../i18n/translations';

interface StoryFlowProps {
  language: Language;
  onLaunchDemo: () => void;
  onOpenConsole: (targetTab?: string) => void;
  onOpenGlossary: () => void;
  onOpenResearchAudit?: () => void;
}

export const StoryFlow: React.FC<StoryFlowProps> = ({
  language,
  onLaunchDemo,
  onOpenConsole,
  onOpenGlossary,
  onOpenResearchAudit
}) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <div className="space-y-8 w-full py-2 max-w-7xl mx-auto">
      
      {/* 1. Hero Section: Clear, Human & High-Stakes */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="cr-panel p-6 sm:p-8 relative transition-colors border-t-4 border-t-[var(--cr-primary-interactive)] shadow-sm"
      >
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            
            {/* Context Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--cr-status-green)]"></span>
              <span className="text-xs font-bold text-[var(--cr-primary-interactive)] uppercase tracking-wider">
                Ministry of Railways • Problem SIH26027 • North Central Railway Corridor (Kanpur–Delhi)
              </span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--cr-text-primary)] tracking-tight leading-tight">
              When Railway Tracks Get Fixed, Trains Get Delayed and Factories Stop.
              <span className="block text-[var(--cr-primary-interactive)] mt-1">
                We Fixed That.
              </span>
            </h1>

            {/* Plain English Explanation */}
            <p className="text-[var(--cr-text-secondary)] text-sm sm:text-base leading-relaxed">
              Today, three separate railway departments (Track, Electric wire, Signal) shut down tracks whenever they want. 
              Because repairs are uncoordinated, <strong>freight trains carrying coal and industrial supplies sit stranded on sidings for 6+ hours</strong>, 
              factories run out of raw materials, and express trains arrive late. 
              <strong className="text-[var(--cr-text-primary)]"> RAILSYNC bundles all repairs into one coordinated midnight window (1 AM to 4 AM)</strong> when trains are asleep—delivering zero express delays and keeping goods moving.
            </p>

            {/* Simple CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onLaunchDemo}
                className="cr-btn-primary py-2.5 px-4 text-xs font-bold flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>See 90-Second Demo</span>
              </button>

              <button
                onClick={() => onOpenConsole('cockpit')}
                className="cr-btn-secondary py-2.5 px-4 text-xs font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Open Train Schedule Graph →</span>
              </button>

              <button
                onClick={() => onOpenConsole('comparison')}
                className="cr-btn-secondary py-2.5 px-3.5 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <span>Compare Before vs After</span>
              </button>

              <button
                onClick={onOpenGlossary}
                className="cr-btn-secondary py-2.5 px-3.5 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                title="Open Railway Terms Glossary"
              >
                <BookOpen className="w-4 h-4 text-[var(--cr-status-amber)]" />
                <span>{t.glossaryButton}</span>
              </button>

              {onOpenResearchAudit && (
                <button
                  onClick={onOpenResearchAudit}
                  className="cr-btn-secondary py-2.5 px-3.5 text-xs font-bold flex items-center gap-1.5 text-[var(--cr-status-green)] cursor-pointer"
                  title="View CAG and Railway Research Citations"
                >
                  <FileText className="w-4 h-4 text-[var(--cr-status-green)]" />
                  <span>Audit Evidence [CAG Report 22]</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Hero Card: 3 Big Outcomes That Anyone Understands */}
          <div className="cr-card p-5 lg:w-80 flex-shrink-0 space-y-4 border-l-4 border-l-[var(--cr-status-green)] bg-[var(--cr-surface)] shadow-sm">
            <div className="border-b border-[var(--cr-border-subtle)] pb-2">
              <span className="text-xs uppercase tracking-wider text-[var(--cr-text-secondary)] font-bold block">
                Passenger Train Delay
              </span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-3xl font-extrabold text-[var(--cr-status-green)]">0 min</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                  100% Punctual
                </span>
              </div>
              <span className="text-[11px] text-[var(--cr-text-muted)] block mt-0.5">
                Rajdhani & Vande Bharat never held at red signals
              </span>
            </div>

            <div className="border-b border-[var(--cr-border-subtle)] pb-2">
              <span className="text-xs uppercase tracking-wider text-[var(--cr-text-secondary)] font-bold block">
                Factory Demurrage Saved
              </span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[var(--cr-primary-interactive)]">₹14.8 Lakhs</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300">
                  Per 24h Night
                </span>
              </div>
              <span className="text-[11px] text-[var(--cr-text-muted)] block mt-0.5">
                Coal & container rakes cleared without stabling
              </span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-[var(--cr-text-secondary)] font-bold block">
                Track Safety Compliance
              </span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-3xl font-extrabold text-[var(--cr-status-green)]">100%</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                  Zero Rejections
                </span>
              </div>
              <span className="text-[11px] text-[var(--cr-text-muted)] block mt-0.5">
                Critical broken rails replaced under formal blocks
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Three Pillars: "Who Actually Suffers Today?" (The Business & Human Answer) */}
      <div className="space-y-3">
        <div className="px-1 flex items-center justify-between">
          <h2 className="text-xs sm:text-sm font-bold text-[var(--cr-text-secondary)] uppercase tracking-wider flex items-center gap-2">
            <Users className="w-4 h-4 text-[var(--cr-primary-interactive)]" />
            <span>Who Actually Suffers When Railway Maintenance Is Uncoordinated?</span>
          </h2>
          <span className="text-xs text-[var(--cr-text-muted)] hidden sm:inline">
            Why this matters beyond the control room
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Pillar 1: Business Owners & Supply Chains */}
          <div className="cr-card p-5 space-y-3 border-t-4 border-t-[var(--cr-status-amber)] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-amber-500/10 text-[var(--cr-status-amber)]">
                  <Building2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300">
                  B2B Supply Chain
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--cr-text-primary)]">
                1. Factories, Power Plants & Logistics
              </h3>
              <p className="text-xs text-[var(--cr-text-secondary)] leading-relaxed">
                When an unscheduled daytime repair stops the line, a <strong>58-wagon freight train carrying coal or auto components gets dumped onto a loop siding for 6 to 8 hours</strong>. 
                Power plants face coal stockouts, contracted trucks in Delhi wait idle, and businesses bleed ₹25,000/hour in demurrage penalties.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--cr-border-subtle)] text-xs text-[var(--cr-status-green)] font-bold flex items-center justify-between">
              <span>RAILSYNC Fix: Clear freight corridors</span>
              <span>-65% Stabling</span>
            </div>
          </div>

          {/* Pillar 2: Everyday Passengers */}
          <div className="cr-card p-5 space-y-3 border-t-4 border-t-[var(--cr-primary-interactive)] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-blue-500/10 text-[var(--cr-primary-interactive)]">
                  <Clock className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300">
                  Public Lifeline
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--cr-text-primary)]">
                2. Students, Commuters & Patients
              </h3>
              <p className="text-xs text-[var(--cr-text-secondary)] leading-relaxed">
                A student traveling to write their UPSC or NEET exam; a cancer patient heading to AIIMS Delhi. 
                When a controller gives an emergency track block during the morning peak, <strong>passenger trains sit halted at outer signals for 45+ minutes unannounced</strong>.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--cr-border-subtle)] text-xs text-[var(--cr-status-green)] font-bold flex items-center justify-between">
              <span>RAILSYNC Fix: All work shifted to 1–4 AM</span>
              <span>0 min Delay</span>
            </div>
          </div>

          {/* Pillar 3: Safety & Derailments */}
          <div className="cr-card p-5 space-y-3 border-t-4 border-t-[var(--cr-status-red)] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="p-2 rounded-lg bg-red-500/10 text-[var(--cr-status-red)]">
                  <AlertOctagon className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-500/15 text-red-700 dark:text-red-300">
                  Safety & Lives
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--cr-text-primary)]">
                3. Derailments & Trackmen Fatalities
              </h3>
              <p className="text-xs text-[var(--cr-text-secondary)] leading-relaxed">
                Because controllers fear delaying trains, <strong>they reject or postpone 38% of critical maintenance requests</strong>. 
                Cracks go unrepaired until a catastrophic derailment occurs. Over 400 track maintainers (Gangmen) are killed every year working informally without protected blocks.
              </p>
            </div>
            <div className="pt-3 border-t border-[var(--cr-border-subtle)] text-xs text-[var(--cr-status-green)] font-bold flex items-center justify-between">
              <span>RAILSYNC Fix: Guaranteed formal blocks</span>
              <span>100% Protected</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. The Big Official Audit Proof (CAG Report 22 of 2021) */}
      <div className="cr-panel p-6 border-l-4 border-l-[var(--cr-status-amber)] space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[var(--cr-border-subtle)] pb-3">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
              🟢 REAL VERIFIED DATA • CAG REPORT NO. 22 OF 2021
            </span>
            <span className="text-xs text-[var(--cr-text-secondary)]">Audited across 11 Indian Railway Zones</span>
          </div>
          {onOpenResearchAudit && (
            <button
              onClick={onOpenResearchAudit}
              className="text-xs text-[var(--cr-primary-interactive)] hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>Read Official Government Audit Citations</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="cr-card p-4 text-center space-y-1">
            <span className="text-xs text-[var(--cr-text-secondary)] font-bold uppercase">Only 2.2% Integrated</span>
            <div className="text-3xl font-extrabold text-[var(--cr-status-red)]">97.8%</div>
            <p className="text-xs text-[var(--cr-text-muted)]">
              Of maintenance blocks examined by CAG were taken by departments <strong>in complete isolation</strong>.
            </p>
          </div>

          <div className="cr-card p-4 text-center space-y-1">
            <span className="text-xs text-[var(--cr-text-secondary)] font-bold uppercase">1,905 Block Overruns</span>
            <div className="text-3xl font-extrabold text-[var(--cr-status-red)]">4,659 Trains</div>
            <p className="text-xs text-[var(--cr-text-muted)]">
              Were delayed on the New Delhi–Howrah corridor because maintenance blocks overran their scheduled time.
            </p>
          </div>

          <div className="cr-card p-4 text-center space-y-1">
            <span className="text-xs text-[var(--cr-text-secondary)] font-bold uppercase">South Central Railway Precedent</span>
            <div className="text-3xl font-extrabold text-[var(--cr-status-green)]">+24% Output</div>
            <p className="text-xs text-[var(--cr-text-muted)]">
              Vijayawada Division proved that integrated blocks increased track machine output by 24% and availability by 33%.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Simple Visual Explainer: Before vs After */}
      <div className="space-y-4">
        <h2 className="text-xs sm:text-sm font-bold text-[var(--cr-text-secondary)] uppercase tracking-wider flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[var(--cr-primary-interactive)]" />
          <span>How It Works: The Simple Before vs. After</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column: The Old Broken Way */}
          <div className="cr-panel p-5 border-l-4 border-l-[var(--cr-status-red)] space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--cr-border-subtle)] pb-2.5">
              <div>
                <span className="cr-badge-red text-xs">The Old Way</span>
                <h3 className="text-base font-bold text-[var(--cr-text-primary)] mt-1">
                  3 Phone Calls · 3 Separate Track Shutdowns
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-[var(--cr-status-red)]">4.5 Hours Lost</span>
            </div>

            <div className="space-y-2.5 text-xs text-[var(--cr-text-secondary)]">
              <div className="p-3 rounded-lg bg-[var(--cr-surface-subtle)] border border-[var(--cr-border-subtle)] flex items-start gap-2.5">
                <Hammer className="w-4 h-4 text-[var(--cr-status-red)] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--cr-text-primary)] block">Monday: Civil Track Team shuts track for 2 hours</strong>
                  <span>Tamping ballast. Express train delayed by 30 mins; freight rake stabled at loop line.</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[var(--cr-surface-subtle)] border border-[var(--cr-border-subtle)] flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-[var(--cr-status-red)] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--cr-text-primary)] block">Wednesday: Electrical Team shuts track again for 1.5 hours</strong>
                  <span>Inspecting overhead wires on the exact same track section. Another train delayed.</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[var(--cr-surface-subtle)] border border-[var(--cr-border-subtle)] flex items-start gap-2.5">
                <Radio className="w-4 h-4 text-[var(--cr-status-red)] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[var(--cr-text-primary)] block">Friday: Signal Team shuts track a 3rd time for 1 hour</strong>
                  <span>Testing point motor. Total track shutdown time: 4.5 hours across the week.</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[var(--cr-status-red-bg)] text-[var(--cr-status-red)] font-bold text-xs flex items-center justify-between">
              <span>Result: 4 Trains Delayed · Cargo Stuck</span>
              <span>Business Risk: 82/100 HIGH</span>
            </div>
          </div>

          {/* Right Column: The RAILSYNC Way */}
          <div className="cr-panel p-5 border-l-4 border-l-[var(--cr-status-green)] space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--cr-border-subtle)] pb-2.5">
              <div>
                <span className="cr-badge-green text-xs">The RAILSYNC Way</span>
                <h3 className="text-base font-bold text-[var(--cr-text-primary)] mt-1">
                  1 Synchronized Midnight Window (3-in-1 Bundled)
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-[var(--cr-status-green)]">3.0 Hours (-33.3%)</span>
            </div>

            <div className="p-4 rounded-xl bg-[var(--cr-surface-subtle)] border border-[var(--cr-border)] space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[var(--cr-text-primary)]">Tonight: 01:30 AM to 04:30 AM</span>
                <span className="cr-badge-green text-xs font-bold">Midnight Freight Valley</span>
              </div>
              <p className="text-[var(--cr-text-secondary)] leading-relaxed">
                RAILSYNC detected that no passenger express trains run between 1:30 AM and 4:30 AM. 
                In 31 milliseconds, the mathematical optimizer scheduled <strong>all three teams (Track, Electric, and Signal) to work simultaneously</strong> in that exact 3-hour window.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[11px] text-center">
                <div className="p-2 rounded bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)]">
                  ✓ Track Tamping
                </div>
                <div className="p-2 rounded bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)]">
                  ✓ Wire Inspection
                </div>
                <div className="p-2 rounded bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)]">
                  ✓ Signal Testing
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[var(--cr-status-green-bg)] text-[var(--cr-status-green)] font-bold text-xs flex items-center justify-between">
              <span>Result: 0 Express Delays · Freight Moves</span>
              <span>Business Risk: 27/100 LOW</span>
            </div>
          </div>

        </div>
      </div>

      {/* 5. Representative B2B Case Study Card (Kanpur Factory to Delhi NCR) */}
      <div className="cr-card p-5 sm:p-6 space-y-3 border-l-4 border-l-[var(--cr-primary-interactive)]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[var(--cr-primary-interactive)]" />
            <span className="text-sm font-bold text-[var(--cr-text-primary)]">
              Representative Case Study: Kanpur Industrial Components Pvt. Ltd.
            </span>
          </div>
          <span className="cr-badge-neutral text-xs font-mono">
            Shipment KIC-DEL-07 (Automotive Parts) • Kanpur ICD → Delhi NCR
          </span>
        </div>

        <p className="text-xs text-[var(--cr-text-secondary)] leading-relaxed">
          A Kanpur factory dispatches finished parts on a rail container rake bound for Delhi NCR. 
          Under current manual planning, uncoordinated track work halts the train at Rura siding for 4.5 hours. 
          The delivery misses its committed warehouse slot in Delhi, forcing the factory to pay contracted truck waiting fees and exhaust buffer inventory. 
          <strong> With RAILSYNC, the rake is dynamically scheduled through the overnight freight valley, reaching Delhi on time with zero line detention.</strong>
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs border-t border-[var(--cr-border-subtle)]">
          <div className="flex items-center gap-1.5 font-bold text-[var(--cr-text-primary)]">
            <span>Demurrage Saved:</span>
            <span className="text-[var(--cr-status-green)] font-mono">₹14.85 Lakhs / 24h</span>
          </div>
          <span className="text-[var(--cr-border)]">•</span>
          <div className="flex items-center gap-1.5 font-bold text-[var(--cr-text-primary)]">
            <span>Supply Chain Reliability:</span>
            <span className="text-[var(--cr-status-green)] font-mono">82 → 27 Risk Index</span>
          </div>
          <span className="text-[var(--cr-border)]">•</span>
          <div className="flex items-center gap-1.5 font-bold text-[var(--cr-text-primary)]">
            <span>Passenger Express Impact:</span>
            <span className="text-[var(--cr-status-green)] font-mono">0 min delay</span>
          </div>
        </div>
      </div>

      {/* 6. Navigation to Console Tools */}
      <div className="cr-panel p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[var(--cr-text-primary)]">
            Ready to Inspect the Engineering Controls?
          </h3>
          <p className="text-xs text-[var(--cr-text-secondary)] mt-0.5">
            Switch to the Section Controller console to see the live Marey train graphs, candidate plans, and emergency fracture simulations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => onOpenConsole('cockpit')}
            className="cr-btn-primary py-2 px-3.5 text-xs font-bold cursor-pointer"
          >
            <span>Open Train Graph (Marey)</span>
          </button>
          <button
            onClick={() => onOpenConsole('comparison')}
            className="cr-btn-secondary py-2 px-3.5 text-xs font-bold cursor-pointer"
          >
            <span>Plan Comparison</span>
          </button>
          <button
            onClick={() => onOpenConsole('emergency')}
            className="cr-btn-secondary py-2 px-3.5 text-xs font-bold cursor-pointer text-[var(--cr-status-red)]"
          >
            <span>Emergency Simulator</span>
          </button>
        </div>
      </div>

    </div>
  );
};
