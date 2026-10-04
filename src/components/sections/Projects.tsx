import { useState } from 'react';
// import { FolderGit2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import ImageSliderModal from '@/components/ui/ImageSliderModal';
import { projects } from '@/data/portfolio';
import Section from '@/components/Section'

export default function Projects() {
  const [sliderState, setSliderState] = useState<{
    open: boolean;
    projectIndex: number;
  }>({ open: false, projectIndex: 0 });

  const openSlider = (index: number) =>
    setSliderState({ open: true, projectIndex: index });

  const closeSlider = () =>
    setSliderState((prev) => ({ ...prev, open: false }));

  const activeProject = projects[sliderState.projectIndex];

  return (
    <Section id="projects" className="bg-ink-900/40">
      <div className="glow-orb h-[350px] w-[350px] bg-accent-500/8 top-1/3 left-[-150px]" />
      <div className="glow-orb h-[300px] w-[300px] bg-signal/6 bottom-1/4 right-[-120px]" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of products and applications I've designed and developed"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              gradient={project.gradient}
              demo={project.demo}
              github={project.github}
              featured={project.featured}
              index={index}
              haveScreenshots={project.images.length > 0}
              onOpenSlider={() => openSlider(index)}
            />
          ))}
        </div>

        {/* View more */}
        {/* <div className="mt-12 flex justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <FolderGit2 className="h-4 w-4" />
            View all repositories on GitHub
          </a>
        </div> */}
      </div>

      {/* Image slider modal */}
      {activeProject && (
        <ImageSliderModal
          images={activeProject.images}
          title={activeProject.title}
          isOpen={sliderState.open}
          onClose={closeSlider}
        />
      )}
    </Section>
  );
}
