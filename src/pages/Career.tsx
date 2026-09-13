import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Download, Award, Briefcase, GraduationCap, Github } from 'lucide-react';
import careerData from '../../site-data/career.json';

export default function Career() {
  return (
    <Layout title="Career & Projects" themeColor="from-teal-500 to-emerald-700">
      
      {/* Top Section: Resume & GitHub */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <a 
          href="/assets/resume/Okinawa_Research_Internship_Resume_Chetan_Modern.pdf" 
          download
          className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-colors group"
        >
          <Download className="w-12 h-12 text-teal-400 mb-4 group-hover:-translate-y-1 transition-transform" />
          <h3 className="text-xl font-bold">Download Resume</h3>
          <p className="text-white/50 text-sm mt-2">OIST Modern Format (.pdf)</p>
        </a>

        <a 
          href={careerData.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center transition-colors group"
        >
          <Github className="w-12 h-12 text-white mb-4 group-hover:-translate-y-1 transition-transform" />
          <h3 className="text-xl font-bold">GitHub Profile</h3>
          <p className="text-white/50 text-sm mt-2">astrochetan12-netizen</p>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Education & Stats */}
        <div className="space-y-8">
          <div className="bg-[#111214] p-6 rounded-2xl border border-white/5 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><GraduationCap size={100} /></div>
            <h3 className="text-lg font-bold text-teal-400 mb-4 flex items-center gap-2"><GraduationCap className="w-5 h-5"/> Education</h3>
            <p className="font-bold text-lg leading-tight">{careerData.education.institution}</p>
            <p className="text-white/70 text-sm mt-1">{careerData.education.program}</p>
            <p className="text-white/50 text-xs mt-1">{careerData.education.years}</p>
            
            <div className="mt-6 p-4 bg-teal-500/10 border border-teal-500/20 rounded-xl">
              <p className="text-3xl font-black text-teal-400">{careerData.education.cgpa}</p>
              <p className="text-xs text-white/60 mt-1">Sem 1: {careerData.education.semester_breakdown.sem1} | Sem 2: {careerData.education.semester_breakdown.sem2}</p>
              <p className="text-xs text-white/40 mt-2 italic">{careerData.education.note}</p>
            </div>
          </div>

          <div className="bg-[#111214] p-6 rounded-2xl border border-white/5 shadow-lg">
            <h3 className="text-lg font-bold text-teal-400 mb-4 flex items-center gap-2"><Award className="w-5 h-5"/> Certifications</h3>
            <div className="space-y-4">
              {careerData.certifications.map((cert, i) => (
                <div key={i} className="border-l-2 border-teal-500/50 pl-3">
                  <p className="font-bold text-sm">{cert.name}</p>
                  <p className="text-xs text-white/50">{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Projects & Programs */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-[#111214] p-6 md:p-8 rounded-2xl border border-white/5 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-teal-400" /> Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerData.projects.map((proj, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-5 bg-white/5 rounded-xl border border-white/5 hover:border-teal-500/30 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-white/90 group-hover:text-teal-300 transition-colors leading-tight">{proj.name}</h4>
                    <span className="text-xs text-white/30">{proj.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {proj.stack.map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-black/50 text-[10px] text-teal-400 rounded-sm">{tech}</span>
                    ))}
                  </div>
                  <ul className="text-sm text-white/60 space-y-1 list-disc pl-4">
                    {proj.highlights.map((hl, j) => (
                      <li key={j}>{hl}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[#111214] p-6 md:p-8 rounded-2xl border border-white/5 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Programs & Competitions</h3>
            <div className="space-y-4">
              {careerData.programs_and_competitions.map((prog, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <h4 className="font-bold text-teal-400">{prog.name}</h4>
                  <p className="text-xs text-white/50 mb-2">{prog.org} • {prog.date}</p>
                  <ul className="text-sm text-white/70 space-y-1 list-disc pl-4">
                    {prog.highlights.map((hl, j) => (
                      <li key={j}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </Layout>
  );
}
