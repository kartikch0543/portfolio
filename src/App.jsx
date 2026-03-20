import {
  Award,
  BriefcaseBusiness,
  Code2,
  FileDown,
  GraduationCap,
  Mail,
  Trophy,
} from 'lucide-react';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { portfolioData } from './data/portfolioData';
import { getDynamicCertificates, getDynamicResume } from './content/registry';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    window.localStorage.setItem('portfolio-theme', 'dark');
  }, []);

  const dynamicCertificates = getDynamicCertificates();
  const certificates = dynamicCertificates.length
    ? dynamicCertificates
    : portfolioData.resumeHighlights.certificates.map((item) => ({
        ...item,
        fileUrl: item.image,
        fileType: 'image',
      }));

  const dynamicResume = getDynamicResume();
  const resumeData = {
    ...portfolioData.resume,
    downloadUrl: dynamicResume?.fileUrl ?? portfolioData.resume.downloadUrl,
    preview: dynamicResume?.previewUrl ?? portfolioData.resume.preview,
    fileName: dynamicResume?.fileName ?? 'Resume',
    fileType: dynamicResume?.fileType ?? 'pdf',
  };

  const resumeTabs = [
    {
      id: 'education',
      label: 'Education',
      icon: GraduationCap,
      items: portfolioData.education,
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: Code2,
      items: portfolioData.resumeHighlights.skills,
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: BriefcaseBusiness,
      items: portfolioData.resumeHighlights.projects,
    },
    {
      id: 'certificates',
      label: 'Certificates',
      icon: Award,
      items: certificates,
    },
  ];

  return (
    <div className="dark">
      <div className="app-shell relative min-h-screen overflow-x-hidden text-[var(--text-primary)] transition-colors duration-500">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[var(--app-bg)]" />

        <Navbar />
        <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-8">
          <HeroSection data={portfolioData.hero} />
          <AboutSection data={portfolioData.about} />
          <SkillsSection data={portfolioData.skillCategories} softSkills={portfolioData.softSkills} />
          <ProjectsSection data={portfolioData.projects} />
          <ResumeSection
            resume={resumeData}
            resumeTabs={resumeTabs}
            highlights={[
              { icon: Trophy, label: 'Major Projects', value: '03' },
              { icon: Code2, label: 'Core Skills', value: '12+' },
              { icon: Mail, label: 'Open To', value: 'Internships' },
              { icon: FileDown, label: 'CV Format', value: 'PDF' },
            ]}
          />
          <AchievementsSection
            data={portfolioData.achievements}
            certificates={certificates}
          />
          <ContactSection data={portfolioData.contact} />
        </main>
      </div>
    </div>
  );
}

export default App;
