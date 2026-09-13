import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Download, Award, Briefcase, GraduationCap, Github, ExternalLink, Trophy, Code2 } from 'lucide-react';
import careerData from '../../site-data/career.json';

// Animated stat counter
const Stat = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-[#0e0f12] border border-white/5 rounded-2xl p-5 text-center hover:border-white/10 transition-colors"
  >
    <p className="text-3xl font-black tracking-tight mb-1" style={{ color }}>{value}</p>
    <p className="text-xs text-white/40 uppercase tracking-widest font-medium">{label}</p>
  </motion.div>
);

// Cert badge
const CertBadge = ({ name, issuer, date }: { name: string; issuer: string; date: string }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-4 p-4 bg-[#0e0f12] border border-teal-900/30 hover:border-teal-500/30 rounded-xl transition-colors group">
    <div className="shrink-0 w-10 h-10 rounded-full bg-teal-500/15 border border-teal-500/25 flex items-center justify-center text-teal-400">
      <Award size={18} />
    </div>
    <div>
      <p className="font-bold text-sm text-white group-hover:text-teal-300 transition-colors leading-snug">{name}</p>
      <p className="text-xs text-white/40 mt-0.5">{issuer} · {date}</p>
    </div>
  </motion.div>
);

export default function Career() {
  const ed = careerData.education;

  return (
    <Layout title="Career" subtitle="Builder. Learner. Experimenter." themeColor="from-teal-600 to-emerald-900" accentColor="#14b8a6">

      {/* ── Quick Links Row ──────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <motion.a
          href="/assets/resume/Okinawa_Research_Internship_Resume_Chetan_Modern.pdf"
          download
          whileHover={{ y: -3 }}
          className="flex items-center gap-4 p-5 bg-[#0e0f12] border border-teal-900/30 hover:border-teal-500/40 rounded-2xl group transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/25 transition-colors">
            <Download size={22} />
          </div>
          <div>
            <p className="font-bold text-white group-hover:text-teal-300 transition-colors">Download Resume</p>
            <p className="text-xs text-white/40 mt-0.5">OIST Modern Format · PDF</p>
          </div>
          <ExternalLink size={14} className="ml-auto text-white/20 group-hover:text-teal-400 transition-colors" />
        </motion.a>

        <motion.a
          href={careerData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
          className="flex items-center gap-4 p-5 bg-[#0e0f12] border border-white/5 hover:border-white/15 rounded-2xl group transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
            <Github size={22} />
          </div>
          <div>
            <p className="font-bold text-white">GitHub Profile</p>
            <p className="text-xs text-white/40 mt-0.5">astrochetan12-netizen</p>
          </div>
          <ExternalLink size={14} className="ml-auto text-white/20 group-hover:text-white/60 transition-colors" />
        </motion.a>
      </div>

      {/* ── GitHub Contribution Graph ───────────────────── */}
      <div className="mb-10 bg-[#0e0f12] border border-white/5 rounded-2xl p-6 overflow-hidden">
        <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Github size={14} /> GitHub Activity
        </h3>
        <img
          src="https://ghchart.rshah.org/14b8a6/astrochetan12-netizen"
          alt="GitHub contribution chart"
          className="w-full rounded-lg opacity-80"
          loading="lazy"
        />
        <p className="text-xs text-white/25 mt-3 text-center">astrochetan12-netizen · contribution activity</p>
      </div>

      {/* ── Stats Row ──────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <Stat label="CGPA" value={ed.cgpa} color="#14b8a6" />
        <Stat label="Sem 1" value={ed.semester_breakdown.sem1} color="#34d399" />
        <Stat label="Sem 2" value={ed.semester_breakdown.sem2} color="#6ee7b7" />
        <Stat label="Credits" value="43/43" color="#a7f3d0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ── Left Col ──────────────────────────────────── */}
        <div className="flex flex-col gap-6">

          {/* Education card */}
          <div className="bg-[#0e0f12] border border-white/5 rounded-2xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
              <GraduationCap size={14} /> Education
            </h3>
            <p className="font-black text-lg text-white leading-tight">{ed.institution}</p>
            <p className="text-white/60 text-sm mt-1">{ed.program}</p>
            <p className="text-white/30 text-xs mt-1">{ed.years}</p>
            <p className="text-xs text-teal-400/70 mt-3 italic leading-relaxed">{ed.note}</p>
          </div>

          {/* Certifications */}
          <div className="bg-[#0e0f12] border border-white/5 rounded-2xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
              <Award size={14} /> Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {careerData.certifications.map((cert, i) => (
                <CertBadge key={i} name={cert.name} issuer={cert.issuer} date={cert.date} />
              ))}
            </div>
          </div>

          {/* Programs & Competitions */}
          <div className="bg-[#0e0f12] border border-white/5 rounded-2xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
              <Trophy size={14} /> Programs & Competitions
            </h3>
            <div className="flex flex-col gap-4">
              {careerData.programs_and_competitions.map((prog, i) => (
                <div key={i} className="border-l-2 border-teal-800/50 pl-4">
                  <p className="font-bold text-sm text-white">{prog.name}</p>
                  <p className="text-xs text-white/40 mb-1.5">{prog.org} · {prog.date}</p>
                  <ul className="space-y-1">
                    {prog.highlights.map((hl, j) => (
                      <li key={j} className="text-xs text-white/60 flex gap-2">
                        <span className="text-teal-500 mt-0.5">›</span>{hl}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Projects Grid ─────────────────────────────── */}
        <div className="lg:col-span-2">
          <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-5 flex items-center gap-2">
            <Briefcase size={14} /> Featured Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {careerData.projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="bg-[#0e0f12] border border-white/5 hover:border-teal-500/25 rounded-2xl p-5 flex flex-col gap-3 group transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <Code2 size={15} />
                  </div>
                  <span className="text-[10px] text-white/25 font-mono">{proj.year}</span>
                </div>

                <div>
                  <h4 className="font-bold text-white group-hover:text-teal-300 transition-colors leading-tight">{proj.name}</h4>
                </div>

                <div className="flex flex-wrap gap-1">
                  {proj.stack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-teal-900/30 text-teal-400 text-[10px] font-semibold rounded-md border border-teal-900/50">{tech}</span>
                  ))}
                </div>

                <ul className="flex flex-col gap-1 mt-auto">
                  {proj.highlights.slice(0, 2).map((hl, j) => (
                    <li key={j} className="text-xs text-white/50 flex gap-2 leading-relaxed">
                      <span className="text-teal-500 shrink-0 mt-0.5">›</span>{hl}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </Layout>
  );
}
