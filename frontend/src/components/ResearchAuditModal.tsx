import React from 'react';
import { X, ExternalLink, FileText } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface ResearchAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ResearchAuditModal: React.FC<ResearchAuditModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/65 backdrop-blur-xs transition-opacity animate-in fade-in duration-150">
      <div className="bg-[var(--cr-surface)] border border-[var(--cr-border)] w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[var(--cr-text-primary)]">
        
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-[var(--cr-border-subtle)] bg-[var(--cr-surface-subtle)] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--cr-primary-interactive)]/10 text-[var(--cr-primary-interactive)] border border-[var(--cr-primary-interactive)]/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-[var(--cr-text-primary)]">
                  {language === 'hi' ? 'शोध, ऑडिट साक्ष्य एवं संदर्भ' : (language === 'ta' ? 'ஆராய்ச்சி, தணிக்கை சான்றுகள்' : 'Official Research, Precedent & Audit Evidence')}
                </h2>
                <span className="cr-badge-green text-xs font-semibold">Verified IR / CAG Sources</span>
              </div>
              <p className="text-xs text-[var(--cr-text-secondary)] mt-0.5">
                Every constraint and benchmark in RAILSYNC-ABP is grounded in published government audits, railway operating precedents, and peer-reviewed transportation research.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--cr-text-muted)] hover:text-[var(--cr-text-primary)] hover:bg-[var(--cr-surface)] transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3-Layer Taxonomy Indicator Bar */}
        <div className="px-5 sm:px-6 py-2.5 bg-[var(--cr-surface)] border-b border-[var(--cr-border-subtle)] flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="font-bold text-[var(--cr-text-secondary)] uppercase tracking-wider">
            Evaluation Taxonomy:
          </span>
          <div className="flex flex-wrap items-center gap-2 font-medium">
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              REAL DATA (CAG / UCLA / SCR)
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              REPRESENTATIVE SCENARIO (Kanpur ICD)
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              MODEL OUTPUT (CP-SAT Solver)
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-xs sm:text-sm">
          
          {/* Section 1: CAG Report 22 of 2021 */}
          <div className="p-4 sm:p-5 rounded-xl bg-[var(--cr-surface-subtle)] border border-[var(--cr-border)] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
                  REAL DATA • CAG REPORT NO. 22 OF 2021
                </span>
                <span className="text-xs text-[var(--cr-text-muted)]">Comptroller and Auditor General of India</span>
              </div>
              <a
                href="https://cag.gov.in/uploads/research_paper/RES-220900-Peer-Reviewed-Case-Study-on-Punctuality-20230807-052050-1-068f089ca70b4b7-79400532.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--cr-primary-interactive)] hover:underline flex items-center gap-1 font-bold"
              >
                <span>View CAG Report</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-[var(--cr-text-primary)]">
              Documented National Coordination Failure: 2.2% Integrated vs 97.8% Isolated
            </h3>
            
            <p className="text-xs text-[var(--cr-text-secondary)] leading-relaxed">
              While Indian Railways advised integrated corridor blocks for Track, Signalling, and Electrification, 
              <strong> CAG examined 11 zones in March 2019 and found that only 2.2% of maintenance blocks were integrated</strong>, 
              meaning 97.8% were executed by departments in isolation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)]">
                <span className="text-xs text-[var(--cr-text-secondary)] font-bold block mb-1">Block Bursting Impact (NDLS–HWH Route)</span>
                <span className="text-xl font-extrabold text-[var(--cr-status-red)]">1,905 Overruns → 4,659 Trains Delayed</span>
                <p className="text-xs text-[var(--cr-text-muted)] mt-1">
                  On 6 divisions of the New Delhi–Howrah corridor, uncoordinated blocks burst their windows, severely delaying express traffic.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)]">
                <span className="text-xs text-[var(--cr-text-secondary)] font-bold block mb-1">Ministry of Railways Official Response</span>
                <span className="text-base font-extrabold text-[var(--cr-text-primary)]">“Men, Machine & Materials Mismatch”</span>
                <p className="text-xs text-[var(--cr-text-muted)] mt-1">
                  The Ministry conceded that blocks burst because machine readiness, gang availability, and material supply were planned in silos.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Real Precedent: South Central Railway Vijayawada IBMS */}
          <div className="p-4 sm:p-5 rounded-xl bg-[var(--cr-surface-subtle)] border border-[var(--cr-border)] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
                  REAL PRECEDENT • SCR VIJAYAWADA DIVISION (IPWE 2020)
                </span>
                <span className="text-xs text-[var(--cr-text-muted)]">IRICEN Technical Paper #13</span>
              </div>
              <a
                href="https://www.iricen.gov.in/iricen/ipwe_seminar/2017/IPWE%202020/IPWE%20PAPER%202020%20B/13.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--cr-primary-interactive)] hover:underline flex items-center gap-1 font-bold"
              >
                <span>View IRICEN Paper</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-[var(--cr-text-primary)]">
              Prior Art: Integrated Block Management System (IBMS) Validates 24% Efficiency Gain
            </h3>
            
            <p className="text-xs text-[var(--cr-text-secondary)] leading-relaxed">
              When South Central Railway's Vijayawada Division implemented an Integrated Block Management System, 
              they aggregated maintenance requirements across departments into unified geographical windows. 
              The verified operational results proved:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)] flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                  +33%
                </div>
                <div>
                  <span className="font-bold text-[var(--cr-text-primary)] text-xs block">Track Machine Availability</span>
                  <span className="text-xs text-[var(--cr-text-secondary)]">Improved possession slots available for heavy track tamping & renewal machinery.</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)] flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                  +24%
                </div>
                <div>
                  <span className="font-bold text-[var(--cr-text-primary)] text-xs block">Track Machine Output</span>
                  <span className="text-xs text-[var(--cr-text-secondary)]">Measured increase in effective kilometers of track tamped and ballast cleaned per month.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: UCLA 2026 Research & IIT Bombay Corridor Audit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[var(--cr-surface-subtle)] border border-[var(--cr-border)] space-y-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-mono text-[11px] font-bold border border-emerald-500/30">
                RESEARCH • UCLA ITS (2026)
              </span>
              <h4 className="font-bold text-xs sm:text-sm text-[var(--cr-text-primary)]">
                Allocation of Scarce Track Time in Indian Railways
              </h4>
              <p className="text-xs text-[var(--cr-text-secondary)] leading-relaxed">
                UCLA Institute of Transportation Studies published that Indian Railways track capacity is an economic resource (Track Space × Time) 
                contested by passenger punctuality, freight speed, and maintenance demands. Recommends algorithmic corridor-level governance.
              </p>
              <a
                href="https://rosap.ntl.bts.gov/view/dot/92542"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--cr-primary-interactive)] hover:underline flex items-center gap-1 pt-1 font-bold"
              >
                <span>UCLA ROSA P Report (2026)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-[var(--cr-surface-subtle)] border border-[var(--cr-border)] space-y-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-mono text-[11px] font-bold border border-emerald-500/30">
                AUDIT • IIT BOMBAY (NCR CORRIDOR)
              </span>
              <h4 className="font-bold text-xs sm:text-sm text-[var(--cr-text-primary)]">
                Why Kanpur–Tundla–New Delhi?
              </h4>
              <p className="text-xs text-[var(--cr-text-secondary)] leading-relaxed">
                An IIT Bombay operations audit revealed that <strong>70% of national railway punctuality loss originated on the Delhi–Mughalsarai section</strong>, 
                where North Central Railway recorded only 34% punctuality. Anchored by CONCOR ICD at Kanpur & 351 km Bhaupur–Khurja DFC.
              </p>
              <span className="text-xs text-[var(--cr-text-muted)] block pt-1">
                Verified freight corridor under Ministry of Railways (SIH26027).
              </span>
            </div>
          </div>

          {/* Section 4: Representative Business Persona & CRIS Ecosystem */}
          <div className="p-4 sm:p-5 rounded-xl bg-[var(--cr-surface-subtle)] border border-[var(--cr-border)] space-y-3">
            <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 font-mono text-xs font-bold border border-amber-500/30">
              REPRESENTATIVE SCENARIO • KANPUR INDUSTRIAL COMPONENTS (KIC)
            </span>

            <h3 className="text-sm sm:text-base font-bold text-[var(--cr-text-primary)]">
              How Railway Maintenance Affects the Downstream Industrial Supply Chain
            </h3>

            <div className="p-3 rounded-lg bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)] text-xs text-[var(--cr-text-secondary)] space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[var(--cr-text-primary)]">Shipment:</span>
                <span className="font-mono">KIC-DEL-07 (Finished Automotive Components)</span>
                <span className="cr-badge-neutral text-[10px]">Kanpur ICD → Delhi NCR</span>
              </div>
              <p>
                <strong>The Supply Chain Ripple Effect:</strong> Uncoordinated daytime track blocks stable freight trains for 4–8 hours on loop lines. 
                This introduces delivery-window variance, forcing factories to maintain expensive inventory buffers or pay truck waiting demurrage.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 font-mono text-xs">
                <div>• Baseline Fragmented Access: <strong>4.5 hours</strong></div>
                <div>• Coordinated Candidate Window: <strong>3.0 hours</strong></div>
                <div>• Access Reduction: <strong className="text-[var(--cr-status-green)]">33.3%</strong></div>
                <div>• Business Reliability Risk: <strong className="text-[var(--cr-status-green)]">82 → 27 / 100</strong></div>
              </div>
            </div>
          </div>

          {/* Section 5: CRIS Systems Interface */}
          <div className="p-4 rounded-xl bg-[var(--cr-surface-subtle)] border border-[var(--cr-border)] space-y-2">
            <span className="px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 font-mono text-[11px] font-bold border border-blue-500/30">
              ARCHITECTURE • CRIS ECOSYSTEM INTERFACE
            </span>
            <p className="text-xs text-[var(--cr-text-secondary)] leading-relaxed">
              RAILSYNC-ABP does not replace existing Indian Railways enterprise software. It acts as an intelligence decision-support layer connecting:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs text-center font-mono">
              <div className="p-2 rounded bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)]">
                <strong className="block text-[var(--cr-primary-interactive)]">FOIS</strong>
                <span className="text-[10px] text-[var(--cr-text-muted)]">Freight Operations</span>
              </div>
              <div className="p-2 rounded bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)]">
                <strong className="block text-[var(--cr-primary-interactive)]">COA</strong>
                <span className="text-[10px] text-[var(--cr-text-muted)]">Control Office App</span>
              </div>
              <div className="p-2 rounded bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)]">
                <strong className="block text-[var(--cr-primary-interactive)]">TMS</strong>
                <span className="text-[10px] text-[var(--cr-text-muted)]">Track Management</span>
              </div>
              <div className="p-2 rounded bg-[var(--cr-surface)] border border-[var(--cr-border-subtle)]">
                <strong className="block text-[var(--cr-primary-interactive)]">TDMS</strong>
                <span className="text-[10px] text-[var(--cr-text-muted)]">Traction Distribution</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3 border-t border-[var(--cr-border-subtle)] bg-[var(--cr-surface-subtle)] flex items-center justify-between">
          <span className="text-xs text-[var(--cr-text-muted)]">
            RAILSYNC-ABP • Problem SIH26027 • Ministry of Railways
          </span>
          <button
            onClick={onClose}
            className="cr-btn-primary py-1.5 px-4 text-xs font-bold cursor-pointer"
          >
            Close Audit Reference
          </button>
        </div>

      </div>
    </div>
  );
};
